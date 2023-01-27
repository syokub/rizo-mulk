import React from 'react'
import { Add, DarkMode, Favorite, NearMe } from '@mui/icons-material';
import {  Divider, Grid } from '@mui/material';
import { MainContainer } from '../../Components/Containers/MainContainer';
import NavContainer from '../../Components/Containers/NavContainer';
import { Link } from '../../Components/NavLink/NavLink';
import { ReactComponent as Logo } from "../../Assets/Logo/Logo.svg";
import PrimaryBtn from '../../Components/Buttons/PrimaryBtn';
import SecondaryBtn from '../../Components/Buttons/SecondaryBtn';
import { useNavigate } from 'react-router-dom';

export const Header = ({ headerClass }) => {
	const navigate = useNavigate();
	
  return (
		<div  className='bg-white'>
			<div className="px-20 py-4 flex justify-between">
				<div className="flex justify-between gap-2">
					<NavContainer>
						<Link opacity={"60"} textsize={"sm"}>
							Местоположение
						</Link>
						<Link classname={"flex items-center"}>
							<NearMe sx={{ width: "12px", height: "12px" }} />
							<p>Выберите регион</p>
						</Link>
					</NavContainer>
				</div>
				<div className=''>
					<MainContainer>
						<Link opacity={"60"} classname={"flex items-center"}>
							<DarkMode sx={{ width: "14px", height: "14px" }} />
							<p>Ночной режим</p>
						</Link>
						<Link opacity={"60"}>О проекте</Link>
						<Link opacity={"60"}>Реклама</Link>
						<Link opacity={"60"}>Как подать объявление?</Link>
						<Link opacity={"60"}>Контакты</Link>
						<Link opacity={"100"} black>
							Russian
						</Link>
					</MainContainer>
				</div>
			</div>
			<Divider />
			<div
				className='items-center py-4 px-20 flex justify-between '
			>
				<Grid item xs={6}>
					<NavContainer>
						<Link to='/'>
							<Logo />
						</Link>
						<Link opacity={"100"} textsize={"lg"} classname={"font-medium"}>
							Аренда
						</Link>
						<Link opacity={"100"} textsize={"lg"} classname={"font-medium"}>
							Продажа
						</Link>
						<Link opacity={"100"} textsize={"lg"} classname={"font-medium"}>
							Новостройки
						</Link>
						<Link opacity={"100"} textsize={"lg"} classname={"font-medium"}>
							Ипотека
						</Link>
						<Link opacity={"100"} textsize={"lg"} classname={"font-medium"}>
							Как купить?
						</Link>
					</NavContainer>
				</Grid>
				<Grid item xs={5}>
					<div className="flex gap-3 w-auto justify-between">
						<SecondaryBtn>
							<Favorite />
						</SecondaryBtn>
						<SecondaryBtn>Войти</SecondaryBtn>
					  <PrimaryBtn onClick={() => { navigate('/addpost');  console.log("ssss")}}>
							<Add />
							Добавить объявление
						</PrimaryBtn>
					</div>
				</Grid>
			</div>
		</div>
	);
}

export default Header;