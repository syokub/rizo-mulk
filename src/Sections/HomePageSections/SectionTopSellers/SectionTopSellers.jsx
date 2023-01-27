import { Avatar } from '@mui/material'
import React from 'react'
import SecondaryBtn from '../../../Components/Buttons/SecondaryBtn'
import ContainerItems from '../../../Components/Containers/ContainerItems'
import { Sellers } from '../../../_mocks/Sellers'

export const SectionTopSellers = () => {
  return (
		<div className=" py-4 flex justify-between">
			<div className="w-[66%] bg-white p-6 rounded-lg ">
				<div className="font-semibold text-2xl ">Лучшие продавцы</div>
				<ContainerItems>
					{Sellers.map((item) => {
						return (
							<div className="flex items-center w-1/3 my-2 cursor-pointer">
								<Avatar
									src={item.profilePic}
									alt={item.firstname}
									className="m-2 "
								/>
								<div className="grid content-center">
									<p>
										{item.firstname} {item.lastname}
									</p>
									<p className="opacity-60">{item.announcement} объявлений</p>
								</div>
							</div>
						);
					})}
				</ContainerItems>
			</div>
			<div className="w-[33%] bg-white rounded-lg bg-opacity-25  bg-[url('https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg')]">
				<div className="w-[70%] p-4 m-auto rounded-full  ">
					<div
						className="pt-10 rounded-full bg-[bg-gradient-radial from-purple-500 via-pink-500 to-red-500] radial"
					>
						<p className="mb-2 text-center text-emerald-500 text-2xl font-semibold">
							Поиск на карте
						</p>
						<div className="mb-2 text-center ">
							Ищите новостройки рядом с работой, парком или родственниками
						</div>
						<div className="mb-2 text-center">
							<SecondaryBtn>Найти на карте</SecondaryBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionTopSellers;
