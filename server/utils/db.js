import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const dbFile = path.join(dataDir, 'drydocks.json')

// Initialize DB file if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

if (!fs.existsSync(dbFile)) {
  const initialData = [
    { uuid: '1', id: 'SEPT2020/DD1', name: 'Ocean Star', description: 'DD Required to change BWT', manager: 'Roshan Ahluwalia/CE', plannedStart: '01/01/2020', plannedEnd: '01/01/2020', actualStart: '01/01/2020', actualEnd: '01/01/2020', status: 'Planning', specs: '40.00', budget: '1,200$', estimates: '50,000$', variance: '500. ⇡', shipyard: 'Kempell' },
    { uuid: '2', id: 'SEPT2020/DD1', name: 'MV Glory', description: 'DD Required to change BWT', manager: 'Raja/CO', plannedStart: '01/02/2020', plannedEnd: '01/02/2020', actualStart: '01/02/2020', actualEnd: '01/02/2020', status: 'Planning', specs: '50.00', budget: '2,000$', estimates: '60,000$', variance: '400 ⇡', shipyard: 'Bombay Dockyard' },
    { uuid: '3', id: 'OCT2020DD2', name: 'MV Happy', description: 'DD Needed to change OIL TANK', manager: 'Mark/Master', plannedStart: '01/03/2020', plannedEnd: '01/03/2020', actualStart: '01/03/2020', actualEnd: '01/03/2020', status: 'Execution', specs: '50.00', budget: '2,500$', estimates: '60,000$', variance: '500 ⇡', shipyard: 'Hindustan Shipyard Limited' },
    { uuid: '4', id: 'OCT2020DD2', name: 'MV Judas', description: 'DD to repair cranes', manager: 'Roshan Ahluwalia/CE', plannedStart: '01/04/2020', plannedEnd: '01/04/2020', actualStart: '01/04/2020', actualEnd: '01/04/2020', status: 'Execution', specs: '34.00', budget: '2,200$', estimates: '60,000$', variance: '600 ⇡', shipyard: 'Timblo Drydocks Private Limited' },
    { uuid: '5', id: 'OCT2020DD2', name: 'Emma Stone', description: 'DD Required to change BWT', manager: 'Mark/Master', plannedStart: '01/01/2020', plannedEnd: '01/01/2020', actualStart: '01/01/2020', actualEnd: '01/01/2020', status: 'Execution', specs: '33.00', budget: '1,200$', estimates: '60,000$', variance: '300$', shipyard: 'Hindustan Shipyard Limited' },
    { uuid: '6', id: 'OCT2020DD2', name: 'Cecilia Stone', description: 'DD Needed to change OIL TANK', manager: 'Roshan Ahluwalia/CE', plannedStart: '01/02/2020', plannedEnd: '01/02/2020', actualStart: '01/02/2020', actualEnd: '01/02/2020', status: 'Execution', specs: '3.00', budget: '2,000$', estimates: '60,000$', variance: '400$', shipyard: 'Hindustan Shipyard Limited' },
    { uuid: '7', id: 'OCT2020DD2', name: 'Greenwich', description: 'DD to repair cranes', manager: 'Mark/Master', plannedStart: '01/03/2020', plannedEnd: '01/03/2020', actualStart: '01/03/2020', actualEnd: '01/03/2020', status: 'Execution', specs: '3.00', budget: '2,500$', estimates: '60,000$', variance: '500$', shipyard: 'Bombay Dockyard' },
    { uuid: '8', id: 'OCT2020DD2', name: 'Yue Dian', description: 'DD to change navigation equipment', manager: 'Mark/Master', plannedStart: '01/04/2020', plannedEnd: '01/04/2020', actualStart: '01/04/2020', actualEnd: '01/04/2020', status: 'Completed', specs: '3.00', budget: '2,200$', estimates: '60,000$', variance: '600$', shipyard: 'Timblo Drydocks Private Limited' },
  ]
  fs.writeFileSync(dbFile, JSON.stringify(initialData, null, 2), 'utf-8')
}

export const readDB = () => {
  const data = fs.readFileSync(dbFile, 'utf-8')
  return JSON.parse(data)
}

export const writeDB = (data) => {
  fs.writeFileSync(dbFile, JSON.stringify(data, null, 2), 'utf-8')
}
