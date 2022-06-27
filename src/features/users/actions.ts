import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../../types/user'

export const getUsers = createAsyncThunk('user', async () => {
  const response = await axios.get('/users')

  return response.data as User[]
})
