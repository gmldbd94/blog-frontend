import React from 'react';
import styles from './PageTemplate.scss'
import classNames from 'classnames/bind';
import HeaderContainer from '../../../containers/common/HeaderComtainer';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import FooterContainer from '../../../containers/common/FooterContainer';

//className을 사용할 때 styles.클래스를 간단하게 클래스만 쓸수 있도록 해준다.
const cx = classNames.bind(styles);
const PageTemplate = ({children}) => (
  <div className={cx('page-template')}>
    <HeaderContainer/>
    <main>
      {children}
    </main>
    <FooterContainer/>
  </div>
);

export default PageTemplate;
  

