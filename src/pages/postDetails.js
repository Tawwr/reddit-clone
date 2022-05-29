import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, CircularProgress, Box } from '@mui/material';
import Comments from '../components/comments.js';
import CommentForm from '../components/commentForm.js';
import Post from '../components/post.js';
import { useSelector } from 'react-redux';
const PostDetails = () => {
	const { id } = useParams();
	const [post, setPost] = useState();
	const posts = useSelector(state => state.posts)
	useEffect(() => {
		const post = posts.filter(p => +p.id === +id)[0];
		console.log(posts);
		setPost(post);
	}, [posts]);

	return (
		<>
			{!post ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
					}}
				>
					<CircularProgress />
				</Box>
			) : (
				<Grid
					container
					spacing={3}
					direction='column'
					style={{ marginTop: '30px' }}
				>
					<Grid item>
						<Post post={post} showLink={false}  />
					</Grid>
					<Grid item>
						<Comments comments={post.comments} />
					</Grid>
					<Grid item>
						<CommentForm id={id} />
					</Grid>
				</Grid>
			)}
		</>
	);
};
export default PostDetails;
