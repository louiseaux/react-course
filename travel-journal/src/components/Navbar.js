import React from "react"
import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--icon" />
            <h1 className="nav--title">my travel journal.</h1>
        </nav>
    )
}