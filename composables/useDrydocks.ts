import { ref, computed } from 'vue'
import type { DryDockListItem } from '~/types/drydock'

export const useDrydocks = () => {
  const allDocks = ref<DryDockListItem[]>([])
  
  const myDocks = ref<DryDockListItem[]>([
    {
      "uuid": "1",
      "id": "SEPT2020/DD1",
      "name": "Ocean Star",
      "description": "DD Required to change BWT",
      "manager": "Roshan Ahluwalia/CE",
      "plannedStart": "01/01/2020",
      "plannedEnd": "01/01/2020",
      "actualStart": "01/01/2020",
      "actualEnd": "01/01/2020",
      "status": "Planning",
      "specs": "40.00",
      "budget": "1,200$",
      "estimates": "50,000$",
      "variance": "500. ⇡",
      "shipyard": "Kempell"
    },
    {
      "uuid": "2",
      "id": "SEPT2020/DD1",
      "name": "MV Glory",
      "description": "DD Required to change BWT",
      "manager": "Raja/CO",
      "plannedStart": "01/02/2020",
      "plannedEnd": "01/02/2020",
      "actualStart": "01/02/2020",
      "actualEnd": "01/02/2020",
      "status": "Planning",
      "specs": "50.00",
      "budget": "2,000$",
      "estimates": "60,000$",
      "variance": "400 ⇡",
      "shipyard": "Bombay Dockyard"
    },
    {
      "uuid": "3",
      "id": "OCT2020DD2",
      "name": "MV Happy",
      "description": "DD Needed to change OIL TANK",
      "manager": "Mark/Master",
      "plannedStart": "01/03/2020",
      "plannedEnd": "01/03/2020",
      "actualStart": "01/03/2020",
      "actualEnd": "01/03/2020",
      "status": "Execution",
      "specs": "50.00",
      "budget": "2,500$",
      "estimates": "60,000$",
      "variance": "500 ⇡",
      "shipyard": "Hindustan Shipyard Limited"
    },
    {
      "uuid": "4",
      "id": "OCT2020DD2",
      "name": "MV Judas",
      "description": "DD to repair cranes",
      "manager": "Roshan Ahluwalia/CE",
      "plannedStart": "01/04/2020",
      "plannedEnd": "01/04/2020",
      "actualStart": "01/04/2020",
      "actualEnd": "01/04/2020",
      "status": "Execution",
      "specs": "34.00",
      "budget": "2,200$",
      "estimates": "60,000$",
      "variance": "600 ⇡",
      "shipyard": "Timblo Drydocks Private Limited"
    },
    {
      "uuid": "5",
      "id": "OCT2020DD2",
      "name": "Emma Stone",
      "description": "DD Required to change BWT",
      "manager": "Mark/Master",
      "plannedStart": "01/01/2020",
      "plannedEnd": "01/01/2020",
      "actualStart": "01/01/2020",
      "actualEnd": "01/01/2020",
      "status": "Execution",
      "specs": "33.00",
      "budget": "1,200$",
      "estimates": "60,000$",
      "variance": "300$",
      "shipyard": "Hindustan Shipyard Limited"
    },
    {
      "uuid": "6",
      "id": "OCT2020DD2",
      "name": "Cecilia Stone",
      "description": "DD Needed to change OIL TANK",
      "manager": "Roshan Ahluwalia/CE",
      "plannedStart": "01/02/2020",
      "plannedEnd": "01/02/2020",
      "actualStart": "01/02/2020",
      "actualEnd": "01/02/2020",
      "status": "Execution",
      "specs": "3.00",
      "budget": "2,000$",
      "estimates": "60,000$",
      "variance": "400$",
      "shipyard": "Hindustan Shipyard Limited"
    },
    {
      "uuid": "7",
      "id": "OCT2020DD2",
      "name": "Greenwich",
      "description": "DD to repair cranes",
      "manager": "Mark/Master",
      "plannedStart": "01/03/2020",
      "plannedEnd": "01/03/2020",
      "actualStart": "01/03/2020",
      "actualEnd": "01/03/2020",
      "status": "Execution",
      "specs": "3.00",
      "budget": "2,500$",
      "estimates": "60,000$",
      "variance": "500$",
      "shipyard": "Bombay Dockyard"
    },
    {
      "uuid": "8",
      "id": "OCT2020DD2",
      "name": "Yue Dian",
      "description": "DD to change navigation equipment",
      "manager": "Mark/Master",
      "plannedStart": "01/04/2020",
      "plannedEnd": "01/04/2020",
      "actualStart": "01/04/2020",
      "actualEnd": "01/04/2020",
      "status": "Completed",
      "specs": "3.00",
      "budget": "2,200$",
      "estimates": "60,000$",
      "variance": "600$",
      "shipyard": "Timblo Drydocks Private Limited"
    }
  ])

  // UI State for filtering
  const searchQuery = ref('')
  const selectedFilter = ref('All')

  // Optimized Single-Pass Filter Algorithm
  const filteredDocks = computed(() => {
    const q = searchQuery.value.trim().toLowerCase()
    const filter = selectedFilter.value

    return allDocks.value.filter(d => {
      // Check status
      const matchStatus = filter === 'All' || d.status === filter
      if (!matchStatus) return false
      
      // Check query
      if (!q) return true
      return (
        (d.id && d.id.toLowerCase().includes(q)) ||
        (d.name && d.name.toLowerCase().includes(q)) ||
        (d.description && d.description.toLowerCase().includes(q)) ||
        (d.shipyard && d.shipyard.toLowerCase().includes(q))
      )
    })
  })

  const filterCounts = computed(() => {
    const counts = { All: allDocks.value.length, Completed: 0, Execution: 0, Planning: 0 }
    allDocks.value.forEach(d => {
      if (d.status === 'Completed') counts.Completed++
      if (d.status === 'Execution') counts.Execution++
      if (d.status === 'Planning') counts.Planning++
    })
    return counts
  })

  const refreshDocks = async () => {
    try {
      const res = await $fetch<DryDockListItem[]>('/api/drydocks')
      if (res && Array.isArray(res)) {
        allDocks.value = res
      }
    } catch (err) {
      console.warn("API failed (likely static host), using mock data fallback.")
      if (allDocks.value.length === 0) {
        allDocks.value = [...myDocks.value]
      }
    }
  }

  const deleteDock = async (uuid: string) => {
    if (confirm("Are you sure you want to delete this dry dock?")) {
      try {
        await $fetch(`/api/drydocks/${uuid}`, { method: 'DELETE' })
      } catch (err) {
        allDocks.value = allDocks.value.filter(d => d.uuid !== uuid)
        return
      }
      await refreshDocks()
    }
  }

  const duplicateDock = async (dock: DryDockListItem) => {
    const newDock = { ...dock, id: dock.id + ' (Copy)' }
    delete newDock.uuid
    await $fetch('/api/drydocks', { method: 'POST', body: newDock })
    await refreshDocks()
  }

  const saveItem = async (isEditMode: boolean, editingUuid: string | null, formData: Partial<DryDockListItem>) => {
    if (isEditMode && editingUuid) {
      await $fetch(`/api/drydocks/${editingUuid}`, {
        method: 'PUT',
        body: formData
      })
    } else {
      await $fetch('/api/drydocks', {
        method: 'POST',
        body: formData
      })
    }
    await refreshDocks()
  }

  const exportToCSV = () => {
    const dataToExport = filteredDocks.value
    if (!dataToExport || dataToExport.length === 0) {
      alert("Tidak ada data untuk diexport.")
      return
    }

    const headers = ['Dry Dock No', 'Vessel Name', 'Description', 'Manager', 'Planned Start', 'Planned End', 'Status', 'Shipyard']
    const csvRows = [headers.join(',')]

    dataToExport.forEach(dock => {
      const row = [
        `"${dock.id || ''}"`,
        `"${dock.name || ''}"`,
        `"${dock.description || ''}"`,
        `"${dock.manager || ''}"`,
        `"${dock.plannedStart || ''}"`,
        `"${dock.plannedEnd || ''}"`,
        `"${dock.status || ''}"`,
        `"${dock.shipyard || ''}"`
      ]
      csvRows.push(row.join(','))
    })

    const csvContent = csvRows.join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    
    // Download logic
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `DryDocks_Export_${new Date().getTime()}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return {
    allDocks,
    myDocks,
    searchQuery,
    selectedFilter,
    filteredDocks,
    filterCounts,
    refreshDocks,
    deleteDock,
    duplicateDock,
    saveItem,
    exportToCSV
  }
}
