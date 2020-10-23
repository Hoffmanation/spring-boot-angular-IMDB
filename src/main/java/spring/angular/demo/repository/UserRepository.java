package spring.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import spring.angular.demo.entity.Users;

@RepositoryRestResource(path = "/User", collectionResourceRel = "User")
public interface UserRepository extends JpaRepository<Users, Integer> {

	@RestResource(exported = false)
	@Query("SELECT u FROM Users AS u WHERE u.email = :email AND u.password = :password")
	public Users findByUsernameAndPassword(@Param("email") String email,@Param("password") String password);
	
	@RestResource(exported = false)
	@Query("SELECT u FROM Users AS u WHERE u.email = :email")
	public Users findByUsername(@Param("email") String email);
	

}
