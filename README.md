# 🔗 Simple URL Shortener

A modern, full-stack URL shortening web app built with **Node.js**, **Express.js**, and **MongoDB**.

---

## ✨ Features

* 🔹 **Shorten Long URLs** — Turn any URL into a short, shareable link
* 📈 **Click Tracking** — Monitor total clicks per link
* ⏳ **Expiration Control** — Set expiration dates (1–365 days)
* 📊 **Detailed Stats** — Analytics for each shortened URL
* 🌓 **Dark Mode** — Light/dark theme toggle with memory
* 📋 **Copy to Clipboard** — One-click copy with feedback
* 💻 **Responsive Design** — Seamless on all screen sizes
* 🎨 **Modern UI** — Clean, intuitive interface with animations

---

## 🧑‍💻 About the Developer

Created by **zrxxz**
💬 **Discord:** `zrxxz`

*Feel free to reach out with feedback or collaboration ideas!*

---

## 🛠 Tech Stack

| Layer          | Tech                        |
| -------------- | --------------------------- |
| **Backend**    | Node.js, Express.js         |
| **Database**   | MongoDB, Mongoose           |
| **Frontend**   | Vanilla HTML/CSS/JS         |
| **Styling**    | CSS Variables, Font Awesome |
| **Short URLs** | nanoid (random code gen)    |

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone https://github.com/XZUWWI/Simple-URL-Shortener.git
cd url-shortener
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `config.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/url-shortener
BASE_URL=http://localhost:3000
PORT=3000
```

### 4. Start MongoDB

Ensure MongoDB is running locally or use MongoDB Atlas.

### 5. Launch the App

```bash
npm start
```

### 6. Visit in Browser

[http://localhost:3000](http://localhost:3000)

---

## 🌐 URL Shortening Flow

1. Input a long URL
2. (Optional) Set expiration (in days)
3. Click **Shorten**
4. Share or track the resulting short URL
5. View stats via the **View Stats** button

---

## 📁 Project Structure

```
url-shortener/
├── config/                # Database config
│   └── database.js
├── models/                # Mongoose models
│   └── Url.js
├── routes/                # Express routes
│   └── urlRoutes.js
├── utils/                 # Helpers
│   └── shortCodeGenerator.js
├── public/                # Frontend files
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── stats.html
├── server.js              # Entry point
├── package.json           # Project config
├── config.env             # Env variables
└── README.md              # Docs
```

---

## 📡 API Endpoints

### POST `/shorten`

Shorten a URL.

```json
{
  "url": "https://example.com",
  "expiresIn": 30
}
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123",
  "originalUrl": "https://example.com",
  "shortCode": "abc123",
  "expiresAt": "2024-02-15T10:30:00.000Z"
}
```

### GET `/:shortCode`

Redirect to the original URL.

### GET `/stats/:shortCode`

Retrieve stats for a short URL.

```json
{
  "shortCode": "abc123",
  "originalUrl": "https://example.com",
  "shortUrl": "http://localhost:3000/abc123",
  "clicks": 42,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "expiresAt": "2024-02-15T10:30:00.000Z",
  "isExpired": false
}
```

---

## 🎨 UI Highlights

### ✂️ URL Shortening

* 6-char alphanumeric short code
* URL format validation (http/https)
* Avoids duplicate short codes
* Supports link expiration

### 📊 Analytics

* Click count tracking
* Expiration status & timestamps

### 🌗 Dark Mode

* Toggle light/dark theme
* Stores preference in `localStorage`

### ✅ Copy-to-Clipboard

* One-click copy
* Animation feedback
* Fallback for older browsers

### 📱 Responsive

* Mobile-first UI
* Touch-optimized buttons

---

## 🔐 Security

* Input validation
* URL format checks
* Error handling for invalid/expired links

---

## 🚀 Deployment

### Local Dev

```bash
npm run dev
```

### Production

```bash
npm start
```

### Production `.env` Example

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/url-shortener
BASE_URL=https://yourdomain.com
PORT=3000
NODE_ENV=production
```

---

## 📝 License

**Non-Commercial License**
© 2025 zrxxz — All rights reserved

* ✅ Personal and educational use allowed
* ❌ Commercial use is **not** permitted
* 📩 Contact on Discord (`zrxxz`) for commercial licensing

---

**Built with ❤️ by zrxxz**
*Fast, functional, and ready to deploy.*
