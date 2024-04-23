import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function DateSlider() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <>
      <div  >
        <Slider {...settings}>
          {data.map(({ date, slots }, index) => {
           


              let textColor = "green";
              if (selectedDate === date) {
                textColor = "#606060";
              } else if (parseInt(slots) < 5) {
                textColor = "red";
              } else if (parseInt(slots) >= 5 && parseInt(slots) < 10) {
                textColor = "#FFD700";
              }
    
        

            return (
              <div key={index} className="ml-5 ">
                <button
                  className={`flex flex-col p-3 my-auto text-center border-[1px] border-[#E5E5E5] rounded-xl items-center ${
                    selectedDate === date ? "bg-[#F2FBF2]   text-[#3a643b]" : ""
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  <div className="flex">
                    <p className="text-lg font-medium mr-2 ">{date}</p>
                  </div>
                  <p style={{ color: textColor }} className={` font-medium `}>{slots} slots</p>


                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

const data = [
  { date: "Mon, 10 Oct", slots: "10" },
  { date: "Tues, 11 Oct", slots: "02" },
  { date: "Wed, 12 Oct", slots: "05" },
  { date: "Thu, 13 Oct", slots: "03" },
  { date: "Fri, 14 Oct", slots: "10" },
  { date: "Sat, 15 Oct", slots: "15" },
];

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        borderRadius: "50%",
        marginLeft: "10px",
        marginTop: "-20px",
        
      }}
      onClick={onClick}
    >
      <img src="left.png" alt="" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        borderRadius: "50%",
        marginRight: "2px",
        marginTop: "-20px",
    
      }}
      onClick={onClick}
    >
      <img src="right.png" alt="" />
    </div>
  );
};
