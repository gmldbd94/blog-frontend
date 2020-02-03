import React, { Component } from 'react';
import EditorHeader from '../../components/editor/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import * as editorActions from 'store/modules/editor';

class EditorHeaderContainer extends Component {
  componentDidMount() {
    const { EditorActions, location, content, title } = this.props;
    EditorActions.initialize(); // 에디터를 초기화 합니다.
    const post = {
      title: title, 
      content: content
    }
    // 쿼리 파싱
    try {
      const { id } = queryString.parse(location.search);
    if(id) { 
      // id 가 존재하는 경우 포스트 불러오기
      EditorActions.getPost(id);
    }  
    } catch (error) {
      
    }
    
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  handleSubmit = async () => {
    const { title, content, EditorActions, history, location } = this.props;
    const post = {
      title : title,
      content: content,
      // 태그 텍스트를 , 로 분리시키고 앞뒤 공백을 지운 후 중복 되는 값을 제거해줍니다.
    };
    try {
      // id 가 존재하는 경우 editPost 호출
      const { id } = queryString.parse(location.search);
      if(id) {
        await EditorActions.editPost({ id, ...post });
        history.push(`/post/${id}`);
        return;
      } 
      await EditorActions.writePost(post);
      // 페이지를 이동시킵니다. 주의: postId 를 상단에서 레퍼런스를 만들지 않고
      // 이 자리에서 this.props.postId 를 조회해주어야합니다. (현재의 값을 불러오기 위함)
      history.push(`/post/${this.props.postId}`);
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { handleGoBack, handleSubmit } = this;
    const { id } = queryString.parse(this.props.location.search);

    return (
      <EditorHeader
        onGoBack={handleGoBack}
        onSubmit={handleSubmit}
        isEdit={id ? true : false}
      />
    );
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    markdown: state.editor.get('markdown'),
    tags: state.editor.get('tags'),
    postId: state.editor.get('postId')
  }),
  (dispatch) => ({
    EditorActions: bindActionCreators(editorActions, dispatch)
  })
)(withRouter(EditorHeaderContainer));