import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export const CheckboxChip = ({ apartmentDetailsOptions }) =>{
	const [selected, setSelected] = useState([]);

	return (
		<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
			<Box>
				<Box
					role="group"
					aria-labelledby="fav-movie"
					sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
				>
					{apartmentDetailsOptions?.map((name) => {
						const checked = selected.includes(name);
						return (
							<Chip
								key={name}
								// variant={checked ? "soft" : "plain"}
								// color={checked ? "primary" : "neutral"}
							>
								<Checkbox
									variant="outlined"
									color={checked ? "primary" : "neutral"}
									disableIcon
									overlay
									sx={checked ? { color: "#1bc27a" } : { color: "black" }}
									label={name}
									checked={checked}
									onChange={(event) => {
										setSelected((names) =>
											!event.target.checked
												? names.filter((n) => n !== name)
												: [...names, name]
										);
									}}
								/>
							</Chip>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}