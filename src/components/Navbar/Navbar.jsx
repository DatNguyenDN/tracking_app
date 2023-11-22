import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/image/logo1.png";
import "./Navbar.css";
const Navbar = () => {
    const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click);
    };
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to='/home' className="nav-logo">
                        <img src={logo} alt="logo" />         
                </Link>

                
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link 
                                to='/home'
                                activeclassname="active"
                                className="nav-link-item"
                                onClick={handleClick}
                            >
                                Home              
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to='/track-price'
                                activeclassname="active"
                                className="nav-link-item"
                                onClick={handleClick}
                            >
                                Track Price              
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                to='/my-tracking'
                                activeclassname="active"
                                className="nav-link-item"
                                onClick={handleClick}
                            >
                                My Tracking              
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                to='/about'
                                activeclassname="active"
                                className="nav-link-item"
                                onClick={handleClick}
                            >
                                About              
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                to='/contact'
                                
                                className="nav-link-item"
                                onClick={handleClick}
                            >
                                Contact              
                            </Link>
                        </li>
                    </ul>
                
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
                    {/* <i className="fas fa-times"> </i> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
