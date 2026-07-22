import { readDB, writeDB } from '../../utils/db'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const db = readDB()
  
  const index = db.findIndex(item => item.uuid === id)
  if (index !== -1) {
    db[index] = { ...db[index], ...body }
    writeDB(db)
    return db[index]
  }
  
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
})
