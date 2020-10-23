package demo.spring.angular.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import demo.spring.angular.entity.Movie;
import demo.spring.angular.entity.MovieRate;

@Repository
public interface RareRepository extends CrudRepository<MovieRate, Long> {


}
