import React from "react";
import { motion } from "framer-motion";

export enum ToastVariant {
  DEFAULT = "default",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "Info",
}

export enum ToastAction {
  DEFAULT = "default",
  OK_CANCEL = "okCancel",
  OKAY = "okay",
  CANCEL = "cancel",
  CLOSE = "close",
}

export enum ToastPosition {
  BOTTOM = "bottomCenter",
  BOTTOM_CENTER = "bottomCenter",
  BOTTOM_RIGHT = "bottomRight",
  BOTTOM_LEFT = "bottomLeft",
  TOP = "topCenter",
  TOP_CENTER = "topCenter",
  TOP_RIGHT = "topRight",
}

type ToastTypes = {
  variant?: `${ToastVariant}`;
  children: React.ReactNode;
  className?: string;
  action?: `${ToastAction}`;
  position?: `${ToastPosition}`;
  show?: boolean;
  onClose: (value: boolean) => void;
};

const toastAnim = {
  initial: { y: 48, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, easeInOut: [0.23, 1, 0.32, 1] },
  },
  hidden: {
    y: 48,
    opacity: 0,
    transition: { duration: 0.4, easeInOut: [0.23, 1, 0.32, 1] },
  },
};

const buttonCommonStyles =
  "bg-white bg-opacity-10 hover:bg-opacity-20 transition duration-300 px-16 py-8 text-sm text-white rounded-md";

const Toast: React.FC<ToastTypes> = ({
  variant = ToastVariant.DEFAULT,
  children,
  className = "",
  action = ToastAction.DEFAULT,
  position = ToastPosition.BOTTOM_RIGHT,
  show = false,
  onClose,
}) => {
  const toastVariant = () => {
    switch (variant) {
      case ToastVariant.DEFAULT || "default":
        return "bg-gray-800 text-white";
      case ToastVariant.SUCCESS || "success":
        return "bg-green-700 text-white";
      case ToastVariant.WARNING || "warning":
        return "bg-yellow-500 text-white";
      case ToastVariant.ERROR || "error":
        return "bg-red-500 text-white";
      case ToastVariant.INFO || "info":
        return "bg-cyan-700 text-white";
      default:
        return "bg-gray-800 text-white";
    }
  };
  const toastPosition = () => {
    switch (position) {
      case ToastPosition.BOTTOM || "bottomCenter":
        return "bottom-24 left-1/2 transform -translate-1/2";
      case ToastPosition.BOTTOM_CENTER || "bottomCenter":
        return "bottom-24 left-1/2 transform -translate-1/2";
      case ToastPosition.BOTTOM_LEFT || "bottomLeft":
        return "bottom-24 left-24";
      case ToastPosition.BOTTOM_RIGHT || "bottomRight":
        return "bottom-24 right-24";
      case ToastPosition.TOP || "topCenter":
        return "top-24 left-1/2 transform -translate-1/2";
      case ToastPosition.TOP_CENTER || "topCenter":
        return "top-24 left-1/2 transform -translate-1/2";
      case ToastPosition.TOP_RIGHT || "topRight":
        return "top-24 right-24";
      default:
        return "bottom-24 right-1/2 transform -translate-1/2";
    }
  };
  return (
    <motion.div
      className={`${toastPosition()} fixed z-10 max-w-[380px]`}
      variants={toastAnim}
      initial='initial'
      animate={show ? "show" : "hidden"}
    >
      <div
        className={`${className} ${toastVariant()} p-16 rounded-lg relative w-full items-center gap-8 shadow-xl ${
          action === ToastAction.OK_CANCEL ? "" : "flex"
        }`}
      >
        <div>{children}</div>
        <div
          className={`flex justify-end gap-8 ${
            action === ToastAction.OK_CANCEL ? "mt-8" : "mt-0"
          }`}
        >
          {action === ToastAction.DEFAULT ||
            (action === ToastAction.CLOSE && (
              <button className={`${buttonCommonStyles}`} onClick={onClose}>
                Close
              </button>
            ))}
          {action === ToastAction.OKAY && (
            <button className={`${buttonCommonStyles}`}>Okay</button>
          )}
          {action === ToastAction.CANCEL && (
            <button className={`${buttonCommonStyles}`}>Cancel</button>
          )}
          {action === ToastAction.OK_CANCEL && (
            <>
              <button className={`${buttonCommonStyles}`}>Okay</button>
              <button className={`${buttonCommonStyles}`}>Cancel</button>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Toast;
