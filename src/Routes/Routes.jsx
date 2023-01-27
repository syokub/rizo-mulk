import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "../Pages/AddPost/AddPost";
import { MainPage } from "../Pages/Main/MainPage";
import Layout from "./components/Layout/Layout";

const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Layout />}  />
				<Route path="/addpost" element={<AddPost />} />
			</Routes>
		</div>
	);
};
export default MainRoutes;
