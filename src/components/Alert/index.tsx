import { JSX } from "react";
import { AlertProps } from "src/types";
import { motion } from "motion/react";

type AlertComponentProps = AlertProps & {
  onClose: () => void;
  onMouseLeave: () => void;
  onMouseEnter: () => void;
};

export const Alert = ({
  text,
  type,
  onClose,
  position,
  onMouseEnter,
  onMouseLeave,
}: AlertComponentProps): JSX.Element => (
  <motion.div
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 1.3, ease: "easeInOut" }}
    className={`fixed left-1/2 transform -translate-x-1/2 p-2 flex flex-row items-center justify-center text-center rounded-lg text-gray-600 w-auto min-w-[230px] max-w-[90vw] h-[65px] animate-fadeIn ${
      type === "success" ? "bg-success-alert" : "bg-error-alert"
    } ${position === "top" ? "top-6" : "bottom-6"}`}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
  >
    <div
      className={`w-[50px] h-[50px] bg-contain bg-center bg-no-repeat ${
        type === "success"
          ? "bg-[url('https://static-00.iconduck.com/assets.00/success-icon-512x512-qdg1isa0.png')]"
          : "bg-[url('https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png')]"
      }`}
    />
    <p className="m-1 ms-4 mx-3 text-white text-lg">{text}</p>
    <button
      className="absolute right-1 top-1 text-white font-bold text-xl w-5 h-5 cursor-pointer hover:scale-105"
      onClick={onClose}
    >
      x
    </button>
  </motion.div>
);
