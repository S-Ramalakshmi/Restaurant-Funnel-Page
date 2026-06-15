import React from 'react'
import { MdChevronRight } from "react-icons/md";
import {Link} from 'react-router-dom'

export default function Works() {
  return (
    <div className='work'>
        <h1>Your 3-Phase Restaurant <span className="blue">Growth System</span></h1>
        <div className="steps">

            <div className="step1">
                <div className='numline'>
                <div className="number">1</div>
                <div className="line"></div>
                </div>
                <div className="step-content">
                    <h4>Get Found Online</h4>
                    <div className='content-box'>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Google Maps SEO & Business Profile optimization</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Zomato & Swiggy listing revamp</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Local keyword targeting for your area</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Website SEO & citation building</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="step1">
                <div className="number">2</div>
                <div className="step-content">
                    <h4>Turn Views Into Orders</h4>
                    <div className='content-box'>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Instagram & Facebook content strategy</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Reels, stories & food content creation</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Meta & Google ads targeting nearby hungry customers</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>WhatsApp marketing & direct booking funnels</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="step1">
                <div className="number">3</div>
                <div className="step-content">
                    <h4>Scale & Retain</h4>
                    <div className='content-box'>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Repeat customer loyalty campaigns</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Review generation & reputation management</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Monthly performance reports</p>
                        </div>
                        <div className="point">
                        <MdChevronRight className='ryt-arrow'/>
                        <p>Seasonal & festival offer campaigns</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className='center'>
        <Link to="/contact">
            <button className="cta-btn-blue">Get your Free Restaurant Audit<img src="/arrow-right .svg" alt="" className='white-arrow' /></button>        
        </Link>
    </div>
    </div>
  )
}
