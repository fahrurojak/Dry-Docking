<template>
  <div class="purchase-orders-tab">
    <div class="header-actions">
      <h3>Purchase Orders</h3>
      <button class="btn-primary">Create PO</button>
    </div>

    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>PO Number</th>
            <th>Vendor</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="po in purchaseOrders" :key="po.id">
            <td class="po-number">{{ po.id }}</td>
            <td class="font-medium">{{ po.vendor }}</td>
            <td>{{ po.description }}</td>
            <td class="font-mono">{{ po.amount }}</td>
            <td>
              <span :class="['status-badge', po.status.toLowerCase()]">
                {{ po.status }}
              </span>
            </td>
            <td class="date-cell">{{ po.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const purchaseOrders = [
  { id: 'PO-2026-001', vendor: 'Sembcorp Marine', description: 'Dry Docking Main Contract', amount: '$450,000', status: 'Approved', date: 'Sep 01, 2026' },
  { id: 'PO-2026-002', vendor: 'Jotun Paints', description: 'Antifouling Paint Supply', amount: '$45,000', status: 'Approved', date: 'Sep 05, 2026' },
  { id: 'PO-2026-003', vendor: 'Alfa Laval', description: 'Separator Spares', amount: '$12,500', status: 'Pending', date: 'Sep 10, 2026' },
  { id: 'PO-2026-004', vendor: 'Wartsila', description: 'Engine Service Engineer', amount: '$18,000', status: 'Draft', date: 'Sep 12, 2026' },
];
</script>

<style scoped>
.purchase-orders-tab {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
  padding: 1.5rem;
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
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

.po-number {
  font-weight: 600;
  color: var(--primary-blue);
  cursor: pointer;
}

.po-number:hover {
  text-decoration: underline;
}

.font-medium {
  font-weight: 500;
  color: var(--text-dark);
}

.font-mono {
  font-family: monospace;
  font-size: 1rem;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.approved { background-color: #e6f4ea; color: #1e8e3e; }
.status-badge.pending { background-color: #fef7e0; color: #f9ab00; }
.status-badge.draft { background-color: #f1f3f4; color: #5f6368; }

.date-cell {
  color: var(--text-grey);
  font-size: 0.9rem;
}
</style>
