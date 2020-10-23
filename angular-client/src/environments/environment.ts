// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost',
  port: '8080',
  endpoints: {
    getAllMovies: '/public/getAllMovies', getTodaysMoviePick: '/public/getTodaysMoviePick'
    , getTodaysTrailersPick: '/public/getTodaysTrailersPick', getAllMovieNames: '/public/getAllMovieNames', getMovieByName: '/public/getMovieByName'
    , getMovieById: '/public/getMovieById', getAllMovieGenres: '/public/getAllMovieGenres', getMoviesByGenre: '/public/getMoviesByGenre',
    logout: '/private/logout', login: '/public/login', registration: '/public/registration', rateMovie: '/private/rateMovie'
  }
};
