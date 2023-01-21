import React from 'react'
import CardApartment from '../../Components/Cards/CardApartment'
import CardApartmentBest from '../../Components/Cards/CardApartmentBestPrice'
import CardRounded from '../../Components/Cards/CardRounded'
import MainContainer from '../../Components/Containers/MainContainer'
import FilterSection from '../../Sections/FilterSection/FilterSection'
import SectionPartner from '../../Sections/SectionPartner/SectionPartner'
import SectionTopSellers from '../../Sections/SectionTopSellers/SectionTopSellers'
import { BuildingCompanies } from '../../_mocks/BuildingCompanies'

export const MainPage = () => {

  return (
		<div className="px-20 py-4">
			<div className='py-4'>
				<MainContainer className="m-0">
					{BuildingCompanies.map((item) => {
						return (
							<CardRounded key={item.id} src={item.src} title={item.title} />
						);
					})}
				</MainContainer>
		  	</div>
			<div>
				<FilterSection/>
			</div>
			<div>
				<CardApartmentBest />
			</div>
			<div>
				<CardApartment />
			</div>
			<div>
				<SectionTopSellers />
			</div>
			<div>
				<SectionPartner />
			</div>
		</div>
	);
}
