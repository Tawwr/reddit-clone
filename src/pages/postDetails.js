import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
	IconButton,
	Card,
	CardHeader,
	Button,
	CardContent,
	CardActions,
	Grid,
	Typography,
	Box,
	Paper,
	Avatar,
	List,
	ListItem,
	ListItemText,
	Divider,
	ListItemAvatar,
} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { deletePost, votePost } from "../actions/posts.actions.js";
import { useSelector } from 'react-redux';
import Comments from "../components/comments.js";
import userImag from "../img/97.jpg";

const PostDetails = (/* { post } */) => {
	const { id } = useParams();
	const posts = useSelector(state => state.posts);

	const [post, setPost] = useState();

	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletePost(post.id));
	};

	const handleComment = () => {
		console.log("comment");
	};
	const handleUpVote = () => {
		dispatch(votePost(post.id, { userVote: 1, userId: 1 }));
	};
	const handleDownVote = () => {
		dispatch(votePost(post.id, { userVote: -1, userId: 1 }));
	};

	useEffect(() => {
		//const posts = JSON.parse(localStorage.getItem("posts"));
		const post = posts.filter((p) => +p.id === +id)[0];
		setPost(post);
		console.log({ post, id });
	}, []);

	if (!post) return <h1>No posts found with id {id} </h1>
	return (
		<Grid container spacing={3} direction="column" style={{ marginTop: "30px" }}>
			<Grid item>
				<Paper sx={{ maxWidth: 640 }}>
					<Card>
						<CardHeader
							avatar={<Avatar alt="Remy Sharp" src={userImag} />}
							titleTypographyProps={{ variant: "subtitle2" }}
							subheaderTypographyProps={{ variant: "caption" }}
							title={post.title}
							subheader="Islam Sayed - December 9 at 11:43 AM"
						/>

						<Divider />
						<CardContent>
							<Typography variant="subtitle2" color="text.secondary">
								{post.body}
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Grid container justifyContent="space-between">
								<Grid item>
									<Grid container>
										<Box sx={{ marginRight: "12px" }}>
											<IconButton onClick={handleUpVote} color="primary" aria-label="upload picture" component="span">
												<ThumbUpIcon sx={{ fontSize: 16, color: "#777" }} />
											</IconButton>
											<Typography variant="caption">{post.upVotesTotal}</Typography>
										</Box>
										<Box sx={{ marginRight: "12px" }}>
											<IconButton onClick={handleDownVote} color="primary" aria-label="upload picture" component="span">
												<ThumbDownIcon sx={{ fontSize: 16, color: "#777" }} />
											</IconButton>
											<Typography variant="caption">{post.downVotesTotal}</Typography>
										</Box>
										<Box sx={{ marginRight: "12px" }}>
											<IconButton onClick={handleComment} color="primary" aria-label="upload picture" component="span">
												<CommentIcon sx={{ fontSize: 16, color: "#777" }} />
											</IconButton>
											<Typography variant="caption">{post.downVotesTotal}</Typography>
										</Box>
									</Grid>
								</Grid>
								<Grid item>
									<Link to={"/post/" + post.id} style={{ textDecoration: "none" }}>
										<Button
											variant="text"
											size="small"
											sx={{ color: "#000000de", textTransform: "none", fontSize: "12px", marginRight: "10px" }}
											endIcon={<ArrowRightAltIcon sx={{ fontSize: 16, color: "#777" }} />}>
											Open post
										</Button>
									</Link>
								</Grid>
							</Grid>
						</CardActions>
					</Card>
				</Paper>
			</Grid>
			<Grid item>
				<Comments />
			</Grid>
		</Grid>
	);
};
export default PostDetails;
