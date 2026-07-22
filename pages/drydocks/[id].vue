<template>
  <div class="detail-page">
    <div class="breadcrumb">
      <NuxtLink to="/drydocks" class="back-link">&lt; Dry Docks</NuxtLink> / <span class="current">{{ dryDockData.id }}</span>
    </div>
    
    <div class="content-wrapper">
      <Tabs 
        :tabs="tabs" 
        v-model:active-tab="activeTab" 
      />
      
      <div v-if="activeTab === 'General'" class="tab-content">
        <HeaderSummary :data="dryDockData" />
        <InfoGrid :data="dryDockData" />
        <FormSection :data="dryDockData" />
        <CostSummary :data="dryDockData" />
        <ChartsSection />
      </div>
      
      <div v-else-if="activeTab === 'Specifications'" class="tab-content">
        <SpecificationsTab />
      </div>
      
      <div v-else-if="activeTab === 'Tasks'" class="tab-content">
        <TasksTab />
      </div>
      
      <div v-else-if="activeTab === 'Sourcing'" class="tab-content">
        <SourcingTab />
      </div>
      
      <div v-else-if="activeTab === 'Execution'" class="tab-content">
        <ExecutionTab />
      </div>
      
      <div v-else-if="activeTab === 'Reporting'" class="tab-content">
        <ReportingTab />
      </div>
      
      <div v-else-if="activeTab === 'Costs'" class="tab-content">
        <CostsTab />
      </div>
      
      <div v-else-if="activeTab === 'Purchase Orders'" class="tab-content">
        <PurchaseOrdersTab />
      </div>
      
      <div v-else class="placeholder-content">
        Content for {{ activeTab }} will go here.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Tabs from '~/components/ui/Tabs.vue';
import HeaderSummary from '~/components/drydock/HeaderSummary.vue';
import InfoGrid from '~/components/drydock/InfoGrid.vue';
import FormSection from '~/components/drydock/FormSection.vue';
import CostSummary from '~/components/drydock/CostSummary.vue';
import ChartsSection from '~/components/drydock/ChartsSection.vue';
import SpecificationsTab from '~/components/drydock/SpecificationsTab.vue';
import TasksTab from '~/components/drydock/TasksTab.vue';
import SourcingTab from '~/components/drydock/SourcingTab.vue';
import ExecutionTab from '~/components/drydock/ExecutionTab.vue';
import ReportingTab from '~/components/drydock/ReportingTab.vue';
import CostsTab from '~/components/drydock/CostsTab.vue';
import PurchaseOrdersTab from '~/components/drydock/PurchaseOrdersTab.vue';

import { useDryDock } from '~/composables/useDryDock';

const route = useRoute();
const { dryDockData, fetchDryDock } = useDryDock();

onMounted(async () => {
  if (route.params.id) {
    await fetchDryDock(route.params.id as string);
  }
});

const tabs = [
  'General',
  'Specifications',
  'Tasks',
  'Sourcing',
  'Execution',
  'Reporting',
  'Costs',
  'Purchase Orders'
];

const activeTab = ref('General');
</script>

<style scoped>
.detail-page {
  max-width: 1200px;
}

.breadcrumb {
  color: var(--text-light);
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}

.breadcrumb .back-link {
  color: var(--primary-blue);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--transition-fast);
  font-weight: 500;
}

.breadcrumb .back-link:hover {
  text-decoration: underline;
}

.breadcrumb .current {
  color: var(--text-dark);
  font-weight: 600;
}

.content-wrapper {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  min-height: 800px;
}

.tab-content {
  display: flex;
  flex-direction: column;
}

.placeholder-content {
  padding: 4rem;
  text-align: center;
  color: var(--text-light);
  font-size: 1rem;
  font-weight: 500;
}
</style>
