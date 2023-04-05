import express, { Request, Response } from 'express'
import { create } from '../services/userService'
import { User } from '../domain/user'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Woot Woot')
})

router.post('/user', async (req: Request, res: Response) => {
  const user: User = await create(req.body)
  res.status(201).send(user.id)
})

export default router
