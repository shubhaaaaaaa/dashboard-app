import { Link } from 'react-router-dom';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="flex pt-32 justify-center h-screen text-center bg-background px-4">
      <div>
        <div className="flex justify-center mb-4">
          <ExclamationTriangleIcon className="w-16 h-16 text-secondary" />
        </div>
        <h1 className="text-4xl font-bold text-secondary">404 - Page Not Found</h1>
        <p className="text-gray-300 mt-2">
          Whoops! This page is still under construction or doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 rounded-xl bg-primary text-white font-medium shadow hover:bg-primary/90 transition"
        >
          Go Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
