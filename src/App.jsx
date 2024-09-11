import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route element={<MainLayout />}>
						<Route path="/" element={<Homepage />} />
						<Route path="starred" element={<Starred />} />
					</Route>
					<Route path="show/:showId" element={<Show />} />
					<Route path="*" element={<div>Page not found</div>} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
