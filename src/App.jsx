import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToyIndex from './pages/ToyIndex';
import AppHeader from './cmps/AppHeader';
import Footer from './cmps/Footer';
import ToyHome from './pages/ToyHome';
import About from './pages/About';
import ToyEdit from './pages/ToyEdit';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <AppHeader />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ToyHome />}
            />
            <Route
              path="/toys"
              element={<ToyIndex />}
            />
            <Route
              path="/toy/edit"
              element={<ToyEdit />}
            />
            <Route
              path="/toy/edit/:id"
              element={<ToyEdit />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
