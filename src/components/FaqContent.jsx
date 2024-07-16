import React from "react";
import { data } from "./FaqData";
import Faq from "./Faq";
import { MdKeyboardArrowRight } from "react-icons/md";

const FaqContent = () => {
  return (
    <>
      <div className="py-5">
        <div className="lg:text-5xl md:text-5xl text-3xl font-bold py-10 text-white text-center px-5">
          <h1>Frequently Asked Questions</h1>
        </div>

        {/*------ Faq data mapping start ---------*/}

        {data.map((e, i) => {
          return <Faq key={e.i} tittle={e.tittle} desc={e.desc} />;
        })}

        {/*------ Faq data mapping end ---------*/}

        <div className="">
        
          <div className="py-14">
          <div className="px-5 text-xl">
         <p className="text-white text-center pb-2">Ready to watch? Enter your email to create or restart your membership.</p>
         </div>
            {/*----- Get started sign btn start ------*/}
            <div className=" sm:flex justify-center items-center flex-wrap cursor-pointer rounded-md px-5">
              <input
                className="lg:w-[390px] md:w-[380px] sm:w-[370px] w-[100%] px-5 py-4  rounded-md bg-[#1d1e2e] text-white border border-gray-400 opacity-80 outline-none md:mb-0 sm:mb-0 mb-3 "
                type="text"
                placeholder="Enter Address"
              />
              <div className="flex items-center justify-center  text-white  relative">
                <p className="bg-[#e50518] w-[205px] px-5 py-4 ml-3 pr-2 rounded-md text-xl flex items-center gap-3">
                  Get Started
                  <div className="text-3xl">
                    <MdKeyboardArrowRight />
                  </div>
                </p>
              </div>
            </div>
            {/*----- Get started sign btn end ------*/}
          </div>

          {/*---- hr line start here -----*/}
          <div className="bg-gray-700 h-[10px]"></div>
          {/*---- hr line end here -----*/}
        </div>
      </div>
    </>
  );
};

export default FaqContent;
