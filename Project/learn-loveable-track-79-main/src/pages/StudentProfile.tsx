
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STUDENTS } from "@/lib/mock-data";
import { User } from "lucide-react";

const StudentProfile = () => {
  // Use student with ID 1 for this example
  const student = STUDENTS.find(s => s.id === "1");

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-800">Student Profile</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <div className="mx-auto w-32 h-32 bg-slate-200 rounded-full flex items-center justify-center mb-2">
              <User className="h-16 w-16 text-slate-500" />
            </div>
            <CardTitle className="text-xl">{student.name}</CardTitle>
            <p className="text-sm text-slate-500">Class {student.class} {student.section}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-slate-500">Roll Number</h3>
              <p>{student.rollNo}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Attendance</h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      student.attendancePercentage >= 90 ? "bg-edu-success" : 
                      student.attendancePercentage >= 75 ? "bg-edu-warning" : 
                      "bg-edu-danger"
                    }`}
                    style={{ width: `${student.attendancePercentage}%` }}
                  />
                </div>
                <span className="text-xs font-medium">{student.attendancePercentage}%</span>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Average Marks</h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      student.averageMarks >= 80 ? "bg-edu-success" : 
                      student.averageMarks >= 60 ? "bg-edu-warning" : 
                      "bg-edu-danger"
                    }`}
                    style={{ width: `${student.averageMarks}%` }}
                  />
                </div>
                <span className="text-xs font-medium">{student.averageMarks}%</span>
              </div>
            </div>
            <Button className="w-full mt-4">Edit Profile</Button>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Date of Birth</h3>
                <p>15 June 2008</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Gender</h3>
                <p>Male</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Blood Group</h3>
                <p>B+</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500">Admission Date</h3>
                <p>10 April 2020</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2">Contact Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs text-slate-500">Email</h4>
                  <p>alex.johnson@example.com</p>
                </div>
                <div>
                  <h4 className="text-xs text-slate-500">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-xs text-slate-500">Address</h4>
                  <p>123 Education Street, Learning City, Knowledge State, 12345</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-slate-500 mb-2">Parent/Guardian Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs text-slate-500">Father's Name</h4>
                  <p>Robert Johnson</p>
                </div>
                <div>
                  <h4 className="text-xs text-slate-500">Mother's Name</h4>
                  <p>Sarah Johnson</p>
                </div>
                <div>
                  <h4 className="text-xs text-slate-500">Parent's Email</h4>
                  <p>parents.johnson@example.com</p>
                </div>
                <div>
                  <h4 className="text-xs text-slate-500">Parent's Phone</h4>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Academic History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { year: "2023-2024", class: "Class 10", percentage: 85, rank: 5 },
              { year: "2022-2023", class: "Class 9", percentage: 82, rank: 7 },
              { year: "2021-2022", class: "Class 8", percentage: 88, rank: 3 },
            ].map((record, index) => (
              <div key={index} className={`pb-6 ${index < 2 ? "border-b" : ""}`}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{record.year}</h3>
                  <span className="text-sm text-slate-500">{record.class}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs text-slate-500">Overall Percentage</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            record.percentage >= 80 ? "bg-edu-success" : 
                            record.percentage >= 60 ? "bg-edu-warning" : 
                            "bg-edu-danger"
                          }`}
                          style={{ width: `${record.percentage}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium">{record.percentage}%</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500">Class Rank</h4>
                    <p className="font-medium mt-1">{record.rank}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentProfile;
