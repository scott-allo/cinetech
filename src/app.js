const API_KEY = "8c4b867188ee47a1d4e40854b27391ec";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchPopularMovies(page = 1) {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
  );
  const data = await response.json();
  console.log("Données récupérées depuis l'API :", data); // Ajoutez ce log
  return data.results;
}

function displayMovies(movies) {
  console.log("Films à afficher :", movies); // Ajoutez ce log
  const moviesList = document.getElementById("movies-list");
  moviesList.innerHTML = ""; // Réinitialise le contenu

  movies.forEach((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <h2>${movie.title}</h2>
      <p>${movie.overview}</p>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
    `;
    moviesList.appendChild(movieElement);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const movies = await fetchPopularMovies();
    displayMovies(movies);
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
  }
});
