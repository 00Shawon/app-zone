# 🚀 App Zone | Premium App Marketplace

**App Zone** is a high-performance app discovery platform built with **Next.js 16**. It features a modern "Bento-grid" aesthetic, focusing on information density and visual comfort. The application includes a full marketing landing page, a dynamic item catalog, and a protected administration route for adding new items.

---

## 🔗 Project Links
- **Live Demo:**[ [Insert Vercel Link Here]](https://app-zone-one.vercel.app/)

### 🔑 Mock Credentials
- **Email:** `admin@appzone.com`
- **Password:** `password123`

---

## 🛠️ Technologies Used

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Animations:** Framer Motion
- **Icons:** React Icons (Font Awesome)
- **Notifications:** React Hot Toast
- **Data:** Express.js API / Local JSON
- **Language:** JavaScript (ES6+)

---

## 🌟 Key Features

### 1. 7-Section Landing Page
A comprehensive, unified landing page designed for professional "visual comfort":
* **Hero:** Minimalist high-impact intro.
* **Trust Section:** Compact bento-grid showing partner logos and stats.
* **Problem/Solution:** Direct comparison of user pain points vs. platform benefits.
* **Benefits:** Focus on Privacy, Speed, and Curation.
* **Problem/Solution:** Focus on Development vs. Scaling.
* **Testimonials:** User feedback cards with grayscale-to-color interactive hover effects.
* **FAQ & CTA:** Expandable accordions for common queries and a final conversion box.

### 2. Authentication & Route Protection
* **Mock Login:** Implemented a credential-based login system.
* **Session Management:** User credentials and login states are stored in **Cookies**.
* **Protected Routes:** The `/add-item` page is restricted. Unauthenticated users are automatically redirected to the login page using middleware/route guards.

### 3. Dynamic Item Management
* **Items List Page:** Fetches and displays a list of available apps including images, prices, and descriptions.
* **Details Page:** A dynamic route (`/apps/[id]`) that shows specific metadata, ratings breakdown, and a stateful download simulation.
* **Add Item (Protected):** A secure form that allows logged-in users to submit new data to the Express server/JSON storage.

### 4. Interactive UX
* **Stateful Buttons:** "Download" buttons that transition through 'Idle', 'Loading', and 'Success' states.
* **Toasts:** Real-time feedback via `react-hot-toast` for successful login, downloads, and form submissions.

---

## 📂 Route Summary

| Route | Access | Description |
| :--- | :--- | :--- |
| `/` | Public | Home page with 7 marketing sections. |
| `/login` | Public | Mock authentication page. |
| `/apps` | Public | Catalog of all available applications. |
| `/apps/[id]` | Public | Detailed view of a single application. |
| `/add-item` | **Protected** | Form to add new items (Login Required). |
| `/cookies` | Public | Cookie Policy and transparency page. |

---

## ⚙️ Setup & Installation

**1. Clone the repo:**
```bash
git clone [https://github.com/yourusername/app-zone.git](https://github.com/yourusername/app-zone.git)
cd app-zone
