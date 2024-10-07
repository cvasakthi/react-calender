import { EventI } from "../type/events";
import MeetingCard from "./MeetingCard";
interface MeetingListI {
  meeting: EventI[];
}
export default function MeetingList({ meeting }: MeetingListI) {
  return (
    <div className="overflow-y-scroll h-full flex flex-col gap-3">
      {meeting?.map((item: EventI, index) => {
        return <MeetingCard key={index} info={item} />;
      })}
    </div>
  );
}
