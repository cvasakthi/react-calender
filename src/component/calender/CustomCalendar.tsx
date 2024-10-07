import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useRef, useState } from "react";
import { EventI } from "../../type/events";
import "./CustomCalendar.css"; // Custom styles

interface CalenderProps {
  data: EventI[];
  onEventClick?: (data: EventI[]) => void;
}
const CustomCalendar = ({ data, onEventClick }: CalenderProps) => {
  const [eventsList, setEventsList] = useState<any[]>([]);
  const calendarRef = useRef(null);

  useEffect(() => {
    const transformedData = groupByDate(data);
    const temp = convertToKeyValueFormatWithTitle(transformedData);
    setEventsList(temp);
  }, [data]);

  const renderEventContent = (eventInfo: any) => {
    const { title, extendedProps } = eventInfo.event._def;
    const pending = extendedProps?.events?.length;
    const role = extendedProps?.events[0].job_id.jobRequest_Title;
    return (
      <div className="bg-white min-w-fit min-h-fit grid grid-cols-[12px_1fr] w-full relative">
        {pending > 1 && (
          <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-yellow-400 text-gray-900 grid place-items-center text-xs">
            {pending}
          </span>
        )}
        <div className="bg-blue-700 rounded-l" />
        <div className="flex flex-col gap-4 p-1 w-full">
          <p className="text-gray-900">{role}</p>
          <p className="text-gray-900">{title}</p>
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
      eventBackgroundColor="transparent"
      eventBorderColor="transparent"
      eventClassNames={" rounded-md shadow-md cursor-pointer"}
      eventClick={(e) => {
        onEventClick?.(e?.event?._def?.extendedProps as EventI[]);
      }}
      eventContent={renderEventContent}
    />
  );
};

export default CustomCalendar;
type GroupedEvents = {
  [key: string]: EventI[];
};
function groupByDate(events: EventI[]): GroupedEvents {
  return events.reduce((acc: GroupedEvents, event: EventI) => {
    const dateKey = new Date(event?.start).toISOString().split("T")[0];
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {});
}

interface KeyValueFormat {
  start: string;
  title: string;
  events: EventI[];
}

function convertToKeyValueFormatWithTitle(
  data: GroupedEvents
): KeyValueFormat[] {
  return Object.entries(data).map(([startDate, items]) => ({
    start: startDate,
    title: items.length > 0 ? items[0].summary || items[0].desc : "",
    events: items,
  }));
}
