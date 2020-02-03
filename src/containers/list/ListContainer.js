import React, { Component } from 'react';
import PostList from '../../components/list/PostList';
import Pagination from '../../components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../../store/modules/list';

class ListContainer extends Component{
  getPostList = async () => {
    const { page, ListActions } = this.props;
    console.log(this.props);
    try{
      await ListActions.getPostList(page);
    }catch(e){
      console.log(e);
    }
  }
  componentDidMount(){
    this.getPostList();
  }

  componentDidUpdate(prevProps, preState) {
    if(prevProps.page !== this.props.page){
      this.getPostList();
      document.documentElement.scrollTop = 0;
    }
  }

  render(){
    const { loading, posts, page, count } = this.props;
    console.log("데이터 넘어왔냐?",posts);
    if(loading) return <div>로딩중</div>;
    return (
      <div>
        <PostList posts={posts}/>
        <Pagination page={page} lastPage={count} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    lastPage: state.list.get('lastPage'),
    posts: state.list.get('posts'),
    loading: state.pender.pending['list/GET_POST_LIST']
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer);