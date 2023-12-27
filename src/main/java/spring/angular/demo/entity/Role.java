package spring.angular.demo.entity;

import javax.persistence.*;
import java.util.Set;
/**
 * Data object for the role DB entity
 * 
 * @author Hoffman
 *
 */
@Entity
@Table(name = "role")
public class Role {
    private Long id;
    private String name;
    private Set<User> user;

    public Role() {
		// TODO Auto-generated constructor stub
	}
    
    
    public Role(String name) {
		super();
		this.name = name;
	}


	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToMany(mappedBy = "roles")
    public Set<User> getUser() {
        return user;
    }

    public void setUser(Set<User> user) {
        this.user = user;
    }
}