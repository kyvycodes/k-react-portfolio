import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppStyle = styled.div`
// background-color: #f8f9d2;
// // background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
// background-color: #fba8a4;
// background-image: linear-gradient(315deg, #fba8a4 0%, #dad2f3 74%);
background-color: #f7f5f2
`

export default function App() {
  return (
    <AppStyle>
    {/* <HeroSection/> */}
    <Router>
      <NavMenu/>
      <Switch>
      <Route path='/about'>
        <About/>
        </Route>
      <Route path='/contact'>
      <Contact/>
        </Route>
        <Route path='/projects'>
        <Projects/>
        </Route>
        <Route path='/'>
      <Home/>
      </Route>
        </Switch>
        <Footer />
    </Router>
    </AppStyle>
  );
}
