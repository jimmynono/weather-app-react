import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import CityDetails from './components/city-details';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {


  render() {
      return (
        <Router>
          <div className="App">
            <Provider store={store}>
              <div>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/details/:id" component={CityDetails} />
                <Footer />
              </div>
            </Provider>
          </div>
        </Router>
      );
  }
}

export default App;
