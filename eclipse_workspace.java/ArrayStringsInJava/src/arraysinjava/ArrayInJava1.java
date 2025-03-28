package arraysinjava;

import java.util.Scanner;

public class ArrayInJava1 {
	public static void main(String[] args) {
		
//		int[][] arr = new int [3][2];
//		
//		arr[0][0] = 10;
//		arr[0][1] = 20;
//		arr[1][0] = 30;
//		arr[1][1] = 40;
//		arr[2][0] = 50;
//		arr[2][1] = 60;
//
//		for(int i=0; i<3; i++){
//			for(int j=0; j<2; j++){
//				System.out.println(arr[i][j]+"");
//			}
//			System.out.println();
//		}
		
		System.out.println("Enter the number of rows in an array: ");
		Scanner sc = new Scanner(System.in);
		int m = sc.nextInt();
		System.out.println("Enter the number of columns in an array: ");
		int n = sc.nextInt();
		int[][] array = new int[m][n];
		
		System.out.println("Enter the elements of an array: ");
		for(int i=0; i<m; i++) {
			for(int j=0; j<n; j++) {
			
			array[i][j]=sc.nextInt();
			}
		}
		
		System.out.println("The elements of an array are: ");
		for(int i=0; i<m; i++) {
			for(int j=0; j<n; j++) {
				System.out.println(array[i][j]+" ");
			}
		
			System.out.println();
	
		}
		sc.close();
	}
}
		
