package spring.angular.demo.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
/**
 * Data object for the User DB entity
 * 
 * @author Hoffman
 *
 */
@Entity
// 'user' is not a valid postgreSql table name - using 'users' as alternative
@Table(name = "users")
public class User {
	
	private Integer id;
	private String email;
	private String password;
	private Set<Role> roles;
    private Set<UserRate> userRates;

	public User() {
		// TODO Auto-generated constructor stub
	}

	public User(String email, String password) {
		super();
		this.email= email;
		this.password = password;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, targetEntity = Role.class)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	@OneToMany(mappedBy="user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	public Set<UserRate> getUserRates() {
		return userRates;
	}

	public void setUserRates(Set<UserRate> userRates) {
		this.userRates = userRates;
	}
	
	
}