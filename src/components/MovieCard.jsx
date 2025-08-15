import FavoriteIcon from '@mui/icons-material/Favorite';
import { useMovieContext } from '../contexts/MovieContext'; 

function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="movie-poster relative">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          className="w-full h-auto block"
        />
        <button 
          className={`absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition ${
            favorite ? 'text-red-500' : 'text-gray-400'
          }`}
          onClick={onFavoriteClick}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FavoriteIcon />
        </button>
      </div>
      <div className="p-4 movie-info">
        <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.release_date}</p> 
      </div>
    </div>
  );
}

export default MovieCard;
