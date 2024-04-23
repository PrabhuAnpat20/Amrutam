import React, { useState } from 'react'

export default function RCard4() {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotClick = (slot) => {
      setSelectedSlot(slot);
    };
  
    return (
      <div className='mx-10 my-6'>
         <p className="text-[#000000] text-xl font-bold w-[250px] my-auto">
        Evening
      </p>
        <div className='grid grid-cols-4 gap-3 text-center  my-3'>
          {['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'].map((slot, index) => (
            <div
              key={index}
              className={`border-[1px] border-[#E5E5E5] p-1 py-4 rounded-xl cursor-pointer ${selectedSlot === slot ? 'bg-[#3A643B] text-white' : ''}`}
              onClick={() => handleSlotClick(slot)}
            >
              {slot}
            </div>
          ))}
        </div>
      </div>
    );
}
