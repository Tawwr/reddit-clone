import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux"
import { updatePost } from "../actions/posts.actions.js"
import {  Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const EditModal = ({body, userId, title, id}) => {
    const [open, setOpen] = useState(false);

	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			title,
			userId,
			body,
		},
		onSubmit: (values) => {
			dispatch(updatePost(id, values))
			setOpen(false);
            formik.resetForm()
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title is required").max(15, "limit passed"),
			userId: Yup.string().required("author is required").max(10, "limit passed"),
			body: Yup.string().required("your message is required").max(240, "limit passed"),
		}),
	});
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
        formik.resetForm()
	};
    return ( 
        <div>
			<Button variant="contained" onClick={handleClickOpen}>
				Edit
			</Button>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<TextField
						error={Boolean(formik.errors.userId) && Boolean(formik.touched.userId)}
						helperText={formik.errors.userId}
						autoFocus
						name="userId"
						value={formik.values.userId}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						margin="dense"
						id="userId"
						label="Author"
						type="text"
						fullWidth
						variant="standard"
                        disabled
					/>
					<TextField
						error={Boolean(formik.errors.title) && Boolean(formik.touched.title)}
						helperText={formik.errors.title}
						margin="dense"
						name="title"
						value={formik.values.title}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						id="title"
						label="Title"
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						error={Boolean(formik.errors.body) && Boolean(formik.touched.body)}
						helperText={formik.errors.body}
						id="post-text"
						name="body"
						value={formik.values.body}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						label="Post"
						multiline
						rows={4}
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" onClick={formik.handleSubmit}>
						Publish
					</Button>
				</DialogActions>
			</Dialog>
		</div>
     );
}
 
export default EditModal;