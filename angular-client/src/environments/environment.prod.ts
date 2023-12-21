// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: true,
	baseUrl: 'https://oren-hoffman.com',
	port: '443',
	endpoints: {
		getAllMovies: '/spring-angular-movie/public/getAllMovies',
		getTodaysMoviePick: '/spring-angular-movie/public/getTodaysMoviePick',
		getTodaysTrailersPick: '/spring-angular-movie/public/getTodaysTrailersPick',
		getAllMovieNames: '/spring-angular-movie/public/getAllMovieNames',
		getMovieByName: '/spring-angular-movie/public/getMovieByName',
		getMovieById: '/spring-angular-movie/public/getMovieById',
		getAllMovieGenres: '/spring-angular-movie/public/getAllMovieGenres',
		getMoviesByGenre: '/spring-angular-movie/public/getMoviesByGenre',
		logout: '/spring-angular-movie/private/logout',
		login: '/spring-angular-movie/public/login',
		registration: '/spring-angular-movie/public/registration',
		rateMovie: '/spring-angular-movie/private/rateMovie'
	}
};
