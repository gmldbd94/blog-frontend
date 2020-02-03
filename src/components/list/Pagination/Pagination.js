import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from '../../common/Button'
const cx = classNames.bind(styles);
const createPagePath = (page) =>{
  return `/page/${page}`;
}
const Pagination = ({page, lastPage}) => (
  <div className={cx('pagination')}> 
    <Button disabled={page===1} to={createPagePath(page-1)}>
      이전페이지
    </Button>  
    <div className={cx('number')}>
      페이지 {page}
    </div>
    <Button disabled={page === lastPage} to={createPagePath(page+1)}>
      다음 페이지
    </Button>  
  </div>
)

export default Pagination;