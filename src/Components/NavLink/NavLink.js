import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom'

 export const Link = styled(NavLink)`
		text-decoration: none;
		color: #323232;
		opacity: 0.35;
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		color: ${({ black }) => (black ? "#000" : "#323232")};
		opacity: ${({ black }) => (black ? "1" : "0.35")};
		font-size: ${({ medium }) => (medium ? "17px" : "12px")};
		margin-right: 10px;
 `;
