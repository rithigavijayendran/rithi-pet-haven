import React, { useState } from 'react';
import axios from 'axios';

function AdoptionFormPage() {
    const [adopt, setadopt] = useState({
        name: '',
        phone: '',
        address: '',
        state: '',
        city: ''
    });
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setadopt({ ...adopt, [name]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:4000/addadopts', adopt);
            if (response.data.success) {
                setMessage(response.data.message);
                setError(null);
            } else {
                setMessage('');
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error during adoption:', error.response ? error.response.data : error.message);
            setError('Network error, try again');
            setMessage('');
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://tse3.mm.bing.net/th?id=OIP.7ivM0ml3VoMsemJ_H-0IrgHaC4&pid=Api&P=0&h=180')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-10 max-w-lg w-full">
                <h1 className="text-2xl font-bold mb-6 text-center">Adopt a Pet</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                        <input type="text" id="name" name="name" value={adopt.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                        <input type="text" id="phone" name="phone" value={adopt.phone} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your Phone Number" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 mb-2">Delivery Address *</label>
                        <input type="text" id="address" name="address" value={adopt.address} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your Delivery Address" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="block text-gray-700 mb-2">State *</label>
                        <input type="text" id="state" name="state" value={adopt.state} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your State" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 mb-2">City *</label>
                        <input type="text" id="city" name="city" value={adopt.city} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Enter your City" />
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
                        >
                            Adopt Now
                        </button>
                    </div>
                </form>
                {error && <p className="mt-4 text-red-500">{error}</p>}
                {message && <p className="mt-4 text-green-500">{message}</p>}
            </div>
        </div>
    );
}

export default AdoptionFormPage;
