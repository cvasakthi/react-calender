import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface SlideOverProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  outsideClickClose?: boolean;
}

const SlideOver: FC<SlideOverProps> = ({
  title,
  onClose,
  children,
  open,
  outsideClickClose = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  const slideOverRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const toggleSlideOver = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        slideOverRef.current &&
        !slideOverRef.current.contains(event.target as Node)
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

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSlideOver}
        />
      )}
      <div
        ref={slideOverRef}
        className={`fixed inset-y-0 right-0 z-50 w-[400px] bg-white shadow-lg transform transition-transform${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={toggleSlideOver}
            className="bg-blue-600 text-white rounded-full hover:bg-blue-700 transition cursor-pointer"
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
        </div>
        <div className="px-3">{children}</div>
      </div>
    </div>
  );
};

export default SlideOver;
