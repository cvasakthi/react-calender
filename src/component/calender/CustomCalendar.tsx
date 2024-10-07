import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CustomCalendar.css"; // Custom styles
import { EventI } from "../../type/events";

interface CalenderProps {
  data: EventI[];
}
const CustomCalendar = ({ data }: CalenderProps) => {
  const [events] = useState([
    { title: "Event 1", date: "2024-10-08" },
    { title: "Event 2", date: "2024-10-09" },
  ]);
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={events}
      themeSystem="standard"
      nowIndicator={true}
      selectable={false}
      allDaySlot={false}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
    />
  );
};

export default CustomCalendar;
