import React from 'react'
import styled from 'styled-components'
import '../styles/Navbar.css'

type divProps = {
    backgroundColor : string,
}

const StyledPageDiv = styled.div<divProps>`
    background-color: ${props => props.backgroundColor};
    width: 100vw;
    height: 100vh;
    padding-top: var(--navbar-height);
`;

export default StyledPageDiv