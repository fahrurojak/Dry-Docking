<template>
  <div class="tabs-container">
    <div class="tabs-list">
      <button 
        v-for="tab in tabs" 
        :key="tab"
        :class="['tab-btn', { active: activeTab === tab }]"
        @click="$emit('update:activeTab', tab)"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tabs: string[];
  activeTab: string;
}>();
defineEmits<{
  (e: 'update:activeTab', value: string): void;
}>();
</script>

<style scoped>
.tabs-container {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;
}

.tabs-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.5rem 1.25rem;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-dark);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  border-color: #d0d7de;
}

.tab-btn.active {
  background-color: var(--primary-blue);
  color: var(--white);
  border-color: var(--primary-blue);
}
</style>
