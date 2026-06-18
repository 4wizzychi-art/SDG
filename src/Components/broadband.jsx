import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Broadband() {
  const data = [
    { region: "Developed", coverage: 95 },
    { region: "Developing", coverage: 80 },
    { region: "Least Developed", coverage: 60 }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis
          dataKey="region"
          stroke="#fff"
        />
        <YAxis
          stroke="#fff"
        />
        <Tooltip />
        <Bar
          dataKey="coverage"
          fill="#F36D25"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Broadband;