import { useDispatch } from 'react-redux'
import { STORAGE } from 'src/constants'
import { useAppSelector } from 'src/redux/hooks'
import { setDefaultTab, setSportsStoreData } from 'src/redux/slices/SportsSlice'
import { setUserStoreData } from 'src/redux/slices/UserSlice'
import { getFromStorage, setInStorage } from 'src/utils/persist'

export const useStorageData = () => {
  const userStoreData = useAppSelector((state) => state.userStore.userStoreData)
  const sportsStoreData = useAppSelector(
    (state) => state.sportsStore.sportsStoreData
  )
  const dispatch = useDispatch()
  const setCachedorFetchedData = () => {
    const sportsStorageData = getFromStorage(STORAGE.sportsStoreData)
    const userStorageData = getFromStorage(STORAGE.userStoreData)
    if (sportsStorageData) {
      dispatch(setSportsStoreData(sportsStorageData))
      dispatch(setDefaultTab(sportsStorageData?.activeSportData?.sportName))
    } else {
      // make API call to get the data and add in redux store
      setInStorage(STORAGE.sportsStoreData, sportsStoreData)
    }
    if (userStorageData) dispatch(setUserStoreData(userStorageData))
    else {
      // make API call to get the data and add in redux store
      setInStorage(STORAGE.userStoreData, userStoreData)
    }
  }

  return { setCachedorFetchedData }
}
