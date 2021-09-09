import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
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
