import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import '../style.css';
import Login from './pages/Login';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <MovieProvider>
        <NavBar />
        <main className="p-4 max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
              } />
            <Route path="/favorites" element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
              } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;