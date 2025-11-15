import { RadarChart, Radar, PolarAngleAxis, PolarRadiusAxis, Legend, PolarGrid } from 'recharts';




export const RadarChartExample = ({ isAnimationActive = true, allIncome}) => (
  <RadarChart style={{ width: '60%', maxHeight: '55vh', aspectRatio: 1 }} responsive data={allIncome}>
    <PolarGrid stroke="var(--primary-color)" />
    <PolarAngleAxis dataKey="date" />
    <PolarRadiusAxis angle={30} domain={[0, 150]} />
    <Radar
     
      dataKey="income"
      name="Доходы"
      stroke="var(--success-color)"
      fill= "var(--success-color)"
      fillOpacity={0.6}
      isAnimationActive={isAnimationActive}
    />
    <Legend />
  </RadarChart>
);
export default RadarChartExample;