import { AccessTime, DateRange, TextSnippet } from "@mui/icons-material";

export const sellTyle = [
	{
		id: 1,
		typeId: 1,
		title: "Продать",
		icon: <TextSnippet />,
	},
	{
		id: 2,
		typeId: 2,
		title: "Сдать длительно",
		icon: <DateRange />,
	},
	{
		id: 3,
		typeId: 3,
		title: "Сдать посуточно",
		icon: <AccessTime />,
	},
];
