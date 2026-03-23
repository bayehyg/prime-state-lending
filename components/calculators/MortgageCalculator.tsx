'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import PaymentBreakdownChart from './PaymentBreakdownChart';
import AmortizationTable from './AmortizationTable';

interface AmortizationRow {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(650000);
  const [downPaymentDollar, setDownPaymentDollar] = useState(130000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.125);
  const [propertyTax, setPropertyTax] = useState(4000);
  const [taxPeriod, setTaxPeriod] = useState<'monthly' | 'annual'>('annual');
  const [insurance, setInsurance] = useState(1200);
  const [insurancePeriod, setInsurancePeriod] = useState<'monthly' | 'annual'>('annual');
  const [hoaFees, setHoaFees] = useState(0);
  const [showAmortization, setShowAmortization] = useState(false);

  // Sync down payment dollar and percent
  useEffect(() => {
    const newPercent = (downPaymentDollar / homePrice) * 100;
    setDownPaymentPercent(Math.round(newPercent * 100) / 100);
  }, [downPaymentDollar, homePrice]);

  const handlePercentChange = (percent: number) => {
    setDownPaymentPercent(percent);
    setDownPaymentDollar(Math.round((percent / 100) * homePrice));
  };

  const handleDollarChange = (dollar: number) => {
    setDownPaymentDollar(dollar);
  };

  // Calculate loan amount
  const loanAmount = homePrice - downPaymentDollar;
  const ltv = (loanAmount / homePrice) * 100;

  // Calculate PMI (0.85% annually when LTV > 80%)
  const pmiMonthly = ltv > 80 ? (loanAmount * 0.0085) / 12 : 0;

  // Calculate monthly P&I using amortization formula
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

  // Convert tax and insurance to monthly
  const taxMonthly = taxPeriod === 'annual' ? propertyTax / 12 : propertyTax;
  const insuranceMonthly = insurancePeriod === 'annual' ? insurance / 12 : insurance;

  // Total monthly payment
  const totalMonthly = monthlyPI + taxMonthly + insuranceMonthly + hoaFees + pmiMonthly;

  // Calculate total interest and total cost
  const totalInterest = (monthlyPI * numPayments) - loanAmount;
  const totalCost = homePrice + totalInterest + (taxMonthly * numPayments) + (insuranceMonthly * numPayments) + (hoaFees * numPayments) + (pmiMonthly * numPayments);

  // Generate amortization schedule
  const generateAmortization = (): AmortizationRow[] => {
    const schedule: AmortizationRow[] = [];
    let balance = loanAmount;

    for (let month = 1; month <= numPayments; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPI - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, balance),
      });
    }

    return schedule;
  };

  const amortizationSchedule = generateAmortization();

  return (
    <div className="space-y-8">
      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Home Price */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Home Price</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Down Payment Dollar */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Down Payment ($)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={downPaymentDollar}
              onChange={(e) => handleDollarChange(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Down Payment Percent Slider */}
        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Down Payment</label>
            <span className="text-sm font-medium text-indigo-600">{downPaymentPercent.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="0.5"
            value={downPaymentPercent}
            onChange={(e) => handlePercentChange(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-slate-200 [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:border-indigo-400 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-slate-200 [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:hover:border-indigo-400"
            style={{
              background: `linear-gradient(to right, rgb(79 70 229) 0%, rgb(79 70 229) ${downPaymentPercent}%, rgb(241 245 249) ${downPaymentPercent}%, rgb(241 245 249) 100%)`
            }}
          />
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            <span>$0</span>
            <span>${homePrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
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
            <option value={30}>5/1 ARM</option>
            <option value={30}>7/1 ARM</option>
          </select>
        </div>

        {/* Interest Rate */}
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

        {/* Property Tax */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Property Tax</label>
            <div className="flex gap-1 text-xs">
              <button
                onClick={() => setTaxPeriod('monthly')}
                className={`px-2 py-1 rounded ${taxPeriod === 'monthly' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setTaxPeriod('annual')}
                className={`px-2 py-1 rounded ${taxPeriod === 'annual' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500'}`}
              >
                Annual
              </button>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={propertyTax}
              onChange={(e) => setPropertyTax(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Insurance */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-medium text-slate-500 uppercase tracking-wide">Homeowner's Insurance</label>
            <div className="flex gap-1 text-xs">
              <button
                onClick={() => setInsurancePeriod('monthly')}
                className={`px-2 py-1 rounded ${insurancePeriod === 'monthly' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setInsurancePeriod('annual')}
                className={`px-2 py-1 rounded ${insurancePeriod === 'annual' ? 'bg-indigo-100 text-indigo-700' : 'text-slate-500'}`}
              >
                Annual
              </button>
            </div>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* HOA Fees */}
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">HOA Fees (Monthly)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              type="number"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
              className="w-full h-11 border border-slate-200 rounded-lg px-8 text-slate-900 text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8">
        <div className="mb-8">
          <h3 className="text-sm font-medium text-slate-500 mb-2">Monthly Payment</h3>
          <div className="text-5xl font-semibold tracking-tight text-slate-900">
            ${totalMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-3 mb-8">
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Principal &amp; Interest</span>
            <span className="text-sm font-medium text-slate-900">${monthlyPI.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Property Tax</span>
            <span className="text-sm font-medium text-slate-900">${taxMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">Homeowner's Insurance</span>
            <span className="text-sm font-medium text-slate-900">${insuranceMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-slate-100">
            <span className="text-sm text-slate-600">HOA Fees</span>
            <span className="text-sm font-medium text-slate-900">${hoaFees.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          {ltv > 80 && (
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="text-sm text-slate-600">PMI (LTV {ltv.toFixed(1)}%)</span>
              <span className="text-sm font-medium text-slate-900">${pmiMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          )}
        </div>

        {/* Chart */}
        <PaymentBreakdownChart
          principalInterest={monthlyPI}
          propertyTax={taxMonthly}
          insurance={insuranceMonthly}
          hoa={hoaFees}
          pmi={pmiMonthly}
        />

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
          <div>
            <span className="block text-xs text-slate-500 mb-1">Total Interest Paid</span>
            <span className="text-xl font-semibold text-slate-900">${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
          </div>
          <div>
            <span className="block text-xs text-slate-500 mb-1">Total Cost of Loan</span>
            <span className="text-xl font-semibold text-slate-900">${totalCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
          </div>
        </div>

        {/* Amortization Toggle */}
        <button
          onClick={() => setShowAmortization(!showAmortization)}
          className="mt-6 w-full h-11 px-6 inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-100 transition-colors"
        >
          <Icon icon={showAmortization ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} className="mr-2" />
          {showAmortization ? 'Hide' : 'Show'} Amortization Schedule
        </button>

        {showAmortization && (
          <div className="mt-6">
            <AmortizationTable schedule={amortizationSchedule} />
          </div>
        )}
      </div>
    </div>
  );
}
