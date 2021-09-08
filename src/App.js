import React from 'react';
import NavMenu from './components/NavMenu';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      <NavMenu/>
    </Router>
    </>
  );
}
