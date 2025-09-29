# React + Vite ToyStore Project

I initialized a **Vite project with React**, installed the necessary libraries, and created a **first draft** of the project.

So far, the project includes:

- **Toys list display** in the frontend
- **Toy preview** components for each toy
- **Add/Edit toy** functionality with dedicated page
- Enhanced **ToyStore service** with backend adjustments

This README and the project will be **updated continuously** as new features are added.

## Project Structure

- `src/cmps/` — React components
- `src/pages/` — React pages components
- `src/service/toyService.js` — ToyStore service managing toy data
- `src/service/utils.js` — Utility service for different tooling functions
- `src/App.jsx` — Main app component

## Next Steps

- Implement **toy deletion** functionality
- Add **details page** for each toy
- Create **filter component** with debounce for toy list
- Integrate state management (Redux)
- Add styling and layout improvements

---

## Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository

```bash
git clone https://github.com/snoxlax/ca-ToyStore-ex.git
cd ca-ToyStore-ex
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

- Open your browser at the URL shown in the terminal (usually `http://localhost:5173`) to see the app.

### 4. Build for production

```bash
npm run build
```

- The production-ready files will be in the `dist` folder.
