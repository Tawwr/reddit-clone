import {
	Avatar,
	ListItem,
	ListItemText,
	ListItemAvatar,
} from '@mui/material';
import userImag2 from "../img/55.jpg";

const Comment = ({ comment }) => {
	return (
		<>
			<ListItem alignItems='flex-start'>
				<ListItemAvatar>
					<Avatar alt='Remy Sharp' src={userImag2} />
				</ListItemAvatar>
				<ListItemText
					primary={comment?.userId}
					secondary={
						<>
							{comment?.body}
							
						</>
					}
				/>
			</ListItem>
		</>
	);
};

export default Comment;
