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
                    <li className="nav-item">
                    <Link className="nav-link" to="/Login-kzi-30">Login</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Registration-nta-52">Register</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/WaitList-kzi-30">Waitlist Sign-up</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/WaitListView-nta-52">Waitlist View</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )

}
export default NavBar;