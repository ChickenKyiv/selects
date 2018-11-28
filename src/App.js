import React, { Component } from 'react';

import ExampleView from './components/SearchForm/ExampleView';

// import SearchForm from './components/SearchForm/SearchForm'

import logo from './logo.svg';
// import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        <ExampleView />
      </div>
    );
  }
}

export default App;
