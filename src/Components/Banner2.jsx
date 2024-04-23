import React from 'react'

export default function Banner2() {
  return (
    <>
    <div className=" mt-16   border-[#D8D8D8] border-[1px]   rounded-t-2xl   ">
        <div className=" ">
          <img src="banner2.png" alt="" className=" w-full rounded-t-xl  h-32" />
        </div>
        <div className=" flex   justify-between bg-[#FFFBF2]  px-10 pb-7 pt-6">
          <div className="  flex">
            <img src="profile2.png" alt=""  className="  mt-[-50px] w-[135px] mr-3"/>
            <div className=" flex flex-col my-auto mx-2 ">
              <div className=" flex">
                <p className=" text-xl font-medium">Dr. Bruce Wills</p>
                <img src="verified.png" alt="" className=" my-auto ml-2" />
              </div>
              <p className=" font-semibold text-[#3A643B]">Gynecologist</p>
              <img src="rating2.png" alt="" className=" mt-2 w-28" />
            </div>
          </div>
          <div className=" flex flex-col my-auto text-center">
            <p className=" text-[#3A643B]   font-semibold ">Followers</p>
            <p className=" font-bold text-xl">850</p>
          </div>
          <div className=" flex flex-col my-auto text-center">
            <p className=" text-[#3A643B]   font-semibold ">Following</p>
            <p className=" font-bold text-xl">18 K</p>
          </div>
          <div className=" flex flex-col my-auto text-center mr-16">
            <p className=" text-[#3A643B]   font-semibold ">Posts</p>
            <p className=" font-bold text-xl">250</p>
          </div>
          <button className=" bg-[#3A643B] text-white p-3  px-12 rounded-md my-auto  mr-6">Book an Appointment</button>
        </div>
      </div>
    </>
  )
}
