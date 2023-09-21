import { UserData } from 'src/components/User/types'

export interface UserStore {
  userStoreData: {
    user: UserData
    notifications: number
  }
}
