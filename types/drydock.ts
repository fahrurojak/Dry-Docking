export interface CostMetric {
  label: string;
  value: number;
  currency: string;
  isVariance?: boolean;
}

export interface DryDockDetails {
  id: string;
  vesselName: string;
  description: string;
  company: string;
  responsibleRank: string;
  currency: string;
  accountCode: string;
  budget: number;
  plannedStartDate: string;
  plannedEndDate: string;
  actualStartDate: string;
  actualEndDate: string;
  shipyard: string | null;
  priority: string;
  status: 'Planning' | 'Execution' | 'Completed';
  
  // Costs summary
  totalEstimates: number;
  totalCosts: number;
  yardEstimates: number;
  actualYardCosts: number;
  variance: number;
  ownerEstimates: number;
  actualOwnerCosts: number;
}
