# Food Donate MVP - Frontend (Next.js App Router, JavaScript)


Minimal Next.js frontend using the **App Router**. This is a complete, ready-to-run frontend that talks to the Express + SQLite backend at `http://localhost:4000`.


## Quick start
1. `cd frontend`
2. `npm install`
3. `npm run dev`


Open `http://localhost:3000`.


> Make sure the backend (Express) is running on port 4000 before using protected pages.


---


// package.json
{
"name": "food-donate-frontend",
"version": "1.0.0",
"private": true,
"scripts": {
"dev": "next dev -p 3000",
"build": "next build",
"start": "next start -p 3000"
},
"dependencies": {
"next": "14.0.0",
"react": "18.2.0",
"react-dom": "18.2.0"
}
}


---