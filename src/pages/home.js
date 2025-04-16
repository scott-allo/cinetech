const API_KEY = "8c4b867188ee47a1d4e40854b27391ec";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`
  );
  const data = await response.json();
  return data.results;
}

function createCarouselItem(movie) {
  return `
    <div class="movie-card">
      <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="${movie.title}"
      />
      <h3>${movie.title}</h3>
    </div>
  `;
}

async function displayCarousel() {
  const carousel = document.getElementById("movie-carousel");
  try {
    const movies = await fetchPopularMovies();
    const movieCards = movies.map(createCarouselItem).join("");
    carousel.innerHTML = movieCards + movieCards; // Duplique les films pour un effet infini
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
  }
}

document.addEventListener("DOMContentLoaded", displayCarousel);
