import React from "react";

const Footer = () => {
  return (
    <>
    
      {/*-------- Footer start here -------*/}
      
      <div className="main bg-black  text-white font-primary px-4 lg:py-[72px] md:py-[72px] sm:py-[70px] py-8 relative">
        <div className="max-w-[1100px] mx-auto sm:text-xl text-lg underline pl-2 px-3 sm:text-start text-center">
          Questions? Call 000-800-919-1694
        </div>{" "}
        <div className="max-w-[1100px] mx-auto grid  sm:grid-cols-4 grid-cols-2 lg:text-start md:text-start sm:text-start  text-center underline   px-3 ">
          <div className="py-5">
            <ul>
              <li className="py-4 text-[14px]">
                <a href="">FAQ</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Investor Relations</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Privacy</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Speed Test</a>
              </li>
            </ul>
          </div>

          <div className="py-5">
            <ul>
              <li className="py-4 text-[14px]">
                <a href="">Help Centre</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Jobs</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Cookie Preferences</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Legal Notices</a>
              </li>
            </ul>
          </div>

          <div className="py-5">
            <ul>
              <li className="py-4 text-[14px]">
                <a href="">Account</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Ways to Watch</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Corporate Information</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Only on Netflix</a>
              </li>
            </ul>
          </div>

          <div className="py-5">
            <ul>
              <li className="py-4 text-[14px]">
                <a href="">Media Centre</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Terms of Use</a>
              </li>
              <li className="py-4 text-[14px]">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        {/*------ English button start here ------*/}
        <div className="max-w-[1100px] mx-auto mb-5 pl-2 ">
          <div className="cursor-pointer lg:mr-3 md:mr-3 sm:mr-3 ">
            <button className=" ">
              <select className="cursor-pointer bg-[#111112] text-white lg:px-4 pr-2 md:px-4 sm:px-4 px-2 py-1 rounded-md border  opacity-70">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </button>
          </div>
        </div>
        {/*------ English button end here ------*/}



        <div className="max-w-[1100px] mx-auto pl-2 ">
          <p className="py-4">Netflix India</p>
        </div>
      </div>

      {/*-------- Footer end here -------*/}
    </>
  );
};

export default Footer;
 