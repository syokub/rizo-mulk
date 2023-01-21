import React from 'react'

export const FavoriteBtn = ({children}) => {
  return (
		<div className=" p-2 inline-block rounded-full border-emerald-500 border-2 text-emerald-500 cursor-pointer">
			<div>{children}</div>
		</div>
	);
}

export default FavoriteBtn;