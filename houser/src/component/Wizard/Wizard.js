import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZipcode,
  postRequest
} from "./../../ducks/wizardReducer";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      updater: ""
    };
  }
  render() {
    const { wizardReducer } = this.props;
    var { state, city, zipcode, address, name } = this.props.wizardReducer;
    console.log(this.state.updater);
    var reqbody = { name: this.state.updater, id: this.state.id };
    return (
      <div>
        <input
          placeholder="name"
          onChange={e => this.props.updateName(e.target.value)}
        />
        <input
          placeholder="address"
          onChange={e => this.props.updateAddress(e.target.value)}
        />
        <input
          placeholder="city"
          onChange={e => this.props.updateCity(e.target.value)}
        />
        <input
          placeholder="state"
          onChange={e => this.props.updateState(e.target.value)}
        />
        <input
          placeholder="zipcode"
          onChange={e => this.props.updateZipcode(e.target.value)}
        />
        <button
          onClick={() =>
            this.props.postRequest(name, address, city, state, zipcode)
          }
        >
          Submit form
        </button>
        <input
          placeholder="id"
          onChange={e => this.setState({ id: e.target.value })}
        />
        <button
          onClick={() => axios.delete(`/api/deleteform/${this.state.id}`)}
        >
          this button deletes form DB
        </button>
        <input onChange={e => this.setState({ updater: e.target.value })} />
        <button onClick={() => axios.put("/api/editdata", reqbody)}>
          this button updates the db
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZipcode,
  postRequest
})(Wizard);
