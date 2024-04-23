import React, { useState } from "react";

export default function RCard1() {
  
  const [selectedMode, setSelected] = useState(null);

  return (
    <>
      <div className="my-8 mx-8">
        <div className="flex mb-10">
          <p className="text-[#000000] text-xl font-bold w-[600px]">
            Select your mode of session
          </p>
          <hr className="w-full my-auto p-[0.02rem] bg-[#D1D5D1]" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <button
            className={`flex flex-col p-4 my-auto text-center border-[1px] border-[#E5E5E5] rounded-xl items-center ${
              selectedMode === "inClinic" ? "bg-[#F2FBF2]" : ""
            }`}
            onClick={() => setSelected("inClinic")}
          >
             <div className="flex">
              <p className={`text-lg font-semibold mr-2 ${
                selectedMode === 'inClinic' ? "text-[#3a643b]" : " text-black" }`}>In-Clinic</p>
              <img src="tick.png" alt="" className={`${selectedMode==='inClinic'?" h-6 my-auto":"hidden"} `}/>
            </div>
            <p className="text-[#606060]">45 Mins</p>
          </button>
          <button
            className={`flex flex-col p-4 my-auto text-center border-[1px] border-[#E5E5E5] rounded-xl items-center ${
              selectedMode === "video" ?  "bg-[#F2FBF2]" : ""
            }`}
            onClick={() => setSelected("video")}
          >
            <div className="flex">
              <p className={`text-lg font-semibold mr-2 ${
                selectedMode === 'video' ? "text-[#3a643b]" : " text-black" }`}>Video</p>
              <img src="tick.png" alt="" className={`${selectedMode==='video'?" h-6 my-auto":"hidden"} `}/>
            </div>
            <p className="text-[#606060]">45 Mins</p>
          </button>
          <button
            className={`flex flex-col p-4 my-auto text-center border-[1px] border-[#E5E5E5] rounded-xl items-center ${
              selectedMode === "chat" ?  "bg-[#F2FBF2]" : ""
            }`}
            onClick={() => setSelected("chat")}
          >
             <div className="flex">
              <p className={`text-lg font-semibold mr-2 ${
                selectedMode === 'chat' ? "text-[#3a643b]" : " text-black" }`}>Chat</p>
              <img src="tick.png" alt="" className={`${selectedMode==='chat'?" h-6 my-auto":"hidden"} `}/>
            </div>
            <p className="text-[#606060]">10 Mins</p>
          </button>
        </div>
      </div>
    </>
  );
}
