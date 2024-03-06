import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./Components/Navbar";
import SearchFeed from "./Components/SearchFeed";
import ChannelDetail from "./Components/ChannelDetail";
import VideoDetail from "./Components/VideoDetail";
import Feed from "./Components/Feed";

export default function App() {
	return (
		<BrowserRouter>
			<Box sx={{ backgroundColor: "#000" }}>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Feed />} />
					<Route path="/video/:id" element={<VideoDetail />} />
					<Route path="/channel/:id" element={<ChannelDetail />} />
					<Route path="/search/:searchTerm" element={<SearchFeed />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
}
