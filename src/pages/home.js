import { fetchPopularMovies } from "../api/tmdb.js";

async function displayPopularMovies() {
  const movies = await fetchPopularMovies();
  const container = document.getElementById("movies-list");
  container.innerHTML = movies
    .map(
      (movie) => `
    <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    </div>
  `
    )
    .join("");
}

displayPopularMovies();
