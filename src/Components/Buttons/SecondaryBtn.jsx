import { PRIMARY_COLOR, TEXT_COLOR } from "../../Constants/Colors";
import { Button } from "@mui/material";
import React from "react";

export const SecondaryBtn = ({ children,className }) => {
	return (
		<Button
			className='rounded-full'
			variant="outlined"
			size="small"
			sx={[
				{
					color: TEXT_COLOR.secondary,
					padding: "12px 50px",
					borderRadius: "8px",
					borderWidth: "1.5px",
					borderColor: PRIMARY_COLOR.secondary,
					fontSize: "12px",
				},
				{
					"&:hover": {
						padding: "12px 50px",
						borderRadius: "8px",
						borderWidth: "1.5px",
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
