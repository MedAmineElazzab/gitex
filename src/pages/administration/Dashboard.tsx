import React from "react";
import { AiOutlineInfo } from "react-icons/ai";
import { FaRegDotCircle } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { LuRadar } from "react-icons/lu";
import {
  MdAir,
  MdDone,
  MdOutlineArrowDropUp,
  MdOutlineCo2,
  MdOutlineShowChart,
  MdSensors,
} from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import AirQuality from "../../components/cards/AirQuality";
import SensorCard from "../../components/cards/Card";
import CoSensor from "../../components/cards/CoSensor";
import Proximity from "../../components/cards/Proximity";
import Sensor from "../../components/cards/Sensor";
import LineChart from "../../components/charts/LineChart";
import { EnumUnit } from "../../enum";

const sensors = [
  {
    icon: MdSensors,
    title: "Infrared distance sensor",
    datanumber: 14,
    unit: EnumUnit.PERCENTAGE,
    menu: PiDotsThreeBold,
  },
  {
    icon: FaRegDotCircle,
    title: "Inductive proximity sensor",
    datanumber: 45,
    unit: EnumUnit.PERCENTAGE,
    menu: PiDotsThreeBold,
  },
  {
    icon: FaTemperatureHalf,
    title: "Temperature Sensor",
    datanumber: 78,
    unit: EnumUnit.CELSIUS,
    menu: PiDotsThreeBold,
  },
  {
    icon: WiHumidity,
    title: "Temperature Sensor",
    datanumber: 78,
    unit: EnumUnit.CELSIUS,
    menu: PiDotsThreeBold,
  },
];

const data = [
  {
    title: "Active sensors",
    number: 346,
    porsontage: 2,
    description: "than last month",
    icon: MdDone,
    unit: EnumUnit.PERCENTAGE,
    chart: MdOutlineShowChart,
  },
  {
    title: "Inactive sensors",
    number: 346,
    porsontage: 2,
    description: "than last month",
    icon: AiOutlineInfo,
    unit: EnumUnit.PERCENTAGE,
    chart: MdOutlineShowChart,
  },
];

const proximity = [
  {
    title: "Inductive Proximity Sensor",
    name: "Rien",
    description: "Ref: TCRT500L",
    icon: LuRadar,
    menu: PiDotsThreeBold,
    arrow: MdOutlineArrowDropUp,
  },
];

const zone = [
  {
    title: "Total sensors",
    icon: MdOutlineArrowDropUp,
    porsontage: 2.579,
    unit: EnumUnit.PERCENTAGE,
    name: "Sensors",
  },
];

const air = [
  {
    title: "Air Quality Sensor",
    icon: MdAir,
    number: 2.579,
    unit: EnumUnit.METRIC,
    name: "Air quality",
    time: "PM 2.5",
    quality: "Bad",
    time1: "PM 10",
    number1: 2.579,
  },
];
const co2 = [
  {
    title: "CO2 Sensor",
    icon: MdOutlineCo2,
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 w-full xl:grid-cols-4 lg:grid-cols-2 gap-5 justify-items-center">
        {sensors.map((sensor, index) => (
          <div key={index}>
            <SensorCard
              icon={sensor.icon}
              title={sensor.title}
              menu={sensor.menu}
              datanumber={sensor.datanumber}
              unit={sensor.unit}
              iconColor="#4CDD9A"
            />
          </div>
        ))}
      </div>
      <div className="w-auto h-[365px] rounded-lg grid grid-cols-3 gap-5 mt-5">
        <div className="grid col-span-2 bg-[#252736] rounded-xl ">
          <LineChart
            color="#FD676A"
            data={[
              { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
              { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
              { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
              { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
              { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
              { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
              { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
            ]}
            key={1}
            ref={undefined}
          />
        </div>
        <div className="grid grid-rows-2 col-span-1 bg-[#252736] rounded-xl gap-5 p-5">
          {data.map((data, index) => (
            <div key={index}>
              <Sensor
                success
                icon={data.icon}
                title={data.title}
                number={data.number}
                porsontage={data.porsontage}
                chart={data.chart}
                description={data.description}
                unit={data.unit}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 w-full xl:grid-cols-4 mt-4 lg:grid-cols-2 gap-4 justify-items-center bg-[#252736] p-5 rounded-lg">
        <Proximity
          icon={proximity[0].icon}
          title={proximity[0].title}
          number={34}
          menu={proximity[0].menu}
          porsontage={34}
          arrow={proximity[0].arrow}
          name={proximity[0].name}
          description={proximity[0].description}
          unit={EnumUnit.PERCENTAGE}
          iconColor="#FD676A"
        />
        {/* 
        <Zone
          title={zone[0].title}
          number={2.579}
          icon={zone[0].icon}
          porsontage={zone[0].porsontage}
          unit={zone[0].unit}
          name={zone[0].name}
        /> */}

        <AirQuality
          title={air[0].title}
          icon={air[0].icon}
          unit={air[0].unit}
          name={air[0].name}
          number={air[0].number}
          time1={air[0].time1}
          number1={air[0].number1}
          time={air[0].time}
          quality={air[0].quality}
        />

        <CoSensor
          title={co2[0].title}
          icon={co2[0].icon}
          menu={PiDotsThreeBold}
        />
      </div>
    </>
  );
};

export default Dashboard;
