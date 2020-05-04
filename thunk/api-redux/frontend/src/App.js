import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from './store'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import ServiceEdit from "./components/ServiceEdit";

function App() {
  return (
      <Provider store={store}>
          <div className="container">
              <Router>
                  <Route exact path="/">
                      <Redirect to="/services" />
                  </Route>
                  <Route exact path="/services">
                      <ServiceList />
                  </Route>
                  <Route exact path="/services/:id" render={props => <ServiceEdit {...props} />} />
                  <Route exact path="/services/api/add" render={props => <ServiceAdd {...props} />} />
              </Router>
          </div>
      </Provider>

  );
}

export default App;
