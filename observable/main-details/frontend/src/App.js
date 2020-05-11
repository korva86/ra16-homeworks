import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ServiceList from "./components/ServiceList";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <Router>
                  <Route exact path="/">
                      <ServiceList />
                  </Route>
                  <Route exact path="/:id/services" render={props => <ServiceDetails {...props} />} />
              </Router>
          </div>
      </Provider>

  );
}

export default App;
