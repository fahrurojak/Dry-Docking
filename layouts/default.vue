<script setup>
import { ref, onMounted } from 'vue'

const showToast = ref(false)
let toastTimer = null

const alertFocus = () => {
  showToast.value = false
  setTimeout(() => {
    showToast.value = true
    if (toastTimer) clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      showToast.value = false
    }, 4000)
  }, 50)
}

// Dark mode
const isDark = ref(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// Font size accessibility
const fontSizes = ['normal', 'large', 'xlarge']
const fontOptions = ['Normal', 'Besar', 'Ekstra Besar']
const fontPreviewSizes = ['14px', '17px', '20px']
const currentFont = ref(0)
const showAccPanel = ref(false)

const setFont = (idx) => {
  currentFont.value = idx
  document.documentElement.setAttribute('data-font', fontSizes[idx])
  localStorage.setItem('fontPref', fontSizes[idx])
}

// High contrast (bold text)
const highContrast = ref(false)
const toggleContrast = () => {
  highContrast.value = !highContrast.value
  document.documentElement.setAttribute('data-contrast', highContrast.value ? 'high' : 'normal')
  localStorage.setItem('contrastPref', highContrast.value ? 'high' : 'normal')
}

// Close accessibility panel on outside click
if (typeof window !== 'undefined') {
  window.addEventListener('click', () => {
    showAccPanel.value = false
  })
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  const savedFont = localStorage.getItem('fontPref')
  if (savedFont) {
    const idx = fontSizes.indexOf(savedFont)
    if (idx >= 0) {
      currentFont.value = idx
      document.documentElement.setAttribute('data-font', savedFont)
    }
  }
  const savedContrast = localStorage.getItem('contrastPref')
  if (savedContrast === 'high') {
    highContrast.value = true
    document.documentElement.setAttribute('data-contrast', 'high')
  }
})
</script>

<template>
  <div class="layout-container">
    <!-- Toast Popup -->
    <Transition name="toast">
      <div v-if="showToast" class="custom-toast">
        <div class="toast-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
        </div>
        <div class="toast-content">
          <div class="toast-title">Informasi</div>
          <div class="toast-desc">Fokus di fitur <strong>Dry Docs</strong> ya 😊</div>
        </div>
      </div>
    </Transition>

    <aside class="sidebar">
      <div class="sidebar-header">
        <svg class="logo-icon-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/><line x1="12" x2="12" y1="22" y2="19"/><line x1="12" x2="12" y1="5" y2="2"/><line x1="22" x2="19" y1="12" y2="12"/><line x1="5" x2="2" y1="12" y2="12"/><line x1="19.07" x2="16.95" y1="4.93" y2="7.05"/><line x1="7.05" x2="4.93" y1="16.95" y2="19.07"/><line x1="19.07" x2="16.95" y1="19.07" y2="16.95"/><line x1="7.05" x2="4.93" y1="7.05" y2="4.93"/></svg>
        <span class="logo-text">Dry Dock</span>
      </div>
      
      <nav class="sidebar-nav">
        <a href="#" class="nav-item" @click.prevent="alertFocus">
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
          <span>Dashboard</span>
        </a>
        <a href="#" class="nav-item" @click.prevent="alertFocus">
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          <span>Specification Groups</span>
        </a>
        <a href="#" class="nav-item" @click.prevent="alertFocus">
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <span>Work Order Master</span>
        </a>
        <a href="#" class="nav-item" @click.prevent="alertFocus">
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
          <span>Checklist</span>
        </a>
        <NuxtLink to="/drydocks" class="nav-item active">
          <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16c2.5 0 3-1 5-1s2.5 1 5 1 3-1 5-1 2.5 1 5 1"/><path d="M4 15l2-6h12l2 6"/><path d="M9 9V5h6v4"/></svg>
          <span>Dry Docks</span>
        </NuxtLink>
      </nav>
    </aside>
    
    <main class="main-content">
      <header class="top-header">
        <h1>Dry Docks</h1>
        <div class="header-controls">
          <!-- Accessibility Dropdown -->
          <div class="acc-wrapper">
            <button class="acc-trigger" @click.stop="showAccPanel = !showAccPanel">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.5"/><path d="m4.2 9.4 3.7.8.6 5.2-2.8 5.8"/><path d="m19.8 9.4-3.7.8-.6 5.2 2.8 5.8"/><path d="M8 9.8h8"/></svg>
              <span>Aksesibilitas</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <Transition name="dropdown">
              <div v-if="showAccPanel" class="acc-panel">
                <div class="acc-section-title">Ukuran Teks</div>
                <div class="acc-font-options">
                  <button 
                    v-for="(label, idx) in fontOptions" :key="idx"
                    class="acc-font-btn" 
                    :class="{ active: currentFont === idx }"
                    @click="setFont(idx)"
                  >
                    <span class="acc-font-preview" :style="{ fontSize: fontPreviewSizes[idx] }">A</span>
                    <span class="acc-font-label">{{ label }}</span>
                  </button>
                </div>
                <div class="acc-divider"></div>
                <div class="acc-section-title">Kontras Tinggi</div>
                <label class="acc-toggle-row" @click.stop>
                  <span>Teks lebih tebal</span>
                  <div class="mini-toggle" :class="{ on: highContrast }" @click="toggleContrast">
                    <div class="mini-toggle-knob"></div>
                  </div>
                </label>
              </div>
            </Transition>
          </div>

          <!-- Dark Mode Toggle (Prominent) -->
          <div class="dark-toggle-pill" :class="{ dark: isDark }" @click="toggleDark" :title="isDark ? 'Mode Terang' : 'Mode Gelap'">
            <div class="toggle-icon sun">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            </div>
            <div class="toggle-knob"></div>
            <div class="toggle-icon moon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            </div>
          </div>
        </div>
      </header>
      
      <div class="page-content">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--bg-color);
}

