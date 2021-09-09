import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Contacts from './components/Contact';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
    <Router>
      <NavMenu/>
      <About/>
      <Home/>
      <Contacts/>
      <Projects/>
    </Router>
    </>
  );
}
