import React from 'react';
import {BiMap,BiPurchaseTag,BiConfused ,BiHelpCircle,BiMoney,BiMedal,BiBulb,BiTargetLock,BiBarChartAlt2,BiTrendingUp} from "react-icons/bi";
import {Link} from 'react-router-dom';


export default function Roadmap(){

    return (
    <div>

        <div className="success-steps  flex justify-center flex-col items-center gap-3">
            <h1 className='font-bold'>Stop Guessing. <span className="blue"> Start Growing.</span></h1>

            {/* <div className="success-box">
                <div className="loss">
                    <div className="toptitle1">Stuck Here?</div>
                    <div className="points">
                        <img src="/map-pin.svg" className='box-icon' alt="" />
                        <span className="text">Competitors on Google Maps — you're invisible</span>
                    </div>
                    <div className="points">
                        <img src="/discount.svg"  className='box-icon' alt="" />
                        <span className="text">Unsure what offers or content will attract more diners</span>
                    </div>
                    <div className="points">
                        <img src="/confusion.svg"  className='box-icon' alt="" />
                        <span className="text">No idea what content to post or when</span>
                    </div>
                    <div className="points">
                        <img src="/help-circle.svg" className='box-icon' alt="" />
                        <span className="text">Unsure how to stand out from dozens of nearby restaurants</span>
                    </div>
                    <div className="points">
                        <img src="/wallet.svg"  className='box-icon' alt="" />
                        <span className="text">Believing that restaurant growth always requires bigger ad budgets</span>
                    </div>

                </div>
                <div className="profit">
                    <div className="toptitle2">Grow Here.</div>
                    <div className="points">
                        <img src="/medal.svg" className='box-icon' alt="" />
                        <span className="text">Ranked #1 for food searches in your area</span>
                    </div>
                    <div className="points">
                        <img src="/idea.svg" className='idea-icon'  alt="" />
                        <span className="text">More walk-ins, reservations, and online orders every week</span>
                    </div>
                    <div className="points">
                        <img src="/target.svg" className='box-icon' alt="" />
                        <span className="text">Clear marketing plans and campaigns you can execute confidently</span>
                    </div>
                    <div className="points">
                        <img src="/barchart.svg" className='box-icon' alt="" />
                        <span className="text">Promotions that increase revenue instead of reducing profits</span>
                    </div>   
                    <div className="points">
                        <img src="/fire.svg" className='box-icon' alt="" />
                        <span className="text">Sustainable restaurant growth without wasting money on ineffective promotions</span>
                    </div>                 
                </div>
            </div> */}

            <div className="success-box">
                <div className="loss">
                    <div className="toptitle-par">
                    <div className="toptitle1">Stuck Here?</div>
                    </div>
                    <div className="points">
<BiMap className="icon" />
                        <span className="text">Competitors on Google Maps — you're invisible</span>
                    </div>
                    <div className="points">
<BiPurchaseTag className="icon" />
                        <span className="text">Unsure what offers or content will attract more diners</span>
                    </div>
                    <div className="points">
                        <BiConfused  className="icon sad" />
                        <span className="text">No idea what content to post or when</span>
                    </div>
                    <div className="points">
                        <BiHelpCircle className="icon" />
                        <span className="text">Unsure how to stand out from dozens of nearby restaurants</span>
                    </div>
                    <div className="points">
                        <BiMoney className="icon" />
                        <span className="text">Believing that restaurant growth always requires bigger ad budgets</span>
                    </div>

                </div>
                <div className="profit">
                    <div className="toptitle-par">
                     <div className="toptitle2">Grow Here.</div>
                    </div>

                    <div className="points">
                        <BiMedal className="icon" />
                        <span className="text">Ranked #1 for food searches in your area</span>
                    </div>
                    <div className="points">
                        <BiBulb className="icon" />
                        <span className="text">More walk-ins, reservations, and online orders every week</span>
                    </div>
                    <div className="points">
                        <BiTargetLock className="icon" />
                        <span className="text">Clear marketing plans and campaigns you can execute confidently</span>
                    </div>
                    <div className="points">
                        <BiBarChartAlt2 className="icon" />
                        <span className="text">Promotions that increase revenue instead of reducing profits</span>
                    </div>   
                    <div className="points">
                        <BiTrendingUp className="icon hike" />
                        <span className="text">Sustainable restaurant growth without wasting money on ineffective promotions</span>
                    </div>                 
                </div>
            </div>            

            <Link to="/contact">
            <button className="cta-btn-blue">Get your Free Restaurant Audit<img src="/arrow-right .svg" alt="" className='white-arrow' /></button>           
            </Link>



        </div>
    </div>
  )
}



