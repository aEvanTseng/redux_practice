import { createSelector, createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/user'
import { getUsers } from './actions'

interface UserState {
  isFetching: boolean
  users: Array<User>
}

const initialState: UserState = {
  isFetching: false,
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isFetching = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false
      state.users = action.payload
    })
  },
})

export const selectUsers = createSelector(
  [(state) => state.users],
  (users): UserState => users
)

export const selectUser = createSelector(
  [(state) => state.users, (state, userId) => userId],
  (users: UserState, userId) => ({
    isFetching: users.isFetching,
    users: users.users.filter((user) => user.id === userId),
  })
)

export default userSlice.reducer
