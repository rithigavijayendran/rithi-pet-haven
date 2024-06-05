import React from 'react';
import Dog1 from "./images/Dog1.jpg";
import Dog2 from "./images/Dog2.jpg";
import Dog3 from "./images/Dog3.jpg";
import Dog4 from "./images/Dog4.jpg";
import Bird1 from "./images/bird1.jpg";
import Bird2 from "./images/bird2.jpg";
import Bird3 from "./images/bird3.jpg";
import Bird4 from "./images/bird4.jpg";
import Cat1 from "./images/cat1.jpg";
import Cat2 from "./images/cat2.jpg";
import Cat3 from "./images/cat3.jpg";
import Cat4 from "./images/cat4.jpg";


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
    { species: 'Golden Retriever', age: 1, price: 5000, Lifespan: "10-13 years", image: Dog1 },
    { species: 'German Shepherd', age: 2, price: 4000, Lifespan: "10-12 years", image: Dog2 },
    { species: 'Beagle', age: 3, price: 3000, Lifespan: "11-13 years", image: Dog3 },
    { species: 'Pomeranian', age: 4, price: 2000, Lifespan: "12-16 years", image: Dog4 },
    { species: 'American Eskimo Dog', age: 1, price: 5000, Lifespan: "12-15 years", image: Cat1 },
    { species: 'Kromfohrlander', age: 2, price: 4000, Lifespan: "12-14 years", image: Cat2 },
    { species: 'Eurasier', age: 3, price: 3000, Lifespan: "11-13 years",image: Cat3 },
    { species: 'Jagdterrier', age: 4, price: 2000,Lifespan: "12-15 years", image: Cat4 },
    { species: 'Saarloos wolfdog', age: 1, price: 1000,Lifespan: "10-12 years", image: Bird1 },
    { species: 'Doberman Pinscher', age: 2, price: 2000,Lifespan: "10-12 years", image: Bird2 },
    { species: 'Boxer', age: 3, price: 3000,Lifespan: "10-12 years", image: Bird3 },
    { species: 'Giant Schnauzer', age: 4, price: 4000,Lifespan: "10-12 years", image: Bird4 },
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
