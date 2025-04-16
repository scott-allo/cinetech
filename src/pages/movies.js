import { getPopularMovies } from "../api/tmdb.js";

const moviesContainer = document.getElementById("movies-cards");
const paginationContainer = document.createElement("div");
paginationContainer.id = "pagination";
paginationContainer.className = "flex justify-center mt-6";
document.querySelector("main").appendChild(paginationContainer);

let currentPage = 1;

async function displayMovies(page = 1) {
  try {
    // Fetch data for the current page and the next page
    const data1 = await getPopularMovies(page);
    const data2 = await getPopularMovies(page + 1);

    // Combine results to get 21 movies
    const movies = [...data1.results, ...data2.results.slice(0, 1)];

    // Clear previous movies
    moviesContainer.innerHTML = "";

    // Render movies
    movies.forEach((movie) => {
      const movieCard = `
        <div class="movie-card">
          <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt="${movie.title}"
          />
          <h3>${movie.title}</h3>
        </div>
      `;
      moviesContainer.innerHTML += movieCard;
    });

    // Update pagination
    updatePagination(page, data1.total_pages);
  } catch (error) {
    console.error("Erreur lors de la récupération des films :", error);
  }
}

function updatePagination(current, total) {
  paginationContainer.innerHTML = "";

  // Previous button
  if (current > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Précédent";
    prevButton.className = "px-4 py-2 bg-primary text-dark rounded mr-2";
    prevButton.addEventListener("click", () => {
      currentPage--;
      displayMovies(currentPage);
    });
    paginationContainer.appendChild(prevButton);
  }

  // Next button
  if (current < total) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Suivant";
    nextButton.className = "px-4 py-2 bg-primary text-dark rounded";
    nextButton.addEventListener("click", () => {
      currentPage++;
      displayMovies(currentPage);
    });
    paginationContainer.appendChild(nextButton);
  }
}

// Initial load
document.addEventListener("DOMContentLoaded", () => displayMovies(currentPage));