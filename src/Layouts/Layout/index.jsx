import styled from '@emotion/styled';
import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export const Layouts = ({ children }) => {

	 const SLayout = styled.div`
		display: flex;
		height: 100vh;
	`;
	 const SMain = styled.main`
		width: 100%;
		// padding: 10px 10px 30px 10px;
		background: #f5f7fd;
		overflow-y: scroll;
	`;

	 return (
			<>
				<SLayout>
					<SMain className="scrollCustomize scrollbar ">
						<Header headerClass="" />
						<Outlet />
						<Footer />
					</SMain>
				</SLayout>
			</>
		);
};
export default Layouts;