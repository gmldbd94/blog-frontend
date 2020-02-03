import React from 'react';
import styles from './SignUpModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper';

const cx = classNames.bind(styles);

const SignUpModal = ({
  visible,
  email, 
  password,
  name, 
  error, 
  onCancel, 
  onLogin, 
  onSignup,
  onChange_email,
  onChange_password,
  onChange_name, 
  onKeyPress
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>회원가입</div>
      
      <input autoFocus type="email" placeholder="이메일 입력" value={email} onChange={onChange_email} onKeyPress={onKeyPress}/>
      <input autoFocus type="password" placeholder="비밀번호 입력" value={password} onChange={onChange_password} onKeyPress={onKeyPress}/>
      <input autoFocus type="name" placeholder="이름 입력" value={name} onChange={onChange_name} onKeyPress={onKeyPress}/>
      { error && <div className={cx('error')}>회원가입 실패</div> }
      <div className={cx('login')} onClick={onSignup}>회원가입</div>
      <div onClick={onLogin} className={cx('signUp')}>로그인</div>
    </div>
  </ModalWrapper>
);

export default SignUpModal;