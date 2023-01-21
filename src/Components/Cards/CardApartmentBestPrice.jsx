import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Button, Divider, IconButton } from "@mui/material";
import NavContainer from "../Containers/NavContainer";
import { ArrowBack, ArrowForward, AutoAwesome, DirectionsSubway, FavoriteBorder, Home, SquareFoot } from "@mui/icons-material";
import FavoriteBtn from "../Buttons/FavoriteBtn";
import { BuildingCompanies } from "../../_mocks/BuildingCompanies";
import ContainerItems from "../Containers/ContainerItems";

export const  CardApartmentBest = ()=> {
    const [swiperRef, setSwiperRef] = useState(null);
    const [realIndex, setRealIndex] = useState(0)
    const PER_PAGE = 3;
    const SWIPES = Number(Object.keys(BuildingCompanies).length) - PER_PAGE;


 const prevHandler = () => {
     swiperRef.slidePrev();
      setRealIndex(swiperRef.realIndex);
  };

  const nextHandler = () => {
      swiperRef.slideNext();
      setRealIndex(swiperRef.realIndex)
  };

	return (
		<div className="m-auto py-4">
			<div className="flex justify-between px-2">
				<p className="font-semibold text-2xl">Выгодные предложения</p>
				<div className="right-0 flex justify-end">
					<IconButton
						disabled={realIndex !== 0 ? false : true}
						onClick={prevHandler}
					>
						<ArrowBack />
					</IconButton>
					<IconButton
						disabled={realIndex < SWIPES ? false : true}
						onClick={nextHandler}
					>
						<ArrowForward className=" border-dashed border-blue-300" />
					</IconButton>
				</div>
			</div>
			<Swiper
				slidesPerView={PER_PAGE}
				slidesPerGroup={1}
				spaceBetween={15}
				loopFillGroupWithBlank={true}
				modules={[Pagination]}
				allowTouchMove={false}
				onSwiper={(swiper) => setSwiperRef(swiper)}
				className="py-10"
				// loop={true}
				// pagination={{
				// 	clickable: true,
				// }}
				// noSwiping={true}
			>
				<div>
					<ContainerItems>
						{BuildingCompanies?.map((item) => {
							return (
								<SwiperSlide>
									<div
										key={item.id}
										className="m-2 bg-white rounded-lg cursor-pointer "
									>
										<div className="w-full relative">
											<img
												className="w-full h-64 rounded-t-lg -z-1 "
												src={item.src}
												alt={item.comment}
											/>
											<p className="rounded-lg bg-emerald-500 text-white p-2 absolute top-3 left-3 ">
												<AutoAwesome /> Рекомендовано
											</p>
										</div>
										<div className="p-3">
											<div className="flex justify-between items-center">
												<div className=" flex items-center">
													<p className="text-2xl font-semibold">
														{item.monthly}
													</p>
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
								</SwiperSlide>
							);
						})}
					</ContainerItems>
				</div>
				{/* <SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide> */}
			</Swiper>
		</div>
	);
}

export default CardApartmentBest;