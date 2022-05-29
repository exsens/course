import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from './profile.jsx';

export class ProfileContainer extends Component {


  render() {
    return <Profile />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
