import React, { Component } from 'react';
import PostInfo from '../../components/post/PostInfo';
import PostBody from '../../components/post/Postbody';
import * as postActions from '../../store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Post extends Component{
  initialize = async () => {
    const { PostActions, id } = this.props;
    try{
      await PostActions.getPost(id);
      console.log("개새기꺄", PostActions.getPost(id));
    }catch(e){
      console.log(e);
    }
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    const { loading, post } = this.props;
    if(loading) return null;
    console.log(post);
    const { title, content} = post.toJS();
    const writer = post.getIn(['writer', 'nick']) ;
    // const {writer} = post.map;
  
    return (
      <div>
        <PostInfo title={title} nick={writer} />
        <PostBody content={content}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    post: state.post.get('post'),
    loading: state.pender.pending['post/GET_POST']
  }),
  (dispatch) => ({
    PostActions : bindActionCreators(postActions,dispatch)
  })
)(Post);
