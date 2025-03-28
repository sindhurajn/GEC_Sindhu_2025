package introduvtion_to_java.first_program;

public class Switch2 {
	public static void main(String[] args) {
		Object obj = "hello";
		switch(obj) {
		case String s->System.out.println("String Type");
		case Integer i ->System.out.println("Integer Type");
		default -> System.out.println("invalid");
		}
	}

}
