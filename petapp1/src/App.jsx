// App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Explore from './Explore';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Pet from './Pet';
import Cat from './Cat';
import Fish from './Fish';
import AdoptionFormPage from './AdoptionFormPage'; 
import Bird from './Bird';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Bird" element={<Bird />} />
          <Route path="/Fish" element={<Fish />} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/Pet" element={<Pet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adopt" element={<AdoptionFormPage />} /> // Add a new route for the adoption form page
        </Routes>
      </div>
    </Router>
  );
};

export default App;
