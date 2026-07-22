import { readDB, writeDB } from '../utils/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const db = readDB()
  
  const newItem = {
    uuid: Date.now().toString(),
    ...body
  }
  
  db.unshift(newItem)
  writeDB(db)
  
  return newItem
})
