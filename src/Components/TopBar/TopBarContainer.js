import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import logo from '../../assets/logo.png';
import './TopBarContainer.css';

const TopBarContainer = () => {
    return (
        <Navbar id="top-bar" color="light" light>
            <NavbarBrand href="/">
                <img src={logo} />
            </NavbarBrand>
        </Navbar>
    )
}

export default TopBarContainer;