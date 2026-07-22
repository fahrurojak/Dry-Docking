<template>
  <div class="sourcing-tab">
    <div class="header-actions">
      <h3>Sourcing (RFQs & Vendors)</h3>
      <button class="btn-primary">New RFQ</button>
    </div>

    <div class="vendors-list">
      <div class="vendor-card" v-for="vendor in vendors" :key="vendor.id">
        <div class="vendor-header">
          <h4>{{ vendor.name }}</h4>
          <span :class="['status-badge', vendor.status.toLowerCase().replace(' ', '-')]">
            {{ vendor.status }}
          </span>
        </div>
        <div class="vendor-details">
          <div class="detail-item">
            <span class="label">Location</span>
            <span class="value">{{ vendor.location }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Total Quote</span>
            <span class="value font-mono">{{ vendor.quote }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Lead Time</span>
            <span class="value">{{ vendor.leadTime }}</span>
          </div>
        </div>
        <div class="vendor-actions">
          <button class="btn-text">View Details</button>
          <button class="btn-outline">Compare</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const vendors = [
  { id: 1, name: 'Sembcorp Marine', location: 'Singapore', status: 'Quoted', quote: '$450,000', leadTime: '14 Days' },
  { id: 2, name: 'Keppel Shipyard', location: 'Singapore', status: 'Pending', quote: '-', leadTime: '-' },
  { id: 3, name: 'Dubai Drydocks', location: 'UAE', status: 'Quoted', quote: '$410,000', leadTime: '16 Days' },
];
</script>

<style scoped>
.sourcing-tab {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.header-actions h3 {
  font-size: 1.25rem;
  font-weight: 600;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
}

.vendors-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.vendor-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.vendor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vendor-header h4 {
  font-weight: 600;
  font-size: 1.1rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.quoted { background-color: #e6f4ea; color: #1e8e3e; }
.status-badge.pending { background-color: #fef7e0; color: #f9ab00; }

.vendor-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.label {
  color: var(--text-grey);
}

.value {
  font-weight: 500;
  color: var(--text-dark);
}

.font-mono {
  font-family: monospace;
  font-size: 1rem;
}

.vendor-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: auto;
}

.btn-text {
  background: none;
  border: none;
  color: var(--primary-blue);
  font-weight: 500;
  cursor: pointer;
}

.btn-outline {
  background: none;
  border: 1px solid var(--border-color);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover {
  background-color: #f8fafc;
}
</style>
