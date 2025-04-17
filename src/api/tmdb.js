const API_KEY = "968470055c717530c2f304df9e76a976";
const BASE_URL = "https://api.themoviedb.org/3";

///popular movies///

export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
}
///movie details///

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) throw new Error("Failed to fetch movie details");
  return response.json();
}
///movie reviews///

export async function getMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) throw new Error("Failed to fetch movie reviews");
  return response.json();
}
///série populaire///

export async function getPopularSeries(page = 1) {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch series");
  return response.json();
}
///série détails///

export async function getSeriesDetails(seriesId) {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) throw new Error("Failed to fetch series details");
  return response.json();
}
////série reviews///

export async function getSeriesReviews(seriesId) {
  const response = await fetch(
    `${BASE_URL}/tv/${seriesId}/reviews?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) throw new Error("Failed to fetch series reviews");
  return response.json();
}
///tous les films///

export async function getAllMovies() {
  let allMovies = [];
  let page = 1;
  let totalPages;

  do {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
    );
    if (!response.ok) throw new Error("Failed to fetch movies");

    const data = await response.json();
    allMovies = allMovies.concat(data.results);
    totalPages = data.total_pages;
    page++;
  } while (page <= totalPages);

  return allMovies;
}
///tous les séries///

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDE5ZDIyMzExNzU1ODdmM2NjYzNhM2Q1NDc4MWI4NSIsIm5iZiI6MTc0NDc4NzUyMi40OTgsInN1YiI6IjY3ZmY1ODQyMzExMGJkODJkZmFkYTFlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LcbZvK40xwQ5C7rYK4S8jPWGF-DZzNWkmpudvAh6E-g'
  }
};

fetch('https://api.themoviedb.org/3/trending/tv/day?language=fr-FR', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));