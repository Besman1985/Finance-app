
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const MyChart = ({ allTrns }) => (

  <LineChart
    style={{ width: '500', height: '250', aspectRatio: 4.0 }}
    responsive
    data={allTrns}
    margin={{
      top: 20,
      right: 30,
      left: 20,
      bottom: 20,
    }}
  >
    <CartesianGrid strokeDasharray="5 5" />
    <XAxis dataKey="date" />
    <YAxis width="auto" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="expense" stroke="#ef0d0dff" activeDot={{ r: 6 }} />
  </LineChart>
);




export default MyChart