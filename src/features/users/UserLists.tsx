import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import BaseCenter from '../../components/BaseCenter'

const dummyData = [
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
  return (
    <BaseCenter>
      {dummyData.map((user) => (
        <Card
          sx={{
            width: 500,
            mb: '10px',
            border: '1px solid rgb(0, 0, 0, 0.1)',
          }}>
          <CardHeader title={user.name} sx={{ backgroundColor: '#c0c0c0' }} />
          <CardContent>
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
