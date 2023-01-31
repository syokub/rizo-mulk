// import React from 'react'
// import SectionApartmentDetails from '../../Sections/PostPageSections/SectionApartmentDetails/SectionApartmentDetails';

import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import SecondaryBtn from "../../Components/Buttons/SecondaryBtn";
import SectionApartmentDetails from "../../Sections/PostPageSections/SectionApartmentDetails/SectionApartmentDetails";
import SectionApartmentInfo from "../../Sections/PostPageSections/SectionApartmentInfo/SectionApartmentInfo";
import SectionApartmentProperties from "../../Sections/PostPageSections/SectionApartmentProperties/SectionApartmentProperties";
import SectionCategory from "../../Sections/PostPageSections/SectionCategory/SectionCategory";
import SectionContactDetails from "../../Sections/PostPageSections/SectionContactDetails/SectionContactDetails";
import SectionMap from "../../Sections/PostPageSections/SectionMap/SectionMap";
import SectionPriceDetails from "../../Sections/PostPageSections/SectionPriceDetails/SectionPriceDetails";
import SectionSteps from "../../Sections/PostPageSections/SectionSteps/SectionSteps";


export const AddPost = () => {
  return (
		<div className="px-20 ">
			<div>
				<SectionSteps />
			</div>
			<div>
				<SectionCategory />
			</div>
			<div>
				<SectionMap />
			</div>
			<div>
				<SectionApartmentInfo />
			</div>
			<div>
				<SectionApartmentDetails />
			</div>
			<div>
				<SectionApartmentProperties />
			</div>
			<div>
				<SectionPriceDetails />
			</div>
			<div>
				<SectionContactDetails />
			</div>
			<div className="flex justify-center m-auto pt-10 pb-20 gap-2">
				<SecondaryBtn>Сохранить как черновик</SecondaryBtn>
			  <PrimaryBtn>Опубликовать</PrimaryBtn>
			  
			</div>
		</div>
	);
}
export default AddPost;