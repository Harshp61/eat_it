<div align="center">

<img src="https://eat-it-zeta.vercel.app/_next/image?url=%2Forange-logo.png&w=128&q=75" alt="Eat It Logo" width="90"/>

# 🍽️ Eat It — AI Cooking Assistant

### *Turn your leftovers into masterpieces.*

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel)](https://eat-it-zeta.vercel.app)

> 📸 Snap a photo of your fridge → 🤖 AI identifies ingredients → 🍳 Get a perfect recipe instantly.
> Save money, cut food waste, and eat better — every night.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-eat--it--zeta.vercel.app-orange?style=for-the-badge)](https://eat-it-zeta.vercel.app)

---

</div>

## ✨ Features

| | Feature | Description |
|--|---------|-------------|
| 🤖 | **AI Pantry Scan** | Upload a fridge photo — Gemini AI identifies every ingredient instantly |
| 🍳 | **Recipe Generation** | Get personalized, step-by-step recipes based on what you have |
| 🥗 | **Nutrition Analysis** | Full macro breakdown for every recipe *(Premium)* |
| 🧂 | **Ingredient Swaps** | Smart substitution suggestions when you're missing something *(Premium)* |
| 📄 | **PDF Export** | Download any recipe as a beautifully formatted PDF |
| ❤️ | **Digital Cookbook** | Save your favourite recipes to your personal collection |
| 🔍 | **Search Any Dish** | Find recipes by name, cuisine, or dietary preference |
| 🌙 | **Dark Mode** | Seamless light/dark theme switching |
| 🛡️ | **Bot Protection** | Rate limiting & security via Arcjet |
| 🔐 | **Auth** | Secure sign-in with Clerk (email, Google & more) |

<br/>

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router + Server Actions) · **React 19** · **TailwindCSS v4**
- **shadcn/ui** (`radix-nova`) · **Radix UI** · **Lucide React** icons
- **next-themes** (dark mode) · **sonner** (toasts) · **react-spinners** · **react-dropzone**

### Auth & Security
- **Clerk** — authentication & user management
- **Arcjet** — bot protection & rate limiting

### AI & Data
- **Google Gemini AI** — multimodal vision + recipe generation
- **TheMealDB** — recipe & food image database

### Docs & Deployment
- **@react-pdf/renderer** — PDF recipe export
- **Vercel** — hosting & deployment

<br/>

## 📁 Project Structure

```
eat_it/
├── 📂 app/           # Next.js App Router (pages, layouts, API routes)
├── 📂 components/    # Reusable UI components (shadcn/ui + custom)
├── 📂 actions/       # Next.js Server Actions (Gemini AI, recipes)
├── 📂 hooks/         # Custom React hooks
├── 📂 lib/           # Utilities & Gemini client setup
├── 📂 public/        # Static assets & images
└── 📄 next.config.mjs
```

<br/>

## 🚀 Getting Started

### Prerequisites
- **Node.js** `v18+`
- Accounts on [Clerk](https://clerk.com), [Google AI Studio](https://aistudio.google.com), and [Arcjet](https://arcjet.com) *(all free)*

### Installation

```bash
# 1. Clone
git clone https://github.com/Harshp61/eat_it.git
cd eat_it

# 2. Install dependencies
npm install

# 3. Add environment variables
touch .env.local
```

### Environment Variables

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Google Gemini AI
GEMINI_API_KEY=AIzaSyxxx

# Arcjet
ARCJET_KEY=ajkey_xxx
```

```bash
# 4. Run the dev server
npm run dev
# → Open http://localhost:3000
```

<br/>

## 📜 Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | 🔥 Start development server |
| `npm run build` | 🏗️ Build for production |
| `npm run start` | 🚀 Start production server |
| `npm run lint` | 🔍 Lint the codebase |

<br/>

## 💰 Pricing

| Feature | 🥄 Sous Chef (Free) | 👨‍🍳 Head Chef ($7.99/mo) |
|---------|:------------------:|:---------------------:|
| Pantry Scans | 10 / month | ♾️ Unlimited |
| AI Recipe Suggestions | 5 / month | ♾️ Unlimited |
| Recipe Saves | 3 / month | ♾️ Unlimited |
| Recipe Search | ✅ | ✅ |
| PDF Export | ✅ | ✅ |
| Nutritional Analysis | ❌ | ✅ |
| Chef's Tips & Tricks | ❌ | ✅ |
| Ingredient Substitutions | ❌ | ✅ |
| Priority Support | ❌ | ✅ |

<br/>

## 🌐 Deployment

Deploy instantly on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Harshp61/eat_it)

1. Import the repo into Vercel
2. Add your environment variables
3. Hit **Deploy** 🚀

<br/>

## 🤝 Contributing

1. 🍴 Fork the repo
2. 🌿 Create a branch: `git checkout -b feature/YourFeature`
3. 💾 Commit: `git commit -m "✨ Add: YourFeature"`
4. 📤 Push: `git push origin feature/YourFeature`
5. 🔃 Open a Pull Request

Found a bug or have an idea? [Open an issue!](https://github.com/Harshp61/eat_it/issues)

<br/>

## 📄 License

Licensed under the [MIT License](LICENSE).

<br/>

<div align="center">

Made with ❤️ and a lot of 🍕 by **[Harsh](https://github.com/Harshp61)**

⭐ **Star this repo if you found it helpful!** ⭐

[![GitHub stars](https://img.shields.io/github/stars/Harshp61/eat_it?style=social)](https://github.com/Harshp61/eat_it/stargazers)

</div>
