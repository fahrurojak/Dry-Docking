import { readDB } from '../utils/db'

export default defineEventHandler((event) => {
  return readDB()
})
