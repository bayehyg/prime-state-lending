'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getTaxRateByZip, getMonthlyTax } from '@/lib/wa-tax-rates';

export default function IncomeQualifierCalculator() {
  const [homePrice, setHomePrice] = useState(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [customPercent, setCustomPercent] = useState('');
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(7.0);
  const [monthlyDebts, setMonthlyDebts] = useState(0);
  const [zipCode, setZipCode] = useState('');

  const presetPercents = [3, 5, 10, 20];
  const isCustom = !presetPercents.includes(downPaymentPercent);

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

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(val);
  };

  const zipValid = /^\d{5}$/.test(zipCode);
  const taxLookup = zipValid ? getTaxRateByZip(zipCode) : { rate: 0.0076, county: null, isEstimate: true };

  // Calculations
  const downPaymentDollar = Math.round((downPaymentPercent / 100) * homePrice);
  const loanAmount = homePrice - downPaymentDollar;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;

  const monthlyPI = monthlyRate > 0
    ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments))
    : loanAmount / numPayments;

  const monthlyTax = zipValid
    ? getMonthlyTax(homePrice, zipCode)
    : (homePrice * 0.0076) / 12;

  const monthlyInsurance = (homePrice * 0.006) / 12;
  const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * 0.008) / 12 : 0;

  const totalHousingPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI + monthlyDebts;
  const housingOnlyPayment = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI;

  const backEndAnnual = (totalHousingPayment / 0.43) * 12;
  const frontEndAnnual = (housingOnlyPayment / 0.28) * 12;
  const finalRequiredIncome = Math.max(backEndAnnual, frontEndAnnual);

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

        {/* Zip Code */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Zip Code <span className="normal-case font-normal">(optional)</span></label>
          <input
            type="text"
            inputMode="numeric"
            maxLength={5}
            value={zipCode}
            onChange={handleZipChange}
            placeholder="e.g. 98043"
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-body/40"
          />
          {zipValid && !taxLookup.isEstimate && (
            <p className="mt-1 text-xs text-accent">
              Using {taxLookup.county} County rate ({(taxLookup.rate * 100).toFixed(2)}%)
            </p>
          )}
          {(!zipValid || taxLookup.isEstimate) && (
            <p className="mt-1 text-xs text-body/60">
              {zipCode.length === 5 && taxLookup.isEstimate
                ? 'Zip not found — using WA state average rate (0.76%)'
                : 'For property tax estimate'}
            </p>
          )}
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

        {/* Monthly Debts */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Monthly Debts</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              min={0}
              value={monthlyDebts}
              onChange={(e) => setMonthlyDebts(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <p className="mt-1 text-xs text-body/60">Car payments, student loans, credit cards, etc.</p>
        </div>
      </div>

      {/* Results */}
      <div className="lg:w-1/2 bg-white border border-edge rounded-2xl p-6 flex flex-col">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-body mb-1">Estimated Income Required</h3>
          <div className="text-4xl font-semibold tracking-tight text-accent">
            ${fmt(finalRequiredIncome)} <span className="text-lg font-medium text-body">/ year</span>
          </div>
        </div>

        {/* Breakdown */}
        <div className="space-y-2 mt-4">
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">Monthly Payment (P&amp;I)</span>
            <span className="text-sm font-medium text-heading">${fmt2(monthlyPI)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">
              Est. Property Tax{!taxLookup.isEstimate && taxLookup.county ? ` (${taxLookup.county} Co.)` : ''}
            </span>
            <span className="text-sm font-medium text-heading">${fmt2(monthlyTax)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">Est. Home Insurance</span>
            <span className="text-sm font-medium text-heading">${fmt2(monthlyInsurance)}</span>
          </div>
          {monthlyPMI > 0 && (
            <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
              <span className="text-sm text-body">PMI</span>
              <span className="text-sm font-medium text-heading">${fmt2(monthlyPMI)}</span>
            </div>
          )}
          {monthlyDebts > 0 && (
            <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
              <span className="text-sm text-body">Monthly Debts</span>
              <span className="text-sm font-medium text-heading">${fmt2(monthlyDebts)}</span>
            </div>
          )}
        </div>

        <div className="space-y-2 mt-4 pt-4 border-t border-edge/50">
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm font-medium text-heading">Total Monthly Obligations</span>
            <span className="text-sm font-semibold text-heading">${fmt2(totalHousingPayment)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm text-body">Required Monthly Income (43% DTI)</span>
            <span className="text-sm font-medium text-heading">${fmt2(totalHousingPayment / 0.43)}</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-sm font-medium text-heading">Required Annual Income</span>
            <span className="text-sm font-semibold text-accent">${fmt(finalRequiredIncome)}</span>
          </div>
        </div>

        {/* Secondary note */}
        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <p className="text-xs text-accent-hover">
            Based on front-end ratio (28% rule): ${fmt(frontEndAnnual)}/yr.
            Lenders use the higher of the two ratios. Requirements vary by loan type and lender.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-xs text-body/60 leading-relaxed">
          Income requirements are estimates based on standard 43% debt-to-income ratio guidelines. Actual qualification depends on credit score, loan type, assets, and lender policies. Not a commitment to lend.
        </p>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-edge/50 text-center">
          <Link
            href="/home-purchase"
            className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            See if you qualify &rarr; Get Pre-Qualified
          </Link>
        </div>
      </div>
    </div>
  );
}
