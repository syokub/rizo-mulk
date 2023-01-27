import React from 'react'
import PrimaryBtn from '../../../Components/Buttons/PrimaryBtn';
import ContainerItems from '../../../Components/Containers/ContainerItems';
import { Partnership } from '../../../_mocks/Partnership';

export const SectionPartner = () => {
  return (
		<div className="py-4">
			<div className="flex p-10 rounded-lg justify-between bg-white">
				<div className=" w-[33%] bg-red-300 rounded-lg p-6  bg-[url('https://img.freepik.com/premium-photo/external-view-contemporary-house-with-pool-dusk_190619-224.jpg')]">
					<div className="grid float-left gap-4 justify-items-start">
						<p className="font-bold text-4xl">Партнерская программая</p>
						<p className='font-medium text-xl'>
							Найдите место своей мечты, в котором вы найдете более 10 000
							объектов недвижимости.
						</p>
						<PrimaryBtn>Просмотр свойств</PrimaryBtn>
					</div>
				</div>
				<div className="w-[66%] bg-white p-6 rounded-lg ">
					<ContainerItems>
						{Partnership.map((item) => {
							return (
								<div className="grid flex items-top w-1/2 my-2 cursor-pointer px-8  ">
									{item.icon}
									<p className="font-semibold text-2xl">{item.title}</p>
									<p className="opacity-70">{item.info}</p>
								</div>
							);
						})}
					</ContainerItems>
				</div>
			</div>
		</div>
	);
}

export default SectionPartner;