import React from 'react';
import './App.css';

import Data from "./components/Data";

function App() {
  return (
    <div className="App">
        <Data url={"/data"} />
        <Data url={"/error"} />
        <Data url={"/loading"} />
    </div>
  );
}

export default App;
