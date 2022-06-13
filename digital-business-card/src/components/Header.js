import React from "react"
import headshot from "../images/headshot.png"

export default function Header() {
    return (
        <header>
            <img src={headshot} alt="Professional headshot of Laura Smith" className="header--headshot"/>
            <h1 className="header--name">Laura Smith</h1>
            <h2 className="header--title">Frontend Developer</h2>
            <h3 className="header--website">laurasmith.website</h3>

            <div className="header--buttons">
                <button id="email-btn">Email</button>
                <button id="linkedin-btn">LinkedIn</button>
            </div>
        </header>
    )
}