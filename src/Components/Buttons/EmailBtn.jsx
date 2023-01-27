import styled from "@emotion/styled";
import {
	Button,
	FormControl,
	InputAdornment,
	OutlinedInput,
} from "@mui/material";
import React from "react";
import { PRIMARY_COLOR, TEXT_COLOR } from "../../Constants/Colors";

export const EmailBtn = ({ placeholder, borderradius, name, onClick }) => {
	const SendButton = styled(Button)`
		background-color: ${PRIMARY_COLOR.main};
		color: ${TEXT_COLOR.main};
		margin-right: -12px;
		// border-radius: 24px;
		:hover {
			background-color: ${PRIMARY_COLOR.secondary};
		}
	`;

	return (
		<div>
			<FormControl variant="outlined">
				<OutlinedInput
					size="small"
					placeholder={placeholder}
					style={{
						// borderRadius: "24px",
						border: `1.5px solid ${PRIMARY_COLOR.main}`,
					}}
					id="outlined-adornment-password"
					type={"email"}
					endAdornment={
						<InputAdornment position="end">
							<SendButton onClick={onClick} type="submit" variant="primary">
								Изменить
							</SendButton>
						</InputAdornment>
					}
				/>
			</FormControl>
		</div>
	);
};
export default EmailBtn;
