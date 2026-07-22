<template>
  <div class="form-section">
    <div class="dates-grid">
      <div class="date-item">
        <span class="label">Planned Start Date</span>
        <span class="value">{{ data.plannedStartDate }}</span>
      </div>
      <div class="date-item">
        <span class="label">Planned End Date</span>
        <span class="value">{{ data.plannedEndDate }}</span>
      </div>
      <div class="date-item">
        <span class="label">Actual Start Date</span>
        <span class="value">{{ data.actualStartDate }}</span>
      </div>
      <div class="date-item">
        <span class="label">Actual End Date</span>
        <span class="value">{{ data.actualEndDate }}</span>
      </div>
    </div>
    
    <div class="form-card">
      <div class="form-group">
        <label>Shipyard</label>
        <div class="select-wrapper">
          <select class="form-control" v-model="shipyardModel">
            <option value="null">--</option>
            <option value="yard1">Shipyard A</option>
          </select>
          <div class="warning-banner" v-if="!shipyardModel || shipyardModel === 'null'">
            No Shipyard Selected
          </div>
        </div>
        <button class="btn-secondary">SELECT SHIPYARD</button>
      </div>
    </div>

    <div class="form-card">
      <div class="form-group">
        <label>Priority</label>
        <select class="form-control" v-model="data.priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div class="form-group">
        <label>Status</label>
        <div class="status-toggles">
          <button 
            :class="['status-btn', { active: data.status === 'Planning' }]"
            @click="data.status = 'Planning'"
          >Planning</button>
          <button 
            :class="['status-btn', { active: data.status === 'Execution' }]"
            @click="data.status = 'Execution'"
          >Execution</button>
          <button 
            :class="['status-btn', { active: data.status === 'Completed' }]"
            @click="data.status = 'Completed'"
          >Completed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { DryDockDetails } from '~/types/drydock';

const props = defineProps<{
  data: DryDockDetails;
}>();

const shipyardModel = ref(props.data.shipyard || 'null');
</script>

<style scoped>
.form-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
}

.dates-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.date-item {
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
  color: var(--text-dark);
}

.form-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
}

.select-wrapper {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.form-control {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.95rem;
  font-family: inherit;
  flex: 1;
  max-width: 400px;
  outline: none;
}

.warning-banner {
  background-color: #fff8e6;
  color: #b58000;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
}

.btn-secondary {
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 0.5rem;
}

.status-toggles {
  display: flex;
  gap: 0.5rem;
}

.status-btn {
  padding: 0.5rem 1.25rem;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-dark);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.status-btn.active {
  background-color: #e6f4ff;
  color: var(--primary-blue);
  border-color: var(--primary-blue);
}
</style>
