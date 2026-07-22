<template>
  <div id="app-root">
    <Transition name="splash">
      <div v-if="isLoading" class="splash-screen">
        <div class="splash-content">
          <div class="logo-circle">
            <svg class="ship-wheel" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="7"/>
              <circle cx="12" cy="12" r="2"/>
              <line x1="12" x2="12" y1="22" y2="19"/>
              <line x1="12" x2="12" y1="5" y2="2"/>
              <line x1="22" x2="19" y1="12" y2="12"/>
              <line x1="5" x2="2" y1="12" y2="12"/>
              <line x1="19.07" x2="16.95" y1="4.93" y2="7.05"/>
              <line x1="7.05" x2="4.93" y1="16.95" y2="19.07"/>
              <line x1="19.07" x2="16.95" y1="19.07" y2="16.95"/>
              <line x1="7.05" x2="4.93" y1="7.05" y2="4.93"/>
            </svg>
          </div>
          <div class="loading-indicator">
            <div class="spinner"></div>
            <span class="loading-text">Please wait...</span>
          </div>
        </div>
      </div>
    </Transition>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Give it a smooth 1 second splash delay for the "app booting" feel
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* Matching the bright blue from the screenshot */
  background-color: #3b82f6; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.logo-circle {
  background: rgba(255, 255, 255, 0.15);
  padding: 18px;
  border-radius: 20px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform: translateZ(0); /* Hardware acceleration */
  will-change: transform;
}

.ship-wheel {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
}

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.loading-text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  animation: pulse-text 1.5s ease-in-out infinite;
}

@keyframes pulse-text {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.spinner {
  width: 28px;
  height: 28px;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  will-change: transform;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}

.splash-leave-to {
  opacity: 0;
  transform: scale(1.08);
}
</style>
