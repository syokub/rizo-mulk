import { FormControl, Grid} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import RadioChip from "../../../Components/Chip/RadioChip";
import TextFieldStyled from "../../../Components/Inputs/TextField";

export const SectionApartmentDetails = () => {
	const {  control } = useForm();

	return (
		<div className="py-4 ">
			<div className="bg-white p-10 gap-2 rounded-lg">
				<div className="font-semibold text-2xl ">О квартире</div>
				<div className="py-6">
					<Grid container spacing={4} className="items-center flex">
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Комнат</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"1",
											"2",
											"3",
											"4",
											"5",
											"6",
											"7+",
											"Студия",
										]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Плошадь м2</p>
						</Grid>
						<Grid item xs={3} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled
											// size="small"
											placeholder="Общая"
											// onChange={onChange}
										/>
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={3} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled placeholder="Кухня " onChange={onChange} />
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={3} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled placeholder="Общая" onChange={onChange} />
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Этаж</p>
						</Grid>
						<Grid item xs={4} className="flex justify-between items-center">
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
						<Grid item xs={1}>
							<p className="font-semibold text-lg text-center ">из</p>
						</Grid>
						<Grid item xs={4} className="flex justify-between items-center">
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
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Статус</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={["Апартменты", "Жилой фонд"]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Санузел</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"Совмещенный",
											"Разделный",
											"Более одного",
										]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Балкон</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={["Балкон", "Люджия", "Нет"]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Ремонт</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"Косметический",
											"Евро",
											"Дизайнерский",
										]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Окна</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={["Во двор", "На улицу"]}
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
export default SectionApartmentDetails;
