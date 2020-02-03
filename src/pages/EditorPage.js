import React from 'react';
import EditorTemplate from '../components/editor/EditorTemplate';
// import EditorHeader from '../components/editor/EditorHeader';
// import EditorPane from '../components/editor/EditorPane';
// import EditorPreview from '../components/editor/EditorPreview';
import EditorPaneContainer from '../containers/editor/EditorPaneContainer';
import EditorPreViewContainer from '../containers/editor/EditorPreViewContainer';
import EditorHeaderConatiner from '../containers/editor/EditorHeaderConatiner';
const EditorPage = () => {
  return (
    <EditorTemplate
      header={<EditorHeaderConatiner/>}
      editor={<EditorPaneContainer/>}
      preview={<EditorPreViewContainer/>}
    />
  )
};

export default EditorPage;