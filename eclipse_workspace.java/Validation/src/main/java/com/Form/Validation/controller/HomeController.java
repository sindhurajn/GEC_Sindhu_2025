package com.Form.Validation.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
//import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

import com.Form.Validation.dto.StudentDTO;
import com.Form.Validation.service.StudentService;

import jakarta.validation.Valid;

@Controller
public class HomeController {
    
    private final StudentService studentService;

    public HomeController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/add-student")
    public String addStudent(Model model) {
        model.addAttribute("studentDTO", new StudentDTO());
        return "add-student";
    }

    @PostMapping("/add-student")
    public String addStudent(@Valid @ModelAttribute StudentDTO studentDTO, BindingResult result, Model model) {
    	if(result.hasErrors()){
    		return "add-student";
    	}
    	System.out.println(studentDTO.getName()+"2");
    	studentService.saveStudent(studentDTO);
    	
        return "redirect:/";
    }
}