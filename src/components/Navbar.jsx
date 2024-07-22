import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/'}>Home Page</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar