import { Button } from "@mui/material";
import React from "react";

export const ExtendedBtn = ({ children, className, onClick }) => {
	return (
		<Button
			onClick={onClick}
			className="rounded-full"
			variant="outlined"
			size="small"
			sx={[
				{
					color: "white",
					padding: "12px 20px",
					borderRadius: "8px",
					borderWidth: "2px",
					borderColor: "white",
					fontSize: "12px",
					backgroundColor: "#CECECD",
				},
				{
					"&:hover": {
						padding: "12px 20px",
						backgroundColor: "#B3B2B1",
						borderColor: "white",
						borderWidth: "2px",
					},
				},
			]}
		>
			{children}
		</Button>
	);
};
export default ExtendedBtn;
