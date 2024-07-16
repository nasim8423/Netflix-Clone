import React from "react";

const SignIn = () => {
  return (
    <>
      <div className='h-screen w-[100%] bg-[url("./Image/header-image.png")] bg-center bg-cover'>
        <div className="bg-[rgba(0,0,0,0.6)] h-screen w-[100%]">
          {/*-------- Sign-Form start here -----------*/}
          <div className="main flex justify-center items-center h-screen text-white px-5 py-5 font-primary sm:pb-0 pb-[10px]">
            <div className="bg-black bg-opacity-75 lg:p-16 md:p-16 sm:p-15 pb-5 w-[500px] rounded-lg px-5">
              <h1 className=" py-4 text-3xl font-bold mb-4 ">Sign In</h1>

              {/*------ user input  ------*/}
              <div className="mb-4">
                <input
                  className="w-[100%] outline-none px-4 py-2 rounded-md bg-[#3333] border border-gray-600"
                  type="text"
                  placeholder="Enter email  or phone"
                />
              </div>
              {/*------- password input  --------*/}
              <div className="mb-4">
                <input
                  className="w-[100%] outline-none px-4 py-2 rounded-md bg-[#3333] border border-gray-600"
                  type="password"
                  placeholder="Password"
                />
              </div>

              {/*------- Sign In btn -------*/}
              <div className="mb-2">
                <button className="bg-[#e50815] w-[100%] px-4 py-2 rounded-md text-xl">
                  Sign In
                </button>
              </div>

              {/*------- Or -------*/}
              <div className="py-2">
                <p className="text-center">OR</p>
              </div>

              {/*------- Use a sign-in-code start hereU ----------*/}
              <div className="flex justify-center items-center mb-4">
                <button className="bg-slate-400 bg-opacity-30 py-2 px-5 text-lg rounded-md w-full">
                  Use a sign-in-code
                </button>
              </div>
              {/*------- Use a sign-in-code start hereU ----------*/}

              {/*------ Forgot password start here ------*/}

              <div className="flex justify-center items-center py-2">
                <p>Forgot password ?</p>
              </div>
              {/*------ Forgot password start here ------*/}

              {/*----- remeber and need help start ------*/}

              <div className="text-gray-400">
                <div className="flex justify-between items-center ">
                  {/*------ check box start here ------*/}
                  <div className="flex items-center  cursor-pointer gap-2">
                    <input className="w-5 h-5 " type="checkbox" />
                    <label className="cursor-pointer text-md mb-1 py-3 text-white">
                      Remember Me
                    </label>
                  </div>
                  {/*------ check box end here ------*/}
                </div>
              </div>

              {/*----- remeber and need help end ------*/}

              <div className="mb-4 text-gray-400">
                <p className="flex gap-2 text-sm">
                  New to Netflix ? <span className="text-white hover:underline cursor-pointer">Sign up now</span>
                </p>
              </div>

              <div className="">
                <p className="text-gray-400 text-xs">
                  This page is protected by google reCAPCHA to ensure you're not
                  a bot.{" "}
                  <span className="text-blue-700 cursor-pointer hover:underline">
                    Learn More
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/*-------- Sign-Form start here -----------*/}
        </div>
      </div>
    </>
  );
};

export default SignIn;
