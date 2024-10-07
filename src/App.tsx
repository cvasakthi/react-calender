import { useEffect, useState } from "react";
import CustomCalendar from "./component/calender/CustomCalendar";
import { fetchAllEvents } from "./api/eventsList";
import { EventI } from "./type/events";

function App() {
  const [eventsList, setEventsList] = useState<EventI[]>([]);
  const [loading, setLoading] = useState(true);
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
    <div className="h-screen w-screen bg-slate-50">
      <header className="w-full bg-gray-100 p-4 flex sticky top-0 z-[5] shadow">
        <h4 className="mx-auto text-2xl font-semibold text-purple-800">
          Calender
        </h4>
      </header>
      <div className="mx-auto container mt-2">
        <CustomCalendar data={eventsList} />
      </div>
    </div>
  );
}

export default App;
