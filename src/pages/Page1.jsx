import React from "react";
import Banner2 from "../Components/Banner2";
import LCard1 from "../Components/page1/LCard1";
import LCard2 from "../Components/page1/LCard2";
import LCard3 from "../Components/page1/LCard3";
import LCard4 from "../Components/page1/LCard4";
import LCard5 from "../Components/page1/LCard5";
import RCard1 from "../Components/page1/RCard1";
import RCard2 from "../Components/page1/RCard2";
import Rcard3 from "../Components/page1/Rcard3";
import RCard4 from "../Components/page1/RCard4";

function Page1() {
  return (
    <>
      <div className=" mx-24 ">
        <Banner2 />
        <div className=" grid grid-cols-8 gap-6 mt-12 my-14">
          <div className=" col-span-4">
            <LCard1 />
            <LCard2 />
            <LCard3 />
            <LCard4 />
            <LCard5 />
          </div>
          <div className=" col-span-4 border-[1px] border-[#E8E8E8] rounded-2xl h-[1070px]">
            <div className=" flex justify-between p-3 border-[1px] border-[#E8E8E8] mx-3 mt-6 rounded-xl px-8 mx-7">
              <p className=" text-[#000000] text-xl font-medium">
                Appointment Fee
              </p>
              <p className=" text-xl font-medium text-[#3A643B]">₹699.00</p>
            </div>
            <RCard1 />
            <RCard2 />
            <Rcard3 />
            <RCard4 />
            <div className=" flex justify-center my-12">
              <button className=" bg-[#3A643B] text-xl text-white p-3   px-32 rounded-md my-auto  ">
                Make an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
