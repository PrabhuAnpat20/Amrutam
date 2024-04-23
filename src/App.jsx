import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Components/Banner";
import Filters from "./Components/Filters";
import ProfileCard from "./Components/ProfileCard";
import Home from "./pages/Home";


function App() {
  return (
    <>
      {/* <div className=" ">
        <Banner/>
       <Filters/>
       
       <div className=" grid grid-cols-3 gap-16 mx-40 my-8 mb-36" >
        <ProfileCard/>
        <ProfileCard/>
        <ProfileCard/>
       </div>
      </div> */}
     <Home/>
    </>
  );
}

export default App;
