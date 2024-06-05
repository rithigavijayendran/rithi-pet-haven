import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="mb-8 mt-8 ">
      <Link to="/" className="text-blue-800 font-bold text-xl underline mx-10 mr-4">Home</Link>
      <Link to="/register" className="text-blue-800 mx-10 mr-4 font-bold text-xl underline">Register</Link>
      <Link to="/login" className="text-blue-800 mx-10 mr-4 font-bold text-xl underline">Login</Link> 
    </nav>
  );
};

export default Header;
