export const environment = {
  production: true,
  baseUrl: 'https://oren-hoffman.com',
  port: '443',
  endpoints: {
    getAllMovies: '/public/getAllMovies', getTodaysMoviePick: '/public/getTodaysMoviePick'
    , getTodaysTrailersPick: '/public/getTodaysTrailersPick', getAllMovieNames: '/public/getAllMovieNames', getMovieByName: '/public/getMovieByName'
    , getMovieById: '/public/getMovieById',getAllMovieGenres: '/public/getAllMovieGenres', getMoviesByGenre : '/public/getMoviesByGenre',
    logout: '/private/logout', login: '/public/login', registration: '/public/registration', rateMovie: '/private/rateMovie'
  }
};
