import React from "react";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";

interface SensorCardProps {
  icon: IconType;
  title: string;
  number: number;
  porsontage: number;
  chart: IconType;
  description: string;
  unit: EnumUnit;
  success: boolean; // Added success prop
  className?: string;
}

const Sensor: React.FC<SensorCardProps> = ({
  icon,
  title,
  number,
  porsontage,
  chart,
  description,
  unit,
  success,
  className = "",
}) => {
  const Icon = icon;
  const Chart = chart;
  const bgColor = success ? "#E9F8F0" : "#FC2E53";

  return (
    <div className={`flex bg-white h-auto rounded-2xl ${className}`}>
      <div className="flex flex-col w-[60%] justify-items-center p-5">
        <div className="text-[#111C44] font-bold text-base font-display">
          {title}
        </div>
        <div className="text-[#0B1437] text-[44px] font-semibold font-display mt-3">
          <span>{number}</span>
        </div>
        <div className="-mt-3">
          <span className="text-[#09BD3C] text-xs font-display font-bold">
            +{porsontage}
            {unit}
          </span>
          <span className="text-[#111C44] text-xs font-display font-light">
            {description}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[40%]">
        <div
          className="flex rounded-full size-14"
          style={{ backgroundColor: bgColor }}
        >
          <Icon className="text-[#25B865] mx-auto mt-4 w-5 h-5 border-2 border-[#25B865] rounded-md" />
        </div>
        <div className="w-20">
          <Chart className="text-[#25B865] mx-auto mt-4 w-20 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Sensor;
