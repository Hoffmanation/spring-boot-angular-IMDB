import { Rete } from './rate';
export class Movie {

	Id: Number;
	name: String;
	genre: String;
	dataOfrelease: String;
	imageURL: String;
	videoURL: any;
	duration: String;
	description: String;
	director: String;
	writers: String;
	stars: String;
	movieRate: Rete;
}
