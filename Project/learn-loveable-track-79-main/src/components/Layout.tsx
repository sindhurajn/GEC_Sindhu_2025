
import { useState } from "react";
import { SidebarNav } from "./SidebarNav";

interface LayoutProps {
  children: React.ReactNode;
  isTeacher?: boolean;
}

export function Layout({ children, isTeacher = true }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full">
      <SidebarNav 
        isTeacher={isTeacher} 
        collapsed={collapsed} 
        onToggleCollapse={() => setCollapsed(!collapsed)} 
      />
      <main className="flex-1 overflow-y-auto bg-slate-100">
        <div className="container py-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
