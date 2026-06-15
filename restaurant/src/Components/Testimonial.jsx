import React from 'react'
import { FaStar } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function Testimonial () {
  return (
    <section className='test' id='testi'>
        <div className="test-title">
            <h1>Restaurant Owners Who Changed Their Story</h1>
        </div>

        <div className="test-boxs">
            <div className="test-box">

                <div className="profile flex gap-2">
                    <div className="dp">RL</div>
                    <div className="name">
                        <h3>Raksha lana</h3>
                        <p className="gray">The Spice Room, Chennai</p>
                    </div>
                </div>
                <div className='stars'><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></div>
                <p className='review'>Within 3 months, our Google Maps ranking went from page 3 to top 3. Weekend bookings are now full 2 days in advance. Didn't believe it would work this fast.</p>
            </div>
            <div className="test-box">

                <div className="profile flex gap-2">
                    <div className="dp">RL</div>
                    <div className="name">
                        <h3>Raksha lana</h3>
                        <p className="gray">The Spice Room, Chennai</p>
                    </div>
                </div>
                <div className='stars'><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></div>
                <p className='review'>Within 3 months, our Google Maps ranking went from page 3 to top 3. Weekend bookings are now full 2 days in advance. Didn't believe it would work this fast.</p>
            </div>
            <div className="test-box">

                <div className="profile flex gap-2">
                    <div className="dp">RL</div>
                    <div className="name">
                        <h3>Raksha lana</h3>
                        <p className="gray">The Spice Room, Chennai</p>
                    </div>
                </div>
                <div className='stars'><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></div>
                <p className='review'>Within 3 months, our Google Maps ranking went from page 3 to top 3. Weekend bookings are now full 2 days in advance. Didn't believe it would work this fast.</p>
            </div>

            <div className="test-box duplicate">

                <div className="profile flex gap-2">
                    <div className="dp">RL</div>
                    <div className="name">
                        <h3>Raksha lana</h3>
                        <p className="gray">The Spice Room, Chennai</p>
                    </div>
                </div>
                <div className='stars'><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></div>
                <p className='review'>Within 3 months, our Google Maps ranking went from page 3 to top 3. Weekend bookings are now full 2 days in advance. Didn't believe it would work this fast.</p>
            </div>
            <div className="test-box duplicate">

                <div className="profile flex gap-2">
                    <div className="dp">RL</div>
                    <div className="name">
                        <h3>Raksha lana</h3>
                        <p className="gray">The Spice Room, Chennai</p>
                    </div>
                </div>
                <div className='stars'><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></div>
                <p className='review'>Within 3 months, our Google Maps ranking went from page 3 to top 3. Weekend bookings are now full 2 days in advance. Didn't believe it would work this fast.</p>
            </div>
            <div className="test-box duplicate">

                <div className="profile flex gap-2">
                    <div className="dp">RL</div>
                    <div className="name">
                        <h3>Raksha lana</h3>
                        <p className="gray">The Spice Room, Chennai</p>
                    </div>
                </div>
                <div className='stars'><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/><FaStar className='star'/></div>
                <p className='review'>Within 3 months, our Google Maps ranking went from page 3 to top 3. Weekend bookings are now full 2 days in advance. Didn't believe it would work this fast.</p>
            </div>
        </div>

                    <div className='center-btn'>
        <Link to="/contact">
                <button className="cta-btn-blue">Get your Free Restaurant Audit<img src="/arrow-right .svg" alt="" className='white-arrow change-blue' /></button>
        </Link>
    </div>
    </section>
  )
}
