import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
margin: 2rem 20rem;
height: 75px;
background-color: inherit;
border-radius: 20px;
padding: 3rem;
`
const Centre = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
`

export default () => (
    <div>
        <Centre><h1>Welcome to MSLA</h1></Centre>
        <Card className="invert"><strong>The Microsoft Student Learn Ambassadors (formerly called Microsoft Student Partners) is a worldwide recognizable program to sponsor students majoring in disciplines related to technology. The MSP program enhances students' employability by offering training in skills not usually taught in academia, including knowledge of Microsoft technologies.</strong></Card>
        <Card className="invert"><strong>The program is available in most countries, and all students in college and university level are eligible to apply. If accepted, Student Partners are assumed to further share the knowledge among the academic community by, for example, arranging courses, giving presentations and initiating projects.</strong></Card>
        <Card className="invert"><strong>The MSP(now MSLA) program was initiated in 2001, and operated in 15 countries for five years. In late 2006, the program was expanded to 50 countries worldwide,[3] and as of July 2010, there are more than 2800 members worldwide across 101 countries and regions. The MSP program enhances students' employability by offering training in skills not usually taught in academia.</strong></Card>
    </div>
    
)