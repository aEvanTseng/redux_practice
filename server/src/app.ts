import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRouter from './UserRouter'

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user/', userRouter)

export default app
