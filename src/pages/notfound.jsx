import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-90 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        The page you are looking for does not exist.
      </p>
      <Link 
        to="/" 
        className="mt-4 px-6 py-2 text-sm sm:text-base bg-[#85B415] text-white font-semibold rounded-lg hover:bg-green-600 transition"
      >
        Home Page
      </Link>
    </div>
  );
}
