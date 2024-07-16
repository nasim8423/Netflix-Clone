import React from "react";
import child from "./../Image/feature-4.png";

const Children = () => {
  return (
    <>
      <div className="bg-black  text-white font-primary px-4 lg:py-[72px] md:py-[72px] sm:py-[70px] py-8 relative">
        <div className="main-feature max-w-[1200px] mx-auto md:flex  justify-between items-center gap-[40px] px-5 ">
          {/*------- left children image start here -------*/}

          <div className="right-content py-10">
            <img src={child} alt="" />
          </div>
          {/*------- left children image end here -------*/}

          {/*---- right-content start here  --------*/}

          <div className="left-content ">
            <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-2xl text-center font-[700] mb-4">
              Create profiles for kids
            </h1>
            <p className="lg:text-xl md:text-xl sm:text-xl  text-center">
              Send children on adventures with their favourite <br /> characters
              in a space made just for them—free with your membership.
            </p>
          </div>
          {/*---- right-content end here  --------*/}
        </div>
      </div>
      {/*------- hr line start here -------*/}

      <div className="bg-gray-700 h-[10px]"></div>
      {/*------- hr line end here -------*/}
    </>
  );
};

export default Children;
