"use client";

import { CustomButtonProps } from "../../types";

const CustomButton = ({
  isDisabled,
  btnType,
  title,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={`flex justify-center items-center bg-secondary px-2 py-2 sm:px-6 rounded-md w-full `}
      onClick={handleClick}
      type={btnType || "button"}
    >
      <span className="font-semibold text-base">{title}</span>
    </button>
  );
};

export default CustomButton;
