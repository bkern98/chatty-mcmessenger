import db from '../db/db'
import { User } from '../domain/user'
import { v4 as uuid } from 'uuid'

async function createUser(user: User): Promise<User> {
  user.id = uuid()
  const created = (await db.table('user').insert(user).returning('*')) as User[]
  return created[0]
}

export { createUser }
