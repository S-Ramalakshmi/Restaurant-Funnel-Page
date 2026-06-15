import React, { useState } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import {Link} from 'react-router-dom'


export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("menuOpen:", menuOpen); // add this line


  return (
    <>
      <div className="topbar">
        <div className="nav">
          <div className="nav-links desktop">
              <a href="#hero" className="links">Home</a>
              <a href="#features" className="links">Features</a>
              <a href="#testi" className="links">Testimonials</a>
          </div>

          <img src="/real-ctf.png" className="logo" alt="Logo" />

          <div className="nav-links desktop">
            <a href="#faq" className="links">FAQ</a>
          <Link to='/contact'>
            <button className="cta">Get Free Consultancy</button>         
          </Link>
          </div>

<button
  className="hamburger"
  onClick={() => {
    alert("clicked");
    setMenuOpen(true);
  }}
>
            <HiOutlineMenuAlt3 color='white'/>
          </button>
        </div>
      </div>

<div
  className={`over ${menuOpen ? "show" : ""}`}
  onClick={() => setMenuOpen(false)}
></div>

<div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <button
    className="close-btn"
    onClick={() => setMenuOpen(false)}
  >
    <HiX />
  </button>
  
  
  <button onClick={() => setMenuOpen(false)}><a href="#hero" className="links">Home</a></button>
  <button onClick={() => setMenuOpen(false)}><a href="#about" className="links">About</a></button>
  <button onClick={() => setMenuOpen(false)}><a href="#features" className="links">Features</a></button>
  <button onClick={() => setMenuOpen(false)}><a href="#testi" className="links">Testimonials</a></button>
  <button onClick={() => setMenuOpen(false)}><a href="#faq" className="links">FAQ</a></button>
  <Link to="/contact">
  <button className="cta">
    Get Free Consultancy
  </button>  
  </Link>

</div>
    </>
  );
}
