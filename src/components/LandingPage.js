import React from "react";
import landingImage from '../images/treatmentroom1.jpg'
import logo from '../images/JTreatLogos.png'
import pin from '../images/pin.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import "../css/LandingPage.css"

const style = {
    backgroundImage: `url(${landingImage})`,
    backgroundColor: "black"
}

function LandingPage() {
    return (
        <div className="landingPage">
            <div style={style} className="backgroundImage" ></div>
            <div className="landingText">
                <div className="uppercase-text">
                    <span className="red">Rehabilitation </span><span>/ Massage</span>
                </div>
                <img className="logo" src={logo} alt="" />
                <p>Offering soft & deep tissue massages, theraputic massages, myofascial cupping therapy and sport
                    specifc rehabilitation plans.
                </p>

                <a href="#booking"><button>Make appointment</button></a>
            </div>
            <div className="landingLinks">
                <div className="landingSocials">
                    <a href="https://www.facebook.com/JtreatPR/" target="_blank" rel="noreferrer" ><img className="svg" src={facebook} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/jtreat_/" target="_blank" rel="noreferrer" ><img className="svg" src={instagram} alt="Instagram" /></a>
                </div>
                <div className="landingAddress">
                    <img className="svg red" src={pin} alt="" />
                    <span>Exert Fitness, Abercarn, Newport NP11 5AR</span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;