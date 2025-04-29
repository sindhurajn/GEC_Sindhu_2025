
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  BarChart, 
  Settings,
  User
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const teacherNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: BarChart,
  },
  {
    title: "Students",
    href: "/students",
    icon: Users,
  },
  {
    title: "Attendance",
    href: "/attendance",
    icon: Calendar,
  },
  {
    title: "Marks",
    href: "/marks",
    icon: BookOpen,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const studentNavItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/student",
    icon: BarChart,
  },
  {
    title: "Attendance",
    href: "/student/attendance",
    icon: Calendar,
  },
  {
    title: "Marks",
    href: "/student/marks",
    icon: BookOpen,
  },
  {
    title: "Profile",
    href: "/student/profile",
    icon: User,
  },
];

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  isTeacher?: boolean;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function SidebarNav({ className, isTeacher = true, collapsed = false, onToggleCollapse, ...props }: SidebarNavProps) {
  const items = isTeacher ? teacherNavItems : studentNavItems;
  
  return (
    <div className={cn("h-screen bg-slate-50 border-r flex flex-col", collapsed ? "w-20" : "w-64", className)} {...props}>
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <h2 className="text-xl font-bold text-edu-primary">
            {isTeacher ? "Teacher Portal" : "Student Portal"}
          </h2>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggleCollapse}
          className="ml-auto"
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center p-3 rounded-md text-slate-700 hover:bg-edu-light hover:text-edu-primary transition-colors",
                  window.location.pathname === item.href && "bg-edu-light text-edu-primary font-medium"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <div className={cn("flex items-center", collapsed ? "justify-center" : "space-x-3")}>
          <div className="h-8 w-8 rounded-full bg-edu-primary text-white flex items-center justify-center">
            {isTeacher ? "T" : "S"}
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">
                {isTeacher ? "Ms. Robinson" : "Alex Johnson"}
              </p>
              <p className="text-xs text-slate-500">
                {isTeacher ? "Class Teacher" : "Class 10A"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
