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

import Comment from "./comment";
const Comments = () => {
  return ( 
    <>
      <Paper sx={{ maxWidth: 640 }}>
					<Typography variant="body1" sx={{padding: "10px"}}>
						Comments
					</Typography>
					<Divider />
					<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", borderRadius: 4 }}>
						<Comment />
					</List>
				</Paper>
    </>
   );
}
 
export default Comments;