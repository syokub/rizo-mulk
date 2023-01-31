import { FormControl, Grid } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import RadioChip from '../../../Components/Chip/RadioChip';
import TextFieldStyled from '../../../Components/Inputs/TextField';

export const SectionApartmentInfo = () => {
    const {  control } = useForm();


  return (
		<div className="py-4 ">
			<div className="bg-white p-10 gap-2 rounded-lg">
				<div className="font-semibold text-2xl ">О дома</div>
				<div className="py-6">
					<Grid container spacing={4} className="items-center flex">
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Год постройки</p>
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
							<p className="font-semibold text-lg">Высота потолков, м</p>
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
							<p className="font-semibold text-lg">Тип парковки</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"Закрытая",
											"Подземная",
											"Открытая",
										]}
									/>
								)}
							/>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Тип дома</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<RadioChip
										apartmentDetailsOptions={[
											"Кирпич",
											"Монолит",
											"Панель",
											"Кирпич-монолит",
											"Блок",
										]}
									/>
								)}
							/>
						</Grid>
					</Grid>
				</div>
			</div>
		</div>
	);
}
export default SectionApartmentInfo;