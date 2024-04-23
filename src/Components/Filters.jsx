import React, { useState } from "react";

export default function Filters() {
  const [filters, setFilters] = useState([]);

  const addFilter = (event) => {
    const selectedFilter = event.target.value;

    if (!filters.includes(selectedFilter)) {
      setFilters([...filters, selectedFilter]);
    }
  };
  const removeFilter = (filterToRemove) => {
    const updatedFilters = filters.filter(
      (filter) => filter !== filterToRemove
    );
    setFilters(updatedFilters);
  };

  return (
    <>
      <div className="my-4 flex justify-center">
        <select
          className="bg-[#F3F3F3] p-2 px-2 text-[#585858] font-semibold rounded-md mx-12"
          onChange={addFilter}
        >
          <option disabled selected value="">
            Expertise&nbsp;&nbsp;&nbsp;
          </option>
          <option value="Hair Care">Hair Care</option>
        </select>
        <select
          className="bg-[#F3F3F3] p-2 px-2 text-[#585858] mx-12 font-semibold rounded-md"
          onChange={addFilter}
        >
          <option disabled selected value="">
            Gender&nbsp;&nbsp;&nbsp;
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          className="bg-[#F3F3F3] p-2 px-2 text-[#585858] mx-12 font-semibold rounded-md"
          onChange={addFilter}
        >
          <option disabled selected value="">
            Fees&nbsp;&nbsp;
          </option>
          <option value="Rs.0-Rs.500">Rs.0-Rs.500</option>
          <option value="Rs.500-Rs.1000">Rs.500-Rs.1000</option>
        </select>
        <select
          className="bg-[#F3F3F3] p-2 px-2 text-[#585858] mx-12 font-semibold rounded-md"
          onChange={addFilter}
        >
          <option disabled selected value="">
            Languages&nbsp;&nbsp;
          </option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>
        <select
          className="bg-[#DCEEDC] p-2 px-2 text-[#3A643B] mx-12 font-semibold rounded-md"
          onChange={addFilter}
        >
          <option disabled selected value="">
            All Filters&nbsp;&nbsp;
          </option>
          {filters.map((filter) => (
            <option disabled>{filter}</option>
          ))}
        </select>
      </div>

      <div>
        <hr className=" bg-[#EDEDED]" />
        <div className=" flex  my-3 justify-end mr-28">
          {filters.map((filter) => (
            <div className=" p-2 px-4 flex rounded-3xl bg-[#EAF2EA] mx-6 my-6">
              <p className=" text-[#000000]  mr-2 ">{filter}</p>
              <img
                src="cross.png"
                alt=""
                className="h-4 my-auto cursor-pointer"
                onClick={() => removeFilter(filter)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
