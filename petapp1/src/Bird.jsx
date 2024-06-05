import React from 'react';
import bi1 from "./images/bi1.jpg";
import bi2 from "./images/bi2.jpg";
import bi3 from "./images/bi3.jpg";
import bi4 from "./images/bi4.jpg";
import bi5 from "./images/bi5.jpg";
import bi6 from "./images/bi6.jpg";
import bi7 from "./images/bi7.jpg";
import bi8 from "./images/bi8.jpg";
import bi9 from "./images/bi9.jpg";
import bi10 from "./images/bi10.jpg";
import bi11 from "./images/bi11.jpg";
import bi12 from "./images/bi12.jpg";


const petContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const petcardStyle = {
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
  backgroundColor: '#4caF50',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Pets = () => {
  const pets = [
    { species: 'Budgerigars', age: 1, price: 5000, Lifespan: "5-18 years", image: bi1 },
    { species: 'Caique', age: 2, price: 4000, Lifespan: "30-40 years", image: bi2 },
    { species: 'Cockatiel', age: 3, price: 3000, Lifespan: "15-20 years", image: bi3 },
    { species: 'Cockatoo', age: 4, price: 2000, Lifespan: "20-70 years", image: bi4 },
    { species: 'Conures', age: 1, price: 5000, Lifespan: "15-80 years", image: bi5 },
    { species: 'Dove', age: 2, price: 4000, Lifespan: "12-15 years", image: bi6 },
    { species: 'Eclectus Parrot', age: 3, price: 3000, Lifespan: "30-80 years",image: bi7 },
    { species: 'Rainbow Lorikeet', age: 4, price: 2000,Lifespan: "10-50 years", image: bi8 },
    { species: 'Lovebirds', age: 1, price: 1000,Lifespan: "20-more years", image: bi9 },
    { species: 'Macaw', age: 2, price: 2000,Lifespan: "30-50 years", image: bi10 },
    { species: 'Pigeon', age: 3, price: 3000,Lifespan: "15-more years", image: bi11 },
    { species: 'Senegal Parrot', age: 4, price: 4000,Lifespan: "20-50 years", image: bi12 },
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
          <div key={index} style={petcardStyle}>
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
