import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [register, setRegister] = useState({ username: '', email: '', password: '',phone: '',address:'',city:'',state:'',country:'' });
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };
  

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:4000/addregisters', register);
      if (response.data.success) {
        setMessage(response.data.message);
        setError(null);
        history.push('/Explore');
      } else {
        setMessage('');
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error.response ? error.response.data : error.message);
      setError('Network error, try again');
      setMessage('');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/large-group-cats-dogs-looking-camera-blue-background_191971-28557.jpg?w=2000')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg mb-40 mt-24 p-10 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username *</label>
            <input
              type="text"
              name="username"
              value={register.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">E-mail *</label>
            <input
              type="email"
              name="email"
              value={register.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password *</label>
            <input
              type="password"
              name="password"
              value={register.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={register.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address *</label>
            <input
              type="text"
              name="address"
              value={register.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">City *</label>
            <input
              type="text"
              name="city"
              value={register.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">State *</label>
            <input
              type="text"
              name="state"
              value={register.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your state"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Country *</label>
            <input
              type="text"
              name="country"
              value={register.country}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Password"
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={handleRegister}
              className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </div>
          {error && <p className="mt-4 text-green-500">{error}</p>}
          {message && <p className="mt-4 text-green-500">{message}</p>}
          <p className="mt-4 text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500 hover:text-blue-700 transition duration-300">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}