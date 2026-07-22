<template>
  <section class="section mb-8">
    <h2 class="text-xl font-bold mb-4">My Dry Docks</h2>
    <div class="cards-grid">
      <div v-for="dock in docks" :key="dock.uuid || dock.id" class="dock-card cursor-pointer" @click="$emit('select', dock.uuid)">
        <div class="dock-image">
          <img :src="imgSrc" alt="Ship" style="object-fit: cover; width: 100%; height: 100%;" />
          <div class="dock-status" :class="dock.status.toLowerCase()">{{ dock.status }}</div>
          <!-- Three dots menu -->
          <div class="card-menu-wrap">
            <div class="card-menu-btn" @click.stop="toggleMenu(dock.uuid)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
            </div>
            <div v-if="openMenuId === dock.uuid" class="card-dropdown">
              <div class="card-dropdown-item" @click.stop="$emit('edit', dock)">Edit</div>
            </div>
          </div>
        </div>
        <div class="dock-info">
          <h3 class="dock-name">{{ dock.name }}</h3>
          <p class="dock-id text-grey text-sm">{{ dock.id }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  docks: {
    type: Array,
    required: true
  },
  imgSrc: {
    type: String,
    default: '/ship_placeholder.png'
  }
})
defineEmits(['select', 'edit'])

const openMenuId = ref(null)

const toggleMenu = (uuid) => {
  openMenuId.value = openMenuId.value === uuid ? null : uuid
}

// Close menu on outside click
if (typeof window !== 'undefined') {
  window.addEventListener('click', () => {
    openMenuId.value = null
  })
}
</script>

<style scoped>
.mb-8 { margin-bottom: 2rem; }
.mb-4 { margin-bottom: 1rem; }
.cursor-pointer { cursor: pointer; }

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.dock-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}
.dock-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-color);
}

.dock-image {
  height: 150px;
  width: 100%;
  position: relative;
  background: var(--bg-subtle);
  overflow: hidden;
}
.dock-image img {
  transition: transform var(--transition-slow);
}
.dock-card:hover .dock-image img {
  transform: scale(1.05);
}

.dock-status {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text-dark);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.dock-status.planning { color: var(--warning); }
.dock-status.execution { color: var(--primary-blue); }
.dock-status.completed { color: var(--success); }

.dock-info {
  padding: 14px 16px;
}
.dock-name {
  color: var(--text-dark);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}
.dock-id {
  font-size: 0.8rem;
}

/* Three dots menu */
.card-menu-wrap {
  position: absolute;
  top: 10px;
  right: 10px;
}
.card-menu-btn {
  width: 30px;
  height: 30px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-grey);
  transition: all var(--transition-fast);
  opacity: 0;
}
.dock-card:hover .card-menu-btn {
  opacity: 1;
}
.card-menu-btn:hover {
  background: white;
  box-shadow: var(--shadow-md);
  color: var(--text-dark);
}
.card-dropdown {
  position: absolute;
  top: 34px;
  right: 0;
  background: var(--white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-color);
  min-width: 110px;
  z-index: 10;
  padding: 4px;
}
.card-dropdown-item {
  padding: 8px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--text-body);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
}
.card-dropdown-item:hover {
  background: var(--bg-subtle);
}
</style>
