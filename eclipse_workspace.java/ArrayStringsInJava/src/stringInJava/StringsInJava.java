package stringInJava;

public class StringsInJava {
	public static void main(String[] args) {
		String str1 = "String1";
		String str2 = new String("String1");
		String str4 = new String("String1");
		String str3 = "String1";
//		System.out.println(str1);
//		System.out.println(str2);
		System.out.println(str1.equals(str2)); // check for values ->true
		System.out.println(str1==str2); // check for reference or address ->false
		System.out.println(str1.equals(str3)); // check for values ->true
		System.out.println(str1==str3); // check for reference or address both stored in scp ->true
		System.out.println(str2==str4); // both stored in heep but different references for both->false
		
		String str5 = new String("String5");
		str5 = str5.concat("Hello");
		System.out.println(str5);
		}
	

}
