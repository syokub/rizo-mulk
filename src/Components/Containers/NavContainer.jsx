export const NavContainer = ({ children }) => {
	return (
		<div
			style={{
				alignItems: "center",
				display: "flex",
				float: 'left',
			}}
		>
			{children}
		</div>
	);
};

export default NavContainer