import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
function Home() {
  return (
    <>
      <div  className=" bg-[#EAF2EA] min-h-screen ">
        <div className=" flex flex-col text-center py-20">
        
        <p className=" font-semibold text-4xl mt-5 "><ReactTyped 
            className=" md:text-5xl sm:text-4xl font-bold pl-2"
              strings={[
                "React JS Web Page ",
                "Task 1"
  
              ]}
              typeSpeed={70}
              backSpeed={50}
              
              loop
            /></p>
        </div>
    
        <div className=" flex justify-center py-16 text-center">
            <Link to={"/page1"}>
            <div className=" bg-green-700 text-white p-4 rounded-md w-28 mx-8">
          Page1
        </div>
            </Link>
       
            <Link to={"/page2"}>
            <div className=" bg-green-700 text-white p-4 rounded-md w-28 mx-8">
          Page2
        </div>
            </Link>
        </div>
        
      </div>
    </>
  );
}

export default Home;
