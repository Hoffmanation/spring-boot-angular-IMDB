package spring.angular.demo.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import spring.angular.demo.entity.Movie;
import spring.angular.demo.entity.MovieRate;

@Repository
public interface RareRepository extends CrudRepository<MovieRate, Long> {


}
