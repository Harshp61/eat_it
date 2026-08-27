<div align="center">

<img src="https://eat-it-zeta.vercel.app/_next/image?url=%2Forange-logo.png&w=128&q=75" alt="Eat It Logo" width="100"/>

# 🍽️ Eat It — AI Cooking Assistant

### *Turn your leftovers into masterpieces.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Auth-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://eat-it-zeta.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge&logo=github)](https://github.com/Harshp61/eat_it/pulls)

<br/>

> 📸 **Snap a photo of your fridge. Get AI-powered recipes instantly.**
> Save money, reduce food waste, and eat better — every single night.

<br/>

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-eat--it--zeta.vercel.app-orange?style=for-the-badge)](https://eat-it-zeta.vercel.app)

<br/>

---

## 🧭 Table of Contents

| # | Section |
|---|---------|
| 1 | [🌟 About the Project](#-about-the-project) |
| 2 | [✨ Features](#-features) |
| 3 | [🛠️ Tech Stack](#-tech-stack) |
| 4 | [📦 Dependencies](#-dependencies) |
| 5 | [📁 Project Structure](#-project-structure) |
| 6 | [🚀 Getting Started](#-getting-started) |
| 7 | [⚙️ Environment Variables](#-environment-variables) |
| 8 | [🔄 How It Works](#-how-it-works) |
| 9 | [💰 Pricing Plans](#-pricing-plans) |
| 10 | [🌐 Deployment](#-deployment) |
| 11 | [📜 Scripts](#-scripts) |
| 12 | [🤝 Contributing](#-contributing) |
| 13 | [📄 License](#-license) |
| 14 | [👨‍💻 Author](#-author) |

---

</div>

<br/>

## 🌟 About the Project

**Eat It** is a full-stack, AI-powered cooking assistant web app that helps you make the most of what's already in your kitchen. No more staring at your fridge wondering what to cook — simply snap a photo of your ingredients, and the **Google Gemini AI** engine will suggest personalized, gourmet-quality recipes in seconds.

Built with the modern **Next.js 16 App Router**, **React 19**, and a polished **shadcn/ui** component library, Eat It delivers a premium user experience with fast load times, dark mode, and seamless authentication.

### 🎯 The Problem It Solves

- 🗑️ **Food Waste** — Millions of tons of food are wasted because people don't know what to cook with what they have
- 💸 **Overspending** — People buy groceries they don't need because they can't think of meals from what's on hand
- 😩 **Decision Fatigue** — "What should I cook tonight?" is a daily struggle for everyone

### 💡 The Solution

Eat It uses cutting-edge AI to analyze your pantry or fridge contents and generate delicious, step-by-step recipes — matched to your ingredients, dietary needs, and mood.

> 🏆 *10,000+ cooks joined last month · 1M+ recipes generated · $0 to start*

<br/>

---

## ✨ Features

### 🤖 AI-Powered Core
- **📸 Pantry Scanning** — Photograph your fridge or pantry and let Gemini AI identify every ingredient instantly using computer vision
- **🍳 Smart Recipe Generation** — Get AI-crafted, personalized recipes based on exactly what you have on hand
- **🧂 Ingredient Substitutions** — Out of something? Get intelligent swap suggestions that won't ruin the dish *(Premium)*
- **🥗 Nutritional Analysis** — Full macro & micro nutritional breakdown for every generated recipe *(Premium)*
- **👨‍🍳 Chef's Tips & Tricks** — Professional cooking advice embedded in every recipe *(Premium)*

### 📚 Recipe Management
- **❤️ Digital Cookbook** — Save your favorite recipes to your personal collection
- **📄 PDF Export** — Download any recipe as a beautifully formatted PDF to print or share
- **🔍 Search Any Dish** — Find any recipe by name, cuisine, time constraint, or dietary preference — unlimited searches
- **♾️ 1M+ Recipes Generated** — Powered by a vast database via TheMealDB + AI generation
- **📊 98% Match Score** — Each recipe shows how well it matches your available ingredients

### 🔐 Auth & Security
- **🔑 Clerk Authentication** — Secure, fast sign-in with email, Google, and more
- **🛡️ Arcjet Bot Protection** — Rate limiting and bot detection to keep the app safe and performant
- **👤 User Profiles & Dashboard** — Personal dashboards with saved recipes, scan history, and preferences

### 🎨 UI/UX
- **🌙 Dark / Light Mode** — Seamless theme switching powered by `next-themes`
- **📱 Fully Responsive** — Pixel-perfect on mobile, tablet, and desktop
- **⚡ Blazing Fast** — Next.js 16 with React 19 compiler optimizations
- **🎨 Beautiful Design** — shadcn/ui `radix-nova` style + Tailwind v4 with CSS variable theming
- **🔔 Toast Notifications** — Real-time user feedback via `sonner`
- **⏳ Smooth Loading States** — Spinners and skeletons via `react-spinners`
- **🖱️ Drag & Drop Upload** — Effortless image upload with `react-dropzone`

<br/>

---

## 🛠️ Tech Stack

### 🎨 Frontend & UI

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.6 | Full-stack React framework with App Router & Server Actions |
| [React](https://react.dev/) | 19.2.3 | UI library with latest concurrent features & compiler |
| [TailwindCSS](https://tailwindcss.com/) | v4 | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | 4.0.8 | Beautifully designed component library (`radix-nova` style) |
| [Radix UI](https://radix-ui.com/) | 1.4.3 | Accessible, unstyled headless UI primitives |
| [Lucide React](https://lucide.dev/) | 0.577.0 | Modern icon library |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Dark/light mode with system preference detection |
| [tw-animate-css](https://github.com/Joe-Zer0/tw-animate-css) | 1.4.0 | Animation utilities for Tailwind |
| [sonner](https://sonner.emilkowal.ski/) | 2.0.7 | Elegant toast notification system |
| [react-spinners](https://www.davidhu.io/react-spinners/) | 0.17.0 | Loading spinner components |
| [clsx](https://github.com/lukeed/clsx) | 2.1.1 | Conditional class name construction |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | 3.5.0 | Merge Tailwind classes without conflicts |
| [class-variance-authority](https://cva.style/) | 0.7.1 | Component variant management |

### 🔐 Authentication & Security

| Technology | Version | Purpose |
|-----------|---------|---------|
| [@clerk/nextjs](https://clerk.com/docs/quickstarts/nextjs) | 7.0.4 | Full authentication & user management |
| [@clerk/themes](https://clerk.com/docs/components/customization/themes) | 2.4.57 | Custom-styled Clerk auth UI components |
| [@arcjet/next](https://arcjet.com/) | 1.3.0 | Bot protection, rate limiting, and spam prevention |

### 🤖 AI & External Data

| Technology | Version | Purpose |
|-----------|---------|---------|
| [@google/generative-ai](https://ai.google.dev/) | 0.24.1 | Google Gemini AI — vision + recipe generation |
| [TheMealDB](https://www.themealdb.com/) | API | Recipe database & food photography |
| [Unsplash](https://unsplash.com/) | API | High-quality food imagery |

### 📄 Document Generation

| Technology | Version | Purpose |
|-----------|---------|---------|
| [@react-pdf/renderer](https://react-pdf.org/) | 4.3.2 | Server-side PDF generation & download |

### 🖼️ File Handling

| Technology | Version | Purpose |
|-----------|---------|---------|
| [react-dropzone](https://react-dropzone.js.org/) | 15.0.0 | Drag-and-drop file upload interface |

### 🚀 Infrastructure & Dev Tools

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Vercel](https://vercel.com/) | — | Hosting, CDN, and deployment |
| [ESLint](https://eslint.org/) | 9 | Static code analysis |
| [PostCSS](https://postcss.org/) | v4 | CSS processing pipeline |
| [babel-plugin-react-compiler](https://react.dev/learn/react-compiler) | 1.0.0 | React 19 automatic memoization |

<br/>

---

## 📦 Dependencies

<details>
<summary><b>📌 Click to expand full dependency list</b></summary>

### Production Dependencies

```json
{
  "@arcjet/next": "^1.3.0",
  "@clerk/nextjs": "^7.0.4",
  "@clerk/themes": "^2.4.57",
  "@google/generative-ai": "^0.24.1",
  "@react-pdf/renderer": "^4.3.2",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.577.0",
  "next": "16.1.6",
  "next-themes": "^0.4.6",
  "radix-ui": "^1.4.3",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "react-dropzone": "^15.0.0",
  "react-spinners": "^0.17.0",
  "shadcn": "^4.0.8",
  "sonner": "^2.0.7",
  "tailwind-merge": "^3.5.0",
  "tw-animate-css": "^1.4.0"
}
```

### Dev Dependencies

```json
{
  "@tailwindcss/postcss": "^4",
  "babel-plugin-react-compiler": "1.0.0",
  "eslint": "^9",
  "eslint-config-next": "16.1.6",
  "tailwindcss": "^4"
}
```

</details>

<br/>

---

## 📁 Project Structure

```
eat_it/
│
├── 📂 app/                        # Next.js App Router
│   ├── 📂 (auth)/                 # Auth layout group (sign-in, sign-up)
│   ├── 📂 (root)/                 # Main app layout group
│   │   ├── 📂 dashboard/          # User dashboard page
│   │   ├── 📂 recipes/            # Recipe listing & detail pages
│   │   ├── 📂 pantry/             # Pantry scanner page
│   │   └── 📄 page.js             # Landing / Home page
│   ├── 📂 api/                    # API route handlers
│   │   └── 📂 gemini/             # Gemini AI integration endpoints
│   ├── 📄 layout.js               # Root layout (fonts, providers, Clerk)
│   └── 📄 globals.css             # Global styles & Tailwind CSS variables
│
├── 📂 components/                 # Reusable UI components
│   ├── 📂 ui/                     # shadcn/ui base components
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   └── ...
│   ├── 📄 Navbar.jsx              # Top navigation bar
│   ├── 📄 RecipeCard.jsx          # Recipe display card
│   ├── 📄 PantryScanner.jsx       # Image upload & scan component
│   ├── 📄 PDFTemplate.jsx         # PDF recipe export template
│   └── 📄 ThemeToggle.jsx         # Dark/light mode toggle
│
├── 📂 actions/                    # Next.js Server Actions
│   ├── 📄 recipe.actions.js       # Recipe CRUD server operations
│   └── 📄 pantry.actions.js       # Pantry scan & Gemini AI calls
│
├── 📂 hooks/                      # Custom React Hooks
│   ├── 📄 useRecipes.js           # Recipe fetching & state hook
│   └── 📄 usePantry.js            # Pantry scan state hook
│
├── 📂 lib/                        # Utility functions & configs
│   ├── 📄 utils.js                # cn() helper & misc utilities
│   └── 📄 gemini.js               # Google Gemini AI client configuration
│
├── 📂 public/                     # Static assets
│   ├── 🖼️ orange-logo.png         # Brand logo (orange variant)
│   ├── 🖼️ logo.png                # Brand logo (standard)
│   ├── 🖼️ pasta-dish.png          # Hero section food image
│   └── ...
│
├── 📄 .gitignore                  # Git ignore rules
├── 📄 components.json             # shadcn/ui config (radix-nova style)
├── 📄 eslint.config.mjs           # ESLint configuration
├── 📄 jsconfig.json               # JS path aliases (@/ → root)
├── 📄 next.config.mjs             # Next.js config (image domains, HMR)
├── 📄 package.json                # Project metadata & scripts
├── 📄 postcss.config.mjs          # PostCSS + Tailwind v4 setup
├── 📄 proxy.js                    # Dev proxy configuration
└── 📄 README.md                   # You are here! 👋
```

<br/>

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/)** — `v18.0.0` or higher (`node --version` to check)
- **[npm](https://www.npmjs.com/)** / **[yarn](https://yarnpkg.com/)** / **[pnpm](https://pnpm.io/)** / **[bun](https://bun.sh/)**
- A **[Clerk](https://clerk.com/)** account *(free tier available)*
- A **[Google AI Studio](https://aistudio.google.com/)** account for Gemini API key *(free)*
- An **[Arcjet](https://arcjet.com/)** account *(free tier available)*

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Harshp61/eat_it.git
cd eat_it
```

---

### 2️⃣ Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

> ⏳ This may take a minute as it installs all packages including React PDF renderer and Gemini AI SDK.

---

### 3️⃣ Configure Environment Variables

```bash
# Create the environment file
touch .env.local
```

Then populate it with your API keys (see [⚙️ Environment Variables](#-environment-variables) below).

---

### 4️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

🎉 Open **[http://localhost:3000](http://localhost:3000)** in your browser!

The app supports **Hot Module Replacement (HMR)** — changes to files in `app/` auto-refresh instantly.

<br/>

---

## ⚙️ Environment Variables

Create a `.env.local` file at the root of the project:

```env
# ─────────────────────────────────────────────────────────
# 🔐 CLERK AUTHENTICATION
# Dashboard: https://dashboard.clerk.com
# ─────────────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxx

# Clerk redirect routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# ─────────────────────────────────────────────────────────
# 🤖 GOOGLE GEMINI AI
# Get key: https://aistudio.google.com/app/apikey
# ─────────────────────────────────────────────────────────
GEMINI_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxx

# ─────────────────────────────────────────────────────────
# 🛡️ ARCJET (Bot Protection & Rate Limiting)
# Dashboard: https://app.arcjet.com
# ─────────────────────────────────────────────────────────
ARCJET_KEY=ajkey_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> ⚠️ **Never commit `.env.local` to version control!** It's in `.gitignore` but always verify before pushing.

### 🔑 Where to Get Each Key

| Variable | Service | Link |
|----------|---------|------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk | [Dashboard → API Keys](https://dashboard.clerk.com) |
| `CLERK_SECRET_KEY` | Clerk | [Dashboard → API Keys](https://dashboard.clerk.com) |
| `GEMINI_API_KEY` | Google AI | [AI Studio → Create Key](https://aistudio.google.com/app/apikey) |
| `ARCJET_KEY` | Arcjet | [App Dashboard → API Key](https://app.arcjet.com) |

<br/>

---

## 🔄 How It Works

```
┌──────────────┐    ┌──────────────────┐    ┌───────────────────────┐
│  👤 User     │───▶│  📸 Upload Photo │───▶│  🤖 Gemini AI Vision  │
│  Opens App   │    │  (react-dropzone)│    │  Identifies Ingredients│
└──────────────┘    └──────────────────┘    └──────────┬────────────┘
                                                       │
                          ┌────────────────────────────▼────────────┐
                          │  🍳 Gemini AI generates full recipe with: │
                          │  • Ingredients list & quantities          │
                          │  • Step-by-step instructions              │
                          │  • Cook time, prep time, servings         │
                          │  • Nutritional info (Premium)             │
                          │  • Chef's tips (Premium)                  │
                          └────────────────┬────────────────────────┘
                                           │
              ┌────────────────────────────▼────────────────────────┐
              │                   📱 User Can:                       │
              │  ✅ View & follow recipe   ✅ Save to Digital Cookbook │
              │  ✅ Export as PDF          ✅ Search other recipes     │
              └─────────────────────────────────────────────────────┘
```

### 🧑‍🍳 The 3-Step Cook Flow

**Step 1 — Scan 📸**
Upload a photo of your fridge, pantry, or individual food items. The drag-and-drop interface (`react-dropzone`) works seamlessly on both desktop and mobile. Supported formats: JPEG, PNG, WebP.

**Step 2 — Select 🍽️**
The image is sent to **Google Gemini AI** via a secure Next.js Server Action. Gemini's multimodal vision model scans the photo, identifies all visible ingredients, and generates a complete recipe with a **match percentage** showing how well it fits your pantry.

**Step 3 — Savor 😋**
Follow the step-by-step recipe, save it to your **Digital Cookbook**, or download it as a polished **PDF** using `@react-pdf/renderer`. Premium users also get full nutritional breakdowns, ingredient substitutions, and chef's tips.

<br/>

---

## 💰 Pricing Plans

Eat It operates on a **freemium model** — start for free and upgrade when you need more:

| Feature | 🥄 Sous Chef | 👨‍🍳 Head Chef |
|---------|:-----------:|:------------:|
| **Price** | **$0 / month** | **$7.99 / month** |
| Pantry Scans | 10 / month | ♾️ Unlimited |
| AI Recipe Suggestions | 5 / month | ♾️ Unlimited |
| Recipe Saves | 3 / month | ♾️ Unlimited |
| Recipe Search | ✅ Unlimited | ✅ Unlimited |
| PDF Export | ✅ | ✅ |
| Nutritional Analysis | ❌ | ✅ |
| Chef's Tips & Tricks | ❌ | ✅ |
| Ingredient Substitutions | ❌ | ✅ |
| Priority Support | ❌ | ✅ |

<br/>

---

## 🌐 Deployment

### ▲ Deploy on Vercel *(Recommended)*

The fastest way to deploy Eat It is with **[Vercel](https://vercel.com/)** — one click and you're live:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Harshp61/eat_it)

**Manual steps:**
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Add all environment variables from `.env.local`
4. Click **Deploy** 🚀

---

### 🐳 Docker Deployment *(Optional)*

<details>
<summary>Click to expand Docker instructions</summary>

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
RUN npm install --production
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build the image
docker build -t eat-it .

# Run the container
docker run -p 3000:3000 --env-file .env.local eat-it
```

</details>

---

### 🖥️ Self-Hosting on a VPS

<details>
<summary>Click to expand VPS/server deployment</summary>

```bash
# 1. Clone and install
git clone https://github.com/Harshp61/eat_it.git
cd eat_it && npm install

# 2. Set environment variables
cp .env.local.example .env.local
nano .env.local  # Add your keys

# 3. Build for production
npm run build

# 4. Start with PM2 (process manager)
npm install -g pm2
pm2 start npm --name "eat-it" -- start
pm2 save && pm2 startup
```

</details>

<br/>

---

## 📜 Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | 🔥 Start development server on `http://localhost:3000` with HMR |
| `npm run build` | 🏗️ Create an optimized production build |
| `npm run start` | 🚀 Start the production server (requires `build` first) |
| `npm run lint` | 🔍 Run ESLint across the codebase and report issues |

<br/>

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place! Any contribution you make is **greatly appreciated** 🙌

### Getting Started

1. **🍴 Fork** the project on GitHub

2. **🌿 Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   # For bug fixes:
   git checkout -b fix/DescriptiveBugName
   ```

3. **💾 Commit your changes**
   ```bash
   git add .
   git commit -m "✨ Add: AmazingFeature that does X and Y"
   ```

4. **📤 Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **🔃 Open a Pull Request** on the original repo

---

### 🐛 Reporting Bugs

Open an [Issue](https://github.com/Harshp61/eat_it/issues) with:
- A clear, descriptive title
- Steps to reproduce the bug
- Expected vs actual behavior
- Browser/OS info
- Screenshots or screen recordings if applicable

### 💡 Suggesting Features

Open an [Issue](https://github.com/Harshp61/eat_it/issues) tagged `enhancement` and describe:
- What problem it solves
- How you imagine it working
- Any mockups or examples

---

### 📋 Commit Message Convention

```
✨ Add:      New feature
🐛 Fix:      Bug fix
💄 Style:    UI / visual changes
♻️ Refactor: Code restructure (no behavior change)
📝 Docs:     Documentation update
🔧 Config:   Configuration changes
⚡ Perf:     Performance improvement
🗑️ Remove:   Deleted code or files
```

Example: `✨ Add: Meal calendar view for weekly planning`

<br/>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies — subject to the conditions in the LICENSE file.
```

<br/>

---

## 🙏 Acknowledgements

Big thanks to all the amazing tools and services that power Eat It:

- 🤖 **[Google Gemini AI](https://ai.google.dev/)** — Incredible multimodal AI for food recognition & recipe generation
- 🍽️ **[TheMealDB](https://www.themealdb.com/)** — Extensive recipe & food image database
- 🖼️ **[Unsplash](https://unsplash.com/)** — Beautiful food photography
- 🎨 **[shadcn/ui](https://ui.shadcn.com/)** — The best component system in the React ecosystem
- 🔐 **[Clerk](https://clerk.com/)** — Drop-in authentication that just works
- 🛡️ **[Arcjet](https://arcjet.com/)** — Next-gen security for Next.js apps
- ▲ **[Vercel](https://vercel.com/)** — Effortless deployment with zero config
- 🌊 **[Tailwind CSS](https://tailwindcss.com/)** — The CSS framework we can't live without

<br/>

---

## 👨‍💻 Author

<div align="center">

### Built with ❤️ by **Harsh**

[![GitHub](https://img.shields.io/badge/GitHub-@Harshp61-181717?style=for-the-badge&logo=github)](https://github.com/Harshp61)
[![Live App](https://img.shields.io/badge/🌐%20Live%20App-eat--it--zeta.vercel.app-orange?style=for-the-badge)](https://eat-it-zeta.vercel.app)

<br/>

---

*Made with ❤️ and a lot of 🍕*

<br/>

⭐ **If Eat It helped or impressed you, drop a star — it means a lot!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/Harshp61/eat_it?style=social)](https://github.com/Harshp61/eat_it/stargazers)

</div>
