
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Search, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface Student {
  id: string;
  name: string;
  rollNo: string;
  class: string;
  section: string;
  attendancePercentage: number;
  averageMarks: number;
}

interface StudentTableProps {
  students: Student[];
  onEdit?: (student: Student) => void;
}

export function StudentTable({ students, onEdit }: StudentTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student Name</TableHead>
              <TableHead>Roll No</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>Average Marks</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                        <User className="h-4 w-4 text-slate-500" />
                      </div>
                      <span>{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.section}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-16 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            student.attendancePercentage >= 90 ? "bg-edu-success" : 
                            student.attendancePercentage >= 75 ? "bg-edu-warning" : 
                            "bg-edu-danger"
                          }`}
                          style={{ width: `${student.attendancePercentage}%` }}
                        />
                      </div>
                      <span className="text-sm">{student.attendancePercentage}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-16 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            student.averageMarks >= 80 ? "bg-edu-success" : 
                            student.averageMarks >= 60 ? "bg-edu-warning" : 
                            "bg-edu-danger"
                          }`}
                          style={{ width: `${student.averageMarks}%` }}
                        />
                      </div>
                      <span className="text-sm">{student.averageMarks}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit && onEdit(student)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Link to={`/students/${student.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No students found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
