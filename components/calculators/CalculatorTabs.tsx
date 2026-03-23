'use client';

import { useState } from 'react';
import MortgageCalculator from './MortgageCalculator';
import RefinanceCalculator from './RefinanceCalculator';
import AffordabilityCalculator from './AffordabilityCalculator';

export default function CalculatorTabs() {
  const [activeTab, setActiveTab] = useState('mortgage');

  const tabs = [
    { id: 'mortgage', label: 'Mortgage Calculator' },
    { id: 'refinance', label: 'Refinance Calculator' },
    { id: 'affordability', label: 'Affordability Calculator' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
        {activeTab === 'mortgage' && <MortgageCalculator />}
        {activeTab === 'refinance' && <RefinanceCalculator />}
        {activeTab === 'affordability' && <AffordabilityCalculator />}
      </div>
    </div>
  );
}
