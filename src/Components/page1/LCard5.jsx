import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function LCard5() {
    useEffect(()=>{
        AOS.init({duration:"2000"});
    },[])
    
  return (
    <>
        <div className="  border-[1px]  border-[#DCDCDC] rounded-xl my-5"  data-aos="zoom-in">
        <div
          className=" flex justify-between  px-5 rounded-t-xl"
          style={{
            background:
              "linear-gradient(270.04deg, #FBFCFB 0.05%, #F4F7EC 99.98%)",
          }}
        >
          <p className="text-[#313131] p-3 text-xl font-medium ">
            Featured Reviews (102)
          </p>
        </div>

        <div className=' mx-10 my-4 mb-7 bg-[#FAFAFA] p-7 rounded-xl'>
            <div className=' flex justify-between   '>
                <div className=' flex'>
                    <img src="review.png" alt="" />
                    <div className=' flex flex-col ml-2'>
                        <p className=' font-medium text-xl'>Alicent Hightower</p>
                        <p className=' text-[#939393]  text-md'>Consultant for Skin care</p>
                    </div>
                </div>
                <p className=' text-[#939393]'>20 January 2023</p>
            </div>
            <img src="stars.png" alt=""  className='  my-3 w-20'/>
            <p  className=' text-sm'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>

        </div>

        <div className=' mx-10 my-4 mb-7 bg-[#FAFAFA] p-7 rounded-xl'>
            <div className=' flex justify-between   '>
                <div className=' flex'>
                    <img src="review.png" alt="" />
                    <div className=' flex flex-col ml-2'>
                        <p className=' font-medium text-xl'>Alicent Hightower</p>
                        <p className=' text-[#939393]  text-md'>Consultant for Skin care</p>
                    </div>
                </div>
                <p className=' text-[#939393]'>20 January 2023</p>
            </div>
            <img src="stars.png" alt=""  className='  my-3 w-20'/>
            <p  className=' text-sm'>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>

        </div>
       
       
      </div>
    </>
  )
}