/* ── Sidebar ── */
.sidebar {
  width: 260px;
  background: var(--sidebar-bg);
  color: white;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid rgba(255,255,255,0.05);
  transition: background-color var(--transition-slow);
}

.sidebar-header {
  padding: 24px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.logo-icon-svg {
  color: var(--primary-blue-light);
}

.logo-text {
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  gap: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-base);
  gap: 12px;
  border-radius: var(--radius-md);
  letter-spacing: -0.01em;
}

.nav-item:hover {
  background: var(--sidebar-hover);
  color: rgba(255, 255, 255, 0.85);
}

.nav-item.active {
  background: var(--sidebar-active);
  color: var(--primary-blue-light);
  font-weight: 600;
  border-left: none;
  padding-left: 14px;
  margin-right: 0;
  border-radius: var(--radius-md);
}

.nav-icon {
  width: 18px;
  height: 18px;
  opacity: 0;
}

.nav-item svg {
  flex-shrink: 0;
  opacity: 0.7;
  transition: opacity var(--transition-base);
}
.nav-item:hover svg,
.nav-item.active svg {
  opacity: 1;
}

/* ── Main Content ── */
.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.top-header {
  height: 56px;
  background: var(--white);
  color: var(--text-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-xs);
  transition: background-color var(--transition-slow), border-color var(--transition-slow);
}

.top-header h1 {
  font-size: calc(1.05rem * var(--font-scale));
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-dark);
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* ── Accessibility Dropdown ── */
.acc-wrapper {
  position: relative;
}
.acc-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border: 1px solid var(--border-color);
  background: var(--white);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--text-grey);
  font-size: calc(0.8rem * var(--font-scale));
  font-weight: 500;
  transition: all var(--transition-fast);
}
.acc-trigger:hover {
  background: var(--primary-blue-bg);
  border-color: var(--primary-blue-light);
  color: var(--primary-blue);
}

