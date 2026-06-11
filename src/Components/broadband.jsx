import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function broadband() {
  const data = [
    { region: "Developed", coverage: 95 },
    { region: "Developing", coverage: 80 },
    { region: "Least Developed", coverage: 60 }
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="region" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="coverage" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default broadband;