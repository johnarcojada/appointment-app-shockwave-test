import React from "react";
import ClientOverview from "@/pages/Appointments/ClientOverview";
import Calendar from "./Calendar";

const Appointments = () => {
  return (
    <div className='appointmets-container flex h-full overflow-hidden relative'>
      <Calendar />
      <ClientOverview />
    </div>
  );
};

export default Appointments;
