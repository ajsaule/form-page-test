import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <nav>
            <h1>LOREM IPSUM</h1>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/about" component={About} /> 
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
