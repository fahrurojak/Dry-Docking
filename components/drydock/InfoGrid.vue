<template>
  <div class="info-grid">
    <div class="info-item">
      <span class="label">Dry Dock No</span>
      <span class="value">{{ data.id }}</span>
    </div>
    <div class="info-item">
      <span class="label">Description</span>
      <span class="value">{{ data.description }}</span>
    </div>
    <div class="info-item">
      <span class="label">Company</span>
      <span class="value">{{ data.company }}</span>
    </div>
    <div class="info-item">
      <span class="label">Account Code</span>
      <span class="value">{{ data.accountCode }}</span>
    </div>
    <div class="info-item">
      <span class="label">Responsible Rank</span>
      <span class="value">{{ data.responsibleRank }}</span>
    </div>
    <div class="info-item">
      <span class="label">Budget</span>
      <span class="value">{{ formatCurrency(data.budget) }}</span>
    </div>
    <div class="info-item">
      <span class="label">Currency</span>
      <span class="value">{{ data.currency }}</span>
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
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: var(--white);
  border-bottom: 1px solid var(--border-color);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.label {
  font-size: 0.85rem;
  color: var(--text-grey);
}

.value {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-dark);
}
</style>
