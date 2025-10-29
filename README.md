Recipe Finder App

A simple React + TailwindCSS project that lets users search for recipes using the TheMealDB API.

Preview

| Home Page | Search Results |
|------------|----------------|
| ![Home Page Screenshot](./images/ss1.jpg) | ![Search Results Screenshot](./images/ss2.jpg) |

| Searched Recipe Details | Random Recipe Page |
|-----------------------|---------------------|
|![Recipe details Screenshot](./images/ss3.jpg) | ![Random Recipe details Screenshot](./images/ss4.jpg) |

Features

-Fetch random recipe on homepage

-Search recipes by name or ingredients

-API integration using fetch()

-Responsive UI with TailwindCSS

-Clean routing using react-router-dom


Tech Stack

-VsCode

-React.js

-TailwindCSS

-TheMealDB API

Installation & Setup

Follow these steps to run the project locally:

1 Clone the repository
git clone https://github.com/Arya2809/Recipe-Finder.git
cd recipe-finder

2 Install dependencies

Make sure you have Node.js and npm installed.

Then, run:

npm install

3 Install Tailwind CSS

If not already configured, run:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Then, in your tailwind.config.js file, add:

content: ["./src/**/*.{js,jsx,ts,tsx}"],


In your src/index.css, include:

@tailwind base;
@tailwind components;
@tailwind utilities;

4 Start the development server

npm start

The app will run on http://localhost:3000

API Reference

This project uses the TheMealDB API for fetching recipes.

Example endpoints:

Random recipe: https://www.themealdb.com/api/json/v1/1/random.php

Search recipe: https://www.themealdb.com/api/json/v1/1/search.php?s=<meal>

Challenges Faced

Understanding API structure and dynamic rendering of data

Managing asynchronous fetch calls

Designing a responsive layout using Tailwind


Future Improvements

Save favorite recipes

Add ingredient details page

Add youtube videos for Recipe details