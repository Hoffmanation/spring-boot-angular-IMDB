package spring.angular.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import spring.angular.demo.entity.UserRate;

@Repository
public interface UserRateRepository extends JpaRepository<UserRate, Integer> {

	@Query("SELECT COUNT(ur) from UserRate ur WHERE ur.movie.id = :movieId")
	public int getUserRateCountForMovie(@Param("movieId") int movieId);

	@Query("SELECT ur FROM UserRate AS ur WHERE ur.user.id = :userId")
	public Optional<UserRate> findByUserId(@Param("userId") int userId);

}
