import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Card />
            <Card />
        </div>
    )
}