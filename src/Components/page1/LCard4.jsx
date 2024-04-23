import React, { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
function LCard4() {
    useEffect(()=>{
        AOS.init({duration:"2000"});
    },[])
    
  return (
    <>
      <div className="  border-[1px]  border-[#DCDCDC] rounded-xl my-5" data-aos="zoom-in">
        <div
          className=" flex justify-between  px-5 rounded-t-xl"
          style={{
            background:
              "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
          }}
        >
          <p className="text-[#313131] p-3 text-xl font-medium ">
            My Work Experience
          </p>
        </div>
        <p className=" text-md font-bold text-[#3A643B] my-7 mx-8">
          I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
        </p>
        <hr className="w-[75%]  p-[0.02rem]  mx-8 my-7 bg-[#D1D5D1]" />
        <div className="  mr-20 ml-8">
          <div className=" flex justify-between my-4">
            <div className=" flex">
              <img src="experience.png" alt="" />
              <div className=" flex flex-col ml-3">
                <p className=" font-medium">Midtown Medical Clinic</p>
                <p className=" text-[#33354880] font-medium">Senior doctor</p>
              </div>
            </div>
            <p className=" text-[#333548B5]">2016-PRESENT</p>
          </div>
          <div className=" flex justify-between my-4 mb-9">
            <div className=" flex">
              <img src="experience.png" alt="" />
              <div className=" flex flex-col ml-3">
                <p className=" font-medium">Midtown Medical Clinic</p>
                <p className=" text-[#33354880] font-medium">Senior doctor</p>
              </div>
            </div>
            <p className=" text-[#333548B5] mr-7">2010-2015</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LCard4;
