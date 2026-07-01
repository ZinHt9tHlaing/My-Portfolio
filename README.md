# 🚀 Zin Htet's Portfolio

A modern, highly responsive, and interactive developer portfolio website built for **Zin Htet** (Full-Stack Developer). This project showcases professional experience, technical skills, and featured projects using a cutting-edge web stack.

---

## ✨ Features

- **Dynamic Theme Mode**: Smooth dark and light theme toggling with automated state persistence in `localStorage`.
- **Fluid Animations**: Immersive page transitions, hover effects, and profile image floating animations using **Framer Motion**.
- **Interactive Typewriter Effect**: Engaging animated title greetings utilizing `react-simple-typewriter`.
<!-- - **Fully Validated Contact Form**: Secure form handling and client-side validation using **React Hook Form** paired with **Zod** schema validation. -->
<!-- - **Real-time Feedback**: Interactive status toast notifications via **React Toastify**. -->
- **Clean Component Architecture**: Modular components such as a responsive navigation bar, common footer, section title templates, and page wrappers.
- **Detailed Project Catalog**: Display cards highlighting technical stacks, live previews, and repository links.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) & [Vite](https://vite.dev/) (for fast build times and HMR)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (for type safety and robust code)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) (utility-first CSS)
- **Routing**: [React Router DOM v6](https://reactrouter.com/) (declarative routing structure)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
<!-- - **Validation**: [Zod](https://zod.dev/) & [@hookform/resolvers](https://github.com/react-hook-form/resolvers) -->

---

## 📁 Directory Structure

```text
my-portfolio/
├── public/                 # Static assets (images, PDFs)
├── src/
│   ├── assets/             # SVGs and dynamic resources
│   │   └── icons/          # Tech stack skill icon configuration
│   ├── components/         # Reusable presentation components (Navbar, Footer, SectionTitle, PageWrapper)
│   ├── data/               # Project and background data source configurations (projectData.ts)
│   ├── pages/              # Core page views (Hero/Home, About, Projects, ContactPage)
│   ├── schema/             # Form validation schemas (contactSchema.ts using Zod)
│   ├── App.tsx             # Application wrapper, theme context, and base layout
│   ├── main.tsx            # Application entrypoint
│   ├── routes.tsx          # React Router configuration
│   └── index.css           # Tailwind directives and base styling
├── package.json            # Scripts and project dependencies
├── tailwind.config.js      # Tailwind customization rules
└── tsconfig.json           # TypeScript configuration
```

---

## 🎯 Projects Highlighted

1. **Portfolio Site**: Built with React, Tailwind CSS, and TypeScript.
2. **Furniture Shop (Full-Stack)**: Built using React, Tailwind CSS, Node.js, Express, and PostgreSQL. Featuring user authentication, product catalogs, and shopping cart flows.
3. **E-Shop (Full-Stack)**: High-performance e-commerce platform built with React, Tailwind CSS, TypeScript, Node.js, Express, PostgreSQL, Prisma, Redis, BullMQ, and Cloudinary (integrating worker queues, dynamic caching, and image optimization).

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+) and [npm](https://www.npmjs.com/) installed.

### Installation

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/ZinHt9tHlaing/My-Portfolio.git

# Navigate into the project folder
cd my-portfolio

# Install dependency packages
npm install
```

### Script Reference

Run the following scripts via your terminal:

- **Development Server**: Start a local dev server with hot module replacement (HMR).
  ```bash
  npm run dev
  ```
- **Build Production**: Compile TypeScript and bundle source code for production.
  ```bash
  npm run build
  ```
- **Lint Code**: Scan project files for linting issues using ESLint.
  ```bash
  npm run lint
  ```
- **Preview Production**: Run a local server previewing the generated production build.
  ```bash
  npm run preview
  ```

---

## 🤝 Contact

Feel free to connect or send a message regarding collaboration:

- **Developer**: Zin Htet Hlaing
- **Location**: Yangon, Myanmar
- **Email**: [zinhtethlaing4@gmail.com](mailto:zinhtethlaing4@gmail.com)
- **Phone**: `09965664813` or `09792746290`
