import React from "react";
import ClientOverview from "@/components/ClientOverview";

const Appointments = () => {
  return (
    <div className='appointmets-container flex h-full overflow-hidden'>
      <div className='calendar-container flex-grow'></div>
      <div className='client-overview-container h-full overflow-auto border-l border-l-gray-300 '>
        <ClientOverview />
      </div>
    </div>
  );
};

export default Appointments;
