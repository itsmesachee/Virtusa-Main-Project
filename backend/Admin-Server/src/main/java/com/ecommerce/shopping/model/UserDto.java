package com.ecommerce.shopping.model;

import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class UserDto {

    private int id;

    private String username;
    private String password;
    private String phno;
    
    
   
    public String getPhno() {
		return phno;
	}

	public void setPhno(String phno) {
		this.phno = phno;
	}

	public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
