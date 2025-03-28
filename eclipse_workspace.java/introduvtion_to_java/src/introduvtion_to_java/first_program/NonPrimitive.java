package introduvtion_to_java.first_program;

import java.util.Scanner;

public class NonPrimitive {
	public static void main(String[] args) {
//		int[] arr1 = {1,2,3,4,5};
//	    System.out.println(arr1[2]);
//	    
//	    String name = "Sindhu raj N";
//	    System.out.println(name);
//	    
//	    System.out.println("Enter username: ");
//	    Scanner sc = new Scanner(System.in);
//	    String username = sc.nextLine();
//	    String username = sc.next(); we use next() for taking only 1st word of the string
//	    System.out.println("Username is: "+username);
		
		System.out.println("Student Details:");
		
		System.out.println("Enter your name: ");
		System.out.println("Enter your age: ");
		System.out.println("Enter your marks: ");
		System.out.println("Enter your gender: ");
		System.out.println("Enter your branch: ");
		System.out.println("Enter your address: ");
	    Scanner sc = new Scanner(System.in);
	   
        String name = sc.nextLine();
        int age = sc.nextInt();
        double marks = sc.nextDouble();
        sc.nextLine();
        char gender = sc.nextLine().charAt(0);
        String branch = sc.nextLine();
        sc.next();
        String address = sc.nextLine();
        
        System.out.println("Name is: "+name);
        System.out.println("Age is: "+age);
        System.out.println("Mrks is: "+marks);
        System.out.println("Gender is: "+gender);
        System.out.println("Gender is: "+gender);
        System.out.println("Gender is: "+gender);
        
        
	
	
	}

	}
