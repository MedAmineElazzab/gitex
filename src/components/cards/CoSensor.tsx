import React from "react";
import { IconType } from "react-icons";
import PieChart from "../charts/PieChart";

interface CoSensorCardProps {
  icon: IconType;
  menu: IconType;
  title: string;
  iconColor: string;
  data: { name: string; value: number }[];
  color: string[];
}

const CoSensor: React.FC<CoSensorCardProps> = ({
  icon,
  title,
  menu,
  iconColor = "",
  data,
  color,
}) => {
  const Icon = icon;
  const Menu = menu;
  return (
    <div className="flex flex-col bg-[#1E1D2A] h-[325px] rounded-2xl w-full p-4">
      <div className="flex gap-2 justify-between items-center h-[20%]">
        <div className="bg-[#1E1D2A] size-[70px] rounded-full col-auto xl:col-span-1  border-t-2 border-t-[#000] border-b-2 border-b-[#2A2932] ">
          <Icon
            className="mx-auto mt-4 w-10 h-10"
            style={{ color: iconColor }}
          />
        </div>
        <span className=" text-lgfont-normal font-display text-[#B7B7B7] w-[40%]">
          {title}
        </span>
        <div className="-mt-8 ">
          <button className="text-gray-400 text-xl focus:outline-none rounded-lg bg-[#252736] size-9">
            <Menu className="text-[#B7B7B7] mx-auto w-6 h-6 " />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-stretch mx-7 h-[80%]">
        <PieChart data={data} colors={color} />
      </div>
    </div>
  );
};

export default CoSensor;
