import { configureStore } from '@reduxjs/toolkit'
import userList from './userList'

export const store = configureStore({
  reducer: {
    users: userList
  }
})
