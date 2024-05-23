import React from "react";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";
import TinyAreaChart from "../charts/TinyAreaChart";

interface ProximityCardProps {
  icon: IconType;
  menu: IconType;
  title: string;
  iconColor: string;
  name: string;
  description: string;
  number: number;
  porsontage: number;
  arrow: IconType;
  unit: EnumUnit;
  className?: string;
  buttonColor?: string;
}

const Proximity: React.FC<ProximityCardProps> = ({
  icon,
  title,
  number,
  menu,
  porsontage,
  arrow,
  name,
  description,
  unit,
  iconColor = "",
  className = "",
  buttonColor = "",
}) => {
  const Icon = icon;
  const Menu = menu;
  const Arrow = arrow;
  return (
    <div
      className={`flex flex-col bg-[#1E1D2A] h-[325px] rounded-2xl w-full p-4 ${className}`}
    >
      <div className="grid grid-cols-4 gap-2 justify-items-center w-full items-center h-[40%]">
        <div className="bg-[#1E1D2A] size-[70px] rounded-full col-span-1 flex">
          <Icon
            className="mx-auto mt-4 w-10 h-10 shadow-black shadow-lg rounded-full"
            style={{ color: iconColor }}
          />
        </div>
        <span className="text-lg col-span-2 font-normal font-display text-[#B7B7B7]">
          {title}
        </span>
        <div className="-mt-8">
          <button className="text-gray-400 text-xl focus:outline-none col-span-1 rounded-lg bg-[#252736] size-9">
            <Menu className="text-[#B7B7B7] mx-auto w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-stretch mx-7 h-[60%]">
        <div className="flex justify-between gap-3 border-b border-[#5A5A60]">
          <div className="flex flex-col">
            <p className="text-sm font-bold font-display text-white">{name}</p>
            <p className="text-[10px] font-light">{description}</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[30%]">
            <TinyAreaChart />
          </div>
          <div className="flex justify-center items-center">
            <Arrow className="text-[#25B865] mx-auto mt-4 w-5 h-5 mb-3" />+
            {porsontage}
            {unit}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-stretch mx-7 h-[60%]">
        <div className="flex justify-between gap-3 border-b border-[#5A5A60]">
          <div className="flex flex-col">
            <p className="text-sm font-bold font-display text-white">{name}</p>
            <p className="text-[10px] font-light">{description}</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[30%]">
            <TinyAreaChart fillColor="#FC2E53" strokeColor="#FC2E53" />
          </div>
          <div className="flex justify-center items-center">
            <Arrow className="text-[#EE5D50] mx-auto mt-4 w-5 h-5 mb-3" />+
            {porsontage}
            {unit}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <button
          className={`w-[40%] ${buttonColor} rounded-xl flex justify-center items-center h-10 font-semibold text-xs`}
        >
          View details
        </button>
      </div>
    </div>
  );
};

export default Proximity;
