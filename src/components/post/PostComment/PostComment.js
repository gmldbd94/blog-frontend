import React from 'react';
import styles from './PostComment.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Comment = () => (
  <div className={cx('CommentInfo')}>
    <div className={cx('Comment')}>
      댓글내용/작성자/작성일시
    </div>
  </div>
)
const PostComment = () => (
  <div className={cx('commentWrapper')}>
    <div>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  </div>
)
export default PostComment;