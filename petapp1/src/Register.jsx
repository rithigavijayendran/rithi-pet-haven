import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, Phone, MapPin, Map, Globe } from 'lucide-react';

export default function Register() {
  const [register, setRegister] = useState({
    username: '', email: '', password: '',
    phone: '', address: '', city: '', state: '', country: ''
  });

  const [error, setError] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!register.username.trim()) errors.username = 'Username is required';
    if (!/^\S+@\S+\.\S+$/.test(register.email)) errors.email = 'Enter a valid email';
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(register.password)) {
      errors.password = 'Password must be at least 8 characters & contain letters & numbers';
    }
    if (!/^\d{10}$/.test(register.phone)) errors.phone = 'Enter a valid 10-digit phone number';
    if (!register.address.trim()) errors.address = 'Address is required';
    if (!register.city.trim()) errors.city = 'City is required';
    if (!register.state.trim()) errors.state = 'State is required';
    if (!register.country.trim()) errors.country = 'Country is required';

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await axios.post('https://rithi-pet-haven-backend.onrender.com/api/auth/register', register);
      setLoading(false);

      if (response.data.success) {
        setMessage('Registration successful! Redirecting...');
        localStorage.setItem('token', response.data.token);
        setTimeout(() => navigate('/explore'), 2000);
      } else {
        setError({ form: response.data.message });
      }
    } catch (err) {
      setLoading(false);
      setError({ form: err.response?.data?.message || 'Network error, please try again' });
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center overflow-auto" 
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/large-group-cats-dogs-looking-camera-blue-background_191971-28557.jpg?w=2000')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Form Container */}
      <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4 sm:mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Input Fields */}
          {[
            { name: "username", placeholder: "Username", Icon: User },
            { name: "email", placeholder: "Email", Icon: Mail, type: "email" },
            { name: "phone", placeholder: "Phone Number", Icon: Phone, type: "text" },
            { name: "address", placeholder: "Address", Icon: MapPin },
            { name: "city", placeholder: "City", Icon: Map },
            { name: "state", placeholder: "State", Icon: MapPin },
            { name: "country", placeholder: "Country", Icon: Globe }
          ].map(({ name, placeholder, Icon, type = "text" }) => (
            <div key={name} className="relative">
              <Icon className="absolute left-3 top-2 text-gray-500" />
              <input type={type} name={name} value={register[name]} onChange={handleChange} placeholder={placeholder}
                className="pl-10 p-2 border rounded w-full focus:ring focus:ring-blue-900 transition duration-300" />
              {error[name] && <p className="text-red-500 text-sm">{error[name]}</p>}
            </div>
          ))}

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-2 text-gray-500" />
            <input type={showPassword ? "text" : "password"} name="password" value={register.password} onChange={handleChange} placeholder="Password"
              className="pl-10 p-2 border rounded w-full focus:ring focus:ring-blue-900 transition duration-300" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" disabled={loading}
              className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-700 w-full transition duration-300">
              {loading ? "Registering..." : "Register"}
            </button>
          </div>

          {/* Error & Success Messages */}
          {error.form && <p className="text-red-500 text-center mt-2">{error.form}</p>}
          {message && <p className="text-green-500 text-center mt-2">{message}</p>}

          <p className="mt-4 text-center text-gray-600">
            Already have an account? <a href="/login" className="text-blue-700 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
