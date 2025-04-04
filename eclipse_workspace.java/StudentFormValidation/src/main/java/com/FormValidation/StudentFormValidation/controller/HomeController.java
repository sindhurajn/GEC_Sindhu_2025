package com.FormValidation.StudentFormValidation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FormValidation.StudentFormValidation.dto.StudentDTO;

@Controller
public class HomeController {
	
//	@GetMapping({"","/"})
//	public String Home() {
//		return "Home";
	
	@GetMapping({"/add-student"})
	public String addStudent(Model model) {
		model.addAttribute("studentDTO", new StudentDTO());
		return "add_student";
	}
}
