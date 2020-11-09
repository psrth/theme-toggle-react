import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Nav = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    background-color: inherit;
    align-items: center;
    justify-content: center;
`

const NavItem = styled.a`
    text-decoration: underline;
    margin: 0 0  0 80px;
    font-size: 18px;
    font-weight: 600;
    color: inherit;
    cursor: pointer;
`

export default () => (
    <Nav className="invert">
        <h1>Microsoft Learn Student Ambassadors</h1>
        <Link to="/">
            <NavItem className="invert">Home Page</NavItem>
        </Link>
        <Link to="/contact">
            <NavItem className="invert">Contact Us</NavItem>
        </Link>
    </Nav>
)