import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditorPreview from '../../components/editor/EditorPreview';

class EditorPreviewContainer extends Component {
  render() {
    const { content, title } = this.props;
    return (
      <EditorPreview title={title} content={content}/>
    )
  }
}

export default connect(
  (state) => ({
    title: state.editor.get('title'),
    content: state.editor.get('content')
  })
)(EditorPreviewContainer);