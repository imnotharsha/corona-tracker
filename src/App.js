import React from 'react';
import { connect } from 'react-redux';
import 'react-bootstrap/dist/react-bootstrap.min.js';
import Navbar from './components/Navbar';
import Body from './components/Body';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Body />
    </div>
  );
}

export default connect()(App);
