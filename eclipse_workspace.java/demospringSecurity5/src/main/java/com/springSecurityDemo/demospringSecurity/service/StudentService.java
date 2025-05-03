package com.springSecurityDemo.demospringSecurity.service;

import org.springframework.stereotype.Service;

import com.springSecurityDemo.demospringSecurity.dto.StudentDTO;
import com.springSecurityDemo.demospringSecurity.model.StudentModel;
import com.springSecurityDemo.demospringSecurity.repository.UserRepository;

@Service
public class StudentService {
	private UserRepository userRepository;

	public StudentService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	public void storeStudent(StudentDTO studentDTO) {
		StudentModel student = new StudentModel();
		
		student.setName(studentDTO.getName());
		student.setEmail(studentDTO.getEmail());
		student.setPassword(studentDTO.getPassword());
		student.setRole("ROLE_USER");
		userRepository.save(student);
	}

}
