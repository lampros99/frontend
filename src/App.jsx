import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import './style.css'
function App() {
  return (
    // <div>
    //   <>
    //   <h1 className="bg-red-500 text-lg">hello</h1>
    //   </>
    // </div>
    <div className="min-h-screen bg-gray-100">
      <MovieProvider>
        <NavBar />
        <main className="p-4 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
