package com.springSecurityDemo.demospringSecurity.config;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {
	public static void main(String[] args) {
		System.out.println(new BCryptPasswordEncoder().encode("Admin@123"));
	}

}
