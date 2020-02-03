import React from 'react';
import PageTemplate from '../components/common/PageTemplate/PageTemplate';
import Post from '../containers/post/Post';
import Postinfo from '../components/post/PostInfo';
import Postbody from '../components/post/Postbody';
import PostComment from '../components/post/PostComment';
const PostPage = ({match}) => {
  const { id } = match.params;
  console.log(id);
  return (
    <PageTemplate>
      <Post id={id}/>
    </PageTemplate>
  )
};

export default PostPage;