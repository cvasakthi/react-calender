import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useRef, useState } from "react";
import { EventI } from "../../type/events";
import "./CustomCalendar.css"; // Custom styles

interface CalenderProps {
  data: EventI[];
}
const CustomCalendar = ({ data }: CalenderProps) => {
  const [eventsList, setEventsList] = useState<any[]>([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    const mappedEvents = data.map((event) => ({
      id: String(event.id),
      title: event.desc,
      allDay: false,
      start: new Date(event.start),
      end: new Date(event.end),
      extendedProps: { ...event },
    }));
    setEventsList(mappedEvents);
  }, [data]);
  // const handleEventClick = (evt: any) => {
  //   console.log({ evt });
  // };
  const renderEventContent = (eventInfo: any) => {
    console.log(eventInfo.event);
    
    return (
      <div className="bg-white min-w-fit min-h-fit grid grid-cols-[20px_1fr] rounded-md shadow-sm w-full">
        <div className="bg-blue-700 rounded-l"/>
        <div className="flex flex-col gap-4 py-1">
          {/* <i>{eventInfo.event?.job_id?.jobRequest_Title}</i> */}
          <i>{eventInfo.event?.title}</i>
          <b>{eventInfo.timeText}</b>
        </div>
      </div>
    );
  };
  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={eventsList}
      themeSystem="standard"
      nowIndicator={true}
      selectable={false}
      allDaySlot={false}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      // eventClick={handleEventClick}
      eventContent={renderEventContent}
    />
  );
};

export default CustomCalendar;
