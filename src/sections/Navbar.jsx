import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import blaa1 from '../images/blaa1.svg';


const Navbar = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  return (
<>
<div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
          <div className="overlay-content">
          <Link to="/">Home</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Services</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Blog</Link>
            <Link to="/Faq">FAQS</Link>
            <Link to="/"><div className="buttononnavbarr">Get Started</div></Link>
          </div>
        </div>
        <div className="navbar">
          <div className="leftnavber">
            <img src={blaa1} style={{height: '39.32389450073242px', width: '122.71342468261719px', borderRadius: '0px', marginTop: '37px'}} />
            <div className="linksonnavbar">
            <Link to="/">Home</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Services</Link>
              <Link to="/">Contact Us</Link>
              <Link to="/">Blog</Link>
              <Link to="/Faq">FAQS</Link>
            </div>
          </div>
          <div className="rightnavbar">
            <a href=" waitinglist.html"><div className="buttononnavbar">Get Started</div></a>
            <spann onClick={openNav}>☰</spann>
          </div>
        </div>
</>
  )
}
export default Navbar;