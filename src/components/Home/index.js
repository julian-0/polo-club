import React from 'react'
import { Link } from "wouter"
import logo from "../../logo-benquerencia-verde.png";

export default function Home() {
    return (
        <header className="App-header" >
            <h1>Benquerencia</h1>
            <img src={logo} className="App-logo" alt="logo" />

            <button>
                <Link to="/players">Players 🧑</Link>
            </button>
            <button>
                <Link to="/horses">Horses 🐎</Link>
            </button>
            <button>
                <Link to="/games">Games 📖</Link>
            </button>
            <button>
                <Link to="/newGame">New game</Link>
            </button>
        </header >
    )
}