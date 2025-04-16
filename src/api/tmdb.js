const API_KEY = "968470055c717530c2f304df9e76a976";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page}`
  );
  if (!response.ok) throw new Error("Failed to fetch movies");
  return response.json();
}
export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) throw new Error("Failed to fetch movie details");
  return response.json();
}

export async function getMovieReviews(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=fr-FR`
  );
  if (!response.ok) throw new Error("Failed to fetch movie reviews");
  return response.json();
}
