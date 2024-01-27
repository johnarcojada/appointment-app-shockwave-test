"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "@/lib/hooks";
import FullCalendar from "@fullcalendar/react";
import FullCalendarRef from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./fullCalendarOverrides.css";

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

const Calendar = () => {
  const useSelector = useAppSelector;
  const isClientOverviewOpen = useSelector(
    (state) => state.clientOverviewReducer.isClientOverviewOpen
  );
  const calendarRef = useRef<FullCalendarRef | null>(null);
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
        headerToolbar={{
          left: "title prev next today",
          center: "timeGridDay,dayGridMonth",
          right: "newAppointmentBtn",
        }}
        customButtons={{
          newAppointmentBtn: {
            text: "New Appointment",
            click: () => {
              // Handles New Appointment click
            },
          },
        }}
        events={{}}
        nowIndicator
        editable
        droppable
        selectable
        selectMirror
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
          },
        }}

        // dateClick={{}}
        // drop={{}}
        // eventClick={{}}
      />
    </motion.div>
  );
};

export default Calendar;
