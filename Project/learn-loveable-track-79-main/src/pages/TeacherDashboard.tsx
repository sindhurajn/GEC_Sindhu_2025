
import { StatCard } from "@/components/StatCard";
import { ProgressChart } from "@/components/ProgressChart";
import { ATTENDANCE_DATA, GRADES_DISTRIBUTION, MONTHLY_ATTENDANCE, STUDENTS } from "@/lib/mock-data";
import { BookOpen, Calendar, Check, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TeacherDashboard = () => {
  // Calculate some stats for display
  const totalStudents = STUDENTS.length;
  const attendanceRate = Math.round(
    STUDENTS.reduce((acc, student) => acc + student.attendancePercentage, 0) / totalStudents
  );
  const averageMarks = Math.round(
    STUDENTS.reduce((acc, student) => acc + student.averageMarks, 0) / totalStudents
  );
  
  // Students who need attention (attendance < 75% or marks < 60%)
  const attentionNeeded = STUDENTS.filter(
    student => student.attendancePercentage < 75 || student.averageMarks < 60
  ).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Teacher Dashboard</h1>
        <div className="flex space-x-2">
          <Link to="/students/add">
            <Button>
              <User className="mr-2 h-4 w-4" />
              Add Student
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value={totalStudents} 
          icon={<Users className="h-4 w-4" />}
          description="Enrolled in your class"
        />
        <StatCard 
          title="Average Attendance" 
          value={`${attendanceRate}%`} 
          icon={<Calendar className="h-4 w-4" />}
          trend={{ value: 2, isPositive: true }}
          description="Class attendance rate"
        />
        <StatCard 
          title="Average Performance" 
          value={`${averageMarks}%`} 
          icon={<BookOpen className="h-4 w-4" />}
          trend={{ value: 5, isPositive: true }}
          description="Overall class average"
        />
        <StatCard 
          title="Need Attention" 
          value={attentionNeeded} 
          icon={<Check className="h-4 w-4" />}
          trend={{ value: 1, isPositive: false }}
          description="Students requiring support"
        />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <ProgressChart 
          title="Monthly Attendance" 
          description="Class attendance over the last 6 months" 
          data={MONTHLY_ATTENDANCE} 
          type="bar" 
        />
        <ProgressChart 
          title="Grade Distribution" 
          description="Overall grade distribution in the class" 
          data={GRADES_DISTRIBUTION} 
          type="pie" 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg border col-span-2">
          <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {[
              { text: "Submitted mid-term grades for Class 10A", time: "2 hours ago" },
              { text: "Updated attendance records for Math class", time: "Yesterday" },
              { text: "Added new assignment for Science class", time: "2 days ago" },
              { text: "Parent-teacher meeting scheduled for next week", time: "3 days ago" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 pb-3 border-b last:border-0">
                <div className="h-8 w-8 rounded-full bg-edu-light flex items-center justify-center text-edu-primary">
                  {index % 2 === 0 ? <BookOpen className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {[
              { date: "Apr 25", title: "Science Quiz", type: "Quiz" },
              { date: "Apr 28", title: "Math Assignment Due", type: "Assignment" },
              { date: "May 2", title: "Parent-Teacher Meeting", type: "Meeting" },
              { date: "May 10", title: "Final Exams Begin", type: "Exam" },
            ].map((event, index) => (
              <div key={index} className="flex items-center space-x-3 pb-3 border-b last:border-0">
                <div className="text-center">
                  <p className="text-xs font-medium bg-edu-light text-edu-primary px-2 py-1 rounded">
                    {event.date}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-slate-500">{event.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
