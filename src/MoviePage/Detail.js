import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const data = await response.json();
    const movieData = data.data.movie;
    setMovies(movieData);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <h1 className="load">Loading...</h1>
      ) : (
        <div className="movie-details">
          <img src={movies.large_cover_image} alt="title" />
          <div className="movie-description">
            <h2>{movies.title}</h2>
            <ul>
              {movies.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <h2>Description</h2>
            <p>{movies.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
