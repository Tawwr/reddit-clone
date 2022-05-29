import {

	Typography,
	Paper,
	List,

	Divider,
} from "@mui/material";

import Comment from "./comment";
const Comments = ({comments}) => {
  return ( 
    <>
      <Paper sx={{ maxWidth: 640 }}>
					<Typography variant="body1" sx={{padding: "10px"}}>
						Comments
					</Typography>
					<Divider />
					<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", borderRadius: 4 }}>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
					</List>
				</Paper>
    </>
   );
}
 
export default Comments;