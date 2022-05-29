import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import PostEditForm from "./postEditForm";
import { deletePost, votePost } from "../actions/posts.actions.js";
import { IconButton, Card, CardHeader, Button, CardContent, CardActions, Grid, Typography, Box, Paper, Avatar } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import userImag from "../img/97.jpg";

const Post = ({ post }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletePost(post.id));
		console.log(post.id);
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

	return (
		<Paper  sx={{ maxWidth: 640 }}>
			<Card>
				<CardHeader
					avatar={<Avatar alt="Remy Sharp" src={userImag} />}
					titleTypographyProps={{ variant: "subtitle2" }}
					subheaderTypographyProps={{ variant: "caption" }}
					title="Islam Sayed"
					subheader="December 9 at 11:43 AM"
				/>

				<CardContent>
					<Typography variant="subtitle1" color="text.primary">
						{post.title}
					</Typography>
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
							<Link to={"/post/" + post.id } style={{ textDecoration: "none" }}>
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
					{/* <PostEditForm title={post.title} body={post.body} userId={post.userId} id={post.id} />
					<Button sx={{ marginLeft: "10px" }} color="warning" variant="contained" size="small" onClick={handleDelete}>
						Delete
					</Button> */}
				</CardActions>
			</Card>
		</Paper>
	);
};

export default Post;
