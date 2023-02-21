import React from "react";
import "../css/About.css"
import jack from "../images/jack.jpg"

function About() {
    return (
        <>
            <img src={jack} alt="jack" />
            <div className="text">
                <h3>Jack Morris</h3>
                <p>I'm Jack Morris, a fully qualified physiotherapist, keen rugby player
                    and cyclist and I understand first hand the skeletal system in relation to
                    exercise and physical activity.</p>
            </div>
            <div className="qualifications text">
                <h3>Qualifications</h3>
                <p className="uppercase-text">Sports Conditioning, Rehabilitation and Massage, BSc (Hons)</p>
                <p className="uppercase-text">ITEC certified Sports Massage Therapist.</p>
            </div>
        </>

    )
}

export default About;