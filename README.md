# Virtual White Flame - MERN Stack Business Website

A premium, modern, and fully managed business platform for **Virtual White Flame**, specializing in sustainable biomass energy solutions.

## 🚀 Live Demo

- **Main Website:** [https://virtual-white-flame.vercel.app/](https://virtual-white-flame.vercel.app/)
- **Admin Dashboard:** [https://virtualwhiteflame-mern-stack-business.onrender.com/](https://virtualwhiteflame-mern-stack-business.onrender.com/)

---

## ✨ Features

### 🌐 Frontend (React + Tailwind CSS)

- **Premium Design:** Modern "Outfit" typography, glassmorphism UI, and smooth micro-animations.
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop experiences.
- **Dynamic Content:** Real-time data fetching for services, sliders, products, and insights.
- **Interactive Components:** Advanced sliders, success metric counters, and client testimonials.

### 🛡️ Admin Panel (EJS + Express + Tailwind CSS)

- **Secure Access:** Static authentication (`admin`/`admin`) with session-based route protection.
- **Data Visualization:** Built-in charts and statistics (Chart.js) for monitoring site resources.
- **Modular Management:** Unified management of:
  - Hero Sliders & Content
  - Production Plants & Facilities
  - Specialized Industrial Services
  - Image Galleries & Success Metrics
- **Seeding Utility:** One-click demo data population to ensure a rich, full-site experience instantly.

---

## 🛠️ Technology Stack

- **Frontend:** React, Tailwind CSS, Axios, React Icons, Framer Motion
- **Backend:** Node.js, Express.js, EJS (Admin Panel), Multer
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Authentication:** Firebase Auth (Frontend), Express-Session (Admin)
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 📁 Project Structure

```text
├── Backend
│   ├── config          # DB Connection
│   ├── controllers     # Business logic
│   ├── models          # Mongoose Schemas
│   ├── public          # Static assets (images/uploads)
│   ├── routes          # API and Admin routes
│   └── views           # Admin Panel EJS templates
└── Frontend
    ├── src
    │   ├── components  # Reusable UI components
    │   ├── pages       # Full page layouts
    │   └── config.js   # API Endpoint configuration
```

## 🏗️ Local Setup

1. **Clone the repository**
2. **Backend Setup:**
   - `cd Backend`
   - `npm install`
   - Create `.env` with `MONGO_URI`, `JWT_SECRET`, and `SESSION_SECRET`.
   - `npm start`
3. **Frontend Setup:**
   - `cd Frontend`
   - `npm install`
   - `npm run dev`

---

Developed with ❤️ for **Virtual White Flame**.
