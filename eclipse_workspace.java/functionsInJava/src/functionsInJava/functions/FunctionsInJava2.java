package functionsInJava.functions;

public class FunctionsInJava2 {
	//1. public class anywhere
	public void publicFunction() {
		System.out.println("This is public function");
	}
	
	//2. private class anywhere within class
	private void privateFunction() {
		System.out.println("This is private function");
	}
	
	//3. default:
	// within the package
	void defaultFunction() {
		System.out.println("This is Default function ");
	}
	
	//4. protected function:
	// within package and subclass in other package
	protected void protectedFunction() {
		System.out.println("This is protected class");
	}
	
	//5. static function:
	// we can access by using class name
	public static void StaticFunction() {
		System.out.println("This is static class");
	}
	
	public static void main(String[] args) {
		FunctionsInJava2 obj1 = new FunctionsInJava2();
		obj1.publicFunction();
		obj1.privateFunction();
		obj1.defaultFunction();
		obj1.protectedFunction();
		FunctionsInJava2.StaticFunction();
		
		
	}

}
