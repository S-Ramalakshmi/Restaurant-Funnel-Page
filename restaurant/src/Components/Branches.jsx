import React from 'react'
import {Link} from 'react-router-dom'

export default function Branches () {
  return (
    <div className='branch'>
        <h1>Who Benefits From Our Expertise</h1>
        <div className="container">
            <div className="box">
                <img src="/restaurant.png" className='icons' alt="" />
                <h4>Single Outlet Restaurant</h4>
            </div>
            <div className="box">
                <img src="/franchise.png" className='icons' alt="" />
                <h4>Multiple Franchise</h4>
            </div>
            <div className="box">
                <img src="/chef.png" className='icons' alt="" />
                <h4>Cloud Kitchen</h4>
            </div>           
            <div className="box">
                <img src="/bakery-shop.png" className='icons' alt="" />
                <h4>Bakery & Dessert Shops</h4>
            </div>
            <div className="box">
                <img src="/parcel.png" className='icons' alt="" />
                <h4>Home Chef & Tiffin Service</h4>
            </div>
            <div className="box">
                <img src="/start-up.png" className='icons startup' alt="" />
                <h4>New Launching Restaurants</h4>
            </div>
        </div>
        <Link to="/contact">
        <button className="cta-btn">Get your Free Restaurant Audit <img src="/arrow-right .svg" alt="" /></button>        
        </Link>
    </div>
  )
}