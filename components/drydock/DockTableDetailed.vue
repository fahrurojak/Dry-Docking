<template>
  <div>
    <!-- Table Controls (Second Search and Add) -->
    <div class="table-controls">
      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search" 
          :value="searchQuery"
          @input="$emit('update:searchQuery', $event.target.value)"
        />
      </div>
      <button class="btn-primary" @click.stop="$emit('add-detailed')">Add</button>
    </div>

    <!-- Detailed View (Table) -->
    <div class="detailed-list">
      <table class="data-table">
        <thead>
          <tr>
            <th class="checkbox-col">
              <input type="checkbox" class="custom-checkbox" />
            </th>
            <th>Dry Dock No.</th>
            <th>Description</th>
            <th>Manager (User)</th>
            <th>Planned Start Date</th>
            <th>Planned End Date</th>
            <th>Actual Start Date</th>
            <th>Actual End Date</th>
            <th>Status</th>
            <th>No of Specs</th>
            <th>Total Budget</th>
            <th>Total Estimates</th>
            <th>Variance</th>
            <th>Shipyard Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dock, index) in docks" :key="'det-' + dock.uuid" @click="$emit('select', dock.id)">
            <td class="checkbox-col" @click.stop>
              <input type="checkbox" class="custom-checkbox" checked />
            </td>
            <td><span class="index text-grey">{{ index + 1 }}</span> {{ dock.id }}</td>
            <td>{{ dock.description }}</td>
            <td>{{ dock.manager }}</td>
            <td>{{ dock.plannedStart }}</td>
            <td>{{ dock.plannedEnd }}</td>
            <td>{{ dock.actualStart }}</td>
            <td>{{ dock.actualEnd }}</td>
            <td>{{ dock.status }}</td>
            <td>{{ dock.specs }}</td>
            <td>{{ dock.budget }}</td>
            <td>{{ dock.estimates }}</td>
            <td>{{ dock.variance }}</td>
            <td>{{ dock.shipyard }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  docks: {
    type: Array,
    required: true
  },
  searchQuery: {
    type: String,
    default: ''
  }
})

defineEmits(['select', 'add-detailed', 'update:searchQuery'])
</script>

<style scoped>
/* Detailed Table */
.table-controls {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 1.25rem;
  margin-top: 2rem;
}

.search-box {
  width: 250px;
}
.search-box input {
  width: 100%;
  padding: 8px 12px 8px 30px;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--white) url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>') no-repeat 10px center;
  font-size: calc(0.85rem * var(--font-scale));
  outline: none;
  color: var(--text-body);
  transition: all var(--transition-fast);
}
.search-box input:focus {
  border-color: var(--primary-blue-light);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-primary {
  padding: 8px 16px;
  border: none;
  background: var(--primary-blue);
  color: white;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: calc(0.85rem * var(--font-scale));
  font-weight: 600;
  transition: all var(--transition-fast);
}
.btn-primary:hover {
  background: var(--primary-blue-dark);
  box-shadow: var(--shadow-sm);
}

.detailed-list {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  overflow-x: auto;
  margin-bottom: 2rem;
  transition: background-color var(--transition-slow), border-color var(--transition-slow);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-light);
  color: var(--text-dark);
  font-size: calc(0.85rem * var(--font-scale));
  white-space: nowrap;
}

.data-table th {
  font-weight: 600;
  color: var(--text-grey);
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-color);
  text-transform: uppercase;
  font-size: calc(0.75rem * var(--font-scale));
  letter-spacing: 0.05em;
  transition: background-color var(--transition-slow);
}

.data-table tbody tr {
  cursor: pointer;
  transition: background-color var(--transition-fast);
}
.data-table tbody tr:hover {
  background-color: var(--bg-subtle);
}
.index {
  display: inline-block;
  width: 20px;
}
.checkbox-col {
  width: 40px;
  text-align: center;
}
.custom-checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: var(--primary-blue);
}

/* ══════════════════════════════════════
   RESPONSIVE DESIGN
   ══════════════════════════════════════ */
@media (max-width: 768px) {
  .table-controls {
    flex-direction: column;
    gap: 12px;
  }
  .search-box {
    width: 100%;
  }
  .btn-primary {
    width: 100%;
  }
}
</style>
