import React from "react";
import Clouds from "../../assets/clouds.svg";
import Rocket from "../../assets/rocket.svg";
import Planet from "../../assets/planet.svg";

const Hero = () => {
  const CloudBG = {
    backgroundImage: `url(${Clouds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "bottom",
  };
  return (
    <>
      <div
        style={CloudBG}
        className="relative bg-primary flex justify-center items-center overflow-hidden min-h-[650px]"
      >
        <div className="container text-white grid grid-cols-1 md:grid-cols-2 place-items-center">
          {/* text section */}
          <div className=" mt-20 text-center md:text-left items-center md:items-start space-y-6 py-10 z-10">
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              className="uppercase text-base text-white/80 "
            >
              expLORE THE UNIVERSE
            </p>
            <h1
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="300"
              className="capitalize text-4xl md:text-6xl font-bold md:leading-[4.5rem]"
            >
              start Exploring <br />
              All over the Space
            </h1>
            <p
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="500"
              className="text-lg"
            >
              Start to Explore in the Space, Navigate and discover all the
              wonders of the universe.
            </p>
            <div data-aos="fade-up" data-aos-delay="700" data-aos-offset="0">
              <button className="shadow-custom-inset bg-secondary px-8 py-2 rounded-full hover:scale-105 transition duration-200">
                Get started
              </button>
            </div>
          </div>
          {/* rocket */}
          <div className="relative">
            <div
              data-aos="fade-up-right"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <img
                className="max-h-[550px] relative z-10  animate-rocket"
                src={Rocket}
                alt=""
              />
            </div>
            <img
              data-aos="fade"
              data-aos-offset="0"
              data-aos-ease="ease-out-quad"
              data-aos-delay="600"
              src={Planet}
              alt=""
              className="h-[150px] absolute top-[10px] -left-36 opacity-90"
            />
            <img
              data-aos="fade"
              data-aos-offset="0"
              data-aos-ease="ease-out-quad"
              data-aos-delay="900"
              src={Planet}
              alt=""
              className="h-[70px] absolute -top-[10px] -right-20 opacity-70"
            />
          </div>
        </div>
        {/* animated clouds */}
        {/* <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000"> */}
        <img
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="1000"
          className="absolute bottom-[-180px] md:bottom-[-100px] right-0 h-96 opacity-80 md:translate-y-40 lg:translate-y-14"
          src={Clouds}
          alt=""
        />
        {/* </div> */}
      </div>
    </>
  );
};

export default Hero;
