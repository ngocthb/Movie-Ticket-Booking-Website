import React, { useEffect } from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  text: string;
  icon: string;
}

const successIcon = "https://img.icons8.com/color/144/ok--v1.png";
const warningIcon = "https://img.icons8.com/color/144/000000/error--v1.png";
const errorIcon = "https://img.icons8.com/color/96/high-priority.png";

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  text,
  icon,
}) => {
  let iconUrl;

  switch (icon) {
    case "success":
      iconUrl = successIcon;
      break;
    case "warning":
      iconUrl = warningIcon;
      break;
    case "error":
      iconUrl = errorIcon;
      break;
    default:
      iconUrl = successIcon;
      break;
  }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-center">
          {icon && (
            <div className="w-20 h-20 mx-auto">
              <img
                src={iconUrl}
                alt="modal-icon"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-6">
            {text}
          </h3>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={onConfirm}
              className="bg-red-600 text-white  font-semibold px-4 py-2 rounded-md hover:bg-red-800 transition"
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 font-semibold text-gray-400 bg-white px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
