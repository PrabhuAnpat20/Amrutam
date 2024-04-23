import React from "react";

export default function Navbar() {
  return (
    <>
      <div className=" bg-[#FFF7E2] flex p-4 justify-between  px-20 sticky top-0 z-20">
        <div>
          <img src="logo.png" alt="Amrutam" className=" w-[300px] my-auto" />
        </div> 
        <div className=" flex my-auto text-[#474747]  font-medium text-[18px] mr-72">
          <p className=" mx-4">Home</p>
          <p className=" mx-4 text-[#3A643B] font-bold">Find Doctors</p>
          <p className=" mx-4 ">About Us</p>
        </div>
        <div className=" my-auto">
          <button className=" border-[1px] border-solid font-medium   border-[#3A643B] text-[#3A643B]  p-4 px-6 mx-3 rounded-lg">Login</button>
          <button className=" bg-[#3A643B] text-[#FFFFFF] p-4 px-6  mx-3 rounded-lg">Sign-up</button>
        </div>
      </div>
    </>
    
  );
}
