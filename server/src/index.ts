import express, { Express } from 'express'
import router from './routes'
import cors from 'cors'

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(router)
const port = 8080

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
