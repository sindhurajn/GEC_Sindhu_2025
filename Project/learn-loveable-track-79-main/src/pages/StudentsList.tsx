
import { StudentTable, Student } from "@/components/StudentTable";
import { Button } from "@/components/ui/button";
import { STUDENTS } from "@/lib/mock-data";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const StudentsList = () => {
  const [students] = useState<Student[]>(STUDENTS);

  const handleEditStudent = (student: Student) => {
    // This would open edit modal or navigate to edit page
    console.log("Edit student:", student);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Students</h1>
        <Link to="/students/add">
          <Button>
            <User className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </Link>
      </div>
      
      <StudentTable 
        students={students}
        onEdit={handleEditStudent}
      />
    </div>
  );
};

export default StudentsList;
