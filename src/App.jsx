import React from 'react';
import { Route, Routes} from "react-router-dom";
import Section from './sections/Section.jsx';
import Faq from './sections/Section5.jsx';
import './App.css';
import Navbar from './sections/Navbar.jsx';



function App() {

  return (
    <>
        <Navbar />
        <Routes>        
        <Route path="/" element={<Section />} /> 
        <Route path="/faq" element={<Faq />} />
        </Routes>
    </>
  )
}

export default App;
