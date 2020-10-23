package demo.spring.angular.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "role")
public class Role {
    private Long id;
    private String name;
    private Set<Users> users;

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
    public Set<Users> getUsers() {
        return users;
    }

    public void setUsers(Set<Users> users) {
        this.users = users;
    }
}