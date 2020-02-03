import React, { Component } from 'react';
import LoginModal from '../../components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from '../../store/modules/base';

class LoginModalContainer extends Component {

  //handelLogin 함수 정의
  handleLogin = async () => {
    const { BaseActions, email, password } = this.props;
    console.log("handleLogin", this.props);
    try {
      // 로그인 시도, 성공 시 모달 닫기
      await BaseActions.login(email, password);
      BaseActions.hideModal('login');
      localStorage.logged = "true";
      localStorage.currentUser = "gmldbd@naver.com";
      console.log(localStorage);
    } catch (e) {
      console.log("로그인 실패")
      console.log(e);
    }
  }
  handleClickSignUp = async () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
    BaseActions.showModal('signup');
  }
  handleCancel = () => {
    const { BaseActions } = this.props;
    BaseActions.hideModal('login');
  }
  
  handleChange_email = (e) => {
    
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changeEmailInput(value);
  }
  handleChange_password = (e) => {
    const { value } = e.target;
    const { BaseActions } = this.props;
    BaseActions.changePasswordInput(value);
  }
  
  handleKeyPress = (e) => {
    // 엔터키가 눌리면 로그인 호출
    if(e.key === 'Enter') { 
      this.handleLogin();
    }
  }
  render() {
    const { 
      handleLogin, handleCancel, handleChange_email, handleChange_password, handleKeyPress
    } = this;
    const { visible, error, password, email } = this.props;
    console.log("logincontainer",this.props);
    return (
      <LoginModal
        onLogin={handleLogin} onCancel={handleCancel}
        onChange_email={handleChange_email} onChange_password={handleChange_password}
        onKeyPress={handleKeyPress}
        onSignUp={this.handleClickSignUp}
        visible={visible} error={error} password={password} email={email}
      />
    );
  }
}

export default connect(
  (state) => ({
    //깊숙한 값을 불러올 때 getIn을 사용한다.
    visible: state.base.getIn(['modal', 'login']),
    email: state.base.getIn(['signupModal', 'email']),
    password: state.base.getIn(['signupModal', 'password']),
    error: state.base.getIn(['signupModal', 'error'])
  }),
 (dispatch) => ({
    BaseActions: bindActionCreators(baseActions, dispatch)
  })
)(LoginModalContainer);