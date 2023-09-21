import { LineChart } from 'recharts'
import { StyledAudienceGraphContainer } from './styles'

export const AudienceGraph = () => {
  return (
    <StyledAudienceGraphContainer>
      <LineChart width={800} height={600} data={[]}></LineChart>
    </StyledAudienceGraphContainer>
  )
}
