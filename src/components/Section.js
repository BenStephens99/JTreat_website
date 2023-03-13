import React from "react";
import "../css/Section.css"

function Section(props) {

    function TitlePresent () {
        if(props.sectionTitle !== undefined) {
            return <h2 className="section-title">{props.sectionTitle}</h2>
        } else return;
    }

    return (
        <div id={props.id} className={`section ${props.className}`}>
            <TitlePresent />
            <div className="section-content">
                {props.sectionContent}
            </div>
        </div>

    )
}

export default Section;