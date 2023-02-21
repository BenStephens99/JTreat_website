import React from "react";
import '../css/Booking.css'

function Booking() {
    return (
        <>
            <div className="booking-option">
                <h3 className="uppercase-text">25 Minute Consultation</h3>
                <p>£12.50</p>
                <a href="https://calendly.com/jtreat_/25min?hide_gdpr_banner=1&primary_color=ff0004&back=1&month=2023-02" target="_blank"><button>Book</button></a>
            </div>
            <div className="booking-option">
                <h3 className="uppercase-text">50 Minute Consultation</h3>
                <p>£19.50</p>
                <a href="https://calendly.com/jtreat_/25min?hide_gdpr_banner=1&primary_color=ff0004&back=1&month=2023-02" target="_blank"><button>Book</button></a>
            </div>
        </>
    )
}

export default Booking;