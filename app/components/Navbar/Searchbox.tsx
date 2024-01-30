"use client";
import React, { useEffect, useRef, useState } from "react";
import { IconSearch } from "@/assets/icons";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setIsClientOverviewOpen,
  setSelectedClientOverview,
} from "@/lib/features/clientOverviewSlice";

const Searchbox = () => {
  const dispatch = useAppDispatch();
  const useSelector = useAppSelector;
  const { eventSources } = useSelector((state) => state.clientOverviewReducer);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isShowSuggestion, setIsShowSuggestion] = useState(false);
  // const [searchList, setSearchList] = useState([]);
  const hasMetMinChars = searchTerm.length > 1;
  const searchbarInput = useRef<HTMLInputElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const getEvents = eventSources.flatMap((source) => source.events);
  const searchList = getEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.client.clientInfo.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );
  const handleSearchBoxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(() => evt.target.value);
  };
  const handleOnFocus = () => {
    setIsFocused(true);
    setIsShowSuggestion(true);
  };
  const handleOnKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key == "Escape") {
      setIsFocused(false);
      setIsShowSuggestion(false);
    }
  };
  const handleSearchClick = (id: string) => {
    dispatch(setIsClientOverviewOpen(true));
    dispatch(setSelectedClientOverview(id));
    setIsFocused(false);
  };
  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (!searchBoxRef.current?.contains(evt.target as Node)) {
        console.log("asdasdas");
        setIsShowSuggestion(false);
        setIsFocused(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBoxRef]);
  return (
    <div
      ref={searchBoxRef}
      className={`searchbox-container flex-grow relative rounded-xl border-t border-r border-l  ${
        isFocused && hasMetMinChars
          ? "rounded-b-none rounded-t-xl shadow-2xl border-white"
          : "border-gray-200"
      }`}
    >
      <input
        ref={searchbarInput}
        type='text'
        placeholder='Search'
        name='search'
        className={`search-box py-12 pl-20 pr-60 w-full rounded-xl bg-gray-200 outline-none focus:bg-white z-[21] border-b border-gray-200 ${
          isFocused && hasMetMinChars ? " rounded-b-none rounded-t-xl" : ""
        }`}
        onChange={handleSearchBoxChange}
        onFocus={handleOnFocus}
        onKeyDown={handleOnKeyDown}
      />
      <Image
        src={IconSearch}
        alt='Icon Search'
        className='absolute top-14 right-20'
      />
      {isFocused && hasMetMinChars && isShowSuggestion && (
        <div className='suggestionBar py-8 bg-white w-full absolute z-20 max-h-[300px] overflow-auto custom-scrollbar rounded-t-none rounded-b-xl shadow-2xl'>
          {searchList.map((eventInfo, index) => {
            const events = eventInfo;
            const client = events?.client;
            const isoStartTimeString = events?.start;
            const isoEndTimeString = events?.end;
            const dateStart = new Date(isoStartTimeString);
            const dateEnd = new Date(isoEndTimeString);
            const formatDate = new Intl.DateTimeFormat("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            });
            const eventStart = formatDate.format(dateStart);
            const eventEnd = formatDate.format(dateEnd);
            return (
              <div
                className='suggestionSearchItem transition bg-white duration-300 hover:bg-gray-200 cursor-pointer'
                key={`${events?.id}_${index}`}
                onClick={() => handleSearchClick(events.id)}
              >
                <div className='px-20 py-8'>
                  <span className='block mb-0 font-semibold text-sm'>
                    {events?.title}
                  </span>
                  <span className='text-xs text-gray-500 block'>
                    {eventStart} - {eventEnd}
                  </span>
                  <span className='text-xs text-gray-500 block'>
                    {client.clientInfo.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbox;
