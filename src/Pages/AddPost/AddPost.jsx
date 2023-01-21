import React from 'react'
import SectionCategory from '../../Sections/SectionCategory/SectionCategory';
import SectionMap from '../../Sections/SectionMap/SectionMap';
import SectionSteps from '../../Sections/SectionSteps/SectionSteps';

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
		</div>
	);
}
export default AddPost;