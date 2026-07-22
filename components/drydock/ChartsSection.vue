<template>
  <div class="charts-section">
    <div class="chart-row">
      <div class="chart-card">
        <h3>Status</h3>
        <div class="pie-chart-container">
          <!-- Simple CSS Pie Chart -->
          <div class="pie-chart status-pie"></div>
        </div>
      </div>
      <div class="chart-card">
        <h3>Yard Stay</h3>
        <div class="pie-chart-container">
          <!-- Simple CSS Pie Chart -->
          <div class="pie-chart yard-pie"></div>
        </div>
      </div>
    </div>

    <div class="chart-card comparison-card">
      <div class="chart-header">
        <h3>Comparison</h3>
        <div class="legend">
          <span class="legend-item"><span class="color-box bg-blue"></span> Total Costs</span>
          <span class="legend-item"><span class="color-box bg-green"></span> Total Estimates</span>
          <span class="legend-item"><span class="color-box bg-pink"></span> Total Budget</span>
        </div>
      </div>
      
      <div class="bar-chart">
        <div class="bar-group">
          <div class="bar bg-blue" style="height: 40%"></div>
          <div class="bar bg-green" style="height: 60%"></div>
          <div class="bar bg-pink" style="height: 10%"></div>
        </div>
        <div class="bar-group">
          <div class="bar bg-blue" style="height: 80%"></div>
          <div class="bar bg-green" style="height: 100%"></div>
          <div class="bar bg-pink" style="height: 15%"></div>
        </div>
        <div class="bar-group">
          <div class="bar bg-blue" style="height: 30%"></div>
          <div class="bar bg-green" style="height: 30%"></div>
          <div class="bar bg-pink" style="height: 5%"></div>
        </div>
        <div class="bar-group">
          <div class="bar bg-blue" style="height: 30%"></div>
          <div class="bar bg-green" style="height: 30%"></div>
          <div class="bar bg-pink" style="height: 5%"></div>
        </div>
        <div class="bar-group">
          <div class="bar bg-blue" style="height: 30%"></div>
          <div class="bar bg-green" style="height: 30%"></div>
          <div class="bar bg-pink" style="height: 5%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.charts-section {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chart-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.chart-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border: 1px solid var(--border-color);
}

.chart-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.pie-chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.pie-chart {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.status-pie {
  background: conic-gradient(
    #2CA3FA 0% 25%,
    #7BBA3A 25% 45%,
    #F368A9 45% 65%,
    #C49020 65% 100%
  );
  mask: radial-gradient(circle, transparent 40%, black 41%);
  -webkit-mask: radial-gradient(circle, transparent 40%, black 41%);
}

.yard-pie {
  background: conic-gradient(
    #2CA3FA 0% 50%,
    #7BBA3A 50% 100%
  );
  mask: radial-gradient(circle, transparent 70%, black 71%);
  -webkit-mask: radial-gradient(circle, transparent 70%, black 71%);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.legend {
  display: flex;
  gap: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-grey);
}

.color-box {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}

.bg-blue { background-color: #2CA3FA; }
.bg-green { background-color: #7BBA3A; }
.bg-pink { background-color: #F368A9; }

.bar-chart {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 250px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.bar-group {
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  height: 100%;
}

.bar {
  width: 15px;
  border-radius: 2px 2px 0 0;
}
</style>
