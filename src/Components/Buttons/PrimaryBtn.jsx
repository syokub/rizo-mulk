import { PRIMARY_COLOR, TEXT_COLOR } from '../../Constants/Colors';
import { Button } from '@mui/material'
import React from 'react'

export const PrimaryBtn = ({ children, type, onClick,disabled }) => {
	return (
		<Button
			disabled={disabled}
			onClick={onClick}
			size="small"
			type={type}
			sx={[
				{
					backgroundColor: PRIMARY_COLOR.main,
					color: TEXT_COLOR.main,
					padding: "12px 20px",
					borderRadius: "8px",
					fontSize: "12px",
					borderWidth: "5px",
				},
				{
					"&:hover": {
						backgroundColor: PRIMARY_COLOR.secondary,
					},
				},
			]}
		>
			{children}
		</Button>
	);
};
export default PrimaryBtn;