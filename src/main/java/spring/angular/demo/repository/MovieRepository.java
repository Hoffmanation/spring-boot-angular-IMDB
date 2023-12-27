package spring.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import spring.angular.demo.entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

	@Query(nativeQuery = true, value = "select * from Movie ORDER BY RAND() LIMIT :limit")
	Iterable<Movie> getRandomMovie(@Param("limit") int limit);

	@Query(value = "select m from Movie m where m.name =  :name")
	Movie getMovieByName(@Param("name") String name);

	@Query(value = "select m.name from Movie m")
	Iterable<String> getAllMovieNames();

	@Query(value="select m.genre from Movie m")
	Iterable<String> getAllMovieGenres();
	
	@Query(value="select m from Movie m where m.genre LIKE %:genre%")
	Iterable<Movie> getMoviesByGenre(@Param("genre") String genre);
}
