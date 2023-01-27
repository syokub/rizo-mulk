/* eslint-disable jsx-a11y/alt-text */
import { DirectionsSubway, FavoriteBorder, Home, SquareFoot } from '@mui/icons-material'
import { Divider } from '@mui/material'
import React from 'react'
import { BuildingCompanies } from '../../_mocks/BuildingCompanies'
import FavoriteBtn from '../Buttons/FavoriteBtn'
import ContainerItems from '../Containers/ContainerItems'
import NavContainer from '../Containers/NavContainer'

export const CardApartment = () => {

  return (
		<div className="m-auto py-4 ">
			<div className="flex justify-between px-2 items-center ">
				<p className='font-semibold text-2xl'>Рекомендации для вас</p>
			  	<p className='flex justify-between'>
				  <p className='opacity-60'>Сортировать:</p>
				  <p className='font-semibold font-base'>Популярный</p>
				</p>
			</div>
			<ContainerItems>
				{BuildingCompanies?.map((item) => {
					return (
						<div
							key={item.id}
							className="m-2 w-[31.5%] bg-white rounded-lg cursor-pointer"
						>
							<div className="w-full">
								<img
									className="w-full h-64 rounded-t-lg -z-1 "
									src={item.src}
									alt={item.comment}
								/>
							</div>
							<div className="p-3">
								<div className="flex justify-between items-center">
									<div className=" flex items-center">
										<p className="text-2xl font-semibold">{item.monthly}</p>
										<p className="ml-2 text-sm opacity-40"> /месяц</p>
									</div>
									<FavoriteBtn>
										<FavoriteBorder className="w-1.5 h-1" />
									</FavoriteBtn>
								</div>
								<div className="text-base">{item.comment}</div>
								<div className="text-sm opacity-40">{item.address}</div>
							</div>
							<Divider />
							<div className="flex p-3 justify-between">
								<NavContainer>
									<DirectionsSubway className="text-emerald-500" />
									<p className="text-sm opacity-60 ">{item.toRailway}</p>
								</NavContainer>
								<NavContainer>
									<Home className="text-emerald-500" />
									<p className="text-sm opacity-60">{item.toRailway}</p>
								</NavContainer>
								<NavContainer>
									<SquareFoot className="text-emerald-500" />
									<p className="text-sm opacity-60">{item.space} м2</p>
								</NavContainer>
							</div>
						</div>
					);
				})}
			</ContainerItems>
		</div>
	);
}

export default CardApartment;