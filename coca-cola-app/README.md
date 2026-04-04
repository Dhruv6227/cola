# 🥤 Coca-Cola Experience App

A premium, interactive web experience built with **Next.js**, **Framer Motion**, and **Tailwind CSS**. This application showcases Coca-Cola products through high-performance scroll-synchronized animations and dynamic theming.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

## ✨ Features

### 🎞️ Scroll-Synchronized Canvas Animation
Experience smooth, 3D-like product rotations powered by a high-performance `<canvas>` engine. As you scroll, the application seamlessly plays through hundreds of pre-rendered frames, creating an immersive storytelling experience.

### 🎨 Dynamic Glassmorphism UI
The interface features modern glassmorphism effects (`glass-ui`), with frosted backgrounds, subtle borders, and vibrant gradients that adapt dynamically to the selected product flavor (Classic, Zero, or Cherry).

### ⚡ Framer Motion Orchestration
From staggered reveal animations to smooth flavor transitions using `AnimatePresence`, every interaction feels fluid and weighted.

### 📱 Fully Responsive & Optimized
Designed for a premium experience across all devices. The animation engine preloads assets efficiently to ensure a stutter-free experience even on slower connections.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: React Hooks (`useState`, `useEffect`, `useRef`)
- **Rendering**: HTML5 Canvas for high-frequency animation frames

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/coca-cola-app.git
   cd coca-cola-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

---

## 📁 Project Structure

```text
coca-cola-app/
├── app/                # Next.js App Router (Layouts & Pages)
├── components/         # Reusable UI components
│   ├── Navbar          # Navigation
│   ├── Footer          # Brand footer
│   ├── ProductBottleScroll # Canvas-based animation engine
│   └── ...
├── data/               # Product configuration & metadata
├── public/             # Static assets (Animations frames, icons)
└── tailwind.config.ts  # Design system configuration
```

---

## 🧪 Animation Details

The `ProductBottleScroll` component uses a custom remapping logic to synchronize page scroll with animation frames:
- **Scroll Zone**: 0% to 55% of the page height.
- **Frame Count**: Supports variable frame counts per product (e.g., 200 frames for Classic).
- **Execution**: `requestAnimationFrame` ensures that the canvas updates only when the browser is ready for a new paint, maximizing performance.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ for the Coca-Cola enthusiasts.
</p>
