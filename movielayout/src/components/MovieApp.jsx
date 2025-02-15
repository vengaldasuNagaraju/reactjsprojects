import React, { useEffect, useState } from "react";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=";

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);//here results means the data exist inside the data we are getting
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <>
      <header>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
      <main>
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
      </main>
    </>
  );
};

const getClassByRate = (vote) => {
  return vote >= 8 ? "green" : vote >= 5 ? "orange" : "red";
};

const MovieCard = ({ title, poster_path, vote_average, overview }) => {
  return (
    <div className="movie">
      <img src={IMG_PATH + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className={getClassByRate(vote_average)}>{vote_average}</span>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieApp;
