package inheritance;

class Student {
	//states
	public int age = 30;
	public String name ="Murthy";
	public double marks = 100;
	
	//actions:
	public void isPlaying() {
		System.out.println(this.name+ " is playing");
	}
	public void isSleeping() {
		System.out.println(this.name+ " is sleeping");
	}
}

public class ClassObjectInJava {
	
	
	
	public static void main(String[] args) {
		Student std1 = new Student();
		System.out.println(std1.age);
		System.out.println(std1.name);
		System.out.println(std1.marks);
		std1.isPlaying();
		std1.isSleeping();
		
		Student std2 = new Student();
		System.out.println(std2.age);
		System.out.println(std2.name);
		System.out.println(std2.marks);
		std2.isPlaying();
		std2.isSleeping();
		
		
		
		
	}

}
