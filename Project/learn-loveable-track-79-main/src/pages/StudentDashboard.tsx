
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressChart } from "@/components/ProgressChart";
import { STUDENT_ATTENDANCE, STUDENT_MARKS, SUBJECTS_PERFORMANCE } from "@/lib/mock-data";
import { BookOpen, Calendar, Check } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const StudentDashboard = () => {
  // We'll use student id "1" for this example
  const studentId = "1";
  
  // Get the student's marks and attendance
  const marks = STUDENT_MARKS.find(item => item.studentId === studentId)?.marks || [];
  const attendance = STUDENT_ATTENDANCE.find(item => item.studentId === studentId)?.records || [];
  
  // Calculate overall attendance rate
  const attendanceRate = Math.round(
    (attendance.filter(record => record.status === "present").length / attendance.length) * 100
  );
  
  // Calculate average marks
  const averageMarks = Math.round(
    marks.reduce((acc, subject) => acc + subject.total, 0) / marks.length
  );
  
  // Get recent attendance records
  const recentAttendance = attendance.slice(-5).reverse();
  
  // Data for performance chart
  const performanceData = marks.map(subject => ({
    name: subject.subject,
    value: subject.total
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-800">Student Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard 
          title="Average Marks" 
          value={`${averageMarks}%`} 
          icon={<BookOpen className="h-4 w-4" />}
          description="Overall academic performance"
        />
        <StatCard 
          title="Attendance Rate" 
          value={`${attendanceRate}%`} 
          icon={<Calendar className="h-4 w-4" />}
          description="Current attendance percentage"
        />
        <StatCard 
          title="Completed Assignments" 
          value="28/30" 
          icon={<Check className="h-4 w-4" />}
          description="Assignment completion rate"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <ProgressChart 
          title="Subject Performance" 
          description="Your performance across different subjects" 
          data={performanceData} 
          type="bar" 
        />
        <Card>
          <CardHeader>
            <CardTitle>Recent Attendance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAttendance.map((record, index) => (
                  <TableRow key={index}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>
                      <div className={cn(
                        "text-xs font-medium rounded-full px-2.5 py-0.5 w-fit",
                        record.status === "present" ? "bg-green-100 text-green-800" :
                        record.status === "absent" ? "bg-red-100 text-red-800" :
                        "bg-yellow-100 text-yellow-800"
                      )}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Academic Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Assignments</TableHead>
                <TableHead>Quizzes</TableHead>
                <TableHead>Mid-Term</TableHead>
                <TableHead>Final</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marks.map((subject, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{subject.subject}</TableCell>
                  <TableCell>{subject.assignments}%</TableCell>
                  <TableCell>{subject.quizzes}%</TableCell>
                  <TableCell>{subject.midterm}%</TableCell>
                  <TableCell>{subject.final}%</TableCell>
                  <TableCell className="font-semibold">{subject.total}%</TableCell>
                  <TableCell>
                    <div className={cn(
                      "text-xs font-medium rounded-full px-2.5 py-0.5 w-fit",
                      subject.grade.startsWith("A") ? "bg-green-100 text-green-800" :
                      subject.grade.startsWith("B") ? "bg-blue-100 text-blue-800" :
                      subject.grade.startsWith("C") ? "bg-yellow-100 text-yellow-800" :
                      subject.grade.startsWith("D") ? "bg-orange-100 text-orange-800" :
                      "bg-red-100 text-red-800"
                    )}>
                      {subject.grade}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { subject: "Mathematics", title: "Trigonometry Problems", dueDate: "Apr 28" },
                { subject: "Science", title: "Lab Report", dueDate: "May 2" },
                { subject: "English", title: "Essay Submission", dueDate: "May 5" },
              ].map((assignment, index) => (
                <div key={index} className="flex items-center space-x-3 pb-3 border-b last:border-0">
                  <div className="text-center">
                    <p className="text-xs font-medium bg-edu-light text-edu-primary px-2 py-1 rounded">
                      {assignment.dueDate}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{assignment.title}</p>
                    <p className="text-xs text-slate-500">{assignment.subject}</p>
                  </div>
                  <div className="text-xs text-slate-500">Due</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Final Exam Schedule", date: "Apr 20", content: "Final exams will start from May 10. Prepare accordingly." },
                { title: "Science Exhibition", date: "Apr 15", content: "Annual science exhibition will be held on May 5." },
                { title: "Parent-Teacher Meeting", date: "Apr 10", content: "PTM is scheduled for May 2. Parents are requested to attend." },
              ].map((announcement, index) => (
                <div key={index} className="pb-3 border-b last:border-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium">{announcement.title}</h4>
                    <span className="text-xs text-slate-500">{announcement.date}</span>
                  </div>
                  <p className="text-sm text-slate-600">{announcement.content}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Helper function for conditional classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default StudentDashboard;
