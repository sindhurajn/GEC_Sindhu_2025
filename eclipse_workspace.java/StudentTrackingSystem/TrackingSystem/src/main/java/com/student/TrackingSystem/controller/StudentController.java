//---- com.example.trackhub.controller.StudentController.java ----
package com.student.TrackingSystem.controller;

import com.student.TrackingSystem.dto.PasswordChangeRequest;
import com.student.TrackingSystem.dto.ProfileUpdateRequest;
import com.student.TrackingSystem.model.Student;
import com.student.TrackingSystem.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class StudentController {

	@Autowired
	private StudentRepository studentRepository;

	@GetMapping("/students")
	public String showStudents(Model model) {
	    List<Student> students = studentService.getAllStudents();
	    model.addAttribute("students", students);
	    return "students";
	}

	@GetMapping("/students/search")
	public List<Student> searchStudents(@RequestParam String keyword) {
		return studentRepository.findByNameContainingIgnoreCase(keyword);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
		Optional<Student> student = studentRepository.findByEmail(email);
		if (student.isPresent() && student.get().getPassword().equals(password)) {
			return ResponseEntity.ok(student.get());
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
	}

	@PostMapping("/settings/profile")
	public ResponseEntity<?> updateProfile(@RequestBody ProfileUpdateRequest request) {
		Optional<Student> studentOpt = studentRepository.findById(request.id);
		if (studentOpt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
		}
		Student student = studentOpt.get();
		student.setName(request.name);
		student.setEmail(request.email);
		studentRepository.save(student);
		return ResponseEntity.ok("Profile updated successfully");
	}

	@PostMapping("/settings/password")
	public ResponseEntity<?> changePassword(@RequestBody PasswordChangeRequest request) {
		Optional<Student> studentOpt = studentRepository.findById(request.id);
		if (studentOpt.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
		}
		Student student = studentOpt.get();
		if (!student.getPassword().equals(request.currentPassword)) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Current password incorrect");
		}
		student.setPassword(request.newPassword);
		studentRepository.save(student);
		return ResponseEntity.ok("Password changed successfully");
	}
}
