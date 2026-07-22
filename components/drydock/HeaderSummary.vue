<template>
  <div class="header-summary">
    <div class="header-content">
      <div class="vessel-image">
        <!-- Placeholder for vessel image -->
        <div class="image-placeholder"></div>
      </div>
      
      <div class="vessel-info">
        <span class="vessel-name">{{ data.vesselName }}</span>
        <h1 class="drydock-id">{{ data.id }}</h1>
        <p class="description">{{ data.description }}</p>
      </div>
    </div>
    
    <div class="header-action">
      <button class="btn-primary">Start Dry Dock</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DryDockDetails } from '~/types/drydock';

defineProps<{
  data: DryDockDetails;
}>();
</script>

<style scoped>
.header-summary {
  background-color: var(--primary-blue);
  color: var(--white);
  border-radius: 8px 8px 0 0;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.vessel-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #1a7ec4;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1550974861-f09c6ebf8b0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80');
  background-size: cover;
  background-position: center;
}

.vessel-name {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.9;
}

.drydock-id {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0.25rem 0;
}

.description {
  font-size: 0.9rem;
  opacity: 0.9;
}

.btn-primary {
  background-color: var(--white);
  color: var(--primary-blue);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #f0f0f0;
}
</style>
