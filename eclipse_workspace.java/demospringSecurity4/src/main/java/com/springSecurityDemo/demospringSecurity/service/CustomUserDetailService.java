package com.springSecurityDemo.demospringSecurity.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springSecurityDemo.demospringSecurity.model.StudentModel;
import com.springSecurityDemo.demospringSecurity.repository.UserRepository;
@Service
public class CustomUserDetailService implements UserDetailsService {

	
	private UserRepository userRepository;
	
	

	public CustomUserDetailService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
	StudentModel student = userRepository.findByEmail(username)
			.orElseThrow(
					()->new  UsernameNotFoundException("user not found:"+username)
					);
		return new CustomUserDeatils(student);
	}

	
}

