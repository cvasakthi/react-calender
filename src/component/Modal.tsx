import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  outsideClickClose?: boolean;
}

const Modal: FC<ModalProps> = ({
  onClose,
  children,
  open,
  outsideClickClose = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onClose();
      }
    };

    if (isOpen && outsideClickClose) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, outsideClickClose]);

  return createPortal(
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-white bg-opacity-70 z-50"
          onClick={toggleModal}
        />
      )}
      <div
        ref={modalRef}
        className={`fixed inset-0 flex items-center justify-center z-50`}
      >
        <div className="bg-white rounded-lg shadow-lg min-w-[400px] transform transition-transform relative">
          <button
            onClick={toggleModal}
            className="bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer absolute -top-2 -right-2 h-5 w-5 grid place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
