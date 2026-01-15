# Veterinary Clinic Landing Page – José Granda

This project is a responsive **landing page for a veterinary clinic** built with **React + Vite**.  
It is designed to be clean, informative, fast, and suitable for a healthcare-related business.

The landing page provides essential information about the clinic, its services, location, and contact channels, without using contact forms. Communication is handled externally through social media and WhatsApp.

---

## 📍 Project Information

- **Clinic Name:** Veterinary Clinic José Granda  
- **Location:** Av. José Granda 3666, SMP, Lima, Peru  
- **Type:** Informational landing page  
- **Target Sector:** Veterinary / Healthcare  

---

## 🚀 Technologies Used

- **React** (functional components)
- **Vite** (development environment)
- **CSS Modules per component**
- **Custom React Hooks**
- **IntersectionObserver API** (scroll animations)
- **Responsive Design** (Desktop, Tablet, Mobile)

No external UI libraries or animation frameworks are used.

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Header.jsx / Header.css
│ ├── Hero.jsx / Hero.css
│ ├── Services.jsx / Services.css
│ ├── WhyUs.jsx / WhyUs.css
│ ├── FAQ.jsx / FAQ.css
│ ├── Contacto.jsx / Contacto.css
│ ├── EmpresaLegal.jsx / EmpresaLegal.css
│ └── Footer.jsx / Footer.css
│
├── hooks/
│ ├── useHamburgerMenu.js
│ ├── useScrollAnimation.js
│ └── useWhyUsAnimation.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css


---

## 🎨 Design Guidelines

- **Color palette:** White, Cyan, Soft Black
- **Typography:** Clean and professional, suitable for healthcare
- **Layout:** Section-based, easy to scan
- **Images:**  
  - All `.jpg` images are stored in `/public/img`
  - Images are sourced from the internet and used for demonstration purposes

---

## ✨ Features

- Responsive navigation bar with hamburger menu
- Hero section with background image
- Services section with animated cards (hover + scroll)
- “Why Us” section with scroll-triggered animations
- Frequently Asked Questions (FAQ)
- Contact section:
  - Address and business hours
  - Social media icons (Facebook, WhatsApp, Google Maps)
  - Embedded Google Maps iframe
- Empresa & Legal section with structured layout
- Footer with copyright and image disclaimer

---

## 🎞 Animations

Animations are handled using **custom hooks** and the **IntersectionObserver API**:

- Cards animate when entering the viewport
- Staggered animations for better visual flow
- Hover effects for service cards (desktop only)

No third-party animation libraries are used.

---

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px
- **Mobile:** 480px

All components include responsive styles.

---

## ▶️ How to Run the Project

1. Install dependencies:
   ```bash
   npm install
2. Start the development server:
    ```bash
    npm run dev
