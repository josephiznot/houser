import React, { Component } from "react";

import "./App.css";

import Wizard from "./component/Wizard/Wizard";
import Header from "./component/Header/Header";
import routes from "./routes";
import { connect } from "react-redux";
import { getRequest } from "./ducks/wizardReducer";

class App extends Component {
  componentDidMount() {
    getRequest();
  }
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, { getRequest })(App);
