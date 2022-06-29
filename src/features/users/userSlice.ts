import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit'
import { User } from '../../types/user'
import { getUsers } from './actions'

interface UserState {
  isFetching: boolean
  users: Array<User>
}

const userAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => 0,
})

const initialState = userAdapter.getInitialState({
  isFetching: false,
})

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
      userAdapter.setAll(state, action.payload)
    })
  },
})

export const selectUsers = createSelector(
  [(state) => state.users, (state) => state.users.ids],
  ({ isFetching, entities }, ids: string[]) => {
    return { isFetching, users: ids.map((id) => entities[id]) }
  }
)

export const selectUser = createSelector(
  [(state) => state.users, (state, userId) => userId],
  (users: UserState, userId) => ({
    isFetching: users.isFetching,
    users: users.users.filter((user) => user.id === userId),
  })
)

export default userSlice.reducer
