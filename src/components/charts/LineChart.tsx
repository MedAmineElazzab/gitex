import { PureComponent } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ExampleProps {
  data: Array<{ name: string; uv: number; pv: number; amt: number }>;
  color: string;
  height: number; // Add height prop
}

export default class Example extends PureComponent<ExampleProps> {
  render() {
    const { data, color, height } = this.props;

    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend
            verticalAlign="top"
            height={36}
            iconType="circle"
            align="center"
          />
          <CartesianGrid stroke="#363846" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              background: color,
              border: "none",
              borderRadius: "5px",

              boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.25)",
              fontSize: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "5px",
              paddingBottom: "3px",
            }}
            labelStyle={{
              color: "#fff",
              fontSize: "8px",
              lineHeight: "8px",
              fontWeight: 300,
            }}
            itemStyle={{
              color: "#fff",
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
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#FFFFFF"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
