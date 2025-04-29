
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentsList from "./pages/StudentsList";
import AttendancePage from "./pages/AttendancePage";
import MarksPage from "./pages/MarksPage";
import StudentDashboard from "./pages/StudentDashboard";
import StudentProfile from "./pages/StudentProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Teacher Routes */}
          <Route 
            path="/" 
            element={
              <Layout isTeacher={true}>
                <TeacherDashboard />
              </Layout>
            } 
          />
          <Route 
            path="/students" 
            element={
              <Layout isTeacher={true}>
                <StudentsList />
              </Layout>
            } 
          />
          <Route 
            path="/attendance" 
            element={
              <Layout isTeacher={true}>
                <AttendancePage />
              </Layout>
            } 
          />
          <Route 
            path="/marks" 
            element={
              <Layout isTeacher={true}>
                <MarksPage />
              </Layout>
            } 
          />

          {/* Student Routes */}
          <Route 
            path="/student" 
            element={
              <Layout isTeacher={false}>
                <StudentDashboard />
              </Layout>
            } 
          />
          <Route 
            path="/student/profile" 
            element={
              <Layout isTeacher={false}>
                <StudentProfile />
              </Layout>
            } 
          />
          <Route 
            path="/student/attendance" 
            element={
              <Layout isTeacher={false}>
                <AttendancePage />
              </Layout>
            } 
          />
          <Route 
            path="/student/marks" 
            element={
              <Layout isTeacher={false}>
                <MarksPage />
              </Layout>
            } 
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
