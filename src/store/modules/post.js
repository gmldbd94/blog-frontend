import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

//action types
const GET_POST = 'post/GET_POST';

//action creators
export const getPost = createAction(GET_POST, api.getPost);


const initialState = Map({
  post: Map({})
});

export default handleActions({
  ...pender({
    type: GET_POST,
    onSuccess: (state, action) => {
      const { data: posts } = action.payload;
      console.log("너는 된다고?");
      return state.set('post', fromJS(posts.data));
    }
  })
}, initialState)