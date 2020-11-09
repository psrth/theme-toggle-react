import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Nav = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    margin: 6rem 0 0 0;
    background-color: inherit;
    align-items: center;
    justify-content: center;
`
export default () => (
    <Nav className="invert">
        <p><strong>Made with love by @psrth</strong></p>
    </Nav>
)