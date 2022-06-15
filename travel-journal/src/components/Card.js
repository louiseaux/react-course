import React from "react"
import logo from "../images/map-icon.png"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={props.imageUrl}
                alt="card cover"
                className="card--image"
            />
            <div className="card--details">
                <div className="card--header">
                    <img src={logo} alt="" className="card--icon"/>
                    <h2 className="card--location">{props.location}</h2>
                </div>
                {/* <link href={props.googleMapsUrl}>View on Google Maps</link> */}
                <h1 className="card--title">{props.title}</h1>
                <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                <p className="card--description">{props.description}</p>
            </div>
            {/* <hr /> */}
        </div>
    )
}