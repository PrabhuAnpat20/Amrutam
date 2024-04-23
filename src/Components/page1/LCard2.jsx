import React from "react";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function LCard2() {
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
            I Specialize In
          </p>
        </div>
        <div className=" py-8 flex justify-evenly mr-28">
          <img src="health.png" alt="" />
          <img src="Skin.png" alt="" />
          <img src="Immunity.png" alt="" />
          <img src="Hair.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default LCard2;
