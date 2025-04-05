import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings} className="shadow-sm">
        <div className="!flex items-center bg-gray-300 p-4 md:p-0 md:ps-6  flex-wrap md:flex-nowrap justify-center rounded-[10px]">
          <div className="flex flex-wrap justify-center">
            <div className="text-[23px] md:text-[40px] lg:text-5xl font-bold text-black">
              Lorem İpsum Dolor Amet
            </div>
            <div className=" md:text-base lg:text-lg my-4 text-black line-clamp-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              ab? Architecto tenetur ipsa sit facilis? Cum nostrum enim,
              reprehenderit dolore, molestias explicabo velit, id rerum quisquam
              distinctio expedita quibusdam sunt?
            </div>
            <div className="shadow-lg rounded-xl cursor-pointer text-2xl w-[200px] h-16 md:flex items-center justify-center bg-secondary-color text-white hover:scale-95 transition-transform duration-300 hidden  ">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239b785c-36b9-4aff-8a0b-97ad2396c47e/W+NIKE+COURT+VISION+LO+NN.png.jpg"
            alt=""
            className="h-52 slider-img md:h-auto object-cover  mb-5 md:mb-0 rounded-r-[10px] "
            width={"350px"}
          />
          <div className=" shadow-lg rounded-xl  cursor-pointer text-2xl w-[200px] h-16 md:hidden items-center justify-center bg-secondary-color text-white hover:scale-95 transition-transform duration-300 flex ">
            İncele
          </div>
        </div>
        <div className="!flex items-center bg-gray-300 p-4 md:p-0 md:ps-6  flex-wrap md:flex-nowrap justify-center rounded-[10px]">
          <div className="flex flex-wrap justify-center">
            <div className="text-[23px] md:text-[40px] lg:text-5xl font-bold text-black">
              Lorem İpsum Dolor Amet
            </div>
            <div className=" md:text-base lg:text-lg my-4 text-black line-clamp-5 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              ab? Architecto tenetur ipsa sit facilis? Cum nostrum enim,
              reprehenderit dolore, molestias explicabo velit, id rerum quisquam
              distinctio expedita quibusdam sunt?
            </div>
            <div className="shadow-lg rounded-xl cursor-pointer text-2xl w-[200px] h-16 md:flex items-center justify-center bg-secondary-color text-white hover:scale-95 transition-transform duration-300 hidden  ">
              İncele
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/239b785c-36b9-4aff-8a0b-97ad2396c47e/W+NIKE+COURT+VISION+LO+NN.png.jpg"
            alt=""
            className="h-52 slider-img md:h-auto object-cover  mb-5 md:mb-0 rounded-r-[10px] "
            width={"350px"}
          />
          <div className=" shadow-lg rounded-xl  cursor-pointer text-2xl w-[200px] h-16 md:hidden items-center justify-center bg-secondary-color text-white hover:scale-95 transition-transform duration-300 flex ">
            İncele
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
