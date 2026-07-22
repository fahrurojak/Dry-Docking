<template>
  <div>
    <div class="slide-over-backdrop" v-if="show" @click="$emit('close')"></div>
    <div class="slide-over-panel" :class="{ 'open': show }">
      <div class="panel-header">
        <h3>{{ isEditMode ? 'Edit item' : 'Add item' }}</h3>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>
      
      <!-- MINIMAL FORM -->
      <div class="panel-body" v-if="formType === 'minimal'">
        <div class="form-group">
          <div class="label-row flex justify-between">
            <label>Vessel</label>
            <span class="required-text">Required</span>
          </div>
          <select class="form-input" v-model="formData.vessel">
            <option value="" disabled>Choose something</option>
            <option>Ocean Star</option>
            <option>MV Glory</option>
            <option>MV Happy</option>
            <option>MV Judas</option>
          </select>
        </div>
        <div class="form-group">
          <div class="label-row flex justify-between">
            <label>Dock List No</label>
            <span class="required-text">Required</span>
          </div>
          <input type="text" class="form-input" v-model="formData.id" />
        </div>
        <div class="form-group">
          <div class="label-row flex justify-between">
            <label>Description</label>
            <span class="required-text">Required</span>
          </div>
          <input type="text" class="form-input" v-model="formData.description" />
        </div>
        <div class="form-group">
          <label>Shipyard Name</label>
          <select class="form-input" v-model="formData.shipyard">
            <option value="">—</option>
            <option>Kempell</option>
            <option>Bombay Dockyard</option>
            <option>Hindustan Shipyard Limited</option>
            <option>Timblo Drydocks</option>
          </select>
        </div>
        <div class="form-group">
          <label>Details of Shipyard</label>
          <input type="text" class="form-input" v-model="formData.shipyardDetails" />
        </div>
        <div class="form-group">
          <label>Planned Start Date</label>
          <input type="date" class="form-input" v-model="formData.plannedStart" />
        </div>
        <div class="form-group">
          <label>Planned End Date</label>
          <input type="date" class="form-input" v-model="formData.plannedEnd" />
        </div>
        <div class="form-group">
          <label>Actual Start Date</label>
          <input type="date" class="form-input" v-model="formData.actualStart" />
        </div>
        <div class="form-group">
          <label>Actual End Date</label>
          <input type="date" class="form-input" v-model="formData.actualEnd" />
        </div>
        <div class="form-group">
          <label>Account Code</label>
          <select class="form-input" v-model="formData.accountCode">
            <option value="">—</option>
            <option>ACC-001</option>
            <option>ACC-002</option>
          </select>
        </div>
        <div class="form-group">
          <label>Budget</label>
          <input type="text" class="form-input" v-model="formData.budget" />
        </div>
        <div class="form-group">
          <div class="label-row flex justify-between">
            <label>Currency</label>
            <span class="required-text">Required</span>
          </div>
          <select class="form-input" v-model="formData.currency">
            <option value="" disabled>Choose something</option>
            <option>USD ($)</option>
            <option>EUR (€)</option>
            <option>IDR (Rp)</option>
          </select>
        </div>
        <div class="form-group">
          <label>Responsible Rank</label>
          <select class="form-input" v-model="formData.responsibleRank">
            <option value="">—</option>
            <option>CE (Chief Engineer)</option>
            <option>CO (Chief Officer)</option>
            <option>Master</option>
          </select>
        </div>
        <div class="form-group">
          <label>Status</label>
          <select class="form-input" v-model="formData.status">
            <option value="">—</option>
            <option>Planning</option>
            <option>Execution</option>
            <option>Completed</option>
          </select>
        </div>
        <div class="form-group">
          <label>Priority</label>
          <select class="form-input" v-model="formData.priority">
            <option value="">—</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>
      
      <!-- DETAILED FORM -->
      <div class="panel-body" v-else>
        <div class="form-group">
          <label>Dock List No</label>
          <input type="text" class="form-input" v-model="formData.id" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-input" v-model="formData.description" />
        </div>
        <div class="form-group">
          <label>Shipyard</label>
          <input type="text" class="form-input" v-model="formData.shipyard" />
        </div>
        <div class="form-group">
          <label>Details of Shipyard</label>
          <input type="text" class="form-input" v-model="formData.shipyardDetails" />
        </div>
        <div class="form-group">
          <label>Planned Start Date</label>
          <input type="date" class="form-input" v-model="formData.plannedStart" />
        </div>
        <div class="form-group">
          <label>Planned End Date</label>
          <input type="date" class="form-input" v-model="formData.plannedEnd" />
        </div>
        <div class="form-group">
          <label>Actual Start Date</label>
          <input type="date" class="form-input" v-model="formData.actualStart" />
        </div>
        <div class="form-group">
          <label>Actual End Date</label>
          <input type="date" class="form-input" v-model="formData.actualEnd" />
        </div>
        <div class="form-group">
          <label>Account Code</label>
          <input type="text" class="form-input" v-model="formData.accountCode" />
        </div>
        <div class="form-group">
          <label>Status</label>
          <input type="text" class="form-input" v-model="formData.status" />
        </div>
        <div class="form-group">
          <label>Completed Date</label>
          <input type="text" class="form-input" v-model="formData.completedDate" />
        </div>
        <div class="form-group">
          <label>Vessel</label>
          <input type="text" class="form-input" v-model="formData.vessel" />
        </div>
        <div class="form-group">
          <label>Priority</label>
          <input type="text" class="form-input" v-model="formData.priority" />
        </div>
        <div class="form-group">
          <label>New Column</label>
          <input type="file" class="form-input file-input" accept="image/*" />
        </div>
        <div class="form-group">
          <label>Company</label>
          <input type="text" class="form-input" v-model="formData.company" />
        </div>
      </div>
      <div class="panel-footer">
        <button class="btn-primary" @click="$emit('save')">Submit</button>
        <button class="btn-outline" @click="$emit('close')">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  formType: {
    type: String,
    default: 'minimal'
  },
  isEditMode: {
    type: Boolean,
    default: false
  },
  formData: {
    type: Object,
    required: true
  }
})

defineEmits(['close', 'save'])
</script>

<style scoped>
/* Slide Over Panel */
.slide-over-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 40;
}
.slide-over-panel {
  position: fixed;
  top: 0;
  right: -450px;
  width: 450px;
  max-width: 100vw;
  height: 100vh;
  background: white;
  box-shadow: -4px 0 15px rgba(0,0,0,0.1);
  z-index: 50;
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}
.slide-over-panel.open {
  right: 0;
}
.panel-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.panel-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}
.close-btn {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-grey);
}
.panel-body {
  padding: 24px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-dark);
}
.form-input {
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  outline: none;
  width: 100%;
}
.form-input:focus {
  border-color: var(--primary-blue);
}
select.form-input {
  appearance: auto;
}
.required-text {
  font-size: 0.75rem;
  color: #999;
}
.file-input {
  padding: 6px;
  background: white;
}
.panel-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--border-color);
  display: flex;
  gap: 12px;
}
.btn-primary {
  padding: 8px 16px;
  border: none;
  background: var(--primary-blue);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
}
.btn-outline {
  padding: 8px 16px;
  border: 1px solid var(--border-color);
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}
.flex { display: flex; }
.justify-between { justify-content: space-between; }
</style>
