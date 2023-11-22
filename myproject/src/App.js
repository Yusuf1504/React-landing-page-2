import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Services';
import Signup from './Signup';


function App() {
  return (
   <>
    <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     
   </>
  );
}

export default App;
