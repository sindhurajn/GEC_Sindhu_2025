package com.FormValidation.StudentFormValidation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FormValidation.StudentFormValidation.models.StudentForm;

@Repository
public interface StudentRepository extends JpaRepository<StudentForm, Long> { //here StudenForm is the table name from models and import it

}
