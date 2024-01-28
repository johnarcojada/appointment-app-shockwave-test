import React from "react";
import { motion } from "framer-motion";

const AppointmentModal = () => {
  return (
    <div className='fixed h-screen w-screen inset-0 z-50'>
      <div className='backdrop absolute inset-0 bg-black bg-opacity-70'></div>
      <div className='modal-container flex justify-center px-16 h-full'>
        <div className='modal my-auto w-full max-w-[800px] bg-white rounded-2xl z-10 shadow-xl'>
          <div className='modal-header p-20'>
            <span className='text-2xl'>Appointment</span>
          </div>
          <div className='modal-body p-20'>
            <div className='form-container'>
              <form action='' className=''></form>
            </div>
          </div>
          <div className='modal-footer p-20'></div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
