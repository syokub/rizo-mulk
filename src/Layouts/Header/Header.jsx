import React from 'react'
import { Add, DarkMode, Favorite, NearMe } from '@mui/icons-material';
import {  Divider, Grid } from '@mui/material';
import { MainContainer } from '../../Components/Containers/MainContainer';
import NavContainer from '../../Components/Containers/NavContainer';
import { Link } from '../../Components/NavLink/NavLink';
import { ReactComponent as Logo } from "../../Assets/Logo/Logo.svg";
import PrimaryBtn from '../../Components/Buttons/PrimaryBtn';
import SecondaryBtn from '../../Components/Buttons/SecondaryBtn';

export const Header = ({headerClass}) => {
  return (
		<div style={{ backgroundColor: "#fff" }} className={headerClass}>
			<Grid container spacing={2} sx={{ paddingX: "80px", paddingY: "16px" }}>
				<Grid item xs={6}>
					<NavContainer>
						<Link>Местоположение</Link>
						<Link black>
							<NearMe sx={{ width: "12px", height: "12px" }} /> Выберите регион
						</Link>
					</NavContainer>
				</Grid>
				<Grid item xs={6}>
					<MainContainer>
						<Link>
							<DarkMode sx={{ width: "12px", height: "12px" }} /> Ночной режим
						</Link>
						<Link>О проекте</Link>
						<Link>Реклама</Link>
						<Link>Как подать объявление?</Link>
						<Link>Контакты</Link>
						<Link black>Russian</Link>
					</MainContainer>
				</Grid>
			</Grid>
			<Divider />
			<Grid container spacing={2} sx={{ paddingX: "80px", paddingY: "5px", alignItems:"center" }}>
				<Grid item xs={6}>
					<NavContainer>
						<Link style={{ opacity: "1" }}>
							<Logo />
						</Link>
						<Link medium black>
							Аренда
						</Link>
						<Link medium black>
							Продажа
						</Link>
						<Link medium black>
							Новостройки
						</Link>
						<Link medium black>
							Ипотека
						</Link>
						<Link medium black>
							Как купить?
						</Link>
					</NavContainer>
				</Grid>
				<Grid item xs={6}>
					<MainContainer >
						<SecondaryBtn><Favorite/></SecondaryBtn>
						<SecondaryBtn>Войти</SecondaryBtn>
						<PrimaryBtn>
							<Add />
							Добавить объявление
						</PrimaryBtn>
					</MainContainer >
				</Grid>
			</Grid>
		</div>
	);
}

export default Header;