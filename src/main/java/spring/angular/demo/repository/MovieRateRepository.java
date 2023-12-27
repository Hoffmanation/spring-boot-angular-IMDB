package spring.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import spring.angular.demo.entity.MovieRate;

@Repository
public interface MovieRateRepository extends JpaRepository<MovieRate, Integer> {


	@Query("SELECT SUM(rate) FROM MovieRate as mr WHERE id =:movieId")
	Double getUserRateSumForMovie(@Param("movieId") int movieId);

}
