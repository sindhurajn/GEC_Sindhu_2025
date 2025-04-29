
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-edu-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-slate-600 mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button>
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
