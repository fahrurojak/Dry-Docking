<template>
  <div class="drydocks-page relative">
    
    <DockCards 
      :docks="myDocks" 
      :imgSrc="shipImg" 
      @select="goToDetail"
      @edit="openEditMode"
    />

    <section class="section">
      <div class="list-header">
        <h2 class="text-xl font-bold">All Dry Docks</h2>
        <div class="actions">
          <div class="search-box">
            <input type="text" placeholder="Search" v-model="searchQuery" />
          </div>
          <div class="filter-wrapper relative">
            <button class="btn-filter" @click.stop="toggleFilterMenu">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>
              Filter by
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div v-if="showFilterMenu" class="filter-dropdown">
              <div class="filter-item" @click.stop="selectFilter('All')">
                <span>All ({{ filterCounts.All }})</span>
                <svg v-if="selectedFilter === 'All'" class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div class="filter-item" @click.stop="selectFilter('Completed')">
                <span>Completed ({{ filterCounts.Completed }})</span>
                <svg v-if="selectedFilter === 'Completed'" class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div class="filter-item" @click.stop="selectFilter('Execution')">
                <span>Execution ({{ filterCounts.Execution }})</span>
                <svg v-if="selectedFilter === 'Execution'" class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <div class="filter-item" @click.stop="selectFilter('Planning')">
                <span>Planning ({{ filterCounts.Planning }})</span>
                <svg v-if="selectedFilter === 'Planning'" class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
            </div>
          </div>
          <button class="btn-primary" @click="openAddMode('minimal')">Add</button>
          <button class="btn-outline">Export</button>
          <div class="toggle-group flex bg-gray-100 p-1 rounded">
            <button class="toggle-btn" :class="{ active: viewMode === 'minimal' }" @click="viewMode = 'minimal'">Minimal</button>
            <button class="toggle-btn" :class="{ active: viewMode === 'detailed' }" @click="viewMode = 'detailed'">Detailed</button>
          </div>
        </div>
      </div>

      <div class="list-container" @click="openMenuId = null">
        <template v-if="viewMode === 'minimal'">
          <DockListMinimal 
            :docks="filteredDocks"
            :openMenuId="openMenuId"
            :imgSrc="shipImg"
            @select="goToDetail"
            @toggle-menu="toggleMenu"
            @edit="openEditMode"
            @duplicate="duplicateDock"
            @delete="deleteDock"
          />
        </template>

        <template v-if="viewMode === 'detailed'">
          <DockTableDetailed 
            :docks="filteredDocks"
            :searchQuery="searchQuery"
            @update:searchQuery="searchQuery = $event"
            @select="goToDetail"
            @add-detailed="openAddMode('detailed')"
          />
        </template>
      </div>
    </section>

    <AddDockPanel 
      :show="showAddPanel"
      :formType="formType"
      :isEditMode="isEditMode"
      :formData="formData"
      @close="showAddPanel = false"
      @save="onSaveItem"
    />

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useDrydocks } from '~/composables/useDrydocks'
import DockCards from '~/components/drydock/DockCards.vue'
import DockListMinimal from '~/components/drydock/DockListMinimal.vue'
import DockTableDetailed from '~/components/drydock/DockTableDetailed.vue'
import AddDockPanel from '~/components/drydock/AddDockPanel.vue'

const router = useRouter()
const { allDocks, myDocks, refreshDocks, deleteDock, duplicateDock, saveItem } = useDrydocks()
const config = useRuntimeConfig()
const base = config.app.baseURL === '/' ? '/' : config.app.baseURL
const shipImg = ref(base + 'ship_placeholder.png')
const viewMode = ref('minimal')
const formType = ref('minimal')
const showAddPanel = ref(false)
const openMenuId = ref(null)

const isEditMode = ref(false)
const editingUuid = ref(null)

const getInitialForm = () => ({
  vessel: '',
  id: '',
  description: '',
  shipyard: '',
  shipyardDetails: '',
  plannedStart: '',
  plannedEnd: '',
  actualStart: '',
  actualEnd: '',
  accountCode: '',
  budget: '',
  currency: '',
  responsibleRank: '',
  status: '',
  priority: '',
  completedDate: '',
  company: ''
})
const formData = ref(getInitialForm())

onMounted(() => {
  refreshDocks()
})

const toggleMenu = (uuid) => {
  openMenuId.value = openMenuId.value === uuid ? null : uuid;
}

const showFilterMenu = ref(false)
const selectedFilter = ref('All')
const searchQuery = ref('')

