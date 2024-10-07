import { useEffect, useState } from "react";
import CustomCalendar from "./component/calender/CustomCalendar";
import { fetchAllEvents } from "./api/eventsList";
import { EventI } from "./type/events";
import SlideOver from "./component/SlideOver";
import MeetingList from "./component/MeetingList";

function App() {
  const [eventsList, setEventsList] = useState<EventI[]>([]);
  const [selected, setSelected] = useState<EventI[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSlideover, setShowSlideover] = useState<boolean>(false);
  useEffect(() => {
    fetchAllEvents()
      .then((response) => {
        setEventsList(response);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {showSlideover && (
        <SlideOver
          onClose={() => {
            setShowSlideover(false);
            setSelected([]);
          }}
          open={showSlideover}
          title="Meetings"
        >
          <MeetingList meeting={selected} />
        </SlideOver>
      )}
      <div className="h-screen w-screen">
        <header className="w-full bg-gray-50 p-4 flex sticky top-0 z-[5] shadow">
          <h4 className="mx-auto text-2xl font-semibold text-purple-800">
            Calender
          </h4>
        </header>
        <div className="mx-auto container my-10">
          <CustomCalendar
            data={eventsList}
            onEventClick={(data) => {
              setSelected(data);
              setShowSlideover((prev) => !prev);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
