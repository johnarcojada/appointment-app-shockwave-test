"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AddressImage, ClientProfile, PetImage } from "@/assets";
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

const clientOverviewAnim = {
  initial: { x: 400 },
  open: {
    x: 0,
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  closed: { x: 400 },
};

const ClientOverview = () => {
  const [isClientOverviewOpen, setIsClientOverviewOpen] = useState(false);
  return (
    <motion.div
      className='client-overview w-[400px] h-full max-h-100vh-116'
      variants={clientOverviewAnim}
      animate={isClientOverviewOpen ? "open" : "close"}
    >
      {/* Client Name */}
      <div className='px-40 py-20 flex justify-between gap-24 border-b border-b-gray-300'>
        <div className='flex gap-24 items-center'>
          <Image
            src={ClientProfile}
            alt='Client Profile'
            className='h-80 w-80 rounded-full'
          />
          <div>
            <span className='client-name font-bold inline-block text-2xl text-gray-900'>
              Chrissie Lee
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
            <Image src={IconMessages} alt='Icon Mail' className='opacity-40' />
            <span className='text-gray-400'>Email</span>
          </span>
          <span className='col-span-2'>chrissielee@gmail.com</span>

          <span className='flex items-center gap-8'>
            <Image src={IconPhone} alt='Icon Mail' className='opacity-40' />
            <span className='text-gray-400'>Phone</span>
          </span>
          <span className='col-span-2'>+01 234 567 8910</span>

          <span className='flex items-center gap-8'>
            <Image
              src={IconPinLocation}
              alt='Icon Mail'
              className='opacity-40'
            />
            <span className='text-gray-400'>Address</span>
          </span>
          <span className='col-span-2'>
            1st Avenue, Golden Street,Springville Village, San Diego, California
          </span>
        </div>
      </div>
      {/* Clinic Details */}
      <div className='px-40 py-20 border-b border-b-gray-300'>
        <span className='uppercase text-sm font-bold text-gray-400 mb-20 block'>
          Clinic Details
        </span>
        <div className='flex gap-24 items-center mb-20'>
          <Image
            src={AddressImage}
            alt='Address Image'
            className='h-52 w-52 rounded-full'
          />
          <div>
            <span className='client-name font-bold inline-block text-gray-1000'>
              Silvervale Towers
            </span>
            <span className='text-gray-400 text-16 block'>Los Angeles</span>
          </div>
        </div>
        <div className='grid grid-rows-2 grid-cols-3 gap-20 items-start'>
          <span className='flex items-center gap-8'>
            <Image src={IconMessages} alt='Icon Mail' className='opacity-40' />
            <span className='text-gray-400'>Email</span>
          </span>
          <span className='col-span-2'>branch1@gmail.com</span>

          <span className='flex items-center gap-8'>
            <Image src={IconPhone} alt='Icon Mail' className='opacity-40' />
            <span className='text-gray-400'>Phone</span>
          </span>
          <span className='col-span-2'>+01 234 567 8910</span>

          <span className='flex items-center gap-8'>
            <Image
              src={IconPinLocation}
              alt='Icon Mail'
              className='opacity-40'
            />
            <span className='text-gray-400'>Address</span>
          </span>
          <span className='col-span-2'>
            4th Floor, RM 402, Blk 2, 13 Johnson Street, Silvervale Towers, Los
            Angeles, California
          </span>
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
            className='h-52 w-52 rounded-full'
          />
          <div>
            <span className='client-name font-bold inline-block text-gray-1000'>
              Brownie
            </span>
            <span className='text-gray-400 text-16 block'>Dog</span>
          </div>
        </div>
        <div className='grid grid-rows-2 grid-cols-3 gap-20 items-start'>
          <span className='flex items-center gap-8'>
            <span className='flex justify-center w-20'>
              <Image src={IconBreed} alt='Icon Breed' className='opacity-40' />
            </span>
            <span className='text-gray-400'>Breed</span>
          </span>
          <span className='col-span-2'>French Bulldog</span>

          <span className='flex items-center gap-8'>
            <span className='flex justify-center w-20'>
              <Image src={IconGender} alt='Icon Mail' className='opacity-40' />
            </span>
            <span className='text-gray-400'>Sex</span>
          </span>
          <span className='col-span-2'>Male</span>

          <span className='flex items-center gap-8'>
            <span className='flex justify-center w-20'>
              <Image src={IconAge} alt='Icon Mail' className='opacity-40' />
            </span>
            <span className='text-gray-400'>Age</span>
          </span>
          <span className='col-span-2'>10 months</span>

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
          <span className='col-span-2'>January 12, 2023</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientOverview;
