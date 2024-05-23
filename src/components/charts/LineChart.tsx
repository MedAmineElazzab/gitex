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
}

export default class Example extends PureComponent<ExampleProps> {
  render() {
    const { data, color } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
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
          <Tooltip />
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
