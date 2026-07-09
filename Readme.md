# LocalHub - Smart Community Service & Local Marketplace Platform

LocalHub is a full-stack web application that connects customers with local service providers and marketplace sellers. Users can discover services, request bookings, manage profiles, and interact with a community-driven marketplace.

## 🚀 Features

### 👥 User Roles

* **Customer**

  * Browse available services
  * Search marketplace listings
  * Book services
  * Submit reviews
  * Manage profile

* **Service Provider**

  * Create and manage services
  * Upload service images
  * Manage customer bookings
  * View service performance

* **Admin**

  * Manage users
  * Monitor services
  * Manage platform activities
  * View dashboard statistics

## ✨ Core Features

### Authentication

* User Registration
* Login / Logout
* Laravel Sanctum Authentication
* Role-Based Access Control

### Marketplace

* Browse local services
* Search services
* Category-based filtering
* Price-based filtering
* Service details page
* Booking system

### Services

* Create service listings
* Update services
* Delete services
* Upload service images
* Provider profiles

### Booking System

* Customer service booking
* Provider booking management
* Booking status tracking

### Reviews

* Customer reviews
* Rating system
* Display service feedback

### Dashboard

* Role-based dashboard
* Admin statistics
* Provider statistics
* Customer booking overview

# 🛠️ Technology Stack

## Backend

* Laravel 12
* PHP
* MySQL
* Laravel Sanctum
* REST API

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

# 📂 Project Structure

```
LocalHub

├── backend
│   ├── app
│   ├── routes
│   ├── database
│   └── storage
│
└── frontend
    ├── src
    ├── components
    ├── pages
    └── services
```

# ⚙️ Installation Guide

## Backend Setup

Go to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
composer install
```

Create environment file:

```bash
copy .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Configure database in `.env`

Run migrations:

```bash
php artisan migrate
```

Create storage link:

```bash
php artisan storage:link
```

Start Laravel server:

```bash
php artisan serve
```

Backend will run on:

```
http://127.0.0.1:8000
```

---

## Frontend Setup

Go to frontend folder:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

# 🔑 API Authentication

The project uses Laravel Sanctum token authentication.

Protected routes require:

```
Authorization: Bearer TOKEN
```

# 📸 Screenshots

(Add application screenshots here)

* Home Page
* Dashboard
* Marketplace
* Service Details
* Profile

# 👩‍💻 Developer

**Malaika Fatima**


# 📄 License

This project is developed for learning and portfolio purposes.
