import React from "react";
import { Link } from "react-router-dom"

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">VCU</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/MainPage">Main Page</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Login-FEATURE-kzi-30">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Register">Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/ModifyRoom-FEATURE-kzi-30">Modify Room</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/WaitList-FEATURE-kzi-30">Waitlist</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )

}
export default NavBar;