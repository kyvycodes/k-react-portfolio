import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
    <Router>
      <NavMenu/>

      <Switch>
      <Route path='/'>
      <Home/>
      </Route>
      <Route path='/about'>
        <About/>
        </Route>
      <Route path='/contact'>
      <Contact/>
        </Route>
        <Route path='/projects'>
        <Projects/>
        </Route>
        </Switch>
        <Footer />
    </Router>
    </>
  );
}
