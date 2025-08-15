import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="navbar-brand text-xl font-bold">
        <Link to="/" className="hover:text-indigo-300">
          Movie App
        </Link>
      </div>
      <div className="navbar-links flex space-x-6">
        <Link to="/" className="nav-link hover:text-indigo-300">
          Home
        </Link>
        <Link to="/favorites" className="nav-link flex items-center gap-1 hover:text-indigo-300">
          <FavoriteIcon fontSize="small" /> Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
