import React, { Component } from 'react'
import styled from 'styled-components'

const Centre = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
`

const Card = styled.div`
margin: 2rem 20rem;
height: 75px;
background-color: inherit;
border-radius: 20px;
padding: 2rem;
text-align: center;
`

export default () => (
    <div>
        <Centre><h1>Contact Us Today!!</h1></Centre>
        <Centre><iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.102913256256!2d77.18513756977538!3d28.561481900000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d882fb456d9%3A0xa1c7a347656bfe65!2sClub%2069!5e0!3m2!1sen!2sin!4v1604953067110!5m2!1sen!2sin"></iframe></Centre>
        <Card className="invert"><strong>Visit our offices today! </strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card>
    </div>
    
)