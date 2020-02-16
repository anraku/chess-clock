import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home'
import Play from './page/Play'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/play" component={Play} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
