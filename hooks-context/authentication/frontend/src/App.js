import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="container">
          <Navbar />
          <div className="row justify-content-md-center mt-3">
              <div className="jumbotron col-md-6">
                  <h1 className="display-4">Neto Social</h1>
                  <p className="lead">Facebook and VK killer</p>
              </div>
          </div>
      </div>
  );
}

export default App;
