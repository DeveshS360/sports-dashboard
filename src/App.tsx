import { useEffect } from 'react'
import { MainInfo } from './components/MainInfo'
import { Navbar } from './components/Navbar'
import { SideInfo } from './components/SideInfo'
import { StyledAppContainer } from './styles'
import { useStorageData } from './hooks/useStorage'
import { AudienceGraphModal } from './components/AudienceGraphModal'

export const App = () => {
  const { setCachedorFetchedData } = useStorageData()

  useEffect(() => {
    // checking if data present in session storage
    setCachedorFetchedData()
  }, [])

  return (
    <StyledAppContainer>
      <Navbar />
      <MainInfo />
      <SideInfo />
      <AudienceGraphModal />
    </StyledAppContainer>
  )
}
