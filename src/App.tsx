import React, { useState } from 'react';
import { ClockContext } from './context/ClockContext'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home'
import Play from './page/Play'
import './App.css';

function App() {
  const [second, setSecond] = useState(600)
  return (
    <ClockContext.Provider value={{ second, setSecond }}>
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
