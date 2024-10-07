import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import { EventI } from "../../type/events";
import "./CustomCalendar.css"; // Custom styles

interface CalenderProps {
  data: EventI[];
}
const CustomCalendar = ({ data }: CalenderProps) => {
  const [eventsList, setEventsList] = useState<any[]>([]);
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

  console.log({ eventsList });

  // const handleEventClick = (evt: any) => {
  //   console.log({ evt });
  // };
  const renderEventContent = (eventInfo: any) => {
    return (
      <div className="bg-white min-w-fit min-h-40">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
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
      // eventContent={renderEventContent}
    />
  );
};

export default CustomCalendar;
