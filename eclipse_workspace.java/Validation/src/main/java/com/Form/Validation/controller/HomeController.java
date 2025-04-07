package com.Form.Validation.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.Form.Validation.dto.StudentDTO;
import com.Form.Validation.model.StudentValidations;
import com.Form.Validation.repository.StudentRepository;
import com.Form.Validation.service.StudentService;

import jakarta.validation.Valid;

@Controller
public class HomeController {

	private final StudentService studentService;
	private final StudentRepository studentRepository;

	public HomeController(StudentService studentService, StudentRepository studentRepository) {
		super();
		this.studentService = studentService;
		this.studentRepository = studentRepository;
	}

	@GetMapping("/")
	public String home(Model model) {
		List<StudentValidations> students = studentService.getAllStudents();
		model.addAttribute("students", students);
		return "home";
	}

	@GetMapping("/std-edit")
	public String editStudent(@RequestParam Long id, Model model) {
		StudentDTO studentDTO = studentService.editStudent(id);
		StudentValidations student = studentRepository.findById(id).get();
		model.addAttribute("student", student);
		model.addAttribute("studentDTO", studentDTO);
		return "edit-student";
	}

	@PostMapping("/edit-student")
	public String updateStudent(@RequestParam Long id, @Valid @ModelAttribute StudentDTO studentDTO,
			BindingResult result, Model model, RedirectAttributes attributes) {
		if (result.hasErrors()) {
			StudentValidations student = studentRepository.findById(id).get();
			model.addAttribute("student", student);
			return "edit-student";
		}
		studentService.updateStudent(studentDTO, id);
		attributes.addFlashAttribute("success", "Student edited successfully.");

		return "redirect:/";
	}

	@GetMapping("/std-delete")
	public String deleteStudent(@RequestParam Long id) {
		studentService.deleteStudent(id);

		return "redirect:/";

	}

	@GetMapping("/add-student")
	public String addStudent(Model model) {
		model.addAttribute("studentDTO", new StudentDTO());
		return "add-student";
	}

	@PostMapping("/add-student")
	public String addStudent(@Valid @ModelAttribute StudentDTO studentDTO, BindingResult result, Model model,
			RedirectAttributes attributes) {
		//For showing error in image field
		if(studentDTO.getImage().isEmpty()) {
			result.addError(new FieldError("StudentDTO", "image", "Image is required"));
		}
		if (result.hasErrors()) {
			model.addAttribute("studentDTO", studentDTO); // Ensure form retains the entered values
			return "add-student";
		}
		System.out.println(studentDTO.getName() + "2");
		studentService.saveStudent(studentDTO);
		attributes.addFlashAttribute("success", "Student added successfully.");
		return "redirect:/";
	}
}
