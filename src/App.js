import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layout";
import AddPost from "./Pages/AddPost/AddPost";
import { MainPage } from "./Pages/Main/MainPage";

export const App = ()=> {
    return (
			<Routes>
				<Route path="/" element={<Layouts />}>
					<Route path="/" element={<MainPage />} />
					<Route path="addpost" element={<AddPost />} /> 
					<Route path="*" element={<div>404 ERROR</div>} />
				</Route>
			</Routes>
		);
}

export default App;
