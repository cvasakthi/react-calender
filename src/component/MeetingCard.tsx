import { format } from "date-fns";
import { EventI } from "../type/events";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import MeetingInfo from "./MeetingInfo";

export default function MeetingCard({ info }: { info: EventI }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      isModalOpen && setIsModalOpen(false);
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <MeetingInfo meeting={info} />
        </Modal>
      )}
      <div
        onClick={() => {
          handleOpenModal();
        }}
        className="flex flex-col gap-2 border-b border-gray-200 last:border-b-0 py-3 px-1 hover:bg-gray-100 cursor-pointer rounded hover:shadow "
      >
        <h5 className="font-semibold text-gray-900 capitalize">
          {info?.job_id?.jobRequest_Title || "No Title"}
        </h5>
        <div className="inline-flex gap-3 items-center text-sm">
          <p>1st Level</p> <span className="h-5 w-[1px] bg-gray-300" />
          <p>
            Interviewer: {info?.user_det?.handled_by?.firstName || "No Name"}
          </p>
        </div>
        <div className="inline-flex gap-3 items-center text-gray-600 text-xs">
          <p>
            Date:{format(new Date(info?.start || new Date()), "dd-MMM-yyyy")}
          </p>{" "}
          <span className="h-5 w-[1px] bg-gray-300" />
          <p>
            Time: {format(new Date(info?.start || new Date()), "hh:mm a")} -
            {format(new Date(info?.end || new Date()), "hh:mm a")}
          </p>
        </div>
      </div>
    </>
  );
}
