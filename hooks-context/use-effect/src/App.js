import React, {useState} from 'react';
import './App.css';
import List from "./components/List";
import Details from "./components/Details";
import Context from "./Context";

function App() {
    const [info, setInfo] = useState({});
    return (
        <Context.Provider value={{info, setInfo}}>
            <div className="App container">
                <div className="row mt-4">
                    <div className="col-6">
                        <List />
                    </div>
                    <div className="col-6">
                        <Details />
                    </div>
                </div>
            </div>
        </Context.Provider>
    );
}

export default App;
