import React from 'react';
import styles from './Postbody.scss';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Postbody = ({content}) => (
  <div className={cx('post-body')}>
    <div className={cx('paper')}>
      {content}
    </div>
  </div>
)

export default Postbody;