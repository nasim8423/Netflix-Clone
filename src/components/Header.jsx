import React from "react";
import logo from "./../Image/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='h-screen w-[100%] bg-[url("./Image/header-image.png")] bg-center bg-cover'>
        <div className="  bg-[rgba(0,0,0,0.7)] h-screen w-[100%]">
          <div className="nav max-w-[1200px] mx-auto flex justify-between items-center  py-5 px-5">
            {/*----- logo start here ----*/}

            <div className="logo lg:w-[160px] md:w-[160px] sm:w-[160px] w-[140px] px-3">
              <Link to="/"><img src={logo} alt="" /></Link>
            </div>

            {/*----- logo end here ----*/}

            {/*---- English button start here */}

            <div className="btn flex justify-between items-center ">
              <div className="cursor-pointer lg:mr-3 md:mr-3 sm:mr-3 ">
                <button className=" ">
                  <select className="cursor-pointer bg-[#111112] text-white lg:px-4 pr-2 md:px-4 sm:px-4 px-2 py-1 rounded-md border  opacity-70">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </button>
              </div>

              {/*------- Sign button start here -------*/}

              <div className=" bg-[#e50815] text-white font-bold lg:px-4 md:px-4 sm:px-4 px-2.5 py-1 rounded-md ml-2 ">
               <Link to = {"/signin"}> <button className="">Sign In</button></Link> 
              </div>

              {/*------- Sign button end here -------*/}
            </div>
            {/*---- English button end here */}
          </div>

          {/*-------- Center content start -------*/}

          <div className="main lg:mt-[210px] md:mt-[170px] sm:mt-[170px] mt-[90px] px-3 font-primary">
            <div className="text-center text-white">
              <h1 className="lg:text-5xl md:text-5xl sm:text-5xl text-3xl font-bold mb-3 px-3">
                Unlimited movies, TV shows and more
              </h1>
              <p className="lg:text-2xl md:text-2xl  sm:text-2xl  text-xl font-[400] mb-4 px-3">
                Watch anywhere. Cancel anytime.
              </p>

              <p className="lg:text-xl md:text-xl  sm:text-xl  text-lg  mb-5 px-3">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              {/*-------- Center content end -------*/}

              {/*------ input field and button start --------*/}

              <div className=" sm:flex justify-center items-center flex-wrap cursor-pointer  rounded-md px-5">
                <input
                  className="lg:w-[390px] md:w-[380px] sm:w-[370px] w-[100%] px-5 py-4  rounded-md bg-[#1d1e2e] text-white border border-gray-400 opacity-80 outline-none md:mb-0 sm:mb-0 mb-3  "
                  type="text"
                  placeholder="Enter Address"
                />
                <div className="flex items-center justify-center relative">
                  <p className="bg-[#e50518] w-[205px] px-5 py-4 ml-3 pr-2 rounded-md text-xl flex items-center gap-3">
                    Get Started
                    <div className="text-3xl">
                      <MdKeyboardArrowRight />
                    </div>
                  </p>
                </div>
              </div>
              {/*------ input field and button end --------*/}
            </div>
          </div>
        </div>
      </div>

      {/*------ hr Line start here --------*/}

      <div className="bg-gray-700 h-[10px]"></div>

      {/*------ hr Line end here --------*/}
    </>
  );
};

export default Header;
