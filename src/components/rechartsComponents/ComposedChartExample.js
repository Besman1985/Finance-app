import { ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Bar, Line } from 'recharts';

const ComposedChartExample = ({ isAnimationActive = true, chartDataExpense }) => (
  <ComposedChart
    style={{ width: '80%', height: "80%", aspectRatio: 1.618 }}
    responsive
    data={chartDataExpense}
  >
    <CartesianGrid stroke="var(--primary-color)" />
    <XAxis dataKey="name" />
    <YAxis width="auto" />
    <Legend />
    <Tooltip />
    <Area type="monotone" dataKey="value" fill="var(--primary-color)" stroke="var(--primary-color)" isAnimationActive={isAnimationActive} name=" " />
    <Bar dataKey="value" barSize={10} fill="var(--danger-color)" isAnimationActive={isAnimationActive} name= "Рассходы" />

  </ComposedChart>
);

export default ComposedChartExample;