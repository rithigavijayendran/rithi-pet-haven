import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import { Home, UserPlus, LogIn } from "lucide-react";

const Header = () => {
  return (
    <nav className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Rithi's Pet Haven</h1>
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
          >
            <Home size={20} /> <span>Home</span>
          </Link>
          <Link 
            to="/register" 
            className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
          >
            <UserPlus size={20} /> <span>Register</span>
          </Link>
          <Link 
            to="/login" 
            className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
          >
            <LogIn size={20} /> <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
