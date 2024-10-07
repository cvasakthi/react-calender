import { format } from "date-fns";
import { EventI } from "../type/events";
interface MeetingInfoI {
  meeting: EventI;
}
export default function MeetingInfo({ meeting }: MeetingInfoI) {
  return (
    <div className="border border-gray-200 rounded p-3 grid grid-cols-2 w-full divide-x">
      {/* Left side */}
      <div className=" flex flex-col gap-4 w-[245px] pr-4">
        <p className="text-xs font-sans text-gray-800">
          Interview with:{" "}
          {`${meeting.user_det.candidate.candidate_firstName} ${meeting.user_det.candidate.candidate_lastName}`}
        </p>
        <p className="text-xs font-sans text-gray-800 whitespace-nowrap">
          Position: {`${meeting.job_id.jobRequest_Role}`}
        </p>
        <p className="text-xs font-sans text-gray-800 whitespace-nowrap">
          Created By: {`${meeting.user_det.handled_by.firstName}`}
        </p>
        <p className="text-xs font-sans text-gray-800 whitespace-nowrap">
          Interview Date:{" "}
          {format(new Date(meeting?.start || new Date()), "dd-MMM-yyyy")}
        </p>
        <p className="text-xs font-sans text-gray-800 whitespace-nowrap">
          Interview time:{" "}
          {format(new Date(meeting?.start || new Date()), "hh:mm a")} -
          {format(new Date(meeting?.end || new Date()), "hh:mm a")}
        </p>
        <p className="text-xs font-sans text-gray-800 whitespace-nowrap">
          Interview via: Google Meet
        </p>
        <button className="rounded w-[160px] h-[35px] justify-between  border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer px-1 py-[5px] inline-flex text-sm text-blue-500">
          Resume.docx
          <div className="flex items-center gap-3">
            <span>
              <i className="fa fa-eye" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-download" aria-hidden="true"></i>
            </span>
          </div>
        </button>
        <button className="rounded w-[160px] h-[35px] justify-between  border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer px-1 py-[5px] inline-flex text-sm text-blue-500">
          Aadharcard
          <div className="flex items-center gap-3">
            <span>
              <i className="fa fa-eye" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-download" aria-hidden="true"></i>
            </span>
          </div>
        </button>
      </div>
      {/* right side */}
      <div className="h-full w-full max-w-[240px] flex flex-col justify-center gap-5 items-center">
        <span className="h-[120px] w-[120px] border border-gray-200 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Google Meet"
            role="img"
            viewBox="0 0 512 512"
          >
            <rect width="512" height="512" rx="15%" fill="#ffffff" />
            <path d="M166 106v90h-90" fill="#ea4335" />
            <path d="M166 106v90h120v62l90-73v-49q0-30-30-30" fill="#ffba00" />
            <path d="M164 406v-90h122v-60l90 71v49q0 30-30 30" fill="#00ac47" />
            <path d="M286 256l90-73v146" fill="#00832d" />
            <path
              d="M376 183l42-34c9-7 18-7 18 7v200c0 14-9 14-18 7l-42-34"
              fill="#00ac47"
            />
            <path d="M76 314v62q0 30 30 30h60v-92" fill="#0066da" />
            <path d="M76 196h90v120h-90" fill="#2684fc" />
          </svg>
        </span>
        <button className="rounded bg-sky-600  cursor-pointer p-1/2 text-sm w-[80px] h-[26px] font-semibold text-white">
          JOIN
        </button>
      </div>
    </div>
  );
}
