import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const TopBarContainer = () => {

    return (
        <TopBar color="light" light>
            <NavbarBrand href="/">
                <Image src={logo} />
            </NavbarBrand>
        </TopBar>
    )
}

const Image = styled.img`
    height: auto;
    width: 200px;
`;

const TopBar = styled(Navbar)`
    display: flex;
    justify-content: center;
`;

export default TopBarContainer;