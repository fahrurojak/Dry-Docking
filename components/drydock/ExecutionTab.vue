<template>
  <div class="execution-tab">
    <div class="progress-overview">
      <div class="progress-header">
        <h3>Overall Progress</h3>
        <span class="percentage">65%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" style="width: 65%"></div>
      </div>
    </div>

    <div class="timeline-container">
      <h3>Timeline</h3>
      <div class="timeline">
        <div class="timeline-event completed">
          <div class="event-marker"></div>
          <div class="event-content">
            <span class="date">Sep 01, 2026</span>
            <h4>Vessel Arrival</h4>
            <p>Vessel arrived at anchorage and cleared customs.</p>
          </div>
        </div>
        <div class="timeline-event completed">
          <div class="event-marker"></div>
          <div class="event-content">
            <span class="date">Sep 03, 2026</span>
            <h4>Dry Docking Commenced</h4>
            <p>Vessel safely positioned in the dry dock block.</p>
          </div>
        </div>
        <div class="timeline-event active">
          <div class="event-marker"></div>
          <div class="event-content">
            <span class="date">Today</span>
            <h4>Hull Cleaning & Blasting</h4>
            <p>In progress (80% complete). Expected to finish tomorrow.</p>
          </div>
        </div>
        <div class="timeline-event">
          <div class="event-marker"></div>
          <div class="event-content">
            <span class="date">Expected: Sep 15, 2026</span>
            <h4>Undocking</h4>
            <p>Flooding of dock and vessel departure.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.execution-tab {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.progress-overview {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.progress-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
}

.percentage {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-blue);
}

.progress-bar-container {
  height: 12px;
  background-color: #f1f3f4;
  border-radius: 6px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: var(--primary-blue);
  border-radius: 6px;
  transition: width 0.5s ease-out;
}

.timeline-container {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.timeline-container h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 2px;
  background-color: var(--border-color);
}

.timeline-event {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

.timeline-event:last-child {
  margin-bottom: 0;
}

.event-marker {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--white);
  border: 2px solid var(--border-color);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-event.completed .event-marker {
  background-color: #e6f4ea;
  border-color: #1e8e3e;
}

.timeline-event.active .event-marker {
  background-color: #e8f0fe;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 4px rgba(44, 163, 250, 0.2);
}

.event-content {
  flex: 1;
  padding-top: 0.25rem;
}

.date {
  font-size: 0.85rem;
  color: var(--text-grey);
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.event-content h4 {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.event-content p {
  color: var(--text-grey);
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
