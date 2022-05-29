import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import Post from './post';
import { Grid, CircularProgress, Box } from '@mui/material';

const Posts = () => {
	const posts = useSelector(state => state.posts);
	useEffect(() => {console.log(posts)}, [posts]);
	return (
		<div>
			{!posts || posts.length === 0 ? (
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
				<Grid container spacing={4} style={{ marginTop: '30px' }}>
					{posts.map(post => (
						<Grid key={post.id} item xs={12}>
							<Post post={post} />{' '}
						</Grid>
					))}
				</Grid>
			)}
		</div>
	);
};
export default Posts;
