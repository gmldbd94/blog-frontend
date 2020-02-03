import React from 'react';
import PageTemplate from '../components/common/PageTemplate/PageTemplate';
import ListWrapper from '../components/list/ListWrapper/ListWrapper';
import PostList from '../components/list/PostList/PostList';
import Pagination from '../components/list/Pagination';
import ListContainer from '../containers/list/ListContainer';
const ListPage = ({match}) => {
  const { page = 1} = match.params;
  return (
    <PageTemplate>
      <ListWrapper>
        <ListContainer page={parseInt(page, 10)}>
          <PostList/>
        </ListContainer>
      </ListWrapper>
    </PageTemplate>
    
  );
};

export default ListPage;