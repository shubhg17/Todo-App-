# ✅ Todo App (React + Context API + LocalStorage)

A simple and responsive Todo Application built using React, Context API, and LocalStorage.
The application allows users to add, edit, delete, and mark todos as completed, while also persisting data even after refreshing the page.

---

## 🚀 Features

- Add new todos

- Edit existing todos

- Delete todos

- Mark todos as completed / incomplete

- Global state management using React Context API

- Data persistence using LocalStorage

- Clean and responsive UI

- Automatically restores todos after refresh

## 📁 File Structure
todo-context-local/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── context/
│   │   ├── TodoContext.js
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
├── vite.config.js
└── README.md

---

## 🛠 Technologies Used

React – Component-based UI

Context API – Global state management

LocalStorage – Data persistence

Vite – Fast development environment

Tailwind CSS – Styling

---

## 🔧 How to Run

- Clone the repository:
```
git clone https://github.com/your-username/todo-context-app.git
```

- Navigate into the project folder:
```
cd todo-context-app
```

- Install dependencies:
```
npm install
```

- Start development server:
```
npm run dev
```

- Open the provided localhost URL in your browser.

---

## 💾 LocalStorage Implementation

- Todos are loaded from LocalStorage when the application starts.

- Whenever the todos state changes, it automatically updates LocalStorage.

- This ensures todos do not disappear after page refresh.

---

## 📌 Notes

Context API is used to avoid prop drilling.

LocalStorage acts as a lightweight browser database.

Easily extendable to backend storage (Firebase, MongoDB, etc.).

---

## 👨‍💻 Author

Made by Shubham Ghai
