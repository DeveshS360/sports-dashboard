import {
  ArrowRightOutlined,
  CalendarOutlined,
  HomeOutlined,
} from '@ant-design/icons'
import {
  StyledAdervtisedMatchVersus,
  StyledAdvertisedMatchContainer,
  StyledAdvertisedMatchDetail,
  StyledAdvertisedMatchGetTicket,
  StyledAdvertisedMatchTitle,
  StyledGetTicketArrow,
} from './styles'
import { AdvertisedMatchProps } from './types'

export const AdvertisedMatch = (props: AdvertisedMatchProps) => {
  const { team1, team2, date, venue, versusImgUrl } = props
  const iconStyle = { fontSize: 20, color: 'white' }
  return (
    <StyledAdvertisedMatchContainer>
      <StyledAdvertisedMatchTitle>{`${team1} Vs ${team2}`}</StyledAdvertisedMatchTitle>
      <StyledAdvertisedMatchDetail>
        <CalendarOutlined style={iconStyle} />
        <span>{date}</span>
      </StyledAdvertisedMatchDetail>
      <StyledAdvertisedMatchDetail>
        <HomeOutlined style={iconStyle} />
        <span>{venue}</span>
      </StyledAdvertisedMatchDetail>
      <StyledAdvertisedMatchGetTicket>
        <span>Get a ticket</span>
        <StyledGetTicketArrow>
          <ArrowRightOutlined style={{ ...iconStyle, fontSize: 10 }} />
        </StyledGetTicketArrow>
      </StyledAdvertisedMatchGetTicket>
      <StyledAdervtisedMatchVersus src={versusImgUrl} />
    </StyledAdvertisedMatchContainer>
  )
}
