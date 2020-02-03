import React, { Component } from 'react';
import SignUpModal from '../../components/modal/SignUpModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../store/modules/base';

class SignUpModalContainer extends Component{
  handleSignUp = async () => {
    const { BaseActions, email, password, name } = this.props;
    try{
      await BaseActions.signup(email, password, name);
      BaseActions.hideModal('signup');
      localStorage.logged = "true";
    } catch(e){
      console.log(e);
    }
  }
  handleClickLogin = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('signup');
    BaseActions.showModal('login');
  }
  
  handleCancel = () => {
    const {BaseActions} = this.props;
    BaseActions.hideModal('signup');
  }

  handleChange_email = (e) => {
    console.log(e.target.name);
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeEmailInput( value )
  }
  handleChange_password = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value)
  }
  handleChange_name = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeNameInput(value);
  }

  handleKeyPress = (e) => {
    // 엔터키가 눌리면 로그인 호출
    if(e.key === 'Enter') { 
      this.handleSignUp();
    }
  }
  
  render() {
    const { 
      handleSignUp, handleCancel, handleChange_email, handleChange_password, handleChange_name, handleKeyPress
    } = this;
    const { visible, error, password, email, name } = this.props;
    console.log("signupContainer", this.props);
    return(
      <SignUpModal 
      onSignup={handleSignUp} onCancel={handleCancel}
      onChange_email={handleChange_email} onChange_password={handleChange_password} onChange_name={handleChange_name}
      onKeyPress={handleKeyPress}
      onLogin={this.handleClickLogin}
      visible={visible} error={error} password={password} email={email} name={name}/>
    )
  }
}

export default connect(
  (state) => ({
    visible: state.base.getIn(['modal', 'signup']),
    email: state.base.getIn(['loginModal', 'email']),
    password: state.base.getIn(['loginModal', 'password']),
    name: state.base.getIn(['loginModal', 'name']),
    error: state.base.getIn(['loginModal', 'error'])
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(SignUpModalContainer);