import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';





const TinyBarChart = ({ allIncome }) => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.218 }}
      responsive
      data={allIncome}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" fill="green" activeBar={<Rectangle fill="pink" stroke="blue" />} />
    </BarChart>
  );
};

export default TinyBarChart;