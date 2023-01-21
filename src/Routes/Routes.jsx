import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../Pages/Main/MainPage";
import Order from "../Pages/Order/Order";
import Layout from "./components/Layout/Layout";

const MainRoutes = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<Layout />}  />
				<Route path="/order" element={<Order />} />
			</Routes>
		</div>
	);
};
export default MainRoutes;
