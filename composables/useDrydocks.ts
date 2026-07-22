import { ref } from 'vue'

export const useDrydocks = () => {
  const allDocks = ref<any[]>([])
  
  const myDocks = ref([
    {
      uuid: '1',
      id: 'SEPT2020/DD1',
      name: 'Ocean Star',
      description: 'DD Required to change BWT',
      manager: 'Roshan Ahluwalia/CE',
      plannedStart: '01/01/2020',
      plannedEnd: '01/01/2020',
      actualStart: '01/01/2020',
      actualEnd: '01/01/2020',
      status: 'Planning',
      specs: '40.00',
      budget: '1,200$',
      estimates: '50,000$',
      variance: '500. ⇡',
      shipyard: 'Kempell'
    },
    {
      uuid: '2',
      id: 'SEPT2020/DD1',
      name: 'MV Glory',
      description: 'DD Required to change BWT',
      manager: 'Raja/CO',
      plannedStart: '01/02/2020',
      plannedEnd: '01/02/2020',
      actualStart: '01/02/2020',
      actualEnd: '01/02/2020',
      status: 'Planning',
      specs: '50.00',
      budget: '2,000$',
      estimates: '60,000$',
      variance: '400 ⇡',
      shipyard: 'Bombay Dockyard'
    },
    {
      uuid: '3',
      id: 'OCT2020DD2',
      name: 'MV Happy',
      description: 'DD Needed to change OIL TANK',
      manager: 'Mark/Master',
      plannedStart: '01/03/2020',
      plannedEnd: '01/03/2020',
      actualStart: '01/03/2020',
      actualEnd: '01/03/2020',
      status: 'Execution',
      specs: '50.00',
      budget: '2,500$',
      estimates: '60,000$',
      variance: '500 ⇡',
      shipyard: 'Hindustan Shipyard Limited'
    }
  ])

  const refreshDocks = async () => {
    try {
      const res = await $fetch('/api/drydocks')
      if (res && Array.isArray(res)) {
        allDocks.value = res
      }
    } catch (err) {
      console.error("Failed to load data", err)
    }
  }

  const deleteDock = async (uuid: string) => {
    if (confirm("Are you sure you want to delete this dry dock?")) {
      await $fetch(`/api/drydocks/${uuid}`, { method: 'DELETE' });
      await refreshDocks();
    }
  }

  const duplicateDock = async (dock: any) => {
    const newDock = { ...dock, id: dock.id + ' (Copy)' };
    delete newDock.uuid;
    await $fetch('/api/drydocks', { method: 'POST', body: newDock });
    await refreshDocks();
  }

  const saveItem = async (isEditMode: boolean, editingUuid: string | null, formData: any) => {
    if (isEditMode && editingUuid) {
      await $fetch(`/api/drydocks/${editingUuid}`, {
        method: 'PUT',
        body: formData
      });
    } else {
      await $fetch('/api/drydocks', {
        method: 'POST',
        body: formData
      });
    }
    await refreshDocks();
  }

  return {
    allDocks,
    myDocks,
    refreshDocks,
    deleteDock,
    duplicateDock,
    saveItem
  }
}
