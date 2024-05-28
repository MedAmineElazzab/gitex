import React, { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface ExampleProps {
  data: Array<{ name: string; uv: number; pv: number; amt: number }>;
  cellFill: string;
  selectedCellFill: string;
}

const Example: React.FC<ExampleProps> = ({
  data,
  cellFill,
  selectedCellFill,
}) => {
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredBarIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredBarIndex(null);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "#B5B5BB" }}
          scale="band"
          interval={0}
          textAnchor="center"
          style={{
            fontSize: "10px",
            fill: "#B5B5BB",
            display: "flex",
            justifyContent: "center",
            marginLeft: "30px",
            textTransform: "capitalize",
            alignItems: "center",
            letterSpacing: "0.1px",
            lineHeight: "15px",
            fontWeight: 500,
            textRendering: "geometricPrecision",
          }}
          textRendering={"geometricPrecision"}
        />
        <Bar dataKey="uv" barSize={15} radius={10}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === hoveredBarIndex ? selectedCellFill : cellFill}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </Bar>
        <Tooltip
          cursor={{ fill: "transparent" }}
          contentStyle={{
            background: "fff",
            border: "none",
            borderRadius: "5px",
            boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
            fontSize: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "3px",
          }}
          labelStyle={{
            color: selectedCellFill,
            fontSize: "8px",
            lineHeight: "8px",
            fontWeight: 300,
          }}
          itemStyle={{
            color: selectedCellFill,
            fontSize: "8px",
            lineHeight: "8px",
            fontWeight: 500,
          }}
          wrapperStyle={{
            border: "none",
            borderRadius: "0",
            boxShadow: "none",
            color: "#B5B5BB",
            fontSize: "10px",
            padding: "0",
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
