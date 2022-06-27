import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useEffect, useMemo } from 'react'
import BaseCenter from '../../components/BaseCenter'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getUsers } from './actions'
import { User } from '../../types/user'

const dummyData: User[] = [
  {
    id: 1,
    name: 'eins',
    career: 'engineer',
    created_at: '2020-01-01T00:00:00Z',
    updated_at: '2020-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'zwei',
    career: 'sales',
    created_at: '2020-01-02T00:00:00Z',
    updated_at: '2020-05-01T10:22:00Z',
  },
]

export default function UserList() {
  const { isFetching, users } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const displayUsers = useMemo(
    () => (isFetching ? dummyData : users),
    [isFetching, users]
  )

  return (
    <BaseCenter>
      {displayUsers.map((user) => (
        <Card
          sx={{
            width: 500,
            mb: '10px',
            border: '1px solid rgb(0, 0, 0, 0.1)',
          }}
          key={user.id}>
          <CardHeader title={user.name} sx={{ backgroundColor: '#c0c0c0' }} />
          <CardContent>
            <Typography>{`ID : ${user.id}`}</Typography>
            <Typography>{`Name : ${user.name}`}</Typography>
            <Typography>{`Career : ${user.career}`}</Typography>
            <Typography>{`Created At : ${user.created_at}`}</Typography>
            <Typography>{`Updated At : ${user.updated_at}`}</Typography>
          </CardContent>
        </Card>
      ))}
    </BaseCenter>
  )
}
