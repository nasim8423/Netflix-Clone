import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
// import item from "./../components/FaqData"

const Faq = ({ tittle, desc }) => {
  const [close, setClose] = useState(false);

  const closeHandle = () => {
    if (!close) {
      setClose(true);
    } else {
      setClose(false);
    }
  };
  return (
    <>
      {/*------ faq content start -------*/}

      <div className="px-5 mb-2">
        <div
          onClick={closeHandle}
          className="max-w-[1100px] mx-auto bg-[rgba(45,45,45)] text-white cursor-pointer"
        >
          <div className="flex justify-between items-center px-5 py-5 mb-1 duration-300">
            {/* left */}
            <div onClick={closeHandle}>
              <h1 className="sm:text-2xl text-xxl">{tittle}.</h1>
            </div>

            {/* right */}
            <div
              onClick={closeHandle}
              className="sm:text-4xl  text-2xl flex gap-2"
            >
              {close ? <RxCross2 /> : <FiPlus />}
            </div>
          </div>
        </div>

        <div className="">
          <div className="max-w-[1100px] mx-auto text-white bg-[rgba(45,45,45)] px-5 duration-300">
            {close ? <p className="py-5 text-xl">{desc}</p> : ""}
          </div>
        </div>
      </div>
      {/*------ faq content end -------*/}
    </>
  );
};

export default Faq;
