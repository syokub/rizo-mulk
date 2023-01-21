import { Chip, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form';

export const SectionCategory = () => {
    const { handleSubmit, control } = useForm();


  return (
		<div className="py-4 gap-2">
			<div className="py-4">
				<p className="font-semibold text-2xl">Новое обьявление</p>
				<Controller
					render={({ field }) => (
						<RadioGroup aria-label="gender" {...field}>
							<FormControlLabel
								value="female"
								control={<Radio />}
								label="Female"
							/>
							<FormControlLabel value="male" control={<Radio />} label="Male" />
						</RadioGroup>
					)}
					name="RadioGroup"
					control={control}
				/>
				
			</div>
		</div>
	);
}

export default SectionCategory;