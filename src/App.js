import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./components/Post";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/post/:id" children={<Post />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
