import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home"
import About from './components/About/About';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">Home2</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetail></PostDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
