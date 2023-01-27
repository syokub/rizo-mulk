import { BedroomParent, Cottage, Garage, Map, MapsHomeWork, PinDrop } from "@mui/icons-material";

export const apartmentType = [
	{
		id: 1,
		typeId: 1,
		title: "Квартира",
		icon: <Cottage />,
	},
	{
		id: 2,
		typeId: 2,
		title: "Комната",
		icon: <BedroomParent />,
	},
	{
		id: 3,
		typeId: 3,
		title: "Дом",
		icon: <MapsHomeWork />,
	},
	{
		id: 4,
		typeId: 4,
		title: "Гараж",
		icon: <Garage />,
	},
	{
		id: 5,
		typeId: 5,
		title: "Коммерческая",
		icon: <Map />,
	},
	{
		id: 6,
		typeId: 6,
		title: "Участок",
		icon: <PinDrop />,
	},
];