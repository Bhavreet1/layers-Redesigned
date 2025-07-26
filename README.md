

---

# 🕶️ Anarc Watch Website (Layers.shop Inspired)

This project is a modern, React-based single-page application (SPA) clone inspired by [Layers.shop](https://www.layers.shop/), tailored for the Anarc brand. It includes smooth animations, session-based preloader, accessories listing, working cart functionality, and well-structured routing with Lottie animations.

---

## 🔥 Features

### ✅ Completed

* ⚙️ **Pre-loader**: Animated preloader using Lottie files, shows once per session.
* 🛒 **Cart Functionality**: Add, remove, and manage cart items with state.
* 🎁 **Accessories Page**: Fully functional with dynamic data (color support and categorized listings).
* 💨 **Smooth Scrolling**: Native and performant smooth scroll behavior across all pages.
* ✨ **Page Animations**: Framer Motion animations for a polished experience.
* 🔗 **All Core Routes Working**:

  * Home (`/`)
  * Accessories (`/accessories`)
  * Cart (`/cart`)
  * Login/Register (via Clerk)
* 📦 **Responsive Layout**: Partial responsiveness for major components.
* 📄 **Under Development Page**: Using DotLottieReact.

### 🚧 In Progress / Known Issues

* ❌ `Buy Watch`, `Profile`, and `Checkout` routes not fully implemented.
* ❌ Some pages/components not yet fully responsive on all screen sizes.
* ❌ Payment/checkout logic is pending integration.
* ❌ Watch page and dynamic buy buttons need linking and logic.

---

## 📁 Folder Structure (Important)

```
src/
├── public/                # Static images, icons, Lottie files
├── components/            # All reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── UnderDevelopment.jsx
├── pages/                 # All routed pages
│   ├── Home.jsx
│   ├── Accessories.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx (WIP)
├── data/                  # Static accessory/watch data
│   ├── accessories.js
├── App.jsx
├── main.jsx
public/
└── animations/            # .lottie animation files
```

---

## 🛠 Tech Stack

* **React**
* **Tailwind CSS**
* **Framer Motion , Gsap , React bits ** – Page and component animation
* **React Router DOM** – Routing
* **Clerk** – User authentication (login/signup)
* **DotLottieReact** – Lottie file rendering
* **SessionStorage** – Preloader visibility control

---

## 🧪 Available Scripts

```bash
npm install      # Install all dependencies 
npm run dev      # Start local dev server
npm run build    # Production build
```

---

## 🚀 Getting Started

1. Clone this repo
2. Install dependencies:

   ```bash
   npm install
   ```
3. Add your Lottie files to `/public/animations`
4. Start development:

   ```bash
   npm run dev
   ```

---

## 📦 How To Add More Accessories?

1. Open `src/data/accessories.js`
2. Add items like this:

   ```js
   {
     id: 6,
     name: 'Chrome Silver',
     price: '₹999',
     description: 'Metallic Arc',
     image: 'https://your-image-url.png',
     colors: ['#B4B4B4']
   }
   ```

---

## 📍 Future Plans

* ✅ Full checkout/payment integration
* ✅ Clerk profile integration
* ✅ Watch product dynamic route
* ✅ Mobile-first responsive redesign
* ✅ Admin dashboard for product management

---

## 🙌 Credits

* UI Inspiration: [Layers.shop](https://www.layers.shop/)
* Lottie Files: [Lottiefiles.com](https://lottiefiles.com)
* Icons: `react-icons`
* Fonts: Google Fonts

---
