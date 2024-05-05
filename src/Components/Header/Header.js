import React from 'react';
import "./Header.css";
import{
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
   
} from "reactstrap";
import Logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Navigation'>
        <Navbar style = {{
            backgroundColor:"#D70F64",
            height:"70px"
        }}>
            <NavbarBrand href = '/' className = "mr-auto ml-md-5 Brand">
                <img src = {Logo} alt = "Logo" width = "80px"/>
            </NavbarBrand>
            <Nav className= "mr-md-5">
                <NavItem>
                    <NavLink to= "/" className="Navlink">Burger Builders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to= "/order" className="Navlink">Orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to= "/login" className="Navlink">Login</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  )
}

export default Header;