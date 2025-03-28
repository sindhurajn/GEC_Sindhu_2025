package introduvtion_to_java.first_program;

public class Operators {
	public static void main(String[] args) {
		
		System.out.println("Arithematic operators:");
		//Addition
		int sum1 = 100 + 50;        // 150 (100 + 50)
		int sum2 = sum1 + 250;      // 400 (150 + 250)
		int sum3 = sum2 + sum1; 
		System.out.println("sum1: "+sum1);
		System.out.println("sum2: "+sum2);
		System.out.println("sum3: "+sum3);
		
		//Subtraction
	    int x = 5;
	    int y = 3;
	    System.out.println( x - y);
	    
	    //Multiplication
	    int mul = 3*5;
	    System.out.println("Mul: "+mul);
	    
	  //Division
	    int a = 10;
	    int b = 2;
	    System.out.println("Div: "+a / b);
	    
	  //Reminder
	    int z = 10 % 3;
	    System.out.println("Modulus: "+z);
	    
	    // Increment
	    int i=5;
	    ++i;
	    System.out.println("Increment: "+ i);
	    
	 // Decrement
	    int j = 10;
	    --j;
	    System.out.println("Increment: "+ j);
	    
	    int p = 10;
	    p += 5;
	    System.out.println(p);
	    
//	    int q = 5;		
//	    		+=	x += 3	x = x + 3	
//	    		-=	x -= 3	x = x - 3	
//	    		*=	x *= 3	x = x * 3	
//	    		/=	x /= 3	x = x / 3	
//	    		%=	x %= 3	x = x % 3	
//	    		&=	x &= 3	x = x & 3	
//	    		|=	x |= 3	x = x | 3	
//	    		^=	x ^= 3	x = x ^ 3	
//	    		>>=	x >>= 3	x = x >> 3	
//	    		<<=	x <<= 3	x = x << 3
//	    
		
	}

}
