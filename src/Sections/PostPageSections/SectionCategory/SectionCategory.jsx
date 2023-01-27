import React from 'react'
import {  useForm } from 'react-hook-form';
import CustomRadio from '../../../Components/CustomRadio/CustomRadio';
import { apartmentType } from '../../../_mocks/ApartmentType';
import { sellTyle } from '../../../_mocks/SellType';


export const SectionCategory = () => {
    const { handleSubmit, control } = useForm();


  return (
		<div className="">
				<div className="gap-4 grid">
					<CustomRadio
						name="sellType"
						label={"Новое обьявление"}
						radioData={sellTyle}
					/>
					<CustomRadio
						name="apartmentType"
						label={"Новое обьявление"}
						radioData={apartmentType}
					/>
				</div>
		</div>
	);
}

export default SectionCategory;