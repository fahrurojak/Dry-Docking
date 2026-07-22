import { ref } from 'vue';
import type { DryDockDetails } from '../types/drydock';

const parseCurrency = (val: any): number => {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const num = parseFloat(val.replace(/[^0-9.-]/g, ''));
    return isNaN(num) ? 0 : num;
  }
  return 0;
}

export const useDryDock = () => {
  const dryDockData = ref<DryDockDetails>({
    id: '', vesselName: '', description: '', company: '', responsibleRank: '',
    currency: 'USD', accountCode: 'ABC-123', budget: 0, plannedStartDate: '', plannedEndDate: '',
    actualStartDate: '', actualEndDate: '', shipyard: null, priority: 'Medium', status: '',
    totalEstimates: 0, totalCosts: 0, yardEstimates: 0, actualYardCosts: 0,
    variance: 0, ownerEstimates: 0, actualOwnerCosts: 0
  });

  const fetchDryDock = async (uuid: string) => {
    try {
      const res = await $fetch('/api/drydocks');
      if (res && Array.isArray(res)) {
        const found = res.find(d => d.uuid === uuid);
        if (found) {
          dryDockData.value = {
            id: found.id || '',
            vesselName: found.name || '',
            description: found.description || '',
            company: 'UHC Pvt. Ltd.',
            responsibleRank: found.manager || '',
            currency: 'USD',
            accountCode: 'ABC-123',
            budget: parseCurrency(found.budget),
            plannedStartDate: found.plannedStart || '',
            plannedEndDate: found.plannedEnd || '',
            actualStartDate: found.actualStart || '',
            actualEndDate: found.actualEnd || '',
            shipyard: found.shipyard || null,
            priority: 'Medium',
            status: found.status || '',
            totalEstimates: parseCurrency(found.estimates),
            totalCosts: 0,
            yardEstimates: 0,
            actualYardCosts: 0,
            variance: parseCurrency(found.variance),
            ownerEstimates: 0,
            actualOwnerCosts: 0
          }
        }
      }
    } catch (e) {
      console.error('Failed to fetch dry dock:', e)
    }
  }

  return {
    dryDockData,
    fetchDryDock
  };
};
