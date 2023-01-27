import { FormControl, Grid, InputLabel, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import RadioChip from "../../../Components/Chip/RadioChip";
import TextFieldStyled from "../../../Components/Inputs/TextField";

export const SectionPriceDetails = () => {
	const { handleSubmit, control } = useForm();

	return (
		<div className="py-4 ">
			<div className="bg-white p-10 gap-2 rounded-lg">
				<div className="font-semibold text-2xl ">Цена и условия сделки</div>
				<div className="py-6">
					<Grid container spacing={4} className="items-center flex">
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Цена дома</p>
						</Grid>
						<Grid item xs={10} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl>
										<TextFieldStyled placeholder="0" onChange={onChange} />
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Тип сделки</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"Свободная продажа",
											"Альтернатива",
											"Переступка",
										]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Дополнительно</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={["Возможен торг", "Ипотека"]}
									/>
								)}
							/>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};
export default SectionPriceDetails;
