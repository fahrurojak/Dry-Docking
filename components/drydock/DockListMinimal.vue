<template>
  <div class="minimal-list mb-12">
    <div v-for="dock in docks" :key="'min-' + dock.uuid" class="list-item" @click="$emit('select', dock.uuid)">
      <div class="item-icon">
        <img :src="imgSrc" alt="Icon" style="object-fit: cover; width: 100%; height: 100%;" />
      </div>
      <div class="item-col item-id font-bold copy-wrapper" title="Click to copy ID">
        {{ dock.id }}
        <svg @click.stop="copyToClipboard(dock.id)" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
      </div>
      <div class="item-col item-desc text-grey">{{ dock.description }}</div>
      <div class="item-col item-name text-grey">{{ dock.name }}</div>
      <div class="item-actions-wrap">
        <div class="item-actions" @click.stop="toggleMenu(dock.uuid)">...</div>
        <!-- Dropdown Menu -->
        <div v-if="openMenuId === dock.uuid" class="dropdown-menu">
          <div class="dropdown-item" @click.stop="openEditMode(dock)">Edit</div>
          <div class="dropdown-item" @click.stop="duplicateDock(dock)">Copy (Duplicate)</div>
          <div class="dropdown-item delete" @click.stop="deleteDock(dock.uuid)">Delete</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  docks: {
    type: Array,
    required: true
  },
  openMenuId: {
    type: String,
    default: null
  },
  imgSrc: {
    type: String,
    default: '/ship_placeholder.png'
  }
})

const emit = defineEmits(['select', 'toggle-menu', 'edit', 'duplicate', 'delete'])

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Copied: ' + text);
  } catch (err) {
    console.error('Failed to copy', err);
  }
}

const toggleMenu = (uuid) => emit('toggle-menu', uuid)
const openEditMode = (dock) => emit('edit', dock)
const duplicateDock = (dock) => emit('duplicate', dock)
const deleteDock = (uuid) => emit('delete', uuid)
</script>

<style scoped>
.mb-12 { margin-bottom: 3rem; }

.minimal-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.list-item {
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 14px 16px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xs);
  cursor: pointer;
  border: 1px solid var(--border-light);
  transition: all var(--transition-fast);
}
.list-item:hover {
  background: var(--white);
  border-color: var(--border-color);
  box-shadow: var(--shadow-md);
}
.item-icon {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-right: 14px;
  flex-shrink: 0;
}
.item-col {
  flex: 1;
  font-size: 0.85rem;
}
.item-id {
  max-width: 150px;
  font-size: 0.85rem;
  letter-spacing: -0.01em;
}
.copy-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
.copy-icon {
  color: var(--text-light);
  cursor: pointer;
  transition: color var(--transition-fast);
  opacity: 0;
}
.list-item:hover .copy-icon {
  opacity: 1;
}
.copy-icon:hover {
  color: var(--primary-blue);
}
.item-actions-wrap {
  position: relative;
  margin-left: auto;
}
.item-actions {
  padding: 4px 10px;
  font-weight: bold;
  color: var(--text-light);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  letter-spacing: 2px;
}
.item-actions:hover {
  background: var(--bg-subtle);
  color: var(--text-grey);
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background: var(--white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 10;
  min-width: 140px;
  border: 1px solid var(--border-color);
  padding: 4px;
}
.dropdown-item {
  padding: 8px 14px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
  color: var(--text-body);
}
.dropdown-item:hover {
  background: var(--bg-subtle);
}
.dropdown-item.delete {
  color: var(--danger);
}
.dropdown-item.delete:hover {
  background: #fef2f2;
}

/* ══════════════════════════════════════
   RESPONSIVE DESIGN
   ══════════════════════════════════════ */
@media (max-width: 768px) {
  .list-item {
    flex-wrap: wrap;
    padding: 12px;
  }
  .item-desc {
    display: none;
  }
  .item-name {
    width: 100%;
    margin-top: 8px;
    font-weight: 600;
  }
  .item-actions-wrap {
    position: absolute;
    right: 12px;
    top: 12px;
  }
}
</style>
