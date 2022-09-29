import React from "react";
import logo from '../../logo.svg';
import './styles.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


export const NavBar = () =>{
    return (
        <div classname="navBar-container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'>UnderClub</NavLink>
                        <img width={'100px'} src={logo} alt="logo" />
                </div>
                    <ul classname="nav_list">
                    <li>
                    <NavLink className="nav_link" to='/category/Techno'>Techno</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav_link" to='/category/Melodic'>Melodic</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav_link" to='cart'>Cart</NavLink>
                            <CartWidget />
                        
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;