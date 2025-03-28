package loopingststement;

public class LoopingStatement {
	public static void main(String[] args) {
		
		//for loop
		for(int i=0; i<=3; i++) {
			System.out.println(i + "");
		}
		
		//while loop
		int a=0;
		while(a<=5) {
			System.out.println(a + "");
			a++;
		}
		
		//do-while
		int x=0;
		do {
			System.out.println(x + "");
			x++;
		}
		while(x<=3); 
		
		//for-each loop
		int [] arr = {1,2,3,4,5};
	    for(int c:arr) {
		System.out.println(c);
	    }

	}

}
