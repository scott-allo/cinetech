import { fetchPopularMovies } from "./api/tmdb.js";

fetchPopularMovies().then((movies) => console.log(movies));
