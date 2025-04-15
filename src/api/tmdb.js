const API_KEY = "8c4b867188ee47a1d4e40854b27391ec";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
}
