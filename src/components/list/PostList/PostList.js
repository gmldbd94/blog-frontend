import React from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const PostItem = ({title, content, wirterId, createdAt,id}) => {
  return (
    <div className={cx('post-item')}>
      <Link to={`/post/show/${id}`}>
        <h2>{title}</h2><span>{wirterId}</span>
        <div className={cx('date')}>{createdAt}</div>
        <p>{content}</p>
      </Link>
    </div>
  )
}
const PostList = ({posts}) => {
  const postList = posts.map(
    (post) => {
      const { id, title, content, createdAt, writerId} = post.toJS();
      console.log(post.toJS());
      return (
        <PostItem
          title={title}
          conten={content}  
          writerId={writerId}
          createdAt={createdAt}
          id={id}
          key={id}
        />
      );
    }
  );
  return(
  <div className={cx('post-list')}>
      {postList}
    </div>
  );  
}

export default PostList;