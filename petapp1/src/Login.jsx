import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/addlogins', login);
      console.log('Login created', response.data);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setErrorMsg('Network error, try again');
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://tse1.mm.bing.net/th?id=OIP.P8ysvBF9znZWZNEl0ijXRQHaEK&pid=Api&P=0&h=180')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-10 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Let's login...</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">username</label>
            <input
              type="text"
              name="username"
              value={login.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password </label>
            <input
              type="password"
              name="password"
              value={login.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your Password"
            />
          </div>
          <div className="text-center">
          <a href="/Explore" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">Login</a>
            {errorMsg && <p className="mt-4 text-red-500">{errorMsg}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
