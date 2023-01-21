import {ReactComponent as Partner1 } from "../Assets/Icons/Partner1.svg"
import {ReactComponent as Partner2 } from "../Assets/Icons/Partner2.svg"
import {ReactComponent as Partner3 } from "../Assets/Icons/Partner3.svg"
import { ReactComponent as Partner4 } from "../Assets/Icons/Partner4.svg"
import { ReactComponent as Partner } from "../Assets/Icons/PartnerProgram.jpg"


export const Partnership = [
	{
		id: 1,
		title: "Страхование собственности",
		info: "Мы предлагаем нашим клиентам защиту имущества, покрытие ответственности и страхование для их лучшей жизни.",
		icon: <Partner1 />,
	},
	{
		id: 2,
		title: "Лучшая цена",
		info: "Не знаете, сколько вы должны за недвижимость? Не надо беспокоиться, позвольте сделать цифры для вас.",
		icon: <Partner2 />,
	},
	{
		id: 3,
		title: "Самая низкая комиссия",
		info: "Вам больше не нужно договариваться о комиссиях и торговаться с другими агентами, это стоит всего 2%!",
		icon: <Partner3 />,
	},
	{
		id: 4,
		title: "Общий контроль",
        info: "Получите виртуальный тур и запланируйте посещения, прежде чем арендовать или купить недвижимость.",
        icon:<Partner4/>
	},
];
