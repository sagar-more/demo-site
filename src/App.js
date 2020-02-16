import React from 'react';
import { Provider } from "react-redux";
import StoreProvider from "./store/storeProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import Home from "./components/Home";
import Teams from "./components/Teams";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Provider store={StoreProvider} >
      <Router>
        <Nav activeKey="/" >
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/team">Teams</Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/team">
            <Teams></Teams>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
