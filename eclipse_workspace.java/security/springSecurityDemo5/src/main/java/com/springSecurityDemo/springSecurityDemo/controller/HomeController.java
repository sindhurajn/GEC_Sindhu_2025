package com.springSecurityDemo.springSecurityDemo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.springSecurityDemo.springSecurityDemo.dto.StudentDTO;
import com.springSecurityDemo.springSecurityDemo.service.StudentService;
//import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping({"/"," "})
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
	
	@GetMapping("/register")
	public String register(Model model) {
		StudentDTO studentDTO = new StudentDTO();
		model.addAttribute("studentDTO", new StudentDTO());
		return "register";
	}
	
	@PostMapping("/register")
	public String register( @ModelAttribute("studentDTO") StudentDTO studentDTO,
	                       BindingResult result,
	                       RedirectAttributes redirectAttributes) {
	    if (result.hasErrors()) {
	        return "register"; // return form with errors
	    }
	    studentService.storeStudent(studentDTO);
	    redirectAttributes.addFlashAttribute("success", "Student saved successfully");
	    return "redirect:/login";
	}
	
	@GetMapping("/std-details")
	public String std() {
		return "std-details";
	}
	
	@GetMapping("/login")
	public String login() {
		return "login";
	}

}


