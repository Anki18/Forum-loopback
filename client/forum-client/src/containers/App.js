import React, { Component } from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MainComponent from '../components/MainComponent';
import Navbar from './Navbar';
import { forumActions } from "../actions";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg offset-4">
            <div className="login-container">
              <MainComponent  {...this.props} />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    forum: state.Forum
  };
}

function matchDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Object.assign({}, forumActions), dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);