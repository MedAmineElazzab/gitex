import React from "react";

interface HealthCardProps {
  title?: string;
  description?: string;
  number?: number;
  total?: string;
  svg?: string;
  className?: string;
  numberColor?: string;
}

const Health: React.FC<HealthCardProps> = ({
  description,
  number,
  title,
  total,
  svg,
  className = "",
  numberColor = "",
}) => {
  return (
    <div
      className={`relative flex justify-between items-center h-auto rounded-2xl bg-[#252736]  ${className}`}
    >
      <div className="relative flex flex-col justify-between px-5">
        <div className="flex flex-col ">
          <p className="font-bold text-2xl text-white">{title}</p>
          <p className="text-[#B5B5BB] font-normal text-base ">{description}</p>
        </div>
        <div className="flex items-end gap-2 mt-3">
          <p
            className="text-5xl font-bold"
            style={{
              color: numberColor,
            }}
          >
            {number}
          </p>
          <p className="text-base font-normal text-white mb-[14px]">{total}</p>
        </div>
      </div>
      {svg && (
        <div className="relative inset-0 z-0 flex justify-end items-center">
          <div className="absolute inset-0 opacity-100  bg-gradient-to-r from-[#252736] to-transparent"></div>
          <img
            src={svg}
            alt="Background"
            className="w-[595px] h-[158px] object-cover "
          />
        </div>
      )}
    </div>
  );
};

export default Health;
