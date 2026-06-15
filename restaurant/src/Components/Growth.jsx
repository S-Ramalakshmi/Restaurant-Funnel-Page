import React from 'react'
import {Link} from 'react-router-dom'

export default function Growth(){
  return (
    <section className='growth-section'>
        <div className="grow">
        <h1>Businesses That Trusted Us to Accelerate Their <span className="blue">Growth Journey</span></h1>
        </div>
<div className="caurosel">
  <div className="caurosel-track">
    <img src="/7.png" className="silver" alt="" />
    <img src="/moonlight LOGO.webp" className="moon" alt="" />

    <img src="/7.png" className="silver duplicate" alt="" />
    <img src="/moonlight LOGO.webp" className="moon duplicate" alt="" />
  </div>
</div>
    <div className='center'>
      <Link to="/contact">
        <button className="cta-btn-blue">Get your Free Restaurant Audit
          <img src="/arrow-right .svg" alt="" className='white-arrow' /></button>
      </Link>
    </div>
    
    </section>
  )
}

