import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-black px-6 py-3 text-white transition hover:opacity-90"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;