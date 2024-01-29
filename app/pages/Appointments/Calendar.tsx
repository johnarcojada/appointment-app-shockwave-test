"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/lib/hooks";
import FullCalendar from "@fullcalendar/react";
import FullCalendarRef from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./fullCalendarOverrides.css";
// import EventBox from "./EventBox";
import { EventContentArg } from "@fullcalendar/core/index.js";
import { FaRegUserCircle, FaRegCalendarAlt } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";
import { LuSyringe } from "react-icons/lu";
import {
  EventSourceType,
  setIsClientOverviewOpen,
  setSelectedClientOverview,
} from "@/lib/features/clientOverviewSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";

const calendarAnim = {
  initial: { width: "100%" },
  open: {
    width: "calc(100% - 409px)",
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  closed: {
    width: "100%",
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
};
const EventBox = (eventInfo: EventContentArg) => {
  const event: EventSourceType = eventInfo.event
    .extendedProps as EventSourceType;
  const client = event.client ? event.client : "";
  return (
    <>
      {event && event.client ? (
        <div className={`eventBox w-full py-20 px-28`}>
          <div className='flex gap-12'>
            <div>
              <div
                className='w-36 h-36 rounded-full flex items-center justify-center text-lg'
                style={{
                  backgroundColor: `${eventInfo.borderColor}20`,
                  color: eventInfo.borderColor,
                }}
              >
                {event.icon === "message" ? (
                  <PiChatsCircleBold />
                ) : event.icon === "vaccination" ? (
                  <LuSyringe />
                ) : event.icon === "calendar" ? (
                  <FaRegCalendarAlt />
                ) : (
                  <FaRegCalendarAlt />
                )}
              </div>
            </div>
            <div>
              <span className='block mb-4 font-semibold'>
                {eventInfo.event.title}
              </span>
              <span className='text-xs'>{eventInfo.timeText}</span>
              <div className='flex items-center gap-8 mt-4'>
                <div style={{ color: eventInfo.borderColor }}>
                  <FaRegUserCircle />
                </div>
                <div className='flex'>
                  <span className='text-xs'>{client.clientInfo.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='p-8'>
          <span className='text-xs text-orange-dark'>{eventInfo.timeText}</span>
        </div>
      )}
    </>
  );
};

const Calendar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const useSelector = useAppSelector;
  const router = useRouter();
  const { isClientOverviewOpen, eventSources, selectedClientOverview } =
    useSelector((state) => state.clientOverviewReducer);
  const selectedClientId = selectedClientOverview.events?.[0].id;
  const calendarRef = useRef<FullCalendarRef | null>(null);
  // Generate additional custom elements
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const calendarElement = calendarApi.el;
      if (
        calendarElement &&
        calendarElement.firstChild &&
        calendarElement.firstChild.firstChild
      ) {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        };

        const dateFormatter = new Intl.DateTimeFormat("en-US", options);
        const formattedDate = dateFormatter.format(today);
        const headerLeftElement = calendarElement.firstChild.firstChild;

        // Prepend the new element inside calendarElement.firstChild.firstChild
        const subTitle = document.createElement("span");
        subTitle.classList.add("fc-header-subtitle");
        subTitle.textContent = "Appointments";
        headerLeftElement.insertBefore(subTitle, headerLeftElement.firstChild);

        // Append the new element inside calendarElement.firstChild.firstChild
        const todayLabel = document.createElement("span");
        todayLabel.classList.add("fc-header-todayLabel");
        todayLabel.textContent = `Today is ${formattedDate}`;
        headerLeftElement.appendChild(todayLabel);
      }
    }
  }, []);

  return (
    <>
      <motion.div
        className='calendar-container w-full h-full overflow-auto custom-scrollbar'
        variants={calendarAnim}
        initial='initial'
        animate={isClientOverviewOpen ? "open" : "closed"}
      >
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView='timeGridDay'
          initialDate='2024-01-28'
          headerToolbar={{
            left: "title prev next today",
            center: "timeGridDay,dayGridMonth",
            right: "newAppointmentBtn",
          }}
          customButtons={{
            newAppointmentBtn: {
              text: "New Appointment",
              click: () => {
                router.push("appointments/form");
              },
            },
          }}
          eventSources={eventSources}
          eventTimeFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short",
            hour12: true,
          }}
          nowIndicator
          editable
          selectable
          slotDuration='01:00:00'
          scrollTime='05:00:00'
          views={{
            timeGrid: {
              titleFormat: { month: "long" },
              allDaySlot: false,
              dayHeaderFormat: {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              },
              eventContent: EventBox,
              selectMirror: true,
            },
          }}
          eventClick={(info) => {
            const eventObj = info.event;
            const { id } = eventObj;
            if (id === selectedClientId || !selectedClientId) {
              dispatch(setIsClientOverviewOpen(!isClientOverviewOpen));
            }
            dispatch(setSelectedClientOverview(id));
          }}
          // dateClick={{}}
          // drop={{}}
        />
      </motion.div>
    </>
  );
};

export default Calendar;
