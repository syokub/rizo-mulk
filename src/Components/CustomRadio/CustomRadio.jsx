import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Controller, useForm } from "react-hook-form";
import { Box } from "@mui/material";

export const CustomRadio = ({ radioData,label,name }) => {
	const { control } = useForm();
	const [selected, setSelected] = React.useState();
	const CHECKED = "text-emerald-500";
	const UNCHECKED = "text-black";

								
	return (
		<div className="bg-white py-4 p-10 rounded-lg">
			<p className="font-semibold text-2xl pb-4">{label}</p>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value } }) => (
					<FormControl>
						<RadioGroup
							overlay
							name="member"
							defaultValue="person1"
							row
							sx={{
								flexDirection: "row",
								gap: 2,

								[`& .${radioClasses.checked}`]: {
									bgColor: "red",

									[`& .${radioClasses.action}`]: {
										// inset: -1,
										border: "3px solid",
										borderColor: "#1bc27a",
									},
								},
								[`& .${radioClasses.radio}`]: {
									bgcolor: "#ecfff7",
									color: "#1bc27a",

									"& > svg": {
										position: "absolute",
										top: "8px",
										right: "8px",
										bgcolor: "#ecfff7",
										color: "black",
										borderRadius: "50%",
									},
								},
							}}
						>
							<div className="flex flex-wrap justify-between w-full m-auto ">
								{radioData.map((item) => {
									const checked = selected === item.title;
									return (
										<div className="w-1/3 p-4 " key={item.id}>
											<Sheet
												className="bg-red-300"
												component="label"
												key={item.id}
												variant="outlined"
												sx={{
													p: 5,
													display: "flex",
													flexDirection: "column",
													alignItems: "start",
													boxShadow: "sm",
													borderRadius: "md",
													borderColor: "#DFDFDF",
													bgcolor: "#fafafa",
													minWidth: "auto",
												}}
											>
												<Radio
													value={item.title}
													sx={{
														mt: -1,
														mr: -1,
														color: "#1bc27a",
														mb: 0.5,
														alignSelf: "flex-end",
														"--Radio-action-radius": (theme) =>
															theme.vars.radius.md,
													}}
													onChange={(event) => {
														if (event.target.checked) {
															setSelected(item.title);
														}
													}}
												/>
												<Box
													className="m-auto justify-items-center"
													sx={{
														[`& .${radioClasses.checked}`]: {
															[`& .${radioClasses.action}`]: {
																inset: -1,
																border: "3px solid",
																borderColor: "#1bc27a",
																color: "red",
																display: "grid",
															},
														},
													}}
												>
													<div
														className={` ${
															checked ? CHECKED : UNCHECKED
														}`}
													>
														<p
															className={`m-auto flex justify-center `}
														>
															{item.icon}
														</p>
														<p className="m-auto ">
															{item.title}
														</p>
													</div>
												</Box>
											</Sheet>
										</div>
									);
								}
								)
								}
							</div>
						</RadioGroup>
					</FormControl>
				)}
			/>
		</div>
	);
}

export default CustomRadio;