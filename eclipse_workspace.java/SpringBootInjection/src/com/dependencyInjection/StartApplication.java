package com.dependencyInjection;

public class StartApplication {
	public static void main(String[] args) {
		Address address = new Address("Hassan", "Karnataka");
		
		//1. Constructor Injection:
		
		Student student = new Student(12,"Mohan", address);
//		System.out.println(student.getId());
//		System.out.println(student.getName());
//		Address address1 = student.getAddress();
//		System.out.println(address1.getCity());
//		System.out.println(address1.getState());
		
		//2. Setter Injection:
		
		Address address2 = new Address();
		address2.setCity("Bengaluru");
		address2.setState("Karnataka");
		
		Address address4 = new Address();
		address4.setCity("kolkata");
		address4.setState("mumbai");
		
		
		Student student2 = new Student();
		student2.setId(25);
		student2.setName("Sindhu");
		// setter injection
		student2.setAddress(address2);
//		student2.setAddress(address4);
		
		
		System.out.println(student2.getId());
		System.out.println(student2.getName());
		Address address3 = student2.getAddress();
		System.out.println(address2.getCity());
		System.out.println(address2.getState());
		Address address5 = student2.getAddress();
		System.out.println(address4.getCity());
		System.out.println(address4.getState());
		
		
	}

}
