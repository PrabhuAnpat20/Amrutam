import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function ProfileCard() {
  useEffect(()=>{
    AOS.init({duration:"3000"});
},[])

  return (
    <>
      <div>
        <div className=" bg-[#FFF7E2] text-center  p-6 px-12 rounded-2xl shadow-lg " data-aos="fade-up">
          <div className=" relative">
            <img src="profile.png" alt="" className=" mx-auto w-32" />
            <div className=" absolute  mt-[-26px] ml-[100px] mr-5">
              <img src="rating.png" alt="" />
            </div>
          </div>
          <p className=" text-3xl font-medium my-1">Dr. Prerna Narang</p>
       <div className=" flex justify-center ">
       
          <div className=" text-[#646665]  flex flex-col justify-center text-left">
            <div className=" flex ">
              <img src="clip.png" alt="" className=" h-4  mr-3 my-auto" />
             
            <p className=" ">Male-Female Infertility</p>
            </div>
           <div className=" flex">
            <img src=" education.png" alt="" className=" mr-2"/>
           <p className=" font-medium">7 Years Experience</p>
           </div>
           <div className=" flex">
            <img src="comment.png" alt="" className=" h-4 mr-3 my-auto" />
           <p className="  ">Speaks:English,Hindi,Marathi</p>
           </div>
            
       </div>
         
          </div>
          <div className=" flex  justify-between my-4  font-medium">
            <div className=" p-1 border-[1px] border-[#3A643B] rounded-lg text-center  ">
              <p className=" text-[#3C3C3C] text-[14px]  ">
                {" "}
                Video Consultation
              </p>
              <p className=" text-[#3A643B]  font-bold">₹800</p>
            </div>
            <div className=" p-1 border-[1px] border-[#3A643B] rounded-lg  text-center text-[14px] ">
              <p className=" text-[#3C3C3C]  "> Chat Consultation</p>
              <p className=" text-[#3A643B]  font-bold">Free</p>
            </div>
          </div>
          <button className="   bg-[#FFFFFF]  rounded-md w-full text-[#3A643B] my-2 py-2 border-[1px] border-[#3A643B]">
            View Profile
          </button>
          <button className="   text-[#FFFFFF]  rounded-md my-2 py-2 w-full bg-[#3A643B]">
            Book a consultation
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
