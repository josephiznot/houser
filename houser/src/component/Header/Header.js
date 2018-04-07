import React from "react";
import "./Header.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header(props) {
  var { header } = props.reducer;
  // console.log(props);
  return (
    <header>
      {header}
      <Link to="/">
        <button>Cancel</button>
      </Link>
      <Link to="/wizard">
        <button>Add new property</button>
      </Link>
    </header>
  );
}
const mapStateToProps = state => state;
export default connect(mapStateToProps)(Header);
