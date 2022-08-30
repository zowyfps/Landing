import React from "react";
import logo from '../../logo.svg';
import './styles.css';
import CartWidget from "../CartWidget/CartWidget";


export const NavBar = () =>{
    return (
        <div classname="navBar-container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">
                        <img width={'100px'} src={logo} alt="logo" />
                    </a>

                </div>
                <ul classname="nav_list">
                    <li>
                        <a className="nav_link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Contact</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                            <CartWidget />
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    );
}
export default NavBar;