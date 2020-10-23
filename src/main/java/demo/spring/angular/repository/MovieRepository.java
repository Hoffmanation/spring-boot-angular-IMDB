package demo.spring.angular.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import demo.spring.angular.entity.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

	@Query(nativeQuery = true, value = "select * from Movie ORDER BY RAND() LIMIT 15")
	Iterable<Movie> getRandomMovie();

	@Query(value = "select m from Movie m where m.name =  :name")
	Movie getMovieByName(@Param("name") String name);

	@Query(value = "select m.name from Movie m")
	Iterable<String> getAllMovieNames();

	@Query(value="select m.genre from Movie m")
	Iterable<String> getAllMovieGenres();
	
	@Query(value="select m from Movie m where m.genre LIKE %:genre%")
	Iterable<String> getMoviesByGenre(@Param("genre") String genre);
}
