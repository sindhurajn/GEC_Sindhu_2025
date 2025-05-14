//---- com.example.trackhub.repository.StudentRepository.java ----
package com.student.TrackingSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.student.TrackingSystem.model.Student;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
	Optional<Student> findByEmail(String email);

	List<Student> findByNameContainingIgnoreCase(String keyword);
}
