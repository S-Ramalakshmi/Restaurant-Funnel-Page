import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer (){
  return (
    <div className='footer'>

        <div className="footer-section">
            <div className="logo-part">
                <img src="/real-ctf.png" alt="" />
                <p>At Creative Tech Factory, we craft powerful digital strategies and impactful content tailored for businesses with big visions and bold goals.</p>
            </div>

            <div className="quicklinks">
                <h3>Quick Links</h3>
                <button onClick={() => setMenuOpen(false)}><a href="#hero" className="links">Home</a></button>
                <button onClick={() => setMenuOpen(false)}><a href="#features" className="links">Features</a></button>
                <button onClick={() => setMenuOpen(false)}><a href="#testi" className="links">Testimonials</a></button>
                <button onClick={() => setMenuOpen(false)}><a href="#faq" className="links">FAQ</a></button>                
            </div>

            <div className="contactus">
                <h3>Contact us</h3>
                <div className="email">
                    <FaEnvelope className='contact-icons'/>
                    <p>creativetechfactory@gmail.com</p>
                </div>
                <div className="mobile">
                    <FaPhoneAlt className='contact-icons'/>
                    <p>+91 9342487437 / 77086 00584</p>
                </div>                
                <div className="address">
                    <FaMapMarkerAlt className='contact-icons location'/>
                    <p>MedPlus upstairs , SBI Opposite , Manthithoppu road , Kovilpatti - 628501.</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}
