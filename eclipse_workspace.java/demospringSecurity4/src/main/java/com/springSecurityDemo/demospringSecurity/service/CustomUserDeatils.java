package com.springSecurityDemo.demospringSecurity.service;


import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.springSecurityDemo.demospringSecurity.model.StudentModel;

public class CustomUserDeatils implements UserDetails{

	private StudentModel student;
	
	public CustomUserDeatils(StudentModel student) {
		super();
		this.student = student;
	}

	//GrantedAuthority-- authority by roles
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return List.of(new SimpleGrantedAuthority(student.getRole()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return student.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return student.getEmail();
	}

}

