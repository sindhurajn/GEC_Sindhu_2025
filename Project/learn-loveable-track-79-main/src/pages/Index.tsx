
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-edu-primary text-white text-center">
          <h1 className="text-2xl font-bold">Student Progress Tracking System</h1>
          <p className="mt-2 text-edu-light">Track attendance, marks, and academic progress</p>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">Choose Your Portal</h2>
            <p className="text-slate-500 text-sm">Select which portal you want to access</p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Link to="/" className="block">
              <div className="border rounded-lg p-6 text-center hover:border-edu-primary hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-edu-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-edu-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Teacher Portal</h3>
                <p className="text-sm text-slate-500">Manage students, attendance, and marks</p>
              </div>
            </Link>
            
            <Link to="/student" className="block">
              <div className="border rounded-lg p-6 text-center hover:border-edu-primary hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-edu-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-edu-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-1">Student Portal</h3>
                <p className="text-sm text-slate-500">View your attendance, marks, and progress</p>
              </div>
            </Link>
          </div>
          
          <div className="text-center text-sm text-slate-500 mt-8">
            <p>© 2025 Student Progress Tracking System</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
