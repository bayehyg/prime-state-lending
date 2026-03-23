'use client';

import { useState } from 'react';

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(120000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [interestRate, setInterestRate] = useState(6.125);
  const [loanTerm, setLoanTerm] = useState(30);

  // DTI ratio typically 43% max
  const maxDTI = 0.43;
  const monthlyIncome = annualIncome / 12;
  const maxMonthlyPayment = (monthlyIncome * maxDTI) - monthlyDebts;

  // Calculate max loan amount from max monthly payment
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const maxLoanAmount = maxMonthlyPayment * (Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments));

  const maxHomePrice = maxLoanAmount + downPayment;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Annual Income</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Monthly Debts</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Down Payment</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Interest Rate (%)</label>
          <input
            type="number"
            step="0.001"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-11 border border-slate-200 rounded-lg px-4 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Loan Term</label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-11 border border-slate-200 rounded-lg px-4 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value={30}>30-Year Fixed</option>
            <option value={20}>20-Year Fixed</option>
            <option value={15}>15-Year Fixed</option>
            <option value={10}>10-Year Fixed</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8">
        <div className="text-center mb-6">
          <span className="block text-sm text-slate-500 mb-2">Maximum Home Price You Can Afford</span>
          <span className="text-5xl font-semibold tracking-tight text-indigo-600">
            ${maxHomePrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
          <div>
            <span className="block text-xs text-slate-500 mb-1">Max Monthly Payment</span>
            <span className="text-xl font-semibold text-slate-900">${maxMonthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div>
            <span className="block text-xs text-slate-500 mb-1">Max Loan Amount</span>
            <span className="text-xl font-semibold text-slate-900">${maxLoanAmount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-indigo-50 border border-indigo-100 rounded-lg">
          <p className="text-xs text-indigo-900">Based on 43% debt-to-income ratio. Actual approval may vary based on credit score and other factors.</p>
        </div>
      </div>
    </div>
  );
}
