import React from "react";

import download from "../Image/feature-2.png";

const Download = () => {
  return (
    <>
      <div className="bg-black  text-white font-primary px-4 lg:py-[72px] md:py-[72px] sm:py-[70px] py-8 relative">
        <div className="main-feature max-w-[1200px] mx-auto md:flex  justify-between items-center gap-[40px] px-5 ">
          {/*------ left download-image start here ----- */}

          <div className="right-content py-10">
            <img src={download} alt="" />
          </div>

          {/*------left download-image end here ----- */}

          {/*---- right-content start here  --------*/}

          <div className="left-content ">
            <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-2xl text-center font-[700] mb-4">
              Download your shows to watch offline
            </h1>
            <p className="lg:text-xl md:text-xl sm:text-xl  text-center">
              Save your favourites easily and always have something{" "}
              <br className=" hidden lg:block md:block sm:block" />
              to watch.
            </p>
          </div>

          {/*---- right-content end here  --------*/}
        </div>
      </div>

      <div className="bg-gray-700 h-[10px]"></div>
    </>
  );
};

export default Download;
