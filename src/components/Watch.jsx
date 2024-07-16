import React from 'react'
import feature3 from "./../Image/feature-3.png"

const Watch = () => {
  return (
    <>
    <div className="bg-black  text-white font-primary px-4 lg:py-[72px] md:py-[72px] sm:py-[70px] py-8 relative">
      <div className="main-feature max-w-[1200px] mx-auto md:flex  justify-between items-center gap-[50px] px-5 ">
        {/*---- left-content  --------*/}
        <div className="left-content ">
          <h1 className="lg:text-5xl md:text-3xl sm:text-3xl text-2xl text-center font-[700] mb-4">
          Watch everywhere
          </h1>
          <p className="lg:text-xl md:text-xl sm:text-xl  text-center">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>

        {/*---- right-content  --------*/}
        <div className="right-content py-10">
          <img src={feature3} alt="" />
        </div>
      </div>
    </div>

    <div className="bg-gray-700 h-[10px]"></div>

    
  </>


  )
}

export default Watch