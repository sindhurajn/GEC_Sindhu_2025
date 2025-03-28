package inheritance;

class Student1 {
	//states
	public int age;
	public String name;
	public double marks;
	
	//full argument constructor 
	public Student1(int age, String name, double marks) {
		System.out.println("This is full argument constructor");
		this.age = age;
		this.name = name;
		this.marks = marks;
		
	}
	// No args constructor:
	public Student1() {
		System.out.println("This is no argument constructor");
	}
	
	//actions:
	public void isPlaying() {
		System.out.println(this.name+ " is playing");
	}
	public void isSleeping() {
		System.out.println(this.name+ " is sleeping");
	}
	public void diaplay() {
		System.out.println("Name: "+this.name);
		System.out.println("Age: "+this.age);
		System.out.println("Marks: "+this.marks);
		
	}
}

public class ConstructorInJava {
	public static void main(String[] args) {
		Student1 std1 = new Student1(21, "sindhu", 200);
		std1.diaplay();
		
		Student1 std2 = new Student1(20, "shwetha", 250);
		std2.diaplay();
		
		Student1 std3 = new Student1();
		std3.diaplay();
		
	}

}
