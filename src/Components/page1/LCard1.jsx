import React from "react";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function LCard1() {
    useEffect(()=>{
        AOS.init({duration:"2000"});
    },[])
  return (
    <>
      <div className="  border-[1px]  border-[#DCDCDC] rounded-xl" data-aos="zoom-in">
        <div
          className=" flex justify-between  px-5 rounded-t-xl"
          style={{
            background:
              "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
          }}
        >
          <p className="text-[#313131] p-3 text-xl font-medium ">
            A Little About me
          </p>
          <button className=" bg-[#FFFFFF] text-[#585858]  border-[1px] border-[#3A643B] text-center my-2 rounded-xl  font-semibold text-md px-6 ">
            Follow +
          </button>
        </div>
        <div className="  mx-12 ">
          <p className=" text-[#33354880]   font-medium mt-10 ">
            Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
            Surat. love to work with all my hospital staff and seniour doctors.
            Completed my graduation in Gynaecologist Medicine from the
          </p>
          <div className=" flex my-4">
            <hr className="w-[80%] p-[0.02rem] my-5 bg-[#D1D5D1]" />
            <p className=" my-auto ml-7 text-black marker:">Read More</p>
          </div>
          <div className=" flex justify-between mb-3">
            <p className="text-[#313131]  text-lg font-medium my-auto">
              Language Spoken
            </p>
            <p className=" p-1  rounded-2xl text-[#505050]  text-lg bg-[#F7F7FC] my-auto px-6">
              English
            </p>
            <p className=" p-1  rounded-2xl text-[#505050]  px-6 text-lg bg-[#F7F7FC] my-auto">
              Hindi
            </p>
            <p className=" p-1  rounded-2xl text-[#505050]  px-6 text-lg bg-[#F7F7FC] my-auto">
              Telugu
            </p>
          </div>
          <div className=" my-8">
            <img src="socials.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
