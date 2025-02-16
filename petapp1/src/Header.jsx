import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, UserPlus, LogIn, LogOut, Menu } from "lucide-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Website Title */}
        <h1 className="text-2xl font-bold">Rithi's Pet Haven</h1>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-6">
          <NavLinks isAuthenticated={isAuthenticated} user={user} logout={logout} loginWithRedirect={loginWithRedirect} />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-900 text-white flex flex-col items-center py-4 space-y-4">
          <NavLinks isAuthenticated={isAuthenticated} user={user} logout={logout} loginWithRedirect={loginWithRedirect} />
        </div>
      )}
    </nav>
  );
};

// Navigation Links Component
const NavLinks = ({ isAuthenticated, user, logout, loginWithRedirect }) => (
  <>
    <Link 
      to="/" 
      className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
    >
      <Home size={20} /> <span>Home</span>
    </Link>

    {!isAuthenticated ? (
      <>
        <button
          onClick={() => loginWithRedirect()}
          className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
        >
          <LogIn size={20} /> <span>Login</span>
        </button>
        <Link 
          to="/register" 
          className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
        >
          <UserPlus size={20} /> <span>Register</span>
        </Link>
      </>
    ) : (
      <>
        <div className="flex items-center space-x-2">
          <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full" />
          <span className="text-lg font-semibold">{user.name}</span>
        </div>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="flex items-center space-x-2 text-lg font-semibold transition duration-300 hover:text-gray-300"
        >
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </>
    )}
  </>
);

export default Header;
