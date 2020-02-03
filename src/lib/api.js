import axios from 'axios';


const api = axios.create({
  withCredentials : true,
  timeout: 10000,
  // baseURL: 'http://13.209.21.157:3000',
  baseURL: 'http://localhost:8001', 
  headers: {
    "Access-Control-Allow-Origin" : "*", 
    "Content-Type": "application/json"
   }
});


//게시글 관련
export const getPostList = (page) => api.get(`/post/${page}`); //전체글 불러오기
export const getPost = (id) => api.get(`/post/show/${id}`); // 게시글 보기
export const writePost = ({title, content}) => api.post(`/post/create`, {title, content}); //글 작성하기
export const editPost =({id, title, content}) => api.put(`/post/update/${id}`, {title, content}); //게시글 수정하기

//회원 관련
export const signup = (email, password, name) => api.post(`/auth/signup`, {email: email, password: password, nick: name});
export const login = (email, password) => api.post(`/auth/login`, {email: "gmldbd@naver.com", password: "123123"});
export const logout = () => api.delete(`/auth/logout`);
export const checkLogin = async () => {
  const result = await api.post(`/auth/login`, {email: 'gmldbd@naver.com', password:"123123"});
  if(result.message === "현재 로그인이 되어있습니다."){
    return true;
  }
  else{
    return false;
  }
}