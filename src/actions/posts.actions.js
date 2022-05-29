import * as api from "../api";

// Get posts
export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.getPosts();
		dispatch({ type: "FETCH_ALL", payload: data.data });
	} catch (err) {
		console.log(err);
	}
};

//add post
export const addPost = (newPost) => async (dispatch) => {
	
	try {
		await api.addPost(newPost);
		const { data } = await api.getPosts();
		dispatch({ type: "ADD_POST", payload: data.data });
	} catch (err) {
		console.log(err);
	}
};

// Update post
export const updatePost = (id, updatedPost) => async (dispatch) => {
	
	try {
		await api.updatePost(id, updatedPost);
		const { data } = await api.getPosts();
		dispatch({ type: "UPDATE_POST", payload: data.data });
	} catch (err) {
		console.log(err);
	}
};

export const deletePost = (id) => async (dispatch) => {

	try {
		await api.deletePost(id);
		const { data } = await api.getPosts();
		dispatch({ type: "DELETE_POST", payload: data.data });
	} catch (err) {
		console.log(err);
	}
};

// Vote post
export const votePost = (id, vote) => async (dispatch) => {
	try {
		await api.votePost(id, vote);
		const { data } = await api.getPosts();
		dispatch({ type: "VOTE_POST", payload: data.data });
	} catch (err) {
		console.log(err);
	}
};

export const addComment = (id, comment) => async (dispatch) => {
	try {
		await api.addComment(id, comment);
		const { data } = await api.getPosts();
		dispatch({ type: "ADD_COMMENT", payload: data.data });
	}catch(err) {
		console.log(err);
	}
}