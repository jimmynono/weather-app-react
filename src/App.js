import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Header from './components/header'

class App extends Component {


  render() {
      return (
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      );
  }
}

export default App;
