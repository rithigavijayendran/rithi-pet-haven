import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';


export default function LoginForm() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!login.email.includes('@')) errors.email = 'Valid email is required';
    if (login.password.length < 6) errors.password = 'Password must be at least 6 characters';
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/api/auth/login', login);
      setLoading(false);

      if (response.data.success) {
        setMessage('Login successful! Redirecting...');
        localStorage.setItem('token', response.data.token);
        setTimeout(() => navigate('/explore'), 2000);
      } else {
        setError({ form: response.data.message });
      }
    } catch (error) {
      setLoading(false);
      setError({ form: 'Invalid email or password' });
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://media-hosting.imagekit.io//d5ed2ec9cf354241/login.jpg?Expires=1833943009&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cwieD-98muK6DnOMVpLNpDg8q7TAR4~tdORT-JVoreOoNOXCvx~Br-iSbJrT2e7hur-nPIxmDGSfyyIYq7dJeLNDvGLaeGuhPGo3oHGrr0eTptrGj74VBykwpFR~NmlA6B3~ZLIxVBbXwYkr-mEPcLELTzDEK7fh2IaaS1qnoQpLRfKtgn5ehbXQZZ4AaU~SEvbnVd2wiBdZlzAvUcY3s6qfg1VUpkQacnZz7XAl-xj35BJj6TeCEJe-bdB~MvSGa9sicynLkEHvSjv4CYQASW1oYnSmYsInJ0ZIQtcmoT-xFJbHbio8S9QDJJhnAKdoE~HrtwbdhL6GOrwu4NTsuQ__')" }}>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-gray-300 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-2 text-gray-500" />
            <input 
              type="email" 
              name="email" 
              value={login.email} 
              onChange={handleChange} 
              placeholder="Email"
              className="pl-10 p-2 border rounded w-full focus:ring focus:ring-blue-900 outline" 
            />
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          </div>

          {/* Password Field */}
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-2 text-gray-500" />
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              value={login.password} 
              onChange={handleChange} 
              placeholder="Password"
              className="pl-10 p-2 border rounded w-full focus:ring focus:ring-blue-900 outline" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-3 top-3 text-gray-500">
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300">
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          {/* Error & Success Messages */}
          {error.form && <p className="text-red-500 text-center mt-4">{error.form}</p>}
          {message && <p className="text-green-500 text-center mt-4">{message}</p>}

          {/* Register Link */}
          <p className="mt-4 text-center text-black">
            Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
