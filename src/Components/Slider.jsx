import React, { useEffect, useState } from "react";
import slider from "../assets/slider-1.jpg";
import slider1 from "../assets/slider-2.jpg";

const Slider = () => {
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const setIntervalId = setInterval(() => {
      setIsToggled((prevIsToggled) => !prevIsToggled);
    }, 2000);
    return () => clearInterval(setIntervalId);
  }, []);

  return (
    <>
      <div>
        {isToggled ? (
          // <div className="relative">
          //   <img src={slider1} className="w-[90%] h-[200px] pl-10 lg:w-[70%] lg:mx-36 lg:p-2 lg:h-[300px] xl:w-[50%] xl:place-items-center" alt="" />
          //   <p className="absolute right-14 top-34 text-3xl font-bold text-red-500 md:absolute  md:right-28 lg:right-52 lg:my-20 xl:absolute xl:right-96 xl:my-20">50% offer</p>
          // </div>
          <div>
            {/* IMAGE + BADGE */}
            <div className="relative">
              <img
                src={slider1}
                className="w-full p-2 h-[200px] bg-cover md:w-[100%] lg:w-[100%] lg:h-[250px] xl:h-[400px]"
                alt=""
              />
              <h2
                className="absolute top-16 left-10 text-xl font-bold text-orange-700 md:text-2xl md:left-28 lg:left-32 lg:text-3xl xl:right-96 xl:text-4xl">
                50% offer <br />
                <span className="text-white">For Online Order</span>
              </h2>
            </div>
          </div>
        ) : (
          <div className="relative font-poppins p-1">
            <img
              src={isToggled ? slider1 : slider}
              alt="slider"
              className="w-full h-[200px] bg-cover my-2 md:w-[100%] lg:w-[100%] lg:h-[250px] xl:h-[400px]"
            />

            <div className="absolute top-10 text-white pl-2 text-l xl:top-28 md:absolute md:left-14 lg:absolute lg:left-20 lg:text-2xl">
              <h1 className="text-sky-400">MEN'S</h1>
              <span>FASHION</span>
              <p>New Collections</p>
              <span>Arrival in store</span> <br />
              <button className="bg-sky-600 p-1 rounded-xl text-xs cursor-pointer">
                SHOP NOW
              </button>
            </div>
            <div className="absolute right-1.5 top-10 text-white pl-2 xl:top-28  text-l md:absolute md:right-14 lg:absolute lg:right-20 lg:text-2xl">
              <h1 className="text-pink-400">WOMEN'S</h1>
              <span>FASHION</span>
              <p>New Collections</p>
              <span>Arrival in store</span> <br />
              <button className="bg-pink-400 p-1 rounded-xl text-xs cursor-pointer">
                SHOP NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Slider;
