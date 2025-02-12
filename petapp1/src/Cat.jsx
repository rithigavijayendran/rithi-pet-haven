import React from 'react';
import ca1 from "./images/ca1.jpg";
import ca2 from "./images/ca2.jpg";
import ca3 from "./images/ca3.jpg";
import ca4 from "./images/ca4.jpg";
import ca5 from "./images/ca5.jpg";
import ca6 from "./images/ca6.jpg";
import ca7 from "./images/ca7.jpg";
import ca8 from "./images/ca8.jpg";
import ca9 from "./images/ca9.jpg";
import ca10 from "./images/ca10.jpg";
import ca11 from "./images/ca11.jpg";
import ca12 from "./images/ca12.jpg";


const petContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const petCardStyle = {
  margin: '20px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  maxWidth: '300px',
  backgroundColor: '#F0F9FF',
};

const petImageStyle = {
  width: '300px',
  borderRadius: '10px',
  height:"200px"
};

const petInfoStyle = {
  marginTop: '10px',
};

const Pets = () => {
  const pets = [
    { species: 'Siamese', age: 1, price: 5000, Lifespan: "12-20 years", image: ca1 },
    { species: 'Burmese', age: 2, price: 4000, Lifespan: "16-18 years", image: ca2 },
    { species: 'Savannah Cat', age: 3, price: 3000, Lifespan: "12-20 years", image: ca3 },
    { species: 'Egyptian Mau', age: 4, price: 2000, Lifespan: "12-15 years", image: ca4 },
    { species: 'Balinese', age: 1, price: 5000, Lifespan: "12-20 years", image: ca5 },
    { species: 'Russian Blue', age: 2, price: 4000, Lifespan: "15-20 years", image: ca6 },
    { species: 'American Shorthair', age: 3, price: 3000, Lifespan: "15-20 years",image: ca7 },
    { species: 'Sphynx', age: 4, price: 2000,Lifespan: "10-15 years", image: ca8 },
    { species: 'Oriental Shorthair', age: 1, price: 1000,Lifespan: "12-15 years", image: ca9 },
    { species: 'Manx', age: 2, price: 2000,Lifespan: "14-16 years", image: ca10 },
    { species: 'Persian', age: 3, price: 3000,Lifespan: "12-17 years", image: ca11 },
    { species: 'Turkish Angora', age: 4, price: 4000,Lifespan: "12-18 years", image: ca12 },
  ];

  const handleBuyNow = (pet) => {
    // Add your logic for handling the "Buy Now" action
    console.log(`Buying now: ${pet.species}`);
  };

  return (
    <div className='bg-gray-400 p-2'>
      <button 
        onClick={() => window.location.href = '/explore'} 
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
        ← Go Back
      </button>
      <center><h2 className='font-bold text-3xl'>Adopt a Friend, Change a Life❤️</h2></center>
      <div style={petContainerStyle}>
        {pets.map((pet, index) => (
          <div key={index} style={petCardStyle}>
            <img src={pet.image} alt={pet.species} style={petImageStyle} />
            <div style={petInfoStyle}>
              <p>Species: {pet.species}</p>
              <p>Age: {pet.age}</p>
              <p>Price: ₹{pet.price}</p>
              <a href="/adopt" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block">Adopt Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
