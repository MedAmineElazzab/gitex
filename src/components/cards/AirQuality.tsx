import React from "react";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";
import Progress from "./Progress";

interface AirCardProps {
  title: string;
  icon: IconType ;
  time: string;
  number: number;
  name: string;
  unit: EnumUnit;
  quality: string;
  time1: string;
  number1: number;
  BgColor: string;
  ProgressColor: string;
  iconColor: string;
}

const AirQuality: React.FC<AirCardProps> = ({
  title,
  icon,
  time,
  number,
  name,
  unit,
  quality,
  time1,
  number1,
  BgColor,
  ProgressColor,
  iconColor = "",
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-col bg-[#1E1D2A] h-[325px] rounded-2xl w-full p-4">
      <div className="flex justify-start items-center h-[30%] gap-5">
        <div className="bg-[#1E1D2A] size-[70px] rounded-full col-auto xl:col-span-1  border-t-2 border-t-[#000] border-b-2 border-b-[#2A2932] ">
          <Icon
            className="mx-auto mt-4 w-10 h-10 shadow-black rounded-full
          "
            style={{ color: iconColor }}
          />
        </div>
        <span className="text-lg col-span-2 font-normal font-display text-[#B7B7B7] w-[40%]">
          {title}
        </span>
      </div>
      <div className="h-[70%] mt-10">
        <div className="flex justify-between">
          <span className="text-[10px] font-bold font-display text-[#B5B5BB]">
            {time}
          </span>

          <span className="text-[10px] font-bold font-display text-[#B5B5BB]">
            {number} {unit}
          </span>
        </div>
        <Progress
          percentage={80}
          bgColor={BgColor}
          progressColor={ProgressColor}
        />
      </div>
      <div className="h-[60%] ">
        <div className="flex justify-between">
          <span className="text-[10px] font-bold font-display text-[#B5B5BB]">
            {time1}
          </span>

          <span className="text-[10px] font-bold font-display text-[#B5B5BB]">
            {number1} {unit}
          </span>
        </div>
        <Progress
          percentage={80}
          bgColor={BgColor}
          progressColor={ProgressColor}
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-sm font-display">{name}</p>
        <button
          className="border border-[#EE5D50] px-8 py-1 rounded-full text-[#EE5D50] text-[10px]"
          style={{ borderColor: iconColor, color: iconColor }}
        >
          {quality}
        </button>
      </div>
    </div>
  );
};

export default AirQuality;
