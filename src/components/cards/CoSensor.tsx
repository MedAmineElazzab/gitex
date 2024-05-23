import React from "react";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";
import PieChart from "../charts/PieChart";

interface CoSensorCardProps {
  icon: IconType;
  menu: IconType;
  title: string;
}

const CoSensor: React.FC<CoSensorCardProps> = ({ icon, title, menu }) => {
  const Icon = icon;
  const Menu = menu;
  return (
    <div className="flex flex-col bg-[#1E1D2A] h-[325px] rounded-2xl w-full p-4">
      <div className="flex gap-2 justify-between items-center h-[20%]">
        <div className="bg-[#1E1D2A] size-[70px] rounded-full flex ">
          <Icon
            className="text-[#FD676A] 
             mx-auto mt-4 w-10 h-10 
          "
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
        <PieChart
          data={[
            { name: "Zone 3", value: 400 },
            { name: "Zone 2", value: 600 },
            { name: "Zone 1", value: 600 },
          ]}
          colors={["#A82B2E", "#FB8184", "#FD676A"]}
        />
      </div>
    </div>
  );
};

export default CoSensor;
