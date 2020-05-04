import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store'
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <ServiceAdd />
              <ServiceList />
          </div>
      </Provider>

  );
}

export default App;