const toggleFilterMenu = () => { showFilterMenu.value = !showFilterMenu.value }
const selectFilter = (val) => {
  selectedFilter.value = val
  showFilterMenu.value = false
}

// Close dropdowns when clicking outside
if (typeof window !== 'undefined') {
  window.addEventListener('click', () => {
    showFilterMenu.value = false
  })
}

const filterCounts = computed(() => {
  const counts = { All: allDocks.value.length, Completed: 0, Execution: 0, Planning: 0 }
  allDocks.value.forEach(d => {
    if (d.status === 'Completed') counts.Completed++
    if (d.status === 'Execution') counts.Execution++
    if (d.status === 'Planning') counts.Planning++
  })
  return counts
})

const filteredDocks = computed(() => {
  let result = allDocks.value;
  
  if (selectedFilter.value !== 'All') {
    result = result.filter(d => d.status === selectedFilter.value);
  }
  
  if (searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase().trim();
    result = result.filter(d => {
      const matchId = d.id && d.id.toLowerCase().includes(q);
      const matchName = d.name && d.name.toLowerCase().includes(q);
      const matchDesc = d.description && d.description.toLowerCase().includes(q);
      const matchShipyard = d.shipyard && d.shipyard.toLowerCase().includes(q);
      return matchId || matchName || matchDesc || matchShipyard;
    });
  }
  
  return result;
})

const openAddMode = (type = 'minimal') => {
  isEditMode.value = false;
  editingUuid.value = null;
  formData.value = getInitialForm();
  formType.value = type;
  showAddPanel.value = true;
}

const openEditMode = (dock) => {
  openMenuId.value = null;
  isEditMode.value = true;
  editingUuid.value = dock.uuid;
  formType.value = 'minimal'; 
  formData.value = { ...dock };
  showAddPanel.value = true;
}

const onSaveItem = async () => {
  await saveItem(isEditMode.value, editingUuid.value, formData.value)
  showAddPanel.value = false;
}

const goToDetail = (uuid) => {
  router.push(`/drydocks/${uuid}`)
}
</script>

<style scoped>
.relative { position: relative; }

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}
.list-header h2 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-dark);
}
.actions {
  display: flex;
  gap: 10px;
  align-items: center;
}
.search-box input {
  padding: 7px 12px 7px 32px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--white) url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>') no-repeat 10px center;
  font-size: 0.8rem;
  outline: none;
  transition: all var(--transition-fast);
  color: var(--text-body);
  width: 180px;
}
.search-box input::placeholder {
  color: var(--text-light);
}
.search-box input:focus {
  border-color: var(--primary-blue-light);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  width: 220px;
}

.btn-filter, .btn-outline {
  padding: 7px 14px;
  border: 1px solid var(--border-color);
  background: var(--white);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-grey);
  transition: all var(--transition-fast);
}
.btn-filter:hover, .btn-outline:hover {
  background: var(--bg-subtle);
  border-color: var(--text-light);
  color: var(--text-body);
}

.filter-wrapper {
  position: relative;
}
.filter-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 6px;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  min-width: 180px;
  z-index: 20;
  padding: 4px;
}
.filter-item {
  padding: 8px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
  color: var(--text-body);
}
.filter-item:hover {
  background: var(--bg-subtle);
}
.check-icon {
  flex-shrink: 0;
}

.btn-primary {
  padding: 7px 16px;
  border: none;
  background: var(--primary-blue);
  color: white;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}
.btn-primary:hover {
  background: var(--primary-blue-dark);
  box-shadow: var(--shadow-sm);
}

.toggle-group {
  display: inline-flex;
  background-color: var(--bg-subtle);
  padding: 3px;
  border-radius: var(--radius-md);
  gap: 2px;
  border: 1px solid var(--border-light);
}
.toggle-btn {
  padding: 5px 14px;
  border: none;
  background: transparent;
  color: var(--text-light);
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}
.toggle-btn:hover {
  color: var(--text-grey);
}
.toggle-btn.active {
  background: var(--white);
  color: var(--primary-blue);
  box-shadow: var(--shadow-sm);
  font-weight: 600;
}

/* ══════════════════════════════════════
   RESPONSIVE DESIGN - INDEX PAGE
   ══════════════════════════════════════ */
@media (max-width: 768px) {
  .list-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .actions {
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .search-box {
    width: 100%;
  }
  
  .search-box input {
    width: 100%;
  }
  
  .search-box input:focus {
    width: 100%;
  }

  .btn-filter, .btn-outline, .btn-primary {
    flex: 1;
    justify-content: center;
  }
  
  .toggle-group {
    width: 100%;
  }
  
  .toggle-btn {
    flex: 1;
  }
}
</style>
