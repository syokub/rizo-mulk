import React from 'react'
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export const SectionSteps = () => {

const steps = [
	{
		id: 1,
		title: "Выберите категорию",
		active: true,
	},
	{
		id: 2,
		title: "Основная информация",
		active: false,
	},
	{
		id: 3,
		title: "Финальный результат",
		active: false,
	},
];

  return (
		<div className="py-6">
			<div className="grid gap-2 m-auto text-center">
				<p className="font-semibold text-2xl">Добавить новое обьявление</p>
				<p>Для добавления вашего обьявлении вы должны выбрать категорию</p>
			</div>
			<div className="py-6">
				<Stepper
					activeStep={1}
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					{steps.map((item) => (
						<div style={{ width: "30%" }} key={item.id}>
							<StepLabel>
								<div className="m-auto">
									<p
										className={`${
											item.active ? "text-emerald-500" : "text-gray-300"
										} rounded-lg flex m-auto justify-center`}
									>
										{item.title}
									</p>
									<p
										className={`${
											item.active ? "bg-emerald-500" : "bg-gray-300"
										} rounded-lg leading-3`}
									>
										.
									</p>
								</div>
							</StepLabel>
						</div>
					))}
				</Stepper>
			</div>
		</div>
	);
}

export default SectionSteps;
