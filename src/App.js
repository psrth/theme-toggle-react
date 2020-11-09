import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import Navbar from "./components/Navbar.js"
import Home from "./Home.js"
import Contact from "./Contact.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./components/Footer"

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Toggle = styled.div `
  display: flex;
  justify-content: center;
`
const Button = styled.button `
  background-color: inherit;
  border-radius: 15px;
  border: 1px solid white;
  color: inherit;
  font-size: 1rem;
  margin: 1em 1em;
  padding: 1rem;
`

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar />
        <Toggle><Button className="invert" onClick={() => themeToggler()}><strong>Change Theme</strong></Button></Toggle>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>

        <Footer />
      </StyledApp>
    </ThemeProvider>
    </Router>
  );
}

export default App;