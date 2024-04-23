import React from "react";
import DateSlider from "../DateSlider";

export default function RCard2() {
  return (
    <>
      <div className="my-8 mx-10 ">
        <div className="flex mb-10">
          <p className="text-[#000000] text-xl font-bold w-[250px] my-auto">
            Pick a time slot
          </p>
          <hr className="w-full my-auto p-[0.02rem] bg-[#D1D5D1]  mr-1 " />
          <img src="calender.png" alt="" className=" my-auto" />
        </div>
        <div  className=" border-[1px] border-[#E5E5E5]  rounded-3xl p-6  ">
            <div className=" p-2  mr-3">
            <DateSlider/>
            </div>
        
        </div>
        
      </div>
    </>
  );
}