.acc-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  padding: 16px;
  width: 260px;
  z-index: 100;
}
.acc-section-title {
  font-size: calc(0.7rem * var(--font-scale));
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
.acc-font-options {
  display: flex;
  gap: 8px;
}
.acc-font-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 8px;
  border: 2px solid var(--border-color);
  border-radius: var(--radius-md);
  background: var(--bg-color);
  cursor: pointer;
  transition: all var(--transition-fast);
}
.acc-font-btn:hover {
  border-color: var(--primary-blue-light);
  background: var(--primary-blue-bg);
}
.acc-font-btn.active {
  border-color: var(--primary-blue);
  background: var(--primary-blue-bg);
  color: var(--primary-blue);
}
.acc-font-preview {
  font-weight: 700;
  color: var(--text-dark);
}
.acc-font-btn.active .acc-font-preview {
  color: var(--primary-blue);
}
.acc-font-label {
  font-size: calc(0.65rem * var(--font-scale));
  color: var(--text-grey);
  font-weight: 500;
}
.acc-divider {
  height: 1px;
  background: var(--border-light);
  margin: 14px 0;
}
.acc-toggle-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: calc(0.85rem * var(--font-scale));
  color: var(--text-body);
  cursor: pointer;
}
.mini-toggle {
  width: 38px;
  height: 22px;
  background: var(--border-color);
  border-radius: var(--radius-full);
  position: relative;
  cursor: pointer;
  transition: background var(--transition-fast);
}
.mini-toggle.on {
  background: var(--primary-blue);
}
.mini-toggle-knob {
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform var(--transition-fast);
  box-shadow: var(--shadow-sm);
}
.mini-toggle.on .mini-toggle-knob {
  transform: translateX(16px);
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all var(--transition-base);
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Dark Mode Pill Toggle ── */
.dark-toggle-pill {
  width: 64px;
  height: 32px;
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  border-radius: var(--radius-full);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7px;
  transition: background var(--transition-slow);
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}
.dark-toggle-pill.dark {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
}
.toggle-knob {
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: transform var(--transition-slow);
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  z-index: 2;
}
.dark-toggle-pill.dark .toggle-knob {
  transform: translateX(32px);
}
.toggle-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
.toggle-icon.sun {
  color: white;
}
.toggle-icon.moon {
  color: rgba(255,255,255,0.5);
}
.dark-toggle-pill.dark .toggle-icon.sun {
  color: rgba(255,255,255,0.4);
}
.dark-toggle-pill.dark .toggle-icon.moon {
  color: white;
}

.page-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 28px;
}

/* ── Toast Popup ── */
.custom-toast {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--white);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-xl);
  border-radius: var(--radius-lg);
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 9999;
  min-width: 320px;
}

.toast-icon {
  color: var(--primary-blue);
  background: #eff6ff;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.toast-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.toast-title {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.875rem;
}

.toast-desc {
  font-size: 0.8rem;
  color: var(--text-grey);
}

.toast-enter-active,
.toast-leave-active {
  transition: all var(--transition-slow);
}

.toast-enter-from {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

/* ══════════════════════════════════════
   RESPONSIVE DESIGN
   ══════════════════════════════════════ */

/* Tablet (≤1024px) */
@media (max-width: 1024px) {
  .sidebar {
    width: 220px;
  }
  .page-content {
    padding: 20px;
  }
  .acc-trigger span {
    display: none;
  }
}

/* Mobile (≤768px) */
@media (max-width: 768px) {
  .layout-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    order: 2;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    border-right: none;
    border-top: 1px solid rgba(255,255,255,0.1);
  }

  .sidebar-header {
    display: none;
  }

  .sidebar-nav {
    flex-direction: row;
    padding: 8px 4px;
    gap: 0;
    justify-content: space-around;
    overflow-x: auto;
  }

  .nav-item {
    flex-direction: column;
    padding: 8px 10px;
    font-size: 0.65rem;
    gap: 4px;
    border-radius: var(--radius-sm);
    min-width: 0;
    text-align: center;
  }

  .nav-item.active {
    border-left: none;
    padding-left: 10px;
  }

  .nav-item span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
  }

  .main-content {
    order: 1;
    height: calc(100vh - 72px);
  }

  .top-header {
    padding: 0 16px;
    height: 50px;
  }

  .top-header h1 {
    font-size: calc(0.9rem * var(--font-scale));
  }

  .header-controls {
    gap: 8px;
  }

  .acc-trigger {
    padding: 6px 10px;
  }
  .acc-trigger span {
    display: none;
  }
  .acc-trigger svg:last-child {
    display: none;
  }

  .acc-panel {
    width: 240px;
    right: -40px;
  }

  .dark-toggle-pill {
    width: 56px;
    height: 28px;
  }
  .toggle-knob {
    width: 20px;
    height: 20px;
  }
  .dark-toggle-pill.dark .toggle-knob {
    transform: translateX(28px);
  }

  .page-content {
    padding: 16px;
    padding-bottom: 88px;
  }

  .custom-toast {
    min-width: auto;
    left: 16px;
    right: 16px;
    transform: none;
    width: auto;
  }
  .toast-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

/* Small Mobile (≤480px) */
@media (max-width: 480px) {
  .nav-item span {
    max-width: 50px;
    font-size: 0.6rem;
  }
  .page-content {
    padding: 12px;
    padding-bottom: 80px;
  }
}
</style>
