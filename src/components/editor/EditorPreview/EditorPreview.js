import React, { Component } from 'react';
import styles from './EditorPreview.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorPreview = ({title, content}) => (
  <div className={cx('preview-pane')}>
  <h1 className={cx('title')}>
    {title}
  </h1>
  <div>
    {content}
  </div>
</div>
);

export default EditorPreview;