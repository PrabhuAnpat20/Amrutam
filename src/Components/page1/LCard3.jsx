import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function LCard3() {
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
            The Concerns I Treat
          </p>
        </div>

        <div className=' text-[#3A643B] grid grid-cols-4 gap-5 mx-10 my-4 '>
            <p className=' bg-[#F7F7FC] p-1 rounded-xl text-center font-medium '>Skin Treatment</p>
            <p className=' bg-[#F7F7FC] p-1 rounded-xl text-center font-medium'>Pregnancy</p>
            <p className=' bg-[#F7F7FC] p-1 rounded-xl  text-center font-medium'>Period Doubts</p>
            <p className=' bg-[#F7F7FC] p-1 rounded-xl text-center font-medium'>Endometriosis</p>
            <p className=' bg-[#F7F7FC] p-1 rounded-xl text-center font-medium'>Pelvic Pain</p>
            <p className=' bg-[#F7F7FC] p-1 rounded-xl text-center font-medium'>Ovarian Cysts</p>
            <p className='  bg-white border-[1px] border-[#E0DFDF] p-1 rounded-xl text-center font-medium'>+ 5 More</p>
        </div>
       
      </div>
    </>
  )
}
