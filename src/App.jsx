import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<Homepage />} />
					<Route path="starred" element={<Starred />} />
				</Route>
				<Route path="*" element={<div>Page not found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
