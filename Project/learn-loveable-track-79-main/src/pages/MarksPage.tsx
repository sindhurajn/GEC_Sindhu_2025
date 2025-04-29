
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProgressChart } from "@/components/ProgressChart";
import { STUDENTS, SUBJECTS_PERFORMANCE } from "@/lib/mock-data";
import { Check, Save, Search } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SubjectMarks = {
  studentId: string;
  studentName: string;
  marks: number | null;
  grade: string;
};

const subjects = [
  { id: "math", name: "Mathematics" },
  { id: "science", name: "Science" },
  { id: "english", name: "English" },
  { id: "history", name: "History" },
  { id: "art", name: "Art" },
];

const examTypes = [
  { id: "assignment", name: "Assignment" },
  { id: "quiz", name: "Quiz" },
  { id: "midterm", name: "Mid-Term" },
  { id: "final", name: "Final Exam" },
];

const calculateGrade = (marks: number | null): string => {
  if (marks === null) return "-";
  if (marks >= 90) return "A";
  if (marks >= 80) return "B";
  if (marks >= 70) return "C";
  if (marks >= 60) return "D";
  return "F";
};

const MarksPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].id);
  const [selectedExamType, setSelectedExamType] = useState(examTypes[0].id);
  const [searchTerm, setSearchTerm] = useState("");
  const [marksData, setMarksData] = useState<SubjectMarks[]>(
    STUDENTS.map(student => ({
      studentId: student.id,
      studentName: student.name,
      marks: Math.floor(Math.random() * 40) + 60, // Random marks between 60-100
      grade: "",
    }))
  );

  // Calculate grades based on marks
  const dataWithGrades = marksData.map(item => ({
    ...item,
    grade: calculateGrade(item.marks),
  }));

  // Filter students based on search term
  const filteredData = dataWithGrades.filter(item =>
    item.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update a student's marks
  const updateMarks = (studentId: string, newMarks: number | null) => {
    setMarksData(prev =>
      prev.map(item =>
        item.studentId === studentId ? { ...item, marks: newMarks } : item
      )
    );
  };

  // Count grades for distribution chart
  const gradeDistribution = ["A", "B", "C", "D", "F"].map(grade => ({
    name: grade,
    value: dataWithGrades.filter(item => item.grade === grade).length,
  }));

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-800">Marks Management</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <ProgressChart
          title="Subject Performance"
          description="Average marks by subject"
          data={SUBJECTS_PERFORMANCE}
          type="bar"
        />
        <ProgressChart
          title="Grade Distribution"
          description="Number of students by grade"
          data={gradeDistribution}
          type="pie"
        />
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Enter Marks</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(subject => (
                    <SelectItem key={subject.id} value={subject.id}>
                      {subject.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedExamType} onValueChange={setSelectedExamType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Exam Type" />
                </SelectTrigger>
                <SelectContent>
                  {examTypes.map(type => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="w-[150px]">Marks</TableHead>
                    <TableHead className="w-[100px]">Grade</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.studentId}>
                      <TableCell className="font-medium">{item.studentName}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={item.marks ?? ""}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateMarks(
                              item.studentId,
                              value === "" ? null : Number(value)
                            );
                          }}
                          className="h-8"
                        />
                      </TableCell>
                      <TableCell>
                        <div className={cn(
                          "text-xs font-medium rounded-full px-2.5 py-0.5 w-fit",
                          item.grade === "A" ? "bg-green-100 text-green-800" :
                          item.grade === "B" ? "bg-blue-100 text-blue-800" :
                          item.grade === "C" ? "bg-yellow-100 text-yellow-800" :
                          item.grade === "D" ? "bg-orange-100 text-orange-800" :
                          item.grade === "F" ? "bg-red-100 text-red-800" :
                          "bg-gray-100 text-gray-800"
                        )}>
                          {item.grade}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">
                          <Save className="h-4 w-4 mr-1" />
                          Save
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end">
              <Button>
                <Check className="h-4 w-4 mr-2" />
                Save All Marks
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function for conditional classes
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default MarksPage;
