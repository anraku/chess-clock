import React from 'react';
import { ClockContext } from './context/ClockContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home'
import Play from './page/Play'
import './App.css';

function App() {
  return (
    <ClockContext.Provider value={600}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/play" component={Play} exact />
          </Switch>
        </Router>
      </div>
    </ClockContext.Provider>
  );
}

export default App;
