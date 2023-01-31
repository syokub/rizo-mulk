import { NavLink } from 'react-router-dom'

		// color: ${({ black }) => (black ? "#000" : "#323232")};
		// opacity: ${({ black }) => (black ? "1" : "0.35")};
		// font-size: ${({ medium }) => (medium ? "17px" : "12px")};


 import React from 'react'
 
 export const Link = ({ children, classname, opacity, textsize,to }) => {
		return (
			<NavLink
				to={to}
				className={`no-underline text-${textsize} mr-2 leading-4 text-base opacity-${opacity} ${classname}`}
			>
				{children}
			</NavLink>
		);
 };
 
export default Link;