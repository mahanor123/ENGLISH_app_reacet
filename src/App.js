import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login' 
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import Menu from './components/Heding';
import NormalLoginForm from './components/login';
import Verb  from './components/verb';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import DataType from './components/data';
import './App.css'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Menu} /> 
      <Route path="/login" component={NormalLoginForm} />
      <Route path="/verb" component={Verb} />
      <Route path="/test" component={DataType}/>
      </div>
      </Router>
    );
  }
}

export default App;




// komal
// pooja
// nilem