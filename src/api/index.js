import axios from "axios"

const API = axios.create({baseURL: "https://api.tawwr.com"})

//Get posts
export const getPosts = () => API.get("/posts")

//add post
export const addPost = (newPost) => API.post("/posts", newPost)

//update a post
export const updatePost = (id, updatedPost) => API.put(`/posts/${id}`, updatedPost);

//delete a post
export const deletePost = (id) => API.delete(`/posts/${id}`);

//vote
export const votePost = (id, vote) => API.post(`/posts/${id}/vote`, vote)


//comment
export const addComment = (id, comment) => API.post(`/posts/${id}/comment`, comment)
