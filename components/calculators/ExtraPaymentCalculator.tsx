'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ExtraPaymentCalculator() {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [customPercent, setCustomPercent] = useState('');
  const [interestRate, setInterestRate] = useState(7.0);
  const [loanTerm, setLoanTerm] = useState(30);
  const [extraPayment, setExtraPayment] = useState(100);

  const presetPercents = [3, 5, 10, 20];
  const isCustom = !presetPercents.includes(downPaymentPercent);
  const extraPresets = [50, 100, 200, 500];

  const handlePresetClick = (pct: number) => {
    setDownPaymentPercent(pct);
    setCustomPercent('');
  };

  const handleCustomClick = () => {
    const val = customPercent ? Number(customPercent) : 15;
    setDownPaymentPercent(val);
    if (!customPercent) setCustomPercent('15');
  };

  const handleCustomChange = (val: string) => {
    setCustomPercent(val);
    const num = Number(val);
    if (num >= 0 && num <= 100) setDownPaymentPercent(num);
  };

  // Calculations
  const downPaymentDollar = Math.round((downPaymentPercent / 100) * homePrice);
  const loanAmount = homePrice - downPaymentDollar;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const standardPayment = monthlyRate > 0
    ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments))
    : loanAmount / numPayments;

  const totalInterestStandard = (standardPayment * numPayments) - loanAmount;

  function calcWithExtraPayment(
    balance: number,
    mRate: number,
    regularPayment: number,
    extra: number
  ) {
    let remainingBalance = balance;
    let totalInterest = 0;
    let months = 0;
    const totalPayment = regularPayment + extra;

    while (remainingBalance > 0) {
      const interestCharge = remainingBalance * mRate;
      totalInterest += interestCharge;
      const principalPaid = totalPayment - interestCharge;

      if (remainingBalance <= principalPaid) {
        totalInterest += remainingBalance * mRate;
        months++;
        break;
      }

      remainingBalance = remainingBalance - principalPaid;
      months++;
      if (months > 600) break;
    }
    return { months, totalInterest };
  }

  const withExtra = calcWithExtraPayment(loanAmount, monthlyRate, standardPayment, extraPayment);

  const monthsSaved = numPayments - withExtra.months;
  const yearsSaved = Math.floor(monthsSaved / 12);
  const remainingMonthsSaved = monthsSaved % 12;
  const interestSaved = totalInterestStandard - withExtra.totalInterest;

  const newPayoffYears = Math.floor(withExtra.months / 12);
  const newPayoffMonths = withExtra.months % 12;

  const fmt = (n: number) => Math.round(n).toLocaleString('en-US');
  const fmt2 = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Inputs */}
      <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Home Price */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Home Price</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              min={0}
              value={homePrice}
              onChange={(e) => setHomePrice(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            min={3}
            max={12}
            value={interestRate}
            onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="range"
            min={3}
            max={12}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full mt-2 h-1.5 bg-surface rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-edge [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:border-accent/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-edge [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:hover:border-accent/50"
            style={{
              background: `linear-gradient(to right, #B79D2F 0%, #B79D2F ${((interestRate - 3) / 9) * 100}%, #E0E3E8 ${((interestRate - 3) / 9) * 100}%, #E0E3E8 100%)`
            }}
          />
          <div className="flex justify-between mt-1 text-xs text-body/70">
            <span>3%</span>
            <span>12%</span>
          </div>
        </div>

        {/* Down Payment */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Down Payment</label>
          <div className="flex flex-wrap gap-2">
            {presetPercents.map((pct) => (
              <button
                key={pct}
                onClick={() => handlePresetClick(pct)}
                className={`h-10 px-5 rounded-lg text-sm font-medium border transition-colors ${
                  downPaymentPercent === pct && !isCustom
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-heading border-edge hover:border-accent/50'
                }`}
              >
                {pct}%
              </button>
            ))}
            <button
              onClick={handleCustomClick}
              className={`h-10 px-5 rounded-lg text-sm font-medium border transition-colors ${
                isCustom
                  ? 'bg-accent text-white border-accent'
                  : 'bg-white text-heading border-edge hover:border-accent/50'
              }`}
            >
              Custom
            </button>
            {isCustom && (
              <div className="relative">
                <input
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={customPercent}
                  onChange={(e) => handleCustomChange(e.target.value)}
                  className="w-20 h-10 border border-edge rounded-lg px-3 pr-7 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-body/70 text-sm">%</span>
              </div>
            )}
          </div>
          <p className="mt-2 text-sm text-body/70">= ${downPaymentDollar.toLocaleString('en-US')}</p>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Loan Term</label>
          <div className="flex gap-2">
            {[15, 30].map((term) => (
              <button
                key={term}
                onClick={() => setLoanTerm(term)}
                className={`flex-1 h-11 rounded-lg text-sm font-medium border transition-colors ${
                  loanTerm === term
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-heading border-edge hover:border-accent/50'
                }`}
              >
                {term} years
              </button>
            ))}
          </div>
        </div>

        {/* Extra Monthly Payment */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Extra Monthly Payment</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              min={0}
              value={extraPayment}
              onChange={(e) => setExtraPayment(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {extraPresets.map((amt) => (
              <button
                key={amt}
                onClick={() => setExtraPayment(amt)}
                className={`h-8 px-4 rounded-md text-xs font-medium border transition-colors ${
                  extraPayment === amt
                    ? 'bg-accent text-white border-accent'
                    : 'bg-white text-heading border-edge hover:border-accent/50'
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>
          <p className="mt-1 text-xs text-body/60">Additional amount above your regular payment</p>
        </div>
      </div>

      {/* Results */}
      <div className="lg:w-1/2 bg-white border border-edge rounded-2xl p-6 flex flex-col">
        {/* Comparison columns */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-surface border border-edge rounded-xl text-center">
            <span className="block text-xs text-body uppercase tracking-wide mb-1">Without Extra</span>
            <span className="block text-xs text-body mb-0.5">Payoff</span>
            <span className="block text-lg font-semibold text-heading">{loanTerm} years</span>
            <span className="block text-xs text-body mt-1 mb-0.5">Total Interest</span>
            <span className="block text-lg font-semibold text-heading">${fmt(totalInterestStandard)}</span>
          </div>
          <div className="p-3 bg-accent/5 border border-accent/20 rounded-xl text-center">
            <span className="block text-xs text-accent uppercase tracking-wide mb-1">With Extra</span>
            <span className="block text-xs text-body mb-0.5">Payoff</span>
            <span className="block text-lg font-semibold text-accent">{newPayoffYears} yrs {newPayoffMonths} mo</span>
            <span className="block text-xs text-body mt-1 mb-0.5">Total Interest</span>
            <span className="block text-lg font-semibold text-accent">${fmt(withExtra.totalInterest)}</span>
          </div>
        </div>

        {/* Primary highlight */}
        <div className="text-center mb-4 p-4 bg-accent/10 border border-accent/20 rounded-xl">
          <span className="block text-sm text-body mb-1">You save</span>
          <span className="text-3xl font-semibold tracking-tight text-accent">${fmt(interestSaved)}</span>
          <span className="block text-sm text-body mt-1">in interest</span>
          <span className="block text-base font-medium text-heading mt-1">
            And pay off {yearsSaved > 0 ? `${yearsSaved} year${yearsSaved !== 1 ? 's' : ''}` : ''}{yearsSaved > 0 && remainingMonthsSaved > 0 ? ' ' : ''}{remainingMonthsSaved > 0 ? `${remainingMonthsSaved} month${remainingMonthsSaved !== 1 ? 's' : ''}` : ''} early
          </span>
        </div>

        {/* Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">Regular Monthly Payment</span>
            <span className="text-sm font-medium text-heading">${fmt2(standardPayment)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">Extra Monthly Payment</span>
            <span className="text-sm font-medium text-heading">${fmt2(extraPayment)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm font-medium text-heading">New Total Monthly Payment</span>
            <span className="text-sm font-semibold text-heading">${fmt2(standardPayment + extraPayment)}</span>
          </div>
        </div>

        <div className="space-y-2 mt-4 pt-4 border-t border-edge/50">
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm text-body">Original Payoff</span>
            <span className="text-sm font-medium text-heading">{loanTerm} years</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm text-body">New Payoff</span>
            <span className="text-sm font-medium text-heading">{newPayoffYears} years {newPayoffMonths} months</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm text-body">Time Saved</span>
            <span className="text-sm font-medium text-heading">{yearsSaved > 0 ? `${yearsSaved} years ` : ''}{remainingMonthsSaved} months</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm text-body">Interest Without Extra</span>
            <span className="text-sm font-medium text-heading">${fmt(totalInterestStandard)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm text-body">Interest With Extra</span>
            <span className="text-sm font-medium text-heading">${fmt(withExtra.totalInterest)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 bg-green-50 rounded-lg px-3 -mx-3">
            <span className="text-sm font-semibold text-green-700">Total Interest Saved</span>
            <span className="text-sm font-bold text-green-700">${fmt(interestSaved)}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-xs text-body/60 leading-relaxed">
          Calculations assume a fixed interest rate and consistent extra payments throughout the loan term. Actual savings may vary. Not a commitment to lend.
        </p>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-edge/50 text-center">
          <Link
            href="/home-purchase"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            Ready to get started? Apply Now &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
