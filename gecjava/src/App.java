package gecjava.src;

import gecjava.src.student.Student;

public class App {
    public static void main(String[] args) throws Exception {
        Student std1 = new Student(stdId:21, stdName:"sindhu");
        System.out.println("The std1 details are: ");
        System.out.println("Id: "+ std1.stdID);
        System.out.println("Name: "+ std1.stdName);
    }
}
