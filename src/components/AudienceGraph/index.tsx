import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { StyledAudienceGraphContainer } from './styles'
import { useAppSelector } from 'src/redux/hooks'
import { useState } from 'react'
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart'
import { CustomTooltip } from '../CustomTooltip'

export const AudienceGraph = () => {
  const audienceData = useAppSelector(
    (state) => state.audienceGraphStore.audienceGraphData
  )

  const [percentage, setPercentage] = useState(0)
  const handleClick = (grapData: CategoricalChartState) => {
    if (grapData?.activePayload) {
      const hoveredX = grapData.activePayload[0].payload.xValue
      const idx = audienceData.findIndex((d) => d.xValue === hoveredX)
      const percentage = (idx * 100) / (audienceData.length - 1)

      setPercentage(percentage)
    }
  }

  const ToolTipWithData = ({ payload }: { payload?: unknown }) => {
    return <CustomTooltip text={`${payload[0]?.value} M`} />
  }

  const labelStyle = { fill: 'orange' }

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
            {!!percentage && (
              <stop offset={`${percentage}%`} stopColor="#2cdbbc" />
            )}
            <stop offset={`${percentage}%`} stopColor="rgb(38,75,74,0.5)" />
            <stop offset={`${100}%`} stopColor="rgb(38,75,74,0.5)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="xValue"
          stroke="white"
          unit="%"
          padding={{ left: 50, right: 50 }}
          tickLine={false}
          angle={-60}
          tickMargin={20}
          height={100}
        >
          <Label
            value="Time duration"
            offset={25}
            position="insideBottom"
            style={labelStyle}
          />
        </XAxis>
        <YAxis dataKey="yValue" stroke="white" unit="M" tickLine={false}>
          <Label
            value="Users"
            offset={0}
            position="insideLeft"
            angle={-90}
            style={labelStyle}
          />
        </YAxis>
        <Line
          type="monotone"
          dataKey="yValue"
          stroke="url(#colorUv)"
          strokeWidth={3}
          dot={false}
          activeDot={false}
        />
        <Tooltip
          cursor={{ stroke: '#089b80', strokeWidth: 1 }}
          offset={0}
          content={<ToolTipWithData />}
          coordinate={{ x: 4, y: 400 }}
          wrapperStyle={{
            height: '100%',
          }}
        />
        <CartesianGrid
          vertical={false}
          stroke="gray"
          opacity={0.2}
          strokeDasharray={'2000 20'}
          strokeWidth={2}
        />
      </LineChart>
    </StyledAudienceGraphContainer>
  )
}
