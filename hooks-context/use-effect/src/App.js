import React, {useState} from 'react';
import './App.css';
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [info, setInfo] = useState({})
  return (
    <div className="App container">
        <div className="row mt-4">
            <div className="col-6">
                <List setInfo={setInfo} />
            </div>
            <div className="col-6">
                <Details info={info} />
            </div>
        </div>
    </div>
  );
}

export default App;
