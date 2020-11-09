import React, { Component } from 'react'
import styled from 'styled-components'

const FormP = styled.div`
width:60%;
display: flex;
    align-items: center;
    justify-content: center;
`

export default () => (
    <FormP>
        <h1>fill in form</h1><br></br>
        <p>Please fill in this form to create an account.</p>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required></input>
        <button type="submit" class="signupbtn">Sign Up</button>
    </FormP>
    
)