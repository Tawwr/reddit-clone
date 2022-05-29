import PostForm from './postForm';
import {
	AppBar,
	Toolbar,
	Avatar,
	Box,
	TextField,
	IconButton,
} from '@mui/material';
import userImag from '../img/97.jpg';
import redditLogo from '../img/Reddit-Logo.png';
import { Link } from 'react-router-dom';
const NavBar = () => {
	const handleOpenUserMenu = () => {
		return;
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				color='transparent'
				position='static'
				sx={{ boxShadow: 'none', background: '#fff' }}
			>
				<Toolbar
					sx={{
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingLeft: '48px',
						paddingRight: '48px',
					}}
				>
					<Link to='/'>
						<img src={redditLogo} alt='reddit-logo' width='100' />
					</Link>
					<Box sx={{ width: '400px' }}>
						<TextField
							id='outlined-basic'
							fullWidth
							placeholder='Search'
							variant='outlined'
							size='small'
						/>
					</Box>
					<Box sx={{ display: 'flex' }}>
						<IconButton onClick={handleOpenUserMenu}>
							<Avatar alt='Remy Sharp' src={userImag} />
						</IconButton>
						<PostForm />
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
