import React, { Component } from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
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
    <Nav>
        <h1>Microsoft Learn Student Ambassadors</h1>
        <NavItem>Home Page</NavItem>
        <NavItem>About Page</NavItem>
    </Nav>
)