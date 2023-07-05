import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { TGraph } from './types.ts'
import CustomTooltip from './Tooltip'

const Graph = ({ repositoryActivity, graphLines, colors }: TGraph) => {
  return (
    <ResponsiveContainer>
      <LineChart
        width={500}
        height={300}
        data={repositoryActivity}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        {graphLines.map((line, i) => (
          <Line
            key={line}
            type="monotone"
            dataKey={line}
            stroke={colors[i]}
            dot={{ r: 7 }}
            activeDot={{ r: 8 }}
            strokeWidth={3}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
