import React, { Component } from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EditorPane extends Component {
  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({name, value});
  }
  render(){
    const { handleChange } = this;
    const { title, content} = this.props; 
    return (
      <div className={cx('editor-pane')}> 
        <input 
          className={cx('title')}
          placeholder="제목을 입력하세요"
          name="title"
          value={title}
          onChange={handleChange}  
        />
        <div className={cx('code-editor')}>
        <input 
          className={cx('content')}
          placeholder="내용을 입려하세요"
          name="content"
          value={content}
          onChange={handleChange}
        />
        </div>  
      </div>
    )
  }
}
export default EditorPane;