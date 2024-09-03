import axios from 'axios';
import { Api_url } from '../constants/ApiConstants.js';

export const fetchPosts = () => {
  return axios.get(`${Api_url}/posts`);
};

export const addPost = (newPost) => {
  return axios.post(`${Api_url}/posts`, newPost);
};
