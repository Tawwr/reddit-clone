import { TextField, Button, Paper } from '@mui/material';
import { useFormik } from 'formik';
import {useDispatch } from 'react-redux'
import { addComment } from '../actions/posts.actions';
const CommentForm = ({id}) => {
  const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
      body: ""
    },
    onSubmit: (values) => {
      dispatch(addComment(id, {...values, userId: 1}))
      formik.resetForm()
    }
	});
	return (
		<div style={{ maxWidth: 640}}>
			<TextField
				autoFocus
				name='body'
				value={formik.values.body}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				margin='dense'
				id='body'
				label='comment'
				type='text'
				fullWidth
				variant='outlined'
        color="info"
			/>
			<Button onClick={formik.handleSubmit} variant="contained" disabled={!formik.values.body}>Send</Button>
		</div>
	);
};

export default CommentForm;
