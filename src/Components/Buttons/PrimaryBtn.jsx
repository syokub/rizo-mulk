import { PRIMARY_COLOR, TEXT_COLOR } from '../../Constants/Colors';
import { Button } from '@mui/material'
import React from 'react'

export const PrimaryBtn = ({children,type}) => {
  
  return (
	  <Button
		  type={type}
			sx={[
				{
					backgroundColor: PRIMARY_COLOR.main,
					color: TEXT_COLOR.main,
					padding: "12px 54px",
					borderRadius: "8px",
					fontSize: "12px",
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
}
export default PrimaryBtn;