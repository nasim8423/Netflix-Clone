import React from "react";
import feaure from "./../Image/feature-1.png";

const Feature = () => {
  return (
    <>
      <div className="bg-black  text-white font-primary px-4 lg:py-[72px] md:py-[72px] sm:py-[70px] py-8 relative">
        <div className="main-feature max-w-[1200px] mx-auto md:flex  justify-between items-center gap-[40px] px-5 ">
          {/*---- left-content start here  --------*/}

          <div className="left-content ">
            <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-2xl text-center font-[700] mb-4">
              Enjoy on your TV
            </h1>
            <p className="lg:text-xl md:text-xl sm:text-xl  text-center">
              Watch on smart TVs, PlayStation, Xbox, <br />
              Chromecast, Apple TV, Blu-ray players and more.
            </p>
          </div>
          {/*---- left-content end here  --------*/}
          

          {/*---- right-content start here  --------*/}

          <div className="right-content py-10">
            <img src={feaure} alt="" />
          </div>
          {/*---- right-content end here  --------*/}
        </div>
      </div>

      {/*--------- hr line start here -----*/}
      
      <div className="bg-gray-700 h-[10px]"></div>

      {/*--------- hr line end here -----*/}
    </>
  );
};

export default Feature;
