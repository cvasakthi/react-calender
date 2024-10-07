import CustomCalendar from "./component/calender/CustomCalendar";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-50">
      <header className="w-full bg-gray-100 p-4 flex sticky top-0 z-[5] shadow">
        <h4 className="mx-auto text-2xl font-semibold text-purple-800">Calender</h4>
      </header>
      <div className="mx-auto container mt-2">
        <CustomCalendar />
      </div>
    </div>
  );
}

export default App;
