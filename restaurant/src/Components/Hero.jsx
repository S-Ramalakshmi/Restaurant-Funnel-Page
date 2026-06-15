import React from 'react';
import Topbar from './Topbar'
import { FiArrowRight } from "react-icons/fi";
import {Link} from 'react-router-dom'

export default function Hero (){
  return (
    <div className='Hero' id='home'>
        <Topbar/>

        <div className="hero-content ">
            <h1 className='text-5xl text-white font-bold'>Transform Your Hotel Into a Guest Magnet</h1>
            <p className='text-lg text-white font-medium'>Increase bookings, strengthen your online presence, and build lasting guest relationships.</p>
         <div className='hero-image'><img src='./Hero image.png'/></div>
      
                    <Link to="/contact">
  <button className="cta-btn">Get your Free Restaurant Audit <img src="/arrow-right .svg" alt="" /></button>
            </Link>

        </div>

        <div className="center-fixed">
          <Link to="/contact">
            <button className="btn-nod">
              Get your Free Restaurant Audit <span><FiArrowRight className='ryt'/></span>
            </button>          
          </Link>

        </div>


    </div>
  )
}

