package com.dependencyInjection;

public class Student {
	private int id;
	private String Name;
	private Address address;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Student(int id, String name, Address address) {
		super();
		this.id = id;
		Name = name;
		this.address = address;
	}
	public Student() {
		// TODO Auto-generated constructor stub
	}
	
	
	

	
}
