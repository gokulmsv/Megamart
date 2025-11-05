import React, { useEffect, useState } from "react";
import slider from "../assets/slider-1.jpg";
import slider1 from "../assets/slider-2.jpeg";

const Slider = () => {
  
  const[isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const setIntervalId = setInterval(() =>{
      setIsToggled((prevIsToggled) => !prevIsToggled)
    }, 5000)
    return () => clearInterval(setIntervalId)
  }, [])

  return (
    <>
      <div>
        {isToggled ? (
          
          <div className="relative">
            <img src={slider1} className="w-[90%] h-[200px] pl-10 lg:w-[70%] lg:mx-36 lg:p-2 lg:h-[300px]" alt="" />
            <p className="absolute right-14 top-34 text-3xl font-bold text-red-500 md:absolute  md:right-28 lg:right-52 lg:my-20 xl:absolute xl:right-96 xl:my-20">50% offer</p>
          </div>
          
        ) : (
          <div className="relative font-poppins p-1">
            <img
              src={isToggled ? slider1 : slider}
              alt="slider"
              className="w-full h-[200px] bg-cover my-2 md:w-[80%] lg:w-[100%] lg:h-[250px] xl:h-[300px]"
            />

            <div className="absolute top-10 text-white pl-2 text-l xl:top-20 md:absolute md:left-14 lg:absolute lg:left-20 lg:text-2xl">
              <h1 className="text-sky-400">MEN'S</h1>
              <span>FASHION</span>
              <p>New Collections</p>
              <span>Arrival in store</span> <br />
              <button className="bg-sky-600 p-1 rounded-xl text-xs cursor-pointer">
                SHOP NOW
              </button>
            </div>
            <div className="absolute right-1.5 top-10 text-white pl-2 xl:top-20  text-l md:absolute md:right-14 lg:absolute lg:right-20 lg:text-2xl">
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
