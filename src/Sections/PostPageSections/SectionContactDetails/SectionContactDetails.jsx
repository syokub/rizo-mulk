import { FormControl, Grid, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import EmailBtn from "../../../Components/Buttons/EmailBtn";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";
import RadioChip from "../../../Components/Chip/RadioChip";
import TextFieldStyled from "../../../Components/Inputs/TextField";

export const SectionContactDetails = () => {
	const { control } = useForm();
	

	return (
		<div className=" ">
			<div className="bg-white p-10 gap-2 rounded-lg">
				<div className="font-semibold text-2xl ">Контакты</div>
				<div className="py-6">
					<Grid container spacing={4} className="items-center flex">
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Тип аккаунта</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"Собственник",
											"Агент",
											"Агенство",
										]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Цена дома</p>
						</Grid>
						<Grid item xs={6} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled onChange={onChange} />
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={4} />
						<Grid item xs={2}>
							<p className="font-semibold text-lg block">Цена дома</p>
						</Grid>
						<Grid item xs={6} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<EmailBtn>Изменить</EmailBtn>
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={4} />
						<Grid item xs={2}>
							<p className="font-semibold text-lg block">Телефон</p>
						</Grid>
						<Grid item xs={6} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<ReactInputMask
											mask={`+999(99) 999-99-99`}
											disabled={false}
											maskChar="_"
										>
											{() => (
												<TextField size="small" mask="+998(0) 999 99 99" />
											)}
										</ReactInputMask>
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<PrimaryBtn >Подтвердить</PrimaryBtn>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
};
export default SectionContactDetails;
