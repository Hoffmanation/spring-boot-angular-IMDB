package demo.spring.angular.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * Data object for the movie DB entity
 * 
 * @author Hoffman
 *
 */

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@EqualsAndHashCode(exclude = "movieRate")
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Id;
	private String name;
	private String genre;
	private String dataOfrelease;
	private String imageURL;
	private String videoURL;
	private String duration;
	@Column(columnDefinition = "varchar(1000)")
	private String description;
	private String director;
	private String writers;
	private String stars;
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(unique = true)
	private MovieRate movieRate;

	public Movie(String name, String genre, String dataOfrelease, String imageURL, String videoURL, String duration, String description, String director, String writers, String stars, MovieRate movieRate) {
		super();
		this.name = name;
		this.genre = genre;
		this.dataOfrelease = dataOfrelease;
		this.movieRate = movieRate;
		this.imageURL = imageURL;
		this.videoURL = videoURL;
		this.duration = duration;
		this.description = description;
		this.director = director;
		this.writers = writers;
		this.stars = stars;
		this.movieRate.setMovie(this);
	}

	public Movie() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getDataOfrelease() {
		return dataOfrelease;
	}

	public void setDataOfrelease(String dataOfrelease) {
		this.dataOfrelease = dataOfrelease;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getVideoURL() {
		return videoURL;
	}

	public void setVideoURL(String videoURL) {
		this.videoURL = videoURL;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getWriters() {
		return writers;
	}

	public void setWriters(String writers) {
		this.writers = writers;
	}

	public String getStars() {
		return stars;
	}

	public void setStars(String stars) {
		this.stars = stars;
	}

	public MovieRate getMovieRate() {
		return movieRate;
	}

	public void setMovieRate(MovieRate movieRate) {
		this.movieRate = movieRate;
	}

	@JsonIgnore
	public Boolean isNotComplate() {
		return this.name.isEmpty() || this.genre.isEmpty() || this.dataOfrelease.isEmpty() || this.imageURL.isEmpty() || this.videoURL.isEmpty() || this.duration.isEmpty();
	}

	@Override
	public String toString() {
		return "Movie [Id=" + Id + ", name=" + name + ", genre=" + genre + ", dataOfrelease=" + dataOfrelease + ", imageURL=" + imageURL + ", videoURL=" + videoURL + ", duration=" + duration + ", description=" + description + ", director=" + director
				+ ", writers=" + writers + ", stars=" + stars + "]";
	}

}
