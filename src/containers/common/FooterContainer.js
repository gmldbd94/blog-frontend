import React, { Component } from 'react';
import Footer from '../../components/common/Footer/Footer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BaseActions from '../../store/modules/base';

//쿠키 지우는 법
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

class FooterContainer extends Component{
  handleLoginClick = async () =>{
    const { BaseActions, logged } = this.props;
    console.log(logged);
    if(logged){
      try {
        deleteAllCookies();
        await BaseActions.logout();
        localStorage.logged = "false";
        localStorage.clear();
        // window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    BaseActions.showModal('login');
    BaseActions.initializeLoginModal();
  }

  handleLogoutClick = async () => {
    const { BaseActions, logged} = this.props;
    console.log(logged);
    await BaseActions.logout();
  }
  
  render(){
    const { handleLoginClick, handleLogoutClick } = this;
    const { logged } = this.props;
    return (
      <Footer onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick} logged={logged}/>
    );
  }
}

export default connect(
  (state) => ({
    logged: state.base.get('logged')
  }),
  (dispatch) => ({
    BaseActions: bindActionCreators(BaseActions, dispatch)
  })
)(FooterContainer)