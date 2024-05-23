import React from "react";
import { IconType } from "react-icons";
import { EnumUnit } from "../../enum";
import TinyBarChart from "../charts/TinyBarChart";

interface ZoneCardProps {
  title: string;
  icon: IconType;
  porsontage: number;
  unit: EnumUnit;
  name: string;
  number: number;
  data: Array<{ name: string; amt: number; pv: number; uv: number }>;
  cellFill: string;
  selectedCellFill: string;
}

const Zone: React.FC<ZoneCardProps> = ({
  title,
  icon,
  porsontage,
  unit,
  name,
  number,
  data,
  cellFill,
  selectedCellFill,
}) => {
  const Icon = icon;

  return (
    <div className="flex flex-col bg-[#1E1D2A] h-[325px] rounded-2xl w-full p-4">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="font-bold text-sm text-[#B7B7B7]">{title}</div>
          <div className="flex">
            <div className="flex gap-2 items-center">
              <p className="font-bold text-[34px] font-display text-white">
                {number}
              </p>
              <p className="font-bold text-sm text-[#B7B7B7] font-display mt-[14px]">
                {name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex text-[#25B865] items-start ">
          <Icon className="mx-auto w-4 h-4 mb-3" />
          <p className="font-bold text-xs">
            +{porsontage}
            {unit}
          </p>
        </div>
      </div>
      <div className="h-[70%]">
        <TinyBarChart
          cellFill={cellFill}
          data={data}
          selectedCellFill={selectedCellFill}
        />
      </div>
    </div>
  );
};

export default Zone;
