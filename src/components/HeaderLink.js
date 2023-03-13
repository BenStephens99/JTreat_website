import React from "react";      


function HeaderLink(props) {
    return (
        <span className="uppercase-text underline-on-hover"><a href={`#${props.destination}`}>{props.linkName}</a></span>
    )

}


export default HeaderLink;