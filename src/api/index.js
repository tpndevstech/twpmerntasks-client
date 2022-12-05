import axios from 'axios';

const url = 'https://twpmerntasks-server.onrender.com/posts';
//this url should be changed as per local or hosted status
//for eg: if local, then url would be something like 'https://localhost:<port>/"
//but if hosted online , then url would be where backend code is deployed and hosted 

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
