import React from "react";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";

interface SensorCardProps {
  icon: IconType;
  title: string;
  menu: IconType;
  datanumber: number;
  className?: string;
  unit: EnumUnit;
  iconColor: string;
}

const SensorCard: React.FC<SensorCardProps> = ({
  icon,
  title,
  menu,
  datanumber,
  unit,
  className = "",
  iconColor = "",
}) => {
  const Icon = icon;
  const Menu = menu;
  const cardClasses = `text-white bg-[#252736] w-[100%] rounded-2xl p-4 rounded-5xl grid ${className}`;

  return (
    <div className={cardClasses}>
      <div className="grid grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 gap-6 justify-items-stretch w-full items-center">
        <div className="bg-[#1E1D2A] size-[70px] rounded-full col-auto xl:col-span-1">
          <Icon
            className="mx-auto mt-4 w-10 h-10"
            style={{ color: iconColor }}
          />
        </div>
        <span className="text-lg col-span-1 xl:col-span-2 font-normal font-display text-[#B7B7B7]">
          {title}
        </span>
        <div className="-mt-8 flex justify-end">
          <button className="text-gray-400 text-xl focus:outline-none col-auto xl:col-span-1 rounded-lg bg-[#1E1D2A] size-9">
            <Menu className="text-[#B7B7B7] mx-auto w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="mt-4 text-center flex justify-end">
        <span className="block text-4xl font-bold mt-1">
          {datanumber}
          {unit}
        </span>
      </div>
    </div>
  );
};

export default SensorCard;
