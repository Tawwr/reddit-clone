import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import PostDetails from "./pages/postDetails";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPosts } from "./actions/posts.actions.js"
import {Routes, Route} from "react-router-dom";

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  useEffect(() => {
    dispatch(getPosts())
  } ,[]) 
	return (
		<div className="App">
			<NavBar />
			<div style={{padding: "12px"}}>
			<Routes>
				<Route path="/" element={<Home  />} />
				<Route path="/post/:id" element={<PostDetails  posts={posts}/>} />
			</Routes>

			</div>
		</div>
	);
}

export default App;

