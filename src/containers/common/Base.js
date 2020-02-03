import React, { Component } from 'react';
import LoginModalContainer from '../modal/LoginModalContainer';
import SignUpModalContainer from '../modal/SignUpModalContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../store/modules/base';

class Base extends Component {
  initialize = async () => {
    const { BaseActions } = this.props;
    console.log("localStorage.currentUser", localStorage.currentUser);
    if(localStorage.logged === "true"){
      BaseActions.tempLogin();
    }
    BaseActions.checkLogin();
  }

  componentDidMount(){
    this.initialize();
  }

  render(){
    return (
      <div>
        <LoginModalContainer/>
        <SignUpModalContainer/>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(Base);