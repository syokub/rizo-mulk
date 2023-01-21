import { FormControl, Grid, InputLabel, TextField } from '@mui/material';
// import googleMapReact from 'google-map-react';
import googleMapReact from "google-map-react";
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export const SectionMap = () => {
    const { handleSubmit, control } = useForm();
    const [defaultProps,setDefaultProps] = useState({
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  })


  return (
		<div className="py-4 gap-2">
			<div className="bg-white p-4">
				<form>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Controller
								name="type"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">
											Плетизмография
										</InputLabel>
										<TextField onChange={onChange} />
									</FormControl>
								)}
							/>
						</Grid>
						<Grid item xs={6}>
							<Controller
								name="plethysmography"
								control={control}
								render={({ field: { onChange, value } }) => (
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">tip</InputLabel>
										<TextField onChange={onChange} />
									</FormControl>
								)}
							/>
						</Grid>
					</Grid>
				</form>
			</div>
          <div className="p-4 bg-white">
              
				<googleMapReact
					bootstrapURLKeys={{ key: "", language: "ru", region: "ru" }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
				</googleMapReact>
			</div>
		</div>
	);
}

export default SectionMap;