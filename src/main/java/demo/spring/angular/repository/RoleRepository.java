package demo.spring.angular.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import demo.spring.angular.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}
