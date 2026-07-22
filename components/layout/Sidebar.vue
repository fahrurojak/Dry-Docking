<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo-icon"></div>
      <h2>Dry Dock</h2>
    </div>
    
    <nav class="sidebar-nav">
      <a href="#" class="nav-item">
        <span class="icon">dashboard</span>
        Dashboard
      </a>
      <a href="#" class="nav-item">
        <span class="icon">list</span>
        Specification Groups
      </a>
      <a href="#" class="nav-item">
        <span class="icon">work</span>
        Work Order Master
      </a>
      <a href="#" class="nav-item">
        <span class="icon">check</span>
        Checklist
      </a>
      <a href="#" class="nav-item active">
        <span class="icon">sailing</span>
        Dry Docks
      </a>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  background-color: var(--primary-blue);
  color: var(--white);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
}

.sidebar-nav {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
}

.nav-item {
  padding: 0.875rem 1.5rem;
  color: var(--white);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  transition: background-color 0.2s;
  opacity: 0.8;
}

.nav-item:hover {
  background-color: rgba(255,255,255,0.1);
  opacity: 1;
}

.nav-item.active {
  background-color: rgba(255,255,255,0.15);
  font-weight: 600;
  opacity: 1;
  border-radius: 0 20px 20px 0;
  margin-right: 1rem;
}

.icon {
  /* Using pseudo element as a placeholder for icons since we don't have an icon pack installed */
  width: 20px;
  height: 20px;
  display: inline-block;
  background-color: currentColor;
  mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>');
  -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>');
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-position: center;
}
</style>
