import { User } from '../domain/user'
import { createUser } from '../stores/userStore'

async function create(user: User): Promise<User> {
  return await createUser(user)
}

export { create }
