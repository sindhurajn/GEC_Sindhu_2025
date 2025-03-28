package arraysinjava;

import java.util.Scanner;

public class ArraysinJava {
	public static void main(String[] args) {
//		System.out.println("Arrays in Java");
//		int[] arr = new int[5];
//		arr[0] = 30;
//		arr[1] = 20;
//		arr[2] = 40;
//		arr[3] = 35;
//		arr[4] = 36;
//		
//		for(int i=0; i<=4; i++) {
//			arr[i] = 10;
//		}
//		
//		for(var i : arr) {
//			System.out.print(i+ " ");
//			System.out.println(i+ " ");
			
			
//			Program to take input from users including size and store it in array and just print
			System.out.println("Enter the size of an array: ");
			Scanner sc = new Scanner(System.in);
			int size = sc.nextInt();
			int[] array = new int[size];
			
			System.out.println("Enter the elements of an array: ");
			for(int k=0; k<=array.length; k++) {
				System.out.println("Enter "+k+"th element");
				array[k]=sc.nextInt();
			}
			
			System.out.println("The elements of an array are: ");
			for(int j=0; j<=array.length; j++) {
				System.out.println(array[j]+ "");
				
			}
			sc.close();
			
			
			
			
		}
	

	

}
