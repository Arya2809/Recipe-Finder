import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold">
          Recipe Finder
        </Link>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="hover:text-yellow-300 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/random"
            className="hover:text-yellow-300 transition-colors"
          >
            Random Recipe
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
