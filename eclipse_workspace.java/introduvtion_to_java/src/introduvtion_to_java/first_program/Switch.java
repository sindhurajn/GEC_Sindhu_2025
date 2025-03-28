package introduvtion_to_java.first_program;

import java.util.Scanner;

public class Switch {
	public static void main(String[] args) {
//		System.out.println("Enter the value of day");
//		Scanner sc = new Scanner(System.in);
//		int day = sc.nextInt();
//		switch(day) {
//		case 1 -> System.out.println("Monday");
//		case 2 -> System.out.println("Tuesday");
//		case 3 -> System.out.println("Wednesday");
//		case 4 -> System.out.println("Thurday");
//		case 5 -> System.out.println("Friday");
//		case 6 -> System.out.println("Saturday");
//		case 7 -> System.out.println("Sunday");
//		default ->System.out.println("Invalid");
//		}
//		

		

//		System.out.println("Enter the value: ");
//		Scanner sc2 = new Scanner(System.in);
//		int b = sc2.nextInt();
//		switch(b) {
//		case 1,2,3,4,5 -> System.out.println("Weekday");
//		case 6,7 -> System.out.println("Weekend");
//		default -> System.out.println("Invalid");
//		}
		
		System.out.println("Enter the value of day");
		Scanner sc = new Scanner(System.in);
		int day = sc.nextInt();
		String res = switch(day) {
		case 1,2,3,4,5 -> "Weekday";
		case 6,7 -> "Weekend";
		default -> "Invalid";
		};
		System.out.println("The result is: "+res);
	}

}
