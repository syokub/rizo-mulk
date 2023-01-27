import { PRIMARY_COLOR, TEXT_COLOR } from "../../Constants/Colors";
import { Button } from "@mui/material";
import React from "react";

export const SecondaryBtn = ({ children, className, onClick }) => {
	return (
		<Button
			onClick={onClick}
			className="rounded-full"
			variant="outlined"
			size="small"
			sx={[
				{
					color: TEXT_COLOR.secondary,
					padding: "12px 20px",
					borderRadius: "8px",
					borderWidth: "2px",
					borderColor: PRIMARY_COLOR.secondary,
					fontSize: "12px",
				},
				{
					"&:hover": {
						padding: "12px 20px",
						borderRadius: "8px",
						borderWidth: "2px",
						borderColor: PRIMARY_COLOR.secondary,
					},
				},
			]}
		>
			{children}
		</Button>
	);
};
 export default SecondaryBtn;
