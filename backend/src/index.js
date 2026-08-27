'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    try {
      // Check if database already has recipes
      const recipeCount = await strapi.documents('api::recipe.recipe').count({});
      strapi.log.info(`[Seed] Current recipe count in database: ${recipeCount}`);

      if (recipeCount === 0) {
        strapi.log.info('[Seed] Database is empty. Attempting to seed from backup...');
        
        const backupPath = path.join(__dirname, '../backups/cloud-2026-08-27T09-05-05-901Z.json');
        if (!fs.existsSync(backupPath)) {
          strapi.log.warn(`[Seed] Backup file not found at: ${backupPath}`);
          return;
        }

        const backupData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
        const collections = backupData.collections;

        if (!collections) {
          strapi.log.warn('[Seed] No collections found in backup file.');
          return;
        }

        // 1. Find or verify the Authenticated role
        const authenticatedRole = await strapi.db.query('plugin::users-permissions.role').findOne({
          where: { type: 'authenticated' }
        });
        
        if (!authenticatedRole) {
          strapi.log.error('[Seed] Authenticated role not found in database. Seeding aborted.');
          return;
        }

        const authorDocIdMap = {}; // Maps backup user ID/documentId to database user documentId

        // 2. Seed Users
        if (collections.users && collections.users.data) {
          strapi.log.info(`[Seed] Seeding ${collections.users.data.length} users...`);
          for (const user of collections.users.data) {
            // Check if user already exists by email or clerkId
            let existingUser = await strapi.db.query('plugin::users-permissions.user').findOne({
              where: {
                $or: [
                  { email: user.email },
                  { clerkId: user.clerkId }
                ]
              }
            });

            if (!existingUser) {
              existingUser = await strapi.documents('plugin::users-permissions.user').create({
                data: {
                  documentId: user.documentId,
                  username: user.username,
                  email: user.email,
                  clerkId: user.clerkId,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  imageUrl: user.imageUrl,
                  subscriptionTier: user.subscriptionTier,
                  confirmed: user.confirmed,
                  blocked: user.blocked,
                  provider: user.provider || 'local',
                  role: authenticatedRole.id,
                },
                status: 'published',
              });
              strapi.log.info(`[Seed] Created user: ${user.username} (${user.email})`);
            } else {
              strapi.log.info(`[Seed] User ${user.username} already exists in database.`);
            }
            authorDocIdMap[user.documentId] = existingUser.documentId;
            authorDocIdMap[user.id] = existingUser.documentId;
          }
        }

        // 3. Seed Recipes
        if (collections.recipes && collections.recipes.data) {
          strapi.log.info(`[Seed] Seeding ${collections.recipes.data.length} recipes...`);
          for (const recipe of collections.recipes.data) {
            const authorDocId = recipe.author 
              ? (authorDocIdMap[recipe.author.documentId] || authorDocIdMap[recipe.author.id]) 
              : null;

            if (recipe.author && !authorDocId) {
              strapi.log.warn(`[Seed] Author not found for recipe "${recipe.title}". Seeding without author.`);
            }

            const newRecipe = await strapi.documents('api::recipe.recipe').create({
              data: {
                documentId: recipe.documentId,
                title: recipe.title,
                description: recipe.description,
                cuisine: recipe.cuisine,
                category: recipe.category,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
                imageUrl: recipe.imageUrl,
                isPublic: recipe.isPublic,
                prepTime: recipe.prepTime,
                cookTime: recipe.cookTime,
                servings: recipe.servings,
                nutrition: recipe.nutrition,
                tips: recipe.tips,
                substitutions: recipe.substitutions,
                author: authorDocId,
              },
              status: recipe.publishedAt ? 'published' : 'draft',
            });
            strapi.log.info(`[Seed] Created recipe: "${newRecipe.title}" (${newRecipe.documentId})`);
          }
        }

        // 4. Seed Pantry Items
        if (collections.pantryItems && collections.pantryItems.data) {
          strapi.log.info(`[Seed] Seeding ${collections.pantryItems.data.length} pantry items...`);
          for (const item of collections.pantryItems.data) {
            const ownerDocId = item.owner ? (authorDocIdMap[item.owner.documentId] || authorDocIdMap[item.owner.id]) : null;
            await strapi.documents('api::pantry-item.pantry-item').create({
              data: {
                documentId: item.documentId,
                name: item.name,
                quantity: item.quantity,
                imageUrl: item.imageUrl,
                owner: ownerDocId,
              },
              status: item.publishedAt ? 'published' : 'draft',
            });
          }
        }

        // 5. Seed Saved Recipes
        if (collections.savedRecipes && collections.savedRecipes.data) {
          strapi.log.info(`[Seed] Seeding ${collections.savedRecipes.data.length} saved recipes...`);
          for (const saved of collections.savedRecipes.data) {
            const userDocId = saved.user ? (authorDocIdMap[saved.user.documentId] || authorDocIdMap[saved.user.id]) : null;
            const recipeDocId = saved.recipe ? saved.recipe.documentId : null;
            await strapi.documents('api::saved-recipe.saved-recipe').create({
              data: {
                documentId: saved.documentId,
                savedAt: saved.savedAt,
                user: userDocId,
                recipe: recipeDocId,
              },
              status: saved.publishedAt ? 'published' : 'draft',
            });
          }
        }

        strapi.log.info('[Seed] Seeding completed successfully!');
      } else {
        strapi.log.info('[Seed] Recipes exist in the database. Seeding skipped.');
      }
    } catch (error) {
      strapi.log.error(`[Seed] Error seeding database: ${error.message}`);
      strapi.log.error(error);
    }
  },
};

