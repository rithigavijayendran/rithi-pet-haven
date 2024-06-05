import React from 'react';
import fi1 from "./images/fi1.jpg";
import fi2 from "./images/fi2.jpg";
import fi3 from "./images/fi3.jpg";
import fi4 from "./images/fi4.jpg";
import fi5 from "./images/fi5.jpg";
import fi6 from "./images/fi6.jpg";
import fi7 from "./images/fi7.jpg";
import fi8 from "./images/fi8.jpg";
import fi9 from "./images/fi9.jpg";
import fi10 from "./images/fi10.jpg";
import fi11 from "./images/fi11.jpg";
import fi12 from "./images/fi12.jpg";


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
};

const petImageStyle = {
  width: '300px',
  borderRadius: '10px',
  height:"200px"
};

const petInfoStyle = {
  marginTop: '10px',
};

const buyNowButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Pets = () => {
  const pets = [
    { species: 'Koi Carp', age: 1, price: 5000, Lifespan: "15-40 years", image: fi1 },
    { species: 'Spiny Dogfish', age: 2, price: 4000, Lifespan: "35-40 years", image: fi2 },
    { species: 'Reef Manta ray', age: 3, price: 3000, Lifespan: "40-50 years", image: fi3 },
    { species: 'School Shark', age: 4, price: 2000, Lifespan: "50-60 years", image: fi4 },
    { species: 'Kaluga', age: 1, price: 5000, Lifespan: "45-55 years", image: fi5 },
    { species: 'Great White Shark', age: 2, price: 4000, Lifespan: "40-70 years", image: fi6 },
    { species: 'Beluga Sturgeon', age: 3, price: 3000, Lifespan: "50-100 years",image: fi7 },
    { species: 'Whale Shark', age: 4, price: 2000,Lifespan: "80-130 years", image: fi8 },
    { species: 'Gold Fish', age: 1, price: 1000,Lifespan: "20-55 years", image: fi9 },
    { species: 'Blue Fish ', age: 2, price: 2000,Lifespan: "10-60 years", image: fi10 },
    { species: 'Guppy', age: 3, price: 3000,Lifespan: "22-67 years", image: fi11 },
    { species: 'Bette', age: 4, price: 4000,Lifespan: "30-80 years", image: fi12 },
  ];

  const handleBuyNow = (pet) => {
    // Add your logic for handling the "Buy Now" action
    console.log(`Buying now: ${pet.species}`);
  };

  return (
    <div>
      <center><h2 className='font-bold text-3xl'>Pawsitively Home</h2></center>
      <div style={petContainerStyle}>
        {pets.map((pet, index) => (
          <div key={index} style={petCardStyle}>
            <img src={pet.image} alt={pet.species} style={petImageStyle} />
            <div style={petInfoStyle}>
              <p>Species: {pet.species}</p>
              <p>Age: {pet.age}</p>
              <p>Price: {pet.price} INR</p>
              <a href="/adopt" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block">Adopt Now</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
