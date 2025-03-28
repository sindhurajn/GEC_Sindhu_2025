package introduvtion_to_java.first_program;

import java.util.Scanner;

public class Control_statements {
	public static void main(String[] args) {
		//If and if-else:
		
		//int a=3;
//		if(a==2) {
//			System.out.println("a=2");
//		}
//		else {
//			System.out.println("a!=3");
//		}
		
		//Else if ladder:
		
		System.out.println("Enter the value of a");
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		if(a>0 && a<=3)
		{
			System.out.println("The value of a is greater than 0 and less than 3");
		}
		else if(a>4 && a<=8) {
			System.out.println("The value of a is greater than 3 and less than 8");
		}else {
			System.out.println("The value is greater than 8");
		}
		
//		System.out.println("Enter the value: ");
//		Scanner sc1 = new Scanner(System.in);
//		int a = sc1.nextInt();
//		if(a>=1 && a<=5)
//		{
//			System.out.println("Weekday");
//		}
//		else if(a>=6 && a<=7) {
//			System.out.println("Weekend");
//		}else {
//			System.out.println("Invalid");
//		}
		
		//Switch statement:
		
		int day=7;
		switch(day) {
		case 1: {
			System.out.println("Monday");
			break;
		}
		case 2: {
			System.out.println("Tuesday");
			break;
		}
		case 3: {
			System.out.println("Wednesday");
			break;
		}
		case 4: {
			System.out.println("Thursday");
			break;
		}
		case 5: {
			System.out.println("Friday");
			break;
		}
		case 6: {
			System.out.println("Saturday");
			break;
		}
		case 7: {
			System.out.println("Sunday");
			break;
		}
		default:{
			System.out.println("Invalid");
			break;
		}
		}
	}

}
