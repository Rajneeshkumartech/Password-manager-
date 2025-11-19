# 🔒 PassOp - Your Personal Local Password Manager

PassOp (Password Operation) is a simple, client-side application built with **React** and **Vite** to help you manage your login credentials. It allows users to store website names, usernames, and passwords directly in their browser's **Local Storage**.

---

## ✨ Core Features

Based on the provided code, PassOp offers the following functionalities:

1.  **Local Persistence:** All password details are automatically saved in the browser's `localStorage` using the `useEffect` hook, ensuring data is retained even after closing the browser tab.
2.  **Add New Credentials:** Input fields for Website URL, Username, and Password allow for quick entry of new details.
3.  **Data Validation:** Alerts the user if any required field is empty before attempting to save a new entry.
4.  **View Saved Data:** Displays all stored credentials in a clear, tabular format.
5.  **Edit Functionality:** Clicking **"Edit"** loads the selected item's details back into the input fields, allowing the user to modify the information and re-save it.
6.  **Delete Entry:** Allows permanent removal of individual password entries from the list.
7.  **Clear All:** A dedicated button to clear the entire list of saved passwords.
8.  **Styling:** Clean and visually appealing interface styled using **Tailwind CSS** with a refreshing green theme.

---

## 💻 Tech Stack

* **Frontend Framework:** [React (Hooks: `useState`, `useEffect`)](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Data Storage:** Browser's `localStorage` (Client-side)

---

## 🚀 Installation and Setup

Follow these simple steps to get the PassOp application running on your local machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and a package manager (npm/yarn/pnpm) installed.

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Rajneeshkumartech/Password-manager-.git](https://github.com/Rajneeshkumartech/Password-manager-.git)
    cd Password-manager-
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run the Project in Development Mode:**
    The application will start and typically be accessible at `http://localhost:5173/`.
    ```bash
    npm run dev
    ```

---

## ⚠️ CRITICAL SECURITY WARNING

This application is built primarily as a demonstration of React and client-side storage concepts.

**Due to the unencrypted use of `localStorage`, this application is NOT suitable for storing highly sensitive or production-level passwords.**

* Data stored in `localStorage` is **not encrypted**.
* It can be easily accessed or modified using the browser's developer tools or by any script running on the same domain.

**Future Improvement:** For real-world security, the application must be refactored to use a secure, encrypted backend database (e.g., Firebase Firestore) with proper user authentication.

---
