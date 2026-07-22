<template>
  <div class="costs-tab">
    <div class="summary-cards">
      <div class="cost-card">
        <span class="label">Total Budget</span>
        <span class="value font-mono">$1,200,000</span>
      </div>
      <div class="cost-card">
        <span class="label">Total Committed</span>
        <span class="value font-mono">$850,000</span>
      </div>
      <div class="cost-card alert">
        <span class="label">Variance</span>
        <span class="value font-mono">+$35,000</span>
      </div>
    </div>

    <div class="cost-breakdown">
      <h3>Cost Breakdown by Group</h3>
      <table class="cost-table">
        <thead>
          <tr>
            <th>Group</th>
            <th class="text-right">Budget</th>
            <th class="text-right">Estimated</th>
            <th class="text-right">Actual/Committed</th>
            <th class="text-right">Variance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in breakdown" :key="item.group">
            <td class="font-medium">{{ item.group }}</td>
            <td class="text-right font-mono">{{ item.budget }}</td>
            <td class="text-right font-mono">{{ item.estimated }}</td>
            <td class="text-right font-mono">{{ item.actual }}</td>
            <td :class="['text-right font-mono font-medium', item.variance.startsWith('+') ? 'text-danger' : 'text-success']">
              {{ item.variance }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const breakdown = [
  { group: 'Hull & Deck', budget: '$300,000', estimated: '$320,000', actual: '$310,000', variance: '+$10,000' },
  { group: 'Machinery', budget: '$400,000', estimated: '$450,000', actual: '$450,000', variance: '+$50,000' },
  { group: 'Electrical', budget: '$150,000', estimated: '$140,000', actual: '$130,000', variance: '-$20,000' },
  { group: 'Safety', budget: '$80,000', estimated: '$75,000', actual: '$75,000', variance: '-$5,000' },
  { group: 'Piping', budget: '$270,000', estimated: '$270,000', actual: '$0', variance: '$0' },
];
</script>

<style scoped>
.costs-tab {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.summary-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.cost-card {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cost-card.alert {
  border-color: #fce8e6;
  background-color: #fef7f6;
}

.label {
  font-size: 0.9rem;
  color: var(--text-grey);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-dark);
}

.cost-card.alert .value {
  color: #d93025;
}

.font-mono {
  font-family: monospace;
}

.cost-breakdown {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.cost-breakdown h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.cost-table {
  width: 100%;
  border-collapse: collapse;
}

.cost-table th, .cost-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.cost-table th {
  font-weight: 600;
  color: var(--text-grey);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: #f8fafc;
  text-align: left;
}

.text-right {
  text-align: right !important;
}

.font-medium {
  font-weight: 500;
}

.text-danger {
  color: #d93025;
}

.text-success {
  color: #1e8e3e;
}
</style>
