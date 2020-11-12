import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; {new Date().getFullYear()} Space</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    padding: 30px 0;
    text-align: right;
`;

export default Footer;