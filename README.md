# 🎓 SkillBridge

A full-stack online tutoring platform that connects students with tutors for personalized learning sessions. SkillBridge provides role-based dashboards, booking management, tutor profiles, reviews, and secure authentication to create a seamless learning experience.

## 🚀 Live Demo

* **Frontend:** [Add Frontend URL]
* **Backend API:** [Add Backend URL]

## 📂 GitHub Repositories

* **Client:** [Add Client Repository URL]
* **Server:** [Add Server Repository URL]

---

## 📖 Project Overview

SkillBridge is an online tutoring platform designed to help students discover qualified tutors, book sessions, leave reviews, and manage their learning journey. Tutors can create and manage their profiles, set availability, receive bookings, and view student feedback. Administrators can oversee users, bookings, and platform activity through a dedicated dashboard.

---

## ✨ Key Features

### 👨‍🎓 Student Features

* Browse available tutors
* View tutor profiles and expertise
* Book tutoring sessions
* Leave ratings and reviews
* Manage personal bookings
* Secure authentication

### 👨‍🏫 Tutor Features

* Create and update tutor profile
* Manage expertise and hourly rates
* Set availability schedules
* View received reviews
* Manage student bookings
* Personalized tutor dashboard

### 👨‍💼 Admin Features

* Manage users
* Monitor bookings
* View platform statistics
* Role-based access control
* System oversight dashboard

---

## 🔐 Authentication & Authorization

* JWT Authentication
* NextAuth Integration
* Role-Based Access Control (RBAC)
* Protected Routes
* Secure API Access

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Shadcn UI
* TanStack Query
* Axios
* NextAuth

### Backend

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL

### Deployment

* Vercel (Frontend)
* Vercel (Backend)

---

## 📊 Database Design

Main entities:

* User
* TutorProfile
* Availability
* Booking
* Review

Relationships include:

* User ↔ Tutor Profile
* Student ↔ Booking
* Tutor ↔ Booking
* Student ↔ Review
* Tutor ↔ Review

---

## 📱 Responsive Design

* Mobile Friendly
* Tablet Responsive
* Desktop Optimized

---

## 📁 Project Structure

### Frontend

```bash
src/
├── app/
├── components/
├── commonLayout/
├── dashboardLayout/
├── hooks/
├── auth/
├── api/
├── routes/
└── providers/
```

### Backend

```bash
src/
├── modules/
│   ├── auth/
│   ├── user/
│   ├── tutor/
│   ├── booking/
│   ├── review/
│   └── admin/
├── middleware/
├── utils/
└── app.ts
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd client
pnpm install
pnpm dev
```

### Backend Setup

```bash
cd server
pnpm install
pnpm dev
```

## Environment Variables

### Frontend

```env
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXT_PUBLIC_BASEURL=
NEXT_PUBLIC_SERVER_URL=
GOOGLE_ID=
GOOGLE_SECRET=
GITHUB_ID=
GITHUB_SECRET=
```

### Backend

```env
DATABASE_URL=
JWT_SECRET=
PORT=
NODE_ENV=
```

## 🎯 Future Improvements

* Payment Integration
* Real-time Chat
* Video Meeting Support
* Tutor Verification System
* Advanced Analytics
* Notifications System
* File Sharing

---

## 👨‍💻 Developer

**Al Amin (EPB)**

Junior Full-Stack Developer
    
### Connect With Me

* LinkedIn: [https://www.linkedin.com/in/alamin-epb/]
* GitHub: [https://github.com/malamin59]
* Portfolio: [https://alamin-15553.web.app/]

---

## 📄 License

This project is developed for educational and portfolio purposes.

⭐ If you found this project helpful, consider giving it a star on GitHub!
