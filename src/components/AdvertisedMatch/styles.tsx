import { styled } from 'styled-components'

export const StyledAdvertisedMatchContainer = styled.div`
  background: var(--purple);
  padding: 40px;
  position: relative;

  * {
    color: var(--text-color-primary);
  }

  min-height: 300px;
  border-radius: var(--card-border-radius);
`

export const StyledAdvertisedMatchTitle = styled.div`
  font-size: 25px;
  margin: 10px 0 20px 0;
  font-weight: bold;
`

export const StyledAdvertisedMatchDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-bottom: 15px;

  span {
    font-size: 18px;
    font-weight: lighter;
  }
`

export const StyledAdvertisedMatchGetTicket = styled.button`
  background: #7a4988;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 10px;
  gap: 0 8px;
  margin-top: 40px;
`

export const StyledGetTicketArrow = styled.span`
  text-align: center;
  background: #9867c5;
  border-radius: 50%;
  flex-shrink: 0;
  padding: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledAdervtisedMatchVersus = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  transform: translate(-30%, 0);
`
