import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CustomCalendar.css"; // Custom styles

const CustomCalendar = () => {
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
      customButtons={{
        myCustomButton: {
          text: "custom!",
          click: function () {
            alert("clicked the custom button!");
          },
        },
      }}
      headerToolbar={{
        left: "prev,next today  myCustomButton",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
    />
  );
};

export default CustomCalendar;
