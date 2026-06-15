import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
  return (
<section className="founder-section" >
  <div className="bgimage">
    <div className="overlay"></div>

    <div className="content">
      <div className="message">
        <h2>Message From <span className="yellow"> Our Founder</span></h2>
        <p>
          We understand the challenges hotel and restaurant owners face—empty tables on weekdays, inconsistent bookings, rising competition, and marketing that doesn't deliver results.

</p><p>That's why we've created a proven hospitality marketing system that helps hotels, restaurants, cafes, and resorts attract more guests, increase online visibility, generate repeat customers, and grow revenue consistently.

</p><p>Today, we've helped numerous hospitality businesses transform their marketing and build stronger brands without wasting money on ineffective promotions. Your next loyal customer is already searching online we help them find you first.
        </p>
        <div className="center">
          <Link to="/contact">
        <button className="cta-btn">Get your Free Restaurant Audit <img src="/arrow-right .svg" alt="" /></button>
          </Link>

        </div>

      </div>

      <div className="founder">
        <img src="/real-ctf.png" alt="ctf" className='ctf' />

      <div className="small-box">
        <div className="helped-brands">
            <div className="incre">200+</div>
            <p>Brands helped</p>
        </div>

        <div className="helped-brands">
            <div className="incre">3x</div>
            <p>Avg. booking lift</p>
        </div>

        <div className="helped-brands">
            <div className="incre">3+</div>
            <p>Years in field</p>
        </div>        

        <div className="helped-brands">
            <div className="incre">98%</div>
            <p>Client retention</p>
        </div>
      </div>

      </div>
    </div>
  </div>
</section>
)
}
