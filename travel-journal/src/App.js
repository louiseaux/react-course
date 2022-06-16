import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <div>
                <Card
                    key={item.id}
                    {...item}
                />
                { item.id !== data.length && <hr className="card--div"/>}
            </div>
        )
    })
    
    return (
        <div className="container">
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}