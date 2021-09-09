import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import HeroSection from './components/HeroSection';


export default function App() {
  return (
    <>
    <HeroSection/>
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
    </Router>
    </>
  );
}
