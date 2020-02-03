import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../lib/api';

//action types
const GET_POST_LIST = 'list/GET_POST_LIST';

//action creators
export const getPostList = createAction(GET_POST_LIST, api.getPostList, meta=>meta);

const initialState = Map({
  posts: Map({}),
  lastPage: null,
});

// reducer
export default handleActions({
  ...pender({
    type: GET_POST_LIST,
    onSuccess: (state, action) => {
      const {data: posts} = action.payload;
      const lastPage = posts.data.count;
      console.log(posts.data);
      return state.set('posts', fromJS(posts.data.rows))
                  .set('lastPage', parseInt(lastPage,10)/5);
                  
    },
    onFailure: (state, action) => {
      return state.error; 
    },
  })
}, initialState)