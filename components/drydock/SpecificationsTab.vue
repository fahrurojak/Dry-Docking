<template>
  <div class="specifications-tab">
    <div class="header-actions">
      <h3>Specifications</h3>
      <button class="btn-primary">+ Add Specification</button>
    </div>
    
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Group</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="spec in specifications" :key="spec.id">
            <td>{{ spec.id }}</td>
            <td>{{ spec.group }}</td>
            <td class="title-cell">{{ spec.title }}</td>
            <td>
              <span :class="['status-badge', spec.status.toLowerCase().replace(' ', '-')]">
                {{ spec.status }}
              </span>
            </td>
            <td>
              <span :class="['priority-badge', spec.priority.toLowerCase()]">
                {{ spec.priority }}
              </span>
            </td>
            <td class="actions-cell">
              <button class="btn-icon">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const specifications = [
  { id: 'SP-001', group: 'Hull', title: 'Hull Cleaning & Painting', status: 'Approved', priority: 'High' },
  { id: 'SP-002', group: 'Machinery', title: 'Main Engine Overhaul', status: 'In Review', priority: 'Critical' },
  { id: 'SP-003', group: 'Electrical', title: 'Generator Maintenance', status: 'Draft', priority: 'Medium' },
  { id: 'SP-004', group: 'Safety', title: 'Lifeboat Inspection', status: 'Approved', priority: 'High' },
  { id: 'SP-005', group: 'Piping', title: 'Ballast Water Treatment System Installation', status: 'Planning', priority: 'High' },
];
</script>

<style scoped>
.specifications-tab {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-actions h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
}

.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #1a8ad9;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

.data-table th {
  font-weight: 600;
  color: var(--text-grey);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: #f8fafc;
}

.title-cell {
  font-weight: 500;
  color: var(--primary-blue);
  cursor: pointer;
}

.title-cell:hover {
  text-decoration: underline;
}

.status-badge, .priority-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.approved { background-color: #e6f4ea; color: #1e8e3e; }
.status-badge.in-review { background-color: #fef7e0; color: #f9ab00; }
.status-badge.draft { background-color: #f1f3f4; color: #5f6368; }
.status-badge.planning { background-color: #e8f0fe; color: #1a73e8; }

.priority-badge.critical { background-color: #fce8e6; color: #d93025; }
.priority-badge.high { background-color: #fef7e0; color: #f9ab00; }
.priority-badge.medium { background-color: #e8f0fe; color: #1a73e8; }

.btn-icon {
  background: none;
  border: none;
  color: var(--text-grey);
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-icon:hover {
  color: var(--primary-blue);
}
</style>
