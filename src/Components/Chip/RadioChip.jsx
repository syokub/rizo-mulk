import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import * as React from "react";

export const RadioChip = ({apartmentDetailsOptions}) => {
	const [selected, setSelected] = React.useState("");

	return (
		<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
			<Box>
				<RadioGroup
					name="best-movie"
					aria-labelledby="best-movie"
					row
					sx={{ flexWrap: "wrap", gap: 1 }}
				>
					{apartmentDetailsOptions?.map((name) => {
						const checked = selected === name;
						return (
							<Chip
								key={name}
								// variant={checked ? "outlined" : "plain"}
								// color={checked ? "danger" : "neutral"}
							>
								<Radio
									variant="outlined"
									color={checked ? "primary" : "neutral"}
									disableIcon
									overlay
									sx={checked ? { color: "#1bc27a" } : { color: "black" }}
									label={name}
									value={name}
									checked={checked}
									onChange={(event) => {
										if (event.target.checked) {
											setSelected(name);
										}
									}}
								/>
							</Chip>
						);
					})}
				</RadioGroup>
			</Box>
		</Box>
	);
}
export default RadioChip;