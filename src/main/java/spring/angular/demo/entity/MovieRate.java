package spring.angular.demo.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Data object for the MovieRate DB entity
 * 
 * @author Hoffman
 *
 */
@Entity
public class MovieRate {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Id;
	private String raters;
	private Double rate;

	@JsonIgnore
	@OneToOne(mappedBy = "movieRate", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
	private Movie movie;

	public MovieRate(String raters, Double rate) {
		super();
		this.raters = raters;
		this.rate = rate;
	}

	public MovieRate() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getRaters() {
		return raters;
	}

	public void setRaters(String raters) {
		this.raters = raters;
	}

	public Double getRate() {
		return rate;
	}

	public void setRate(Double rate) {
		this.rate = rate;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	@Override
	public String toString() {
		return "MovieRate [Id=" + Id + ", raters=" + raters + ", rate=" + rate + "]";
	}

}
