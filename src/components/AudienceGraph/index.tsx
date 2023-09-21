import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { StyledAudienceGraphContainer } from './styles'
import { useAppSelector } from 'src/redux/hooks'
import { useState } from 'react'
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart'

export const AudienceGraph = () => {
  const audienceData = useAppSelector(
    (state) => state.audienceGraphStore.audienceGraphData
  )

  const [percentage, setPercentage] = useState(0)
  const handleClick = (grapData: CategoricalChartState) => {
    console.log(grapData, 'checking')
    if (grapData && grapData.activePayload) {
      const hoveredX = grapData.activePayload[0].payload.xValue
      const idx = audienceData.findIndex((d) => d.xValue === hoveredX)
      const percentage = (idx * 100) / (audienceData.length - 1)

      setPercentage(percentage)
    }
  }

  return (
    <StyledAudienceGraphContainer>
      <LineChart
        width={800}
        height={600}
        data={audienceData || []}
        onClick={handleClick}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#2cdbbc" />
            <stop offset={`${percentage}%`} stopColor="#2cdbbc" />
            <stop offset={`${percentage}%`} stopColor="rgb(38,75,74,0.5)" />
            <stop offset={`${100}%`} stopColor="rgb(38,75,74,0.5)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="xValue"
          stroke="white"
          label="match%"
          padding={{ left: 50 }}
        />
        <YAxis
          dataKey="yValue"
          stroke="white"
          label="million users"
          padding={{ top: 50 }}
        />
        <Line
          type="monotone"
          dataKey="yValue"
          stroke="url(#colorUv)"
          strokeWidth={3}
          dot={false}
          activeDot={false}
        />
        <Tooltip itemStyle={{ width: 1, backgroundColor: 'blue' }} />
      </LineChart>
    </StyledAudienceGraphContainer>
  )
}
