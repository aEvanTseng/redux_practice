import express from 'express'

const userData = [
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
  {
    id: 3,
    name: 'drei',
    career: 'HR',
    created_at: '2020-01-01T08:36:27Z',
    updated_at: '2021-01-01T07:22:58Z',
  },
]

const UserRouter = express.Router()

UserRouter.get('/', function (req, res) {
  res.send(userData)
})

UserRouter.post('/', function (req, res) {
  if (!req.body.name || !req.body.career) {
    res.status(400).send('invalid request body')
  }

  const newUser = {
    ...req.body,
    id: userData.length + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  userData.push(newUser)
  res.send(newUser)
})

UserRouter.delete('/:id', function (req, res) {
  const id = parseInt(req.params.id)
  const idx = userData.findIndex((user) => user.id === id)

  if (idx === -1) {
    res.status(404).send()
  }

  userData.splice(idx, 1)

  res.status(204).send()
})

export default UserRouter
