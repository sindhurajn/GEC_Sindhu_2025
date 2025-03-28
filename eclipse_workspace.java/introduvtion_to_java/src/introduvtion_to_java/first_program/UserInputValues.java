package introduvtion_to_java.first_program;

import java.util.Scanner;

public class UserInputValues {
	public static void main(String[] args) {
		int stdAge=0;
		System.out.println("Enter the student age: ");
		Scanner sc = new Scanner(System.in);
		stdAge = sc.nextInt();
		System.out.println("The student age is: "+stdAge);
		
//		char a='a';
//		System.out.println("enter the value of a:");
//		Scanner sc1 = new Scanner(System.in);
//		a = sc1.next().charAt(a);
//		System.out.println("The student age is: "+'a'); it will not work
		
		sc.nextLine(); //if we do not give this it will show error
		
		System.out.println("enter your gender:");
		char gender = sc.nextLine().charAt(0);
		System.out.println("The gender is: "+gender);
		
		
	}

}
