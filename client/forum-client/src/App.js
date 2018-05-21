import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm'

class App extends Component {
  render() {
    return (   
<div className="container">
  <div className="row">
    <div className="col-lg offset-4">
  <div className="login-container">
      <LoginForm/>
    </div>    
    </div>
  </div>
</div>
    );
  }
}

export default App;
