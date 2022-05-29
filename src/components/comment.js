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
} from '@mui/material';
import userImag2 from "../img/55.jpg";
import userImag3 from "../img/32.jpg";
import userImag4 from "../img/35.jpg";
const Comment = () => {
	return (
		<>
			<ListItem alignItems='flex-start'>
				<ListItemAvatar>
					<Avatar alt='Remy Sharp' src={userImag2} />
				</ListItemAvatar>
				<ListItemText
					primary='Mark Etsy'
					secondary={
						<>
							{" — Wish I could come, but I'm out of town this…"}
							<br />
							<Typography
								sx={{ display: 'inline' }}
								component='span'
								variant='body2'
								color='text.primary'
							>
								4 days . Reply
							</Typography>
						</>
					}
				/>
			</ListItem>
		</>
	);
};

export default Comment;
