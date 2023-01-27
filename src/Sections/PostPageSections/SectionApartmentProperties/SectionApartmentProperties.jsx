/* eslint-disable jsx-a11y/anchor-is-valid */
import { AddCircle, Delete } from "@mui/icons-material";
import { FormControl, Grid } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import UploadButtons from "../../../Components/Buttons/UploadButton";
import { CheckboxChip } from "../../../Components/Chip/CheckboxChip";
import TextFieldStyled from "../../../Components/Inputs/TextField";

export const SectionApartmentProperties = () => {
	const {  control } = useForm();

	return (
		<div className="py-4 ">
			<div className="bg-white p-10 gap-2 rounded-lg">
				<div className="font-semibold text-2xl ">
					<div>Внешний вид и подробности</div>
				</div>
				<p className="w-2/3">
					Сфотографируйте все комнаты, кухню, санузел, коридор, балкон, вид из
					окна, фасад здания, подъезд. Не используйте скриншоты. Максимум 30
					фото до 10 Мбайт
				</p>
				<div className="py-6">
					<Grid container spacing={4} className="items-center flex">
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Добавьте фотографию</p>
						</Grid>
						<Grid item xs={10}>
							<div className="flex " >
								{[1, 2, 3, 4, 5, "6"].map((item) => {
									return typeof item === "string" ? (
										<UploadButtons key={item} upload={true} borderStyle={"1.5px dashed #1ec37c"}>
											<AddCircle
												sx={{
													color: "#1ec37c",
												}}
											/>
										</UploadButtons>
									) : (
											<UploadButtons
												key={item}
												upload={false}
											url={
												"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Imperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg/1200px-Imperial_Hotel_Osaka_regular_floor_standard_twin_room_20120630-001.jpg"
											}
											// onMouseOver={() => setHover(true)}
											// onMouseOut={() => setHover(false)}
											// hover={hover}
										>
											<Delete
												sx={{
													color: "white",
												}}
											/>
										</UploadButtons>
									);
								})}
							</div>
						</Grid>
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
							<p className="font-semibold text-lg">YouTube видео</p>
						</Grid>
						<Grid item xs={5} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled
											placeholder="https://youtu.be/Ulay2FvUEd8"
											onChange={onChange}
										/>
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={5}>
							<p className="text-sm opacity-70">
								Требованиями к контенту ролика, а также ссылка на помощь{" "}
								<a href="" className="text-blue-400">
									{" "}
									с рекомендациями по подготовке ролика
								</a>
							</p>
						</Grid>
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Подробнее</p>
						</Grid>
						<Grid item xs={5} className="flex justify-between items-center">
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<TextFieldStyled
											placeholder="Опишите недвижимость"
											onChange={onChange}
											rows={4}
											multiline={true}
										/>
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={5} />
						<Grid item xs={2}>
							<p className="font-semibold text-lg">Удобства</p>
						</Grid>
						<Grid item xs={10}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<CheckboxChip
										apartmentDetailsOptions={[
											"Интернет",
											"Холдильник",
											"Мебель на кухне",
											"Кондиционер",
											"Лифт",
											"Мебель в квартире",
											"Мусопровод",
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
};
export default SectionApartmentProperties;
