package spring.angular.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import spring.angular.demo.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}
