import React from "react";
import "../css/Header.css"
import HeaderLink from "./HeaderLink";
import { useState } from "react";


function Header() {

    const [menuState, setMenuState] = useState("closed")

    function toggleMenu () {
        setMenuState(menuState === "open" ? "closed" : "open")
    }

    return (
        <header className={menuState}>
            <div className={`nav-icon ${menuState}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <HeaderLink linkName="About me" destination="about" />
            <HeaderLink linkName="Booking" destination="booking" />
            <HeaderLink linkName="Contact" destination="contact" />
            <HeaderLink linkName="Find us" destination="find" />
        </header>
    )
}

export default Header;