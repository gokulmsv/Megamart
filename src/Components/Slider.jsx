import React, { useEffect, useState } from "react";
import slider from "../assets/slider-1.jpg";
import slider1 from "../assets/slider-2.jpeg";

const Slider = () => {
  
  const[isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const setIntervalId = setInterval(() =>{
      setIsToggled((prevIsToggled) => !prevIsToggled)
    }, 3000)
    return () => clearInterval(setIntervalId)
  }, [])

  return (
    <>
      <div>
        {isToggled ? (
          
          <div className="relative">
            <img src={slider1} className="w-[90%] h-[200px] pl-10 my-2 lg:w-[50%] lg:mx-80" alt="" />
            <p className="absolute right-14 top-34 text-2xl text-red-500 md:absolute md:right-28 lg:right-2/6">50% offer</p>
          </div>
          
        ) : (
          <div className="relative font-poppins p-1">
            <img
              src={isToggled ? slider1 : slider}
              alt="slider"
              className="w-full h-[200px] bg-cover my-2 lg:w-[80%] lg:h-[250px] lg:pl-56"
            />

            <div className="absolute top-10 text-white pl-2 text-l md:absolute md:left-14 lg:absolute lg:left-72 lg:text-2xl">
              <h1 className="text-sky-400">MEN'S</h1>
              <span>FASHION</span>
              <p>New Collections</p>
              <span>Arrival in store</span> <br />
              <button className="bg-sky-600 p-1 rounded-xl text-xs cursor-pointer">
                SHOP NOW
              </button>
            </div>
            <div className="absolute right-1.5 top-10 text-white pl-2 text-l md:absolute md:right-14 lg:absolute lg:right-[350px] lg:text-2xl">
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
