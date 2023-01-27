import IconButton from "@mui/material/IconButton";

export default function UploadButtons({
	url,
	borderStyle,
	children,
	onMouseOver,
	onMouseOut,
upload}) {

	return (
		<div className="px-1">
			<IconButton
				color="primary"
				// aria-label="upload picture"
				component="label"
				sx={{
					border: borderStyle ,
					padding: "30px",
					background: "#ecfff7",
					backgroundSize: "cover",
					backgroundImage: `url( ${url} )`,
				}}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
			>
				<input hidden accept="image/*" type={upload ? 'file' : ''} className="p-12" />
				{children}
			</IconButton>
		</div>
	);
}
