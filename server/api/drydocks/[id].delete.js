import { readDB, writeDB } from '../../utils/db'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const db = readDB()
  
  const index = db.findIndex(item => item.uuid === id)
  if (index !== -1) {
    db.splice(index, 1)
    writeDB(db)
    return { success: true }
  }
  
  throw createError({ statusCode: 404, statusMessage: 'Not Found' })
})
