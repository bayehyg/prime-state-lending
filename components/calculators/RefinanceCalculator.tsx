'use client';

import { useState } from 'react';

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState(400000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [newRate, setNewRate] = useState(6.125);
  const [remainingTerm, setRemainingTerm] = useState(27);
  const [closingCosts, setClosingCosts] = useState(5000);

  // Calculate current monthly payment
  const currentMonthlyRate = currentRate / 100 / 12;
  const currentPayments = remainingTerm * 12;
  const currentMonthly = currentBalance * (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentPayments)) / (Math.pow(1 + currentMonthlyRate, currentPayments) - 1);

  // Calculate new monthly payment
  const newMonthlyRate = newRate / 100 / 12;
  const newPayments = remainingTerm * 12;
  const newMonthly = currentBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newPayments)) / (Math.pow(1 + newMonthlyRate, newPayments) - 1);

  const monthlySavings = currentMonthly - newMonthly;
  const breakEvenMonths = closingCosts / monthlySavings;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Current Loan Balance</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              value={currentBalance}
              onChange={(e) => setCurrentBalance(Number(e.target.value))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Current Interest Rate (%)</label>
          <input
            type="number"
            step="0.001"
            value={currentRate}
            onChange={(e) => setCurrentRate(Number(e.target.value))}
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">New Interest Rate (%)</label>
          <input
            type="number"
            step="0.001"
            value={newRate}
            onChange={(e) => setNewRate(Number(e.target.value))}
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Remaining Term (Years)</label>
          <input
            type="number"
            value={remainingTerm}
            onChange={(e) => setRemainingTerm(Number(e.target.value))}
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Estimated Closing Costs</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(Number(e.target.value))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border border-edge rounded-2xl p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="block text-xs text-body mb-2">Current Monthly Payment</span>
            <span className="text-2xl font-semibold text-heading">${currentMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div>
            <span className="block text-xs text-body mb-2">New Monthly Payment</span>
            <span className="text-2xl font-semibold text-accent">${newMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div>
            <span className="block text-xs text-body mb-2">Monthly Savings</span>
            <span className="text-2xl font-semibold text-accent">${monthlySavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-edge/50">
          <div className="flex justify-between items-center">
            <span className="text-sm text-body">Break-even Point</span>
            <span className="text-lg font-semibold text-heading">{breakEvenMonths.toFixed(1)} months</span>
          </div>
        </div>
      </div>
    </div>
  );
}
