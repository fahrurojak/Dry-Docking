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
            <span class="loading-text">Preparing docks...</span>
          </div>
        </div>
        
        <!-- Minimalist Waves -->
        <div class="waves-container">
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#ffffff" />
            </g>
          </svg>
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
  setTimeout(() => {
    isLoading.value = false
  }, 1200)
})
</script>

<style>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  z-index: 10;
  transform: translateY(-20px);
}

.logo-circle {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.ship-wheel {
  color: white;
  animation: slow-spin 8s linear infinite;
}

@keyframes slow-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-text {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: pulse-text 2s ease-in-out infinite;
}

@keyframes pulse-text {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* Minimalist Waves Animation */
.waves-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  min-height: 100px;
  max-height: 150px;
}

.waves {
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: -7px; /* Fix for safari gap */
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}

/* Page Transition */
.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.splash-leave-to {
  opacity: 0;
  transform: scale(1.05);
}
</style>
