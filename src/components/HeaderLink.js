import React from "react";      


function HeaderLink(props) {
    return (
        <li className="uppercase-text underline-on-hover"><a href={`#${props.destination}`}>{props.linkName}</a></li>
    )

}


export default HeaderLink;