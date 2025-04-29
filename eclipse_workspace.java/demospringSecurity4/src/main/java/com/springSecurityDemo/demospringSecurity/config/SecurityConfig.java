package com.springSecurityDemo.demospringSecurity.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.springSecurityDemo.demospringSecurity.repository.UserRepository;
import com.springSecurityDemo.demospringSecurity.service.CustomUserDetailService;

@Configuration

public class SecurityConfig {
	
	private final UserDetailsService userDetailsService;
	private UserRepository userRepository;
	
	
	public SecurityConfig(UserRepository userRepository, UserDetailsService userDetailsService) {
		super();
		this.userRepository = userRepository;
		this.userDetailsService = userDetailsService;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public UserDetailsService userDetailsService() {
		return new CustomUserDetailService(userRepository);
	}
	
	@Bean
	public DaoAuthenticationProvider daoAuthenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setPasswordEncoder(passwordEncoder());
		provider.setUserDetailsService(userDetailsService());
		return provider;
	}

}
