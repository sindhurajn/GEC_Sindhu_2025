package com.FormValidation.StudentFormValidation.models;

import jakarta.persistence.*;

@Entity
@Table(name = "StudentForm")
public class StudentForm {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //To generate the id values automatically as 1,2,3
	@Column(name = "Std_rollno")
	private long RollNo;
	
	@Column(name = "Std_name")
	private String Name;
	
	@Column(name = "Std_age")
	private int age;
	
	@Column(name = "Std_address")
	private String address;
	
	@Column(name = "Std_email")
	private String email;
	
	@Column(name = "Std_password")
	private String password;

	public StudentForm() {
		super();
	}

	public StudentForm(long rollNo, String name, int age, String address, String email, String password) {
		super();
		RollNo = rollNo;
		Name = name;
		this.age = age;
		this.address = address;
		this.email = email;
		this.password = password;
	}

	public long getRollNo() {
		return RollNo;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setRollNo(long rollNo) {
		RollNo = rollNo;
	}


	
	
}
