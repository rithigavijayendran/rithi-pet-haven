import React from "react";
import { Link } from "react-router-dom";
import video from "./images/background-video.mp4";
import ex1 from "./images/ex1.jpg";
import ex2 from "./images/ex2.jpg";
import ex3 from "./images/ex3.jpg";

const PetAdoptionWebsite = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Rithi's Pet Haven</h1>
          <p className="text-lg md:text-xl mb-8">Find Your Perfect Companion</p>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
            Start Browsing
          </Link>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="container mx-auto py-16 border-b border-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Adopt from Us?</h2>
        <div className="text-lg text-center max-w-2xl mx-auto">
          <p className="mb-4">Our mission is to find loving homes for every pet. We believe every animal deserves a second chance.</p>
          <p>With our thorough adoption process and post-adoption support, we ensure a happy and lasting relationship.</p>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="bg-gray-200 py-16 border-b border-gray-300">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Pets</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Bella", description: "Bella is a friendly and playful 2-year-old Labrador Retriever looking for a loving home.", img: ex1 },
              { name: "Max", description: "Max is a gentle and affectionate 3-year-old Maine Coon who loves to cuddle.", img: ex2 },
              { name: "Luna", description: "Luna is a playful and curious 1-year-old Tabby looking for a forever home.", img: ex3 },
            ].map((pet, index) => (
              <div key={index} className="bg-white ml-[1rem] mr-[1rem] shadow-lg rounded-lg overflow-hidden">
                <img src={pet.img} alt={pet.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{pet.name}</h3>
                  <p className="text-gray-700 mb-4">{pet.description}</p>
                  <Link to="/login" className="text-blue-500 hover:text-blue-700 font-bold">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="container mx-auto py-16 border-b border-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">How You Can Help</h2>
        <div className="text-lg text-center max-w-2xl mx-auto">
          <p className="mb-4">Your support is crucial in helping us rescue and care for pets in need. Here’s how you can make a difference:</p>
          <ul className="list-disc list-inside text-left inline-block">
            <li className="mb-2"><strong>Donate:</strong> Help provide food, medical care, and shelter.</li>
            <li className="mb-2"><strong>Volunteer:</strong> Join our team to assist with daily operations and events.</li>
            <li className="mb-2"><strong>Spread the Word:</strong> Share our mission on social media.</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="text-lg text-center">
          <p className="mb-4">We'd love to hear from you! Whether you have questions or want to adopt, feel free to reach out.</p>
          <p>Email: <a href="mailto:rithi@petadoption.com" className="text-blue-500 hover:text-blue-700">rithi@petadoption.com</a></p>
          <p>Phone: <a href="tel:+918015332065" className="text-blue-500 hover:text-blue-700">+91 8015332065</a></p>
        </div>
      </section>
    </div>
  );
};

export default PetAdoptionWebsite;
