import React from 'react';
import video from "./images/background-video.mp4";

function PetAdoptionWebsite() {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Your Pet Adoption Website</title>
            </head>
            <body className="bg-gray-100 font-sans">
                <nav className="bg-gray-800 text-white p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <span className="text-xl font-bold"></span>
                    </div>
                </nav>
                <section className="relative h-screen flex items-center justify-center">
                    <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Pet Adoption Website</h1>
                        <p className="text-lg md:text-xl mb-8">Find Your Perfect Companion</p>
                        <a href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out">Start Browsing</a>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </section>
                <section className="container mx-auto py-16 border-b border-gray-300">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Adopt from Us?</h2>
                    <div className="text-lg text-center">
                        <p>Our mission is to find loving homes for every pet. We believe every animal deserves a second chance and a loving family.</p>
                        <p>With our thorough adoption process and post-adoption support, we ensure that every pet and adopter are well-matched for a happy and lasting relationship.</p>
                    </div>
                </section>
                <section className="bg-gray-200 py-16 border-b border-gray-300">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Pets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-blue-50 ml-[2rem] shadow-lg rounded-lg overflow-hidden">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.aqF33gxnIodSAMxUhOeGOQHaE8&pid=Api&P=0&h=180" alt="Pet 1" className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">Bella</h3>
                                    <p className="text-gray-700 mb-4">Bella is a friendly and playful 2-year-old Labrador Retriever looking for a loving home.</p>
                                    <a href="/login" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                                </div>
                            </div>
                            <div className="bg-blue-50 shadow-lg rounded-lg overflow-hidden">
                                <img src="https://tse2.mm.bing.net/th?id=OIP.hAa7ejL1IprpOHRxbv5aawAAAA&pid=Api&P=0&h=180" alt="Pet 2" className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">Max</h3>
                                    <p className="text-gray-700 mb-4">Max is a gentle and affectionate 3-year-old Maine Coon who loves to cuddle.</p>
                                    <a href="/login" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                                </div>
                            </div>
                            <div className="bg-blue-50 mr-[2rem] shadow-lg rounded-lg overflow-hidden">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.7bRkbOk4krdz3s65wDi1LQHaFj&pid=Api&P=0&h=180" alt="Pet 3" className="w-full h-64 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">Luna</h3>
                                    <p className="text-gray-700 mb-4">Luna is a playful and curious 1-year-old Tabby looking for a forever home.</p>
                                    <a href="/login" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto py-16 border-b border-gray-300">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How You Can Help</h2>
                    <div className="text-lg text-center">
                        <p>Your support is crucial in helping us rescue and care for pets in need. Here’s how you can make a difference:</p>
                        <ul className="list-disc list-inside mt-4 text-left inline-block">
                            <li className="mb-2"><strong>Donate:</strong> Your donations provide food, medical care, and shelter for our pets.</li>
                            <li className="mb-2"><strong>Volunteer:</strong> Join our team and help us in daily operations, events, and more.</li>
                            <li className="mb-2"><strong>Spread the Word:</strong> Share our mission and available pets on social media to help them find homes.</li>
                        </ul>
                    </div>
                </section>
    
                <section className="container mx-auto py-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
                    <div className="text-lg text-center">
                        <p>We'd love to hear from you! Whether you have questions, want to get involved, or are interested in adopting, feel free to reach out.</p>
                        <p>Email: rithi@petadoption.com | Phone: +91 8015332065</p>
                    </div>
                </section>
            </body>
        </html>
    );
}

export default PetAdoptionWebsite;
