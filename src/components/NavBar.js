import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Singers from './singers'
import Albums from './albums'
import Home from './home'


export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" style={{ marginLeft: "20px" }}>Music Player</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                            <Link to="/" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Home</a></Link>
                            <Link to="/singers" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Singers</a></Link>
                            <Link to="/albums" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Albums</a></Link>



                    </div>
                </div>
            </nav>
        </div>
    )
}