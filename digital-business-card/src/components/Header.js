import React from "react"
import headshot from "../images/headshot.png"

export default function Header() {
    return (
        <img src={headshot} alt="Professional headshot of Laura Smith" className="header--headshot"/>
    )
}