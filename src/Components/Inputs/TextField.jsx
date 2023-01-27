import React from "react";
import {  styled, TextField } from "@mui/material";

const TextFieldStyle = styled(TextField)`
	& label.Mui-focused {
		color: #1bc27a;
	}
	& .MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: #1bc27a;
		}
	}
`;
export const TextFieldStyled = ({ placeholder, multiline }) => {
    
	return (
        <TextFieldStyle
            size='small'
            variant="outlined"
            placeholder={placeholder}
			multiline
			sx={{borderRadius:'5px'}}
			/>
			
	);
}
export default TextFieldStyled;