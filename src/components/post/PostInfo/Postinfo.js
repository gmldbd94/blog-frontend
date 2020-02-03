import React from 'react';
import styles from './Postinfo.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Postinfo = ({title, nick}) => (
  <div className={cx('post-info')}>
    <div className={cx('title')}>
      <h1>{title}</h1>

      <div className={cx('date')}>Oct 29, 2017 {nick}</div>
    </div>
  </div>
)

export default Postinfo;