<template>
  <div class="cost-summary-section">
    <h2>Cost Summary</h2>
    
    <div class="cost-grid">
      <div class="cost-card">
        <span class="label">Budget</span>
        <span class="value">{{ formatCurrency(data.budget) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Yard Estimates</span>
        <span class="value">{{ formatCurrency(data.yardEstimates) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Owner Estimates</span>
        <span class="value">{{ formatCurrency(data.ownerEstimates) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Total Estimates</span>
        <span class="value">{{ formatCurrency(data.totalEstimates) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Actual Yard Costs</span>
        <span class="value">{{ formatCurrency(data.actualYardCosts) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Actual Owner Costs</span>
        <span class="value">{{ formatCurrency(data.actualOwnerCosts) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Total Costs</span>
        <span class="value">{{ formatCurrency(data.totalCosts) }}</span>
      </div>
      <div class="cost-card">
        <span class="label">Variance</span>
        <span class="value variance-value">
          {{ formatCurrency(data.variance) }}
          <span class="arrow-up">↑</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DryDockDetails } from '~/types/drydock';

defineProps<{
  data: DryDockDetails;
}>();

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value) + '$';
};
</script>

<style scoped>
.cost-summary-section {
  padding: 1.5rem;
}

.cost-summary-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.cost-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.cost-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--border-color);
}

.label {
  font-size: 0.85rem;
  color: var(--text-grey);
}

.value {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.variance-value {
  /* Inherit */
}

.arrow-up {
  font-size: 1rem;
  color: #666;
}
</style>
