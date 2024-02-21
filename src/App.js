import React from "react";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const user = null;
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
