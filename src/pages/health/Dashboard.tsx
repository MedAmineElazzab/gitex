import React from "react";
import { AiOutlineInfo } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi";
import { LuRadar } from "react-icons/lu";
import {
  MdAir,
  MdDone,
  MdOutlineArrowDropUp,
  MdOutlineCo2,
  MdOutlineShowChart,
} from "react-icons/md";
import { PiDotsThreeBold } from "react-icons/pi";
import { TbAffiliate } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import HealthSvg from "../../assets/img/health.png";
import AirQuality from "../../components/cards/AirQuality";
import SensorCard from "../../components/cards/Card";
import CoSensor from "../../components/cards/CoSensor";
import Health from "../../components/cards/Health";
import Proximity from "../../components/cards/Proximity";
import Sensor from "../../components/cards/Sensor";
import Zone from "../../components/cards/Zone";
import LineChart from "../../components/charts/LineChart";
import { EnumUnit } from "../../enum";

const sensors = [
  {
    icon: WiHumidity,
    title: "Relative humidity sensor",
    datanumber: 78,
    unit: EnumUnit.CELSIUS,
    menu: PiDotsThreeBold,
  },
  {
    icon: HiLightBulb,
    title: "Light sensor",
    datanumber: 14,
    unit: EnumUnit.PERCENTAGE,
    menu: PiDotsThreeBold,
  },
  {
    icon: TbAffiliate,
    title: "O3 Ozone Sensor",
    datanumber: 45,
    unit: EnumUnit.PERCENTAGE,
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
    chartColor: "#25B865",
    spanColor: "#09BD3C",
    iconColor: "#25B865",
    success: true,
  },
  {
    title: "Inactive sensors",
    number: 346,
    porsontage: 2,
    description: "than last month",
    icon: AiOutlineInfo,
    unit: EnumUnit.PERCENTAGE,
    chart: MdOutlineShowChart,
    chartColor: "#FC2E53",
    spanColor: "#FC2E53",
    iconColor: "#FC2E53",
    success: false,
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
const zoneData = [
  { name: "Zone 3", amt: 400, pv: 2400, uv: 2400 },
  { name: "Zone 2", amt: 300, pv: 2400, uv: 2400 },
  { name: "Zone 1", amt: 200, pv: 2400, uv: 2400 },
  { name: "Zone 0", amt: 100, pv: 2400, uv: 2400 },
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
const Codata = [
  { name: "Zone 3", value: 400 },
  { name: "Zone 2", value: 600 },
  { name: "Zone 1", value: 600 },
];

const healty = [
  {
    title: "Overall Performance",
    description: "Monthly performance reports",
    number: 247,
    total: "Total Sensors",
    svg: HealthSvg,
  },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid  xl:grid-cols-4 lg:grid-cols-2  content-center justify-items-center gap-5">
        <div className="grid grid-rows-3 xl:grid-rows-3 lg:grid-rows-3 xl:col-span-1 col-auto gap-5">
          {sensors.map((sensor, index) => (
            <div key={index}>
              <SensorCard
                icon={sensor.icon}
                title={sensor.title}
                menu={sensor.menu}
                datanumber={sensor.datanumber}
                unit={sensor.unit}
                iconColor="#FFAE00"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-rows-3 col-auto xl:col-span-3 w-full gap-5">
          <div className="grid xl:row-span-1 row-auto">
            <Health
              description={healty[0].description}
              number={healty[0].number}
              svg={healty[0].svg}
              title={healty[0].title}
              total={healty[0].total}
              numberColor="#FFAE00"
            />
          </div>

          <div className="grid xl:grid-cols-3 col-auto  row-auto xl:row-span-2 gap-x-5 justify-items-stretch">
            <div className="grid xl:col-span-2 col col-auto bg-[#252736] rounded-xl ">
              <LineChart
                height={370}
                color="#FFAE00"
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

            <div className="grid grid-rows-2 xl:col-span-1 col-auto bg-[#252736] rounded-xl p-5 gap-5">
              {data.map((data, index) => (
                <div key={index}>
                  <Sensor
                    success={data.success}
                    icon={data.icon}
                    title={data.title}
                    number={data.number}
                    porsontage={data.porsontage}
                    chart={data.chart}
                    description={data.description}
                    unit={data.unit}
                    chartColor={data.chartColor}
                    iconColor={data.iconColor}
                    spanColor={data.spanColor}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full xl:grid-cols-4 md:grid-cols-2 mt-4 lg:grid-cols-2 gap-5 justify-items-center bg-[#252736] p-5 rounded-lg">
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
          iconColor="#FFAE00"
          buttonColor="bg-gradient-to-t from-[#FFAE00] to-[#F9E866]"
        />

        <Zone
          title={zone[0].title}
          number={2.579}
          icon={zone[0].icon}
          porsontage={zone[0].porsontage}
          unit={zone[0].unit}
          name={zone[0].name}
          data={zoneData}
          cellFill="#5C4E32"
          selectedCellFill="#FFAE00"
        />

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
          BgColor="#5C4E32"
          ProgressColor="#FFAE00"
          iconColor="#FFAE00"
        />

        <CoSensor
          title={co2[0].title}
          icon={co2[0].icon}
          menu={PiDotsThreeBold}
          iconColor="#FFAE00"
          data={Codata}
          color={["#CC951F", "#FCE0A5", "#FFAE00"]}
        />
      </div>
    </>
  );
};

export default Dashboard;
