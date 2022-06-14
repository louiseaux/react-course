import React from "react"
import emailIcon from "../images/email-icon.png"
import linkedinIcon from "../images/linkedin-icon.png"

export default function Main() {
    return (
        <main>
            <h1 className="main--name">Laura Smith</h1>
            <h2 className="main--title">Frontend Developer</h2>
            <h3 className="main--website">laurasmith.website</h3>

            <div className="main--buttons">
                <button id="email-btn">
                    <img src={emailIcon} alt="" className="icon"/>
                    Email
                </button>
                <button id="linkedin-btn">
                    <img src={linkedinIcon} alt="" className="icon"/>
                    LinkedIn
                </button>
            </div>

            <div className="details">
                <h4 className="main--about">About</h4>
                <p className="main--description">
                    I am a frontend developer with a particular interest in
                    making things simple and automating daily tasks. I try
                    to keep up with security and best practices, and am
                    always looking for new things to learn.
                </p>

                <h4 className="main--interests">Interests</h4>
                <p className="main--description">
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
                    Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
            
        </main>
    )
}