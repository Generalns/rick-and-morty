import { Swiper, SwiperSlide } from "swiper/react";
import {
	Autoplay,
	Pagination,
	Navigation,
	EffectFade,
	EffectCards,
} from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import Link from "next/link";
import Button from "./Button";
import { IoLocationSharp } from "react-icons/io5";
const Hero = () => {
	return (
		<>
			<div
				className={`absolute w-full h-screen z-10 flex justify-center items-center`}
				style={{
					background: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",
				}}
			>
				<div className="container text-white font-bold flex  items-center ">
					<div className="w-full px-4 lg:w-7/12">
						<p className="text-5xl sm:text-6xl md:text-7xl mb-8">
							Rick & Morty
						</p>
						<p className="text-lg sm:text-2xl md:text-3xl">
							Take a big step into the most complex structure of our multiverses
							and science
						</p>
						<div className="flex justify-end sm:justify-start my-8">
							<Button
								link="/locations"
								text={"Locations"}
								children={<IoLocationSharp className="text-xl sm:text-2xl" />}
							/>
						</div>
					</div>
					<div className="hidden lg:flex  justify-center items-center w-5/12 ">
						<Swiper
							grabCursor={true}
							modules={[EffectCards]}
							effect={"cards"}
							className="mySwiper w-8/12 h-[70vh] "
						>
							<SwiperSlide className="relative">
								<Link href="/locations">
									<div
										className="absolute top-0 w-full h-full z-20 flex justify-center items-center"
										style={{
											background:
												"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",
										}}
									>
										<p className="text-3xl">Locations</p>
									</div>
								</Link>
								<Image
									src={"/images/locations.jpg"}
									alt="BG"
									layout="fill"
									objectFit="cover"
								/>
							</SwiperSlide>
							<SwiperSlide className="relative">
								<Link href="/residents">
									<div
										className="absolute top-0 w-full h-full z-20 flex justify-center items-center"
										style={{
											background:
												"linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))",
										}}
									>
										<p className="text-3xl">Residents</p>
									</div>
								</Link>
								<Image
									src={"/images/residents.png"}
									alt="BG"
									layout="fill"
									objectFit="cover"
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination, Navigation, EffectFade]}
				navigation={true}
				centeredSlides={true}
				effect={"fade"}
				className="mySwiper relative w-full h-screen"
			>
				<SwiperSlide>
					<Image
						src={"/images/hero/1.png"}
						alt="BG"
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={"/images/hero/2.jpg"}
						alt="BG"
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={"/images/hero/3.jpg"}
						alt="BG"
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={"/images/hero/4.jpg"}
						alt="BG"
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={"/images/hero/5.png"}
						alt="BG"
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src={"/images/hero/6.jpg"}
						alt="BG"
						layout="fill"
						objectFit="cover"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
export default Hero;
