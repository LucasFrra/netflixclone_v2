const API_KEY = "9a40405e4d1c408f613e977069fbabdc";
const BASE_URL= "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr`,
    fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=fr`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=fr`,
    fetchAnimationMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchFamilyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchWarMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchAdventuresMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchTVMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    
};

export default requests;