import React, { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Cell,
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
  const [selectedBarIndex, setSelectedBarIndex] = useState<number | null>(null);

  const handleBarClick = (index: number) => {
    setSelectedBarIndex(index);
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
            fontSize: "12px",
            fill: "#B5B5BB",
            justifyContent: "center",
            marginLeft: "30px",
            textTransform: "capitalize",
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
              fill={index === selectedBarIndex ? selectedCellFill : cellFill}
              onClick={() => handleBarClick(index)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
