import React, { Component } from 'react';
import MainComponent from '../components/MainComponent'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg offset-4">
            <div className="login-container">
              <MainComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
