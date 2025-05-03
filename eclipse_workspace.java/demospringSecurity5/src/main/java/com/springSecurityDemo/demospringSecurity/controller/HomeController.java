package com.springSecurityDemo.demospringSecurity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.springSecurityDemo.demospringSecurity.dto.StudentDTO;

@Controller
public class HomeController {
	private StudentService studentService;
	
	@GetMapping({"","/"})
	public String home() {
		return "home";
	}
	
	@GetMapping("/about")
	public String about() {
		return "about";
	}
	
	@GetMapping("/contact")
	public String contact() {
		return "contact";
	}
	
	@GetMapping("/redirect") 
		public String register(Model model) {
		StudentDTO studentDTO = new StudentDTO();
		model.addAttribute("StudentDTO", studentDTO);
			return "register";
		}
	
	@PostMapping("/register")
	public String register(@ModelAttribute StudentDTO studentDTO, RedirectAttributes redirectAttributes) {
		studentService.storeStudent(studentDTO);
		redirectAttributes.addFlashAttribute("success", "Student saved successfully");
		return "/redirect";
	}
	
	@GetMapping("/std-details")
	public String std() {
		return "std-details";
	}

}
