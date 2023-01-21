import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

import React from "react";

export const CardRounded = ({ title,src }) => {
	const AvatarImg = styled(Avatar)`
		width: 90px;
		height: 90px;
		margin: 0 15px;
		background: linear-gradient(#fff, #fff) padding-box,
			linear-gradient(90deg, slateblue, coral) border-box;
		border: 4px solid transparent;
		margin-bottom:12px;
	`;

	return (
		<div className="grid m-auto">
			<AvatarImg src={src} alt={title} />
			<div className="m-auto text-sm">{title}</div>
		</div>
	);
};      

export default CardRounded;
