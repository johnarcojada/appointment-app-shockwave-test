import React, { useRef } from "react";
import Image from "next/image";
import { IconMessages, IconPhone, IconPinLocation } from "@/assets/icons";
import { FaCheck } from "react-icons/fa6";
import styles from "./Form.module.css";

type VetTypes = {
  name: string;
  address: string;
  building: string;
  contactNumber: string;
  image: string;
  email: string;
  isSelected: boolean;
  onSelect: () => void;
};

const VetCards: React.FC<VetTypes> = ({
  name,
  address,
  building,
  contactNumber,
  image,
  email,
  isSelected = false,
  onSelect,
}) => {
  return (
    <div
      className={`${
        styles.vetCard
      } rounded-lg border bg-white border-solid border-gray-300 p-20 relative pointer overflow-hidden transition-all duration-300 hover:border-primary transform hover:scale-[1.025] outline-none focus-within:scale-[1.025] focus-within:border-primary ${
        isSelected ? styles.selected : ""
      }`}
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(evt) => {
        if (evt.key === "Enter") {
          onSelect();
        }
      }}
    >
      <div
        className={`${styles.checkbox} absolute w-16 h-16 border border-solid border-gray-300 rounded-full bg-white right-8 top-8 cursor-pointer transition duration-300 text-white text-xs`}
      >
        <FaCheck />
      </div>
      <div className='flex gap-24 items-center mb-20'>
        <img
          src={image}
          alt='Address Image'
          className='h-52 w-52 rounded-full'
        />
        <div>
          <span className='client-name font-bold inline-block text-gray-1000'>
            {name}
          </span>
          <span className='text-gray-400 text-16 block'>{building}</span>
        </div>
      </div>
      <div className='grid grid-rows-2 grid-cols-3 gap-20 items-start'>
        <span className='flex items-center gap-8'>
          <Image src={IconMessages} alt='Icon Mail' className='opacity-40' />
          <span className='text-gray-400'>Email</span>
        </span>
        <span className='col-span-2'>
          <span
            className='block w-full overflow-hidden text-ellipsis'
            title={email}
          >
            {email}
          </span>
        </span>

        <span className='flex items-center gap-8'>
          <Image src={IconPhone} alt='Icon Mail' className='opacity-40' />
          <span className='text-gray-400'>Phone</span>
        </span>
        <span className='col-span-2'>{contactNumber}</span>

        <span className='flex items-center gap-8'>
          <Image src={IconPinLocation} alt='Icon Mail' className='opacity-40' />
          <span className='text-gray-400'>Address</span>
        </span>
        <span className='col-span-2'>{address}</span>
      </div>
    </div>
  );
};

export default VetCards;
