import React from 'react'
import Banner from "../Components/Banner";
import Filters from "../Components/Filters";
import ProfileCard from "../Components/ProfileCard";
function Page2() {
  return (
    <>
    <div className=" ">
        <Banner/>
       <Filters/>
       
       <div className=" grid grid-cols-3 gap-16 mx-40 my-8 mb-36" >
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
       </div>
      </div>
    </>
  )
}

export default Page2