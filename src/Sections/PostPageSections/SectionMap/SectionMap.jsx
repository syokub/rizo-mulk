/* eslint-disable jsx-a11y/iframe-has-title */
import { FormControl, Grid } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import TextFieldStyled from '../../../Components/Inputs/TextField';

export const SectionMap = () => {
    const {  control } = useForm();


  return (
		<div className="py-4">
			<div className="bg-white rounded-lg gap-2 p-10">
				<div className="font-semibold text-2xl">Адрес дома</div>
				<div className="py-6">
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled
											placeholder="Укажите адрес или название ЖК"
											onChange={onChange}
										/>
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={6}>
							<Controller
								name="plethysmography"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled
											size="small"
											placeholder="Квартира"
											onChange={onChange}
										/>
									</FormControl>
								)}
							/>
						</Grid>
					</Grid>
				</div>
				<div className="py-6 w-auto">
					<iframe
						className="w-full h-[400px] rounded-lg"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47943.33664983181!2d69.23944017736105!3d41.320641383599565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1674391473040!5m2!1sen!2s"
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
}



export default SectionMap;