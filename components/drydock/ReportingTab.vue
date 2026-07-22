<template>
  <div class="reporting-tab">
    <div class="header-actions">
      <h3>Reporting & Documents</h3>
      <button class="btn-primary">Upload Document</button>
    </div>
    
    <div class="documents-grid">
      <div class="document-card" v-for="doc in documents" :key="doc.id">
        <div class="doc-icon">
          <span v-if="doc.type === 'pdf'" class="icon-pdf">PDF</span>
          <span v-else-if="doc.type === 'image'" class="icon-img">IMG</span>
          <span v-else class="icon-doc">DOC</span>
        </div>
        <div class="doc-info">
          <h4>{{ doc.name }}</h4>
          <span class="meta">{{ doc.size }} • {{ doc.date }}</span>
        </div>
        <button class="btn-icon">⬇</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const documents = [
  { id: 1, name: 'Initial Survey Report.pdf', type: 'pdf', size: '2.4 MB', date: 'Sep 02, 2026' },
  { id: 2, name: 'Hull Thickness Measurements.xlsx', type: 'doc', size: '1.1 MB', date: 'Sep 05, 2026' },
  { id: 3, name: 'Propeller Polish Before.jpg', type: 'image', size: '4.5 MB', date: 'Sep 06, 2026' },
  { id: 4, name: 'Safety Audit Checklist.pdf', type: 'pdf', size: '0.8 MB', date: 'Sep 08, 2026' },
];
</script>

<style scoped>
.reporting-tab {
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

.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.document-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.document-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.doc-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--white);
}

.icon-pdf { background-color: #e53935; }
.icon-img { background-color: #43a047; }
.icon-doc { background-color: #1e88e5; }

.doc-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.doc-info h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-dark);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.meta {
  font-size: 0.8rem;
  color: var(--text-grey);
}

.btn-icon {
  background: none;
  border: none;
  color: var(--text-grey);
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.btn-icon:hover {
  background-color: #f1f3f4;
  color: var(--primary-blue);
}
</style>
