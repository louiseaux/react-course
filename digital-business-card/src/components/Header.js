import React from "react"
import headshot from "../images/headshot.png"

export default function Header() {
    return (
        <header>
            <img src={headshot} alt="Professional headshot of Laura Smith"/>
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>

            <button>Email</button>
            <button>LinkedIn</button>
        </header>
    )
}