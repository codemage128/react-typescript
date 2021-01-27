import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Jumbotron, Button } from 'reactstrap';
import Display from './Display';

function App() {
  return (
    <>
      <Jumbotron>
        <h1 className="display-3 text-center">Welcome to react app.</h1>
      </Jumbotron>
      <div className="container">
        <Display />
      </div>
    </>
  );
}

export default App;
