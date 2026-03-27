'use client';

import { useState } from 'react';
import MortgageCalculator from './MortgageCalculator';
import RefinanceCalculator from './RefinanceCalculator';
import AffordabilityCalculator from './AffordabilityCalculator';
import IncomeQualifierCalculator from './IncomeQualifierCalculator';
import ExtraPaymentCalculator from './ExtraPaymentCalculator';

export default function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState('mortgage');

  const tabs = [
    { id: 'mortgage', label: 'Mortgage Calculator' },
    { id: 'affordability', label: 'Affordability Calculator' },
    { id: 'refinance', label: 'Refinance Calculator' },
    { id: 'income', label: 'Income to Qualify' },
    { id: 'extra', label: 'Extra Payment' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-edge">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-accent text-accent'
                : 'border-transparent text-body hover:text-heading'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-surface border border-edge rounded-2xl p-8">
        {activeTab === 'mortgage' && <MortgageCalculator />}
        {activeTab === 'affordability' && <AffordabilityCalculator />}
        {activeTab === 'refinance' && <RefinanceCalculator />}
        {activeTab === 'income' && <IncomeQualifierCalculator />}
        {activeTab === 'extra' && <ExtraPaymentCalculator />}
      </div>
    </div>
  );
}
