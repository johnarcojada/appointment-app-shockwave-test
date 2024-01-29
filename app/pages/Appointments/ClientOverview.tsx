"use client";
import React from "react";
import Image from "next/image";
import { PetImage } from "@/assets";
import {
  IconAge,
  IconBreed,
  IconCalendar,
  IconGender,
  IconMessages,
  IconPhone,
  IconPinLocation,
} from "@/assets/icons";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeEvent } from "@/lib/features/clientOverviewSlice";
import { useRouter } from "next/navigation";

const clientOverviewAnim = {
  initial: { x: 400 },
  open: {
    x: -409,
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  closed: {
    x: 400,
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
};

const ClientOverview = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const useSelector = useAppSelector;
  const { isClientOverviewOpen, selectedClientOverview } = useSelector(
    (state) => state.clientOverviewReducer
  );
  const event = selectedClientOverview.events?.[0];
  const client = event?.client;
  const handleOnCancelClick = () => {
    dispatch(removeEvent(event.id));
  };
  const handleOnReschedClick = () => {
    router.push(`appointments/form?eventId=${event.id}`);
  };
  return (
    <motion.div
      className='client-overview-container h-full overflow-auto border-l border-l-gray-300 absolute left-full custom-scrollbar'
      variants={clientOverviewAnim}
      initial='initial'
      animate={isClientOverviewOpen ? "open" : "closed"}
    >
      <div className='client-overview w-[400px] h-full max-h-100vh-116 relative'>
        {/* Client Name */}
        <div className='px-40 py-20 flex justify-between gap-24 border-b border-b-gray-300'>
          <div className='flex gap-24 items-center'>
            <img
              src={client?.clientInfo.image}
              alt='Client Profile'
              className='h-80 w-80 rounded-full border border-solid border-gray-300'
            />
            <div>
              <span className='client-name font-bold inline-block text-2xl text-gray-900'>
                {client?.clientInfo.name}
              </span>
              <span className='text-gray-400 text-16 block'>Client</span>
            </div>
          </div>
        </div>
        {/* Contact Information */}
        <div className='px-40 py-20 border-b border-b-gray-300'>
          <span className='uppercase text-sm font-bold text-gray-400 mb-20 block'>
            Contact Information
          </span>
          <div className='grid grid-rows-2 grid-cols-3 gap-20 items-start'>
            <span className='flex items-center gap-8'>
              <Image
                src={IconMessages}
                alt='Icon Mail'
                className='opacity-40'
              />
              <span className='text-gray-400'>Email</span>
            </span>
            <span className='col-span-2'>{client?.clientInfo.email}</span>

            <span className='flex items-center gap-8'>
              <Image src={IconPhone} alt='Icon Mail' className='opacity-40' />
              <span className='text-gray-400'>Phone</span>
            </span>
            <span className='col-span-2'>{client?.clientInfo.phone}</span>

            <span className='flex items-center gap-8'>
              <Image
                src={IconPinLocation}
                alt='Icon Mail'
                className='opacity-40'
              />
              <span className='text-gray-400'>Address</span>
            </span>
            <span className='col-span-2'>{client?.clientInfo.address}</span>
          </div>
        </div>
        {/* Clinic Details */}
        <div className='px-40 py-20 border-b border-b-gray-300'>
          <span className='uppercase text-sm font-bold text-gray-400 mb-20 block'>
            Clinic Details
          </span>
          <div className='flex gap-24 items-center mb-20'>
            <img
              src={client?.vetDetails.image}
              alt='Address Image'
              className='h-52 w-52 rounded-full border border-solid border-gray-300'
            />
            <div>
              <span className='client-name font-bold inline-block text-gray-1000'>
                {client?.vetDetails.name}
              </span>
              <span className='text-gray-400 text-16 block'>
                {client?.vetDetails.building}
              </span>
            </div>
          </div>
          <div className='grid grid-rows-2 grid-cols-3 gap-20 items-start'>
            <span className='flex items-center gap-8'>
              <Image
                src={IconMessages}
                alt='Icon Mail'
                className='opacity-40'
              />
              <span className='text-gray-400'>Email</span>
            </span>
            <span className='col-span-2'>{client?.vetDetails.email}</span>

            <span className='flex items-center gap-8'>
              <Image src={IconPhone} alt='Icon Mail' className='opacity-40' />
              <span className='text-gray-400'>Phone</span>
            </span>
            <span className='col-span-2'>{client?.vetDetails.phone}</span>

            <span className='flex items-center gap-8'>
              <Image
                src={IconPinLocation}
                alt='Icon Mail'
                className='opacity-40'
              />
              <span className='text-gray-400'>Address</span>
            </span>
            <span className='col-span-2'>{client?.vetDetails.address}</span>
          </div>
        </div>
        {/* Pet Details */}
        <div className='px-40 py-20 border-b border-b-gray-300'>
          <span className='uppercase text-sm font-bold text-gray-400 mb-20 block'>
            Pet Details
          </span>
          <div className='flex gap-24 items-center mb-20'>
            <Image
              src={PetImage}
              alt='Pet Image'
              className='h-52 w-52 rounded-full border border-solid border-gray-300'
            />
            <div>
              <span className='client-name font-bold inline-block text-gray-1000'>
                {client?.petDetails.name}
              </span>
              <span className='text-gray-400 text-16 block'>
                {client?.petDetails.type}
              </span>
            </div>
          </div>
          <div className='grid grid-rows-2 grid-cols-3 gap-20 items-start'>
            <span className='flex items-center gap-8'>
              <span className='flex justify-center w-20'>
                <Image
                  src={IconBreed}
                  alt='Icon Breed'
                  className='opacity-40'
                />
              </span>
              <span className='text-gray-400'>Breed</span>
            </span>
            <span className='col-span-2'>
              {client?.petDetails.breed}French Bulldog
            </span>

            <span className='flex items-center gap-8'>
              <span className='flex justify-center w-20'>
                <Image
                  src={IconGender}
                  alt='Icon Mail'
                  className='opacity-40'
                />
              </span>
              <span className='text-gray-400'>Sex</span>
            </span>
            <span className='col-span-2'>{client?.petDetails.sex}</span>

            <span className='flex items-center gap-8'>
              <span className='flex justify-center w-20'>
                <Image src={IconAge} alt='Icon Mail' className='opacity-40' />
              </span>
              <span className='text-gray-400'>Age</span>
            </span>
            <span className='col-span-2'>{client?.petDetails.age}</span>

            <span className='flex items-center gap-8'>
              <span className='flex justify-center w-20'>
                <Image
                  src={IconCalendar}
                  alt='Icon Mail'
                  className='opacity-40'
                />
              </span>
              <span className='text-gray-400'>Birthday</span>
            </span>
            <span className='col-span-2'>{client?.petDetails.birthday}</span>
          </div>
        </div>
        <div className='px-40 py-20 border-b border-b-gray-300'>
          <button
            className='w-full bg-primary hover:bg-orange-hover py-12 px-24 text-white rounded-xl mb-20 transition duration-300'
            onClick={handleOnReschedClick}
          >
            Reschedule Appointment
          </button>
          <button
            className='w-full bg-white border border-solid border-gray-300 hover:border-primary hover:bg-primary py-12 px-24 text-gray-400 hover:text-white rounded-xl transition duration-300'
            onClick={handleOnCancelClick}
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientOverview;
