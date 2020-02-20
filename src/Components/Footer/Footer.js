import React from 'react';
import styled from 'styled-components';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Space</p>
        </footer>
    )
}

export default Footer;