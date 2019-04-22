package com.ecommerce.shopping.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "appadmin")
public class User {

    @Id  
	@GeneratedValue(strategy= GenerationType.AUTO)
    private int id;
	
	    @Column
	    private String username;
	 
	    @Column
	    private String phno;
	    
	    
    @Column
    @JsonIgnore
    private String password;
    
    
    
  public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

  

    public String getPhno() {
		return phno;
	}

	public void setPhno(String phno) {
		this.phno = phno;
	}

	public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

  }
