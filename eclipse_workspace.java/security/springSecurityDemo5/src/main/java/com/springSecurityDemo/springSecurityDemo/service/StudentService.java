package com.springSecurityDemo.springSecurityDemo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.springSecurityDemo.springSecurityDemo.dto.StudentDTO;
import com.springSecurityDemo.springSecurityDemo.models.StudentModels;
import com.springSecurityDemo.springSecurityDemo.repository.StudentRepository;

@Service
public class StudentService {
	
	private StudentRepository studentRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public StudentService(StudentRepository studentRepository) {
		super();
		this.studentRepository = studentRepository;
	}
	
	public  void storeStudent(StudentDTO studentDTO) {
		StudentModels student = new StudentModels();
		student.setName(studentDTO.getName());
		student.setEmail(studentDTO.getEmail());
		student.setPassword(passwordEncoder.encode(studentDTO.getPassword()));
		student.setRole("ROLE_USER");
		studentRepository.save(student);
	}
}
