
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressChart } from "@/components/ProgressChart";
import { ATTENDANCE_DATA, MONTHLY_ATTENDANCE, STUDENTS } from "@/lib/mock-data";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AttendancePage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [attendanceData, setAttendanceData] = useState<{
    id: string;
    name: string;
    status: 'present' | 'absent' | 'late' | undefined;
  }[]>([]);

  useEffect(() => {
    // In a real app, we would fetch attendance for the selected date
    // Here we'll just generate some random attendance data
    const newAttendanceData = STUDENTS.map(student => ({
      id: student.id,
      name: student.name,
      status: Math.random() > 0.2 
        ? (Math.random() > 0.9 ? 'late' : 'present') 
        : 'absent'
    }));
    setAttendanceData(newAttendanceData);
  }, [date]);

  const handlePreviousDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate);
  };

  const handleStatusChange = (id: string, status: 'present' | 'absent' | 'late') => {
    setAttendanceData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const presentCount = attendanceData.filter(item => item.status === 'present').length;
  const absentCount = attendanceData.filter(item => item.status === 'absent').length;
  const lateCount = attendanceData.filter(item => item.status === 'late').length;

  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-slate-800">Attendance Management</h1>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-edu-success">
              {presentCount} <span className="text-sm font-normal text-slate-500">/ {attendanceData.length}</span>
            </div>
            <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-edu-success" 
                style={{ width: `${(presentCount / attendanceData.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-edu-danger">
              {absentCount} <span className="text-sm font-normal text-slate-500">/ {attendanceData.length}</span>
            </div>
            <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-edu-danger" 
                style={{ width: `${(absentCount / attendanceData.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Late</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-edu-warning">
              {lateCount} <span className="text-sm font-normal text-slate-500">/ {attendanceData.length}</span>
            </div>
            <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-edu-warning" 
                style={{ width: `${(lateCount / attendanceData.length) * 100}%` }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <ProgressChart 
          title="Attendance Overview" 
          data={[
            { name: "Present", value: presentCount },
            { name: "Absent", value: absentCount },
            { name: "Late", value: lateCount },
          ]}
          type="pie"
        />
        <ProgressChart 
          title="Monthly Attendance" 
          data={MONTHLY_ATTENDANCE} 
          type="bar" 
        />
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Attendance Register</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePreviousDay}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[240px] justify-start text-left font-normal",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(date, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNextDay}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead className="w-[150px]">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>
                    <div className={cn(
                      "text-xs font-medium rounded-full px-2.5 py-0.5 w-fit",
                      item.status === 'present' ? "bg-green-100 text-green-800" :
                      item.status === 'absent' ? "bg-red-100 text-red-800" :
                      "bg-yellow-100 text-yellow-800"
                    )}>
                      {item.status === 'present' ? 'Present' :
                       item.status === 'absent' ? 'Absent' : 'Late'}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "h-8 px-2",
                          item.status === 'present' && "bg-green-50 text-green-700"
                        )}
                        onClick={() => handleStatusChange(item.id, 'present')}
                      >
                        Present
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "h-8 px-2",
                          item.status === 'absent' && "bg-red-50 text-red-700"
                        )}
                        onClick={() => handleStatusChange(item.id, 'absent')}
                      >
                        Absent
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "h-8 px-2",
                          item.status === 'late' && "bg-yellow-50 text-yellow-700"
                        )}
                        onClick={() => handleStatusChange(item.id, 'late')}
                      >
                        Late
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendancePage;
