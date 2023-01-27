import React from 'react'

export const FavoriteBtn = ({ children, onClick }) => {
	return (
		<div
			onClick={onClick}
			className=" p-2 inline-block rounded-full border-emerald-500 border-2 text-emerald-500 cursor-pointer"
		>
			<div>{children}</div>
		</div>
	);
};

export default FavoriteBtn;