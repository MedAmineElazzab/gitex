import React from "react";
import Progress from "./Progress";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";

interface AirCardProps {
  title?: string;
  icon?: IconType | any;
  time?: string;
  number?: number;
  name?: string;
  unit: EnumUnit;
  quality?: string;
  time1?: string;
  number1?: number;
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
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-col bg-[#1E1D2A] h-[325px] rounded-2xl w-full p-4">
      <div className="flex justify-start items-center h-[30%]">
        <div className="bg-[#1E1D2A] size-[70px] rounded-full col-span-1 ">
          <Icon
            className="text-[#FD676A]
             mx-auto mt-4 w-10 h-10 shadow-black rounded-full
          "
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
        <Progress percentage={80} bgColor="#724849" progressColor="#FD676A" />
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
        <Progress percentage={80} bgColor="#724849" progressColor="#FD676A" />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-sm font-display">{name}</p>
        <button className="border border-[#EE5D50] px-8 rounded-full text-[#EE5D50] text-[10px]">
          {quality}
        </button>
      </div>
    </div>
  );
};

export default AirQuality;
