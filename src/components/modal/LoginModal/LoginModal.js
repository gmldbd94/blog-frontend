import React from 'react';
import styles from './LoginModal.scss';
import classNames from 'classnames/bind';
import ModalWrapper from '../ModalWrapper';

const cx = classNames.bind(styles);

const LoginModal = ({
  visible,
  email, 
  password, 
  error, 
  onCancel, 
  onLogin, 
  onChange_email, 
  onChange_password, 
  onKeyPress, 
  onSignUp
}) => (
  <ModalWrapper visible={visible}>
    <div className={cx('form')}>
      <div onClick={onCancel} className={cx('close')}>&times;</div>
      <div className={cx('title')}>로그인</div>
      
      <input autoFocus type="email" placeholder="이메일 입력" value={email} onChange={onChange_email} onKeyPress={onKeyPress}/>
      <input autoFocus type="password" placeholder="비밀번호 입력" value={password} onChange={onChange_password} onKeyPress={onKeyPress}/>
      { error && <div className={cx('error')}>로그인 실패</div> }
      <div className={cx('login')} onClick={onLogin}>로그인</div>
      <div className={cx('signUp')} onClick={onSignUp}>
          회원가입
      </div>
    </div>
  </ModalWrapper>
);

export default LoginModal;