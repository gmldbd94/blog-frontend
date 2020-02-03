import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as api from '../../lib/api';

//action types
//모달관련
const SHOW_MODAL = 'base/SHOW_MODAL';
const HIDE_MODAL = 'base/HIDE_MODAL';
//로그인 관련
const LOGIN = 'base/LOGIN';

const LOGOUT = 'base/LOGOUT';
const SIGNUP = 'base/SIGNUP';
const CHECK_LOGIN = 'base/CHECK_LOGIN';
const CHANGE_PASSWORD_INPUT = 'base/CHANE_PASSWORD_INPUT';
const CHANGE_EMAIL_INPUT = 'base/CHANGE_EMAIL_INPUT';
const CHANGE_NAME_INPUT = 'base/CHANGE_NAME_INPUT';
const INITIALIZE_LOGIN_MODAL = 'base/INITIALZIE_LOGIN_MODAL';

const TEMP_LOGIN = 'base/TEMP_LOGIN';

//action creator
export const showModal = createAction(SHOW_MODAL);
export const hideModal = createAction(HIDE_MODAL);

export const login = createAction(LOGIN, api.login);

export const logout = createAction(LOGOUT, api.logout);
export const signup = createAction(SIGNUP, api.signup);
export const checkLogin = createAction(CHECK_LOGIN, api.checkLogin);
export const changeEmailInput = createAction(CHANGE_EMAIL_INPUT);
export const changePasswordInput = createAction(CHANGE_PASSWORD_INPUT);
export const changeNameInput = createAction(CHANGE_NAME_INPUT);
export const initializeLoginModal = createAction(INITIALIZE_LOGIN_MODAL);

export const tempLogin = createAction(TEMP_LOGIN);



//initial state
const initialState = Map({
  modal: Map({
    remove: false,
    login: false,
    signup: false,
  }),
  loginModal: Map({
    email: '',
    password: '',
    name: '',
    error: false,
  }),
  currentUser: Map({
    email: '',
    name: ''
  }),
  logged: false
});

export default handleActions({
  [SHOW_MODAL]: (state, action) =>{
    const { payload: modalName} = action;
    
    return (
      state.setIn(['modal', modalName], true)
      );
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], false);
  },
  [TEMP_LOGIN]: (state, action) => {
    return state.set('logged', true);
  },
  ...pender({
    type: LOGIN,
    onSuccess: (state, action) => {  // 로그인 성공 시
      return state.set('logged', true);
    },
    onError: (state, action) => {  // 에러 발생 시
      return state.setIn(['loginModal', 'error'], true)
                  .setIn(['loginModal', 'password'], '')
                  .setIn(['loginmodal', 'email'], '');
    }
  }),
  ...pender({
    type: CHECK_LOGIN,
    onSuccess: (state, action) => {
      const { logged } = action.payload.data;
      return state.set('logged', logged);
    }
  }),
  ...pender({
    type: SIGNUP,
    onSuccess: (state, action) => {
      return state.set('logged', false);
    },
    onError: (state, action) => {  // 에러 발생 시
      console.log("error 발생");
      return state.setIn(['loginModal', 'error'], true)
                  .setIn(['loginModal', 'password'], '')
                  .setIn(['loginmodal', 'email'], '')
                  .setIn(['loginmodal', 'name'], '');
    }
  }),
  [CHANGE_PASSWORD_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'password'], value);
  },
  [CHANGE_EMAIL_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'email'], value);
  },
  [CHANGE_NAME_INPUT]: (state, action) => {
    const { payload: value } = action;
    return state.setIn(['loginModal', 'name'], value);
  },
  [INITIALIZE_LOGIN_MODAL]: (state, action) => {
    // 로그인 모달의 상태를 초기상태로 설정합니다 (텍스트/에러 초기화)
    return state.set('loginModal', initialState.get('loginModal'));
  }
}, initialState)