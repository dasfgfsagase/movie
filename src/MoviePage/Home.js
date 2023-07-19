import { useEffect, useState } from "react";
import Section from "./Section";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')
      .then(response => response.json())
      .then((json) => {
        setMovies(json.data.movies)
        setLoading(false)
      });
  }, []);

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Movie</h1>
        <nav className="header__navigation">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contents</li>
          </ul>
        </nav>
      </header>
      <div className="container">
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <div className="movie-section">
            {movies.map((movie) => (
              <Section
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

