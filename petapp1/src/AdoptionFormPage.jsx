import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Map, Globe, Home, Hash } from 'lucide-react';

function AdoptionFormPage() {
    const [adopt, setAdopt] = useState({
        name: '', phone: '', address: '', city: '', state: '', country: '', pincode: ''
    });
    const [error, setError] = useState({});
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdopt({ ...adopt, [name]: value });
    };

    const validateForm = () => {
        let errors = {};
        if (!adopt.name.trim()) errors.name = 'Name is required';
        if (!/^[0-9]{10}$/.test(adopt.phone)) errors.phone = 'Enter a valid 10-digit phone number';
        if (!adopt.address.trim()) errors.address = 'Address is required';
        if (!adopt.city.trim()) errors.city = 'City is required';
        if (!adopt.state.trim()) errors.state = 'State is required';
        if (!adopt.country.trim()) errors.country = 'Country is required';
        if (!/^[0-9]{6}$/.test(adopt.pincode)) errors.pincode = 'Enter a valid 6-digit pincode';

        setError(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setLoading(true);
            const response = await axios.post('https://rithi-pet-haven-backend.onrender.com/api/adopt', adopt);
            setLoading(false);

            if (response.data.success) {
                setMessage('Thank you for choosing to adopt! We will get in touch with you soon to arrange a smooth transition for your new pet');
                setTimeout(() => navigate('/explore'), 8000);
            } else {
                setError({ form: response.data.message });
            }
        } catch (err) {
            setLoading(false);
            setError({ form: err.response?.data?.message || 'Network error, please try again later' });
        }
    };

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center px-4 sm:px-0"
            style={{ backgroundImage: "url('https://dp1zob55dtktz.cloudfront.net/wp-content/uploads/2017/01/21203852/Pet-Health.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-6 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">Complete Your Adoption Request – We’ll Reach Out Soon!</h2>
                <form onSubmit={handleSubmit}>
                    {[  
                        { name: "name", placeholder: "Full Name", Icon: User },
                        { name: "phone", placeholder: "Phone Number", Icon: Phone, type: "text" },
                        { name: "address", placeholder: "Full Address", Icon: Home },
                        { name: "city", placeholder: "City", Icon: Map },
                        { name: "pincode", placeholder: "Pincode", Icon: Hash, type: "text" },
                        { name: "state", placeholder: "State", Icon: MapPin },
                        { name: "country", placeholder: "Country", Icon: Globe },
                    ].map(({ name, placeholder, Icon, type = "text" }) => (
                        <div key={name} className="relative mb-3 sm:mb-4">
                            <Icon className="absolute left-3 top-2.5 text-gray-500" />
                            <input type={type} name={name} value={adopt[name]} onChange={handleChange} placeholder={placeholder}
                                className="pl-10 p-2 border outline rounded w-full focus:ring focus:ring-blue-900 text-sm sm:text-base md:text-lg" />
                            {error[name] && <p className="text-red-500 text-xs sm:text-sm mt-1">{error[name]}</p>}
                        </div>
                    ))}

                    <div className="text-center">
                        <button type="submit" disabled={loading}
                            className="bg-blue-500 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition duration-300 text-sm sm:text-base md:text-lg">
                            {loading ? "Submitting..." : "Adopt Now"}
                        </button>
                    </div>
                    {error.form && <p className="text-red-500 text-center mt-3 text-xs sm:text-sm md:text-base">{error.form}</p>}
                    {message && <p className="text-green-500 font-bold text-center mt-3 text-xs sm:text-sm md:text-base">{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default AdoptionFormPage;
