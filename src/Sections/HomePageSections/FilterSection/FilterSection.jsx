import { ArrowDropDownCircle, NearMe, ZoomIn } from '@mui/icons-material';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import ExtendedBtn from '../../../Components/Buttons/ExtendedBtn';
import PrimaryBtn from '../../../Components/Buttons/PrimaryBtn';
import FilterHook from '../../../Hooks/FilterHook';
export const FilterSection = () => {
	
    const { handleSubmit, control } = useForm();
    const { filterData, onRoomChange } = FilterHook();

    const onSubmit = (values) => {
        console.log('values', values)
        console.log('filterdata',filterData)
    }

  return (
		<div className='py-4'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="bg-white grid p-10 rounded-lg gap-6 bg-[url('https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg')]">
					<div className="font-semibold text-4xl text-white">
						Купить/арендовать/продать - легко!
					</div>
					<div className="bg-white rounded-lg p-4">
						<div>
							<div className="flex justify-between gap-2">
								<Controller
									name="type"
									control={control}
									render={({ field }) => (
										<FormControl fullWidth>
											<InputLabel
												variant="standard"
												htmlFor="uncontrolled-native"
												className="opacity-70"
											>
												Tип
											</InputLabel>
											<NativeSelect
                                                value={filterData.type}
												IconComponent={() => <ArrowDropDownCircle/>}
											>
												<option value={1}>Посуточная аренда</option>
												<option value={2}>Продаётся</option>
											</NativeSelect>
										</FormControl>
									)}
								/>
								<Controller
									name="rooms"
									control={control}
									render={({ field: { onChange } }) => (
										<FormControl fullWidth>
											<InputLabel
												variant="standard"
												htmlFor="uncontrolled-native"
												id="rooms-id"
												className="opacity-70"
											>
												Количество комнат
											</InputLabel>
											<NativeSelect
                                                IconComponent={() => <ArrowDropDownCircle />}
                                                value={filterData.room}
												onChange={(e) => {
													onChange(e);
													onRoomChange(e);
												}}
											>
												<option value={1}>1-2</option>
												<option value={2}>2-3</option>
												<option value={3}>4-5</option>
											</NativeSelect>
										</FormControl>
									)}
								/>
								<Controller
									name="price"
									control={control}
									render={({ field: { onChange } }) => (
										<FormControl fullWidth>
											<InputLabel
												variant="standard"
												htmlFor="uncontrolled-native"
												id="rooms-id"
												className="opacity-70"
											>
												Стоимость
											</InputLabel>
											<NativeSelect
                                                IconComponent={() => <ArrowDropDownCircle />}
                                                value={filterData.price}
												onChange={(e) => {
													onChange(e);
													onRoomChange(e);
												}}
											>
												<option value={1}>2 mln - 3,5 mln</option>
												<option value={2}>2,5 mln - 4 mln</option>
											</NativeSelect>
										</FormControl>
									)}
								/>
								<Controller
									name="district"
									control={control}
									render={({ field: { onChange } }) => (
										<FormControl fullWidth>
											<InputLabel
												variant="standard"
												htmlFor="uncontrolled-native"
												id="rooms-id"
												className="opacity-70"
											>
												Область
											</InputLabel>
											<NativeSelect
                                                IconComponent={() => <ArrowDropDownCircle />}
                                                value={filterData.district}
												onChange={(e) => {
													onChange(e);
													onRoomChange(e);
												}}
											>
												<option value={1}>Tashkent</option>
												<option value={2}>Tashkent</option>
												<option value={3}>Tashkent</option>
											</NativeSelect>
										</FormControl>
									)}
    								/>
								<Controller
									name="region"
									control={control}
									render={({ field: { onChange } }) => (
										<FormControl fullWidth>
											<InputLabel
												variant="standard"
												htmlFor="uncontrolled-native"
												id="rooms-id"
												className="opacity-70"
											>
												Регион
											</InputLabel>
											<NativeSelect
                                                IconComponent={() => <ArrowDropDownCircle />}
                                                value={filterData.region}
												onChange={(e) => {
													onChange(e);
													onRoomChange(e);
												}}
											>
												<option value={1}>Chilonzor</option>
												<option value={2}>Chilonzor</option>
												<option value={3}>Chilonzor</option>
											</NativeSelect>
										</FormControl>
									)}
								/>
							</div>
						</div>
					</div>
					<div className=" flex justify-between">
						<ExtendedBtn>
							<ZoomIn />
							Расширенный поиск
						</ExtendedBtn>
						<div className="flex gap-2">
							<ExtendedBtn>
								<NearMe />
								На карте
							</ExtendedBtn>
							<PrimaryBtn type="submit">Найти</PrimaryBtn>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
export default FilterSection;
