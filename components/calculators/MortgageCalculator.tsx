'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import PaymentBreakdownChart from './PaymentBreakdownChart';
import AmortizationTable from './AmortizationTable';
import { getTaxRateByZip, getMonthlyTax } from '@/lib/wa-tax-rates';

interface AmortizationRow {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(650000);
  const [zipCode, setZipCode] = useState('');
  const [downPaymentDollar, setDownPaymentDollar] = useState(130000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.125);
  const [hoaFees, setHoaFees] = useState(0);
  const [showAmortization, setShowAmortization] = useState(false);

  // Zip code lookup
  const zipValid = /^\d{5}$/.test(zipCode);
  const taxLookup = zipValid ? getTaxRateByZip(zipCode) : { rate: 0.0076, county: null, isEstimate: true };

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

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(val);
  };

  // Calculate loan amount
  const loanAmount = homePrice - downPaymentDollar;
  const ltv = (loanAmount / homePrice) * 100;

  // Calculate PMI (0.8% annually when LTV > 80%)
  const pmiMonthly = ltv > 80 ? (loanAmount * 0.008) / 12 : 0;

  // Calculate monthly P&I using amortization formula
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

  // Property tax from zip lookup
  const taxMonthly = (homePrice * taxLookup.rate) / 12;

  // Insurance estimate (~0.6% annually, WA average)
  const insuranceMonthly = (homePrice * 0.006) / 12;

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
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Property Zip Code */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Property Zip Code</label>
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
                : 'Using WA state average rate (0.76%). Enter your zip for a local estimate.'}
            </p>
          )}
        </div>

        {/* Down Payment Dollar */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Down Payment ($)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              value={downPaymentDollar}
              onChange={(e) => handleDollarChange(Number(e.target.value))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Loan Term</label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value={30}>30-Year Fixed</option>
            <option value={20}>20-Year Fixed</option>
            <option value={15}>15-Year Fixed</option>
            <option value={10}>10-Year Fixed</option>
            <option value={30}>5/1 ARM</option>
            <option value={30}>7/1 ARM</option>
          </select>
        </div>

        {/* Down Payment Percent Slider */}
        <div className="sm:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-medium text-body uppercase tracking-wide">Down Payment</label>
            <span className="text-sm font-medium text-accent">{downPaymentPercent.toFixed(1)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="0.5"
            value={downPaymentPercent}
            onChange={(e) => handlePercentChange(Number(e.target.value))}
            className="w-full h-1.5 bg-surface rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-edge [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:hover:border-accent/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-edge [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:hover:border-accent/50"
            style={{
              background: `linear-gradient(to right, #B79D2F 0%, #B79D2F ${downPaymentPercent}%, #E0E3E8 ${downPaymentPercent}%, #E0E3E8 100%)`
            }}
          />
          <div className="flex justify-between mt-2 text-xs text-body/70">
            <span>$0</span>
            <span>${homePrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">Interest Rate (%)</label>
          <input
            type="number"
            step="0.001"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        {/* HOA Fees */}
        <div>
          <label className="block text-xs font-medium text-body mb-2 uppercase tracking-wide">HOA Fees (Monthly)</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">$</span>
            <input
              type="number"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
              className="w-full h-11 border border-edge rounded-lg px-8 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:w-1/2 bg-white border border-edge rounded-2xl p-6 flex flex-col">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-body mb-1">Monthly Payment</h3>
          <div className="text-4xl font-semibold tracking-tight text-heading">
            ${totalMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        {/* Chart */}
        <PaymentBreakdownChart
          principalInterest={monthlyPI}
          propertyTax={taxMonthly}
          insurance={insuranceMonthly}
          hoa={hoaFees}
          pmi={pmiMonthly}
        />

        {/* Breakdown */}
        <div className="space-y-2 mt-4">
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">Principal &amp; Interest</span>
            <span className="text-sm font-medium text-heading">${monthlyPI.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">
              Est. Property Tax{!taxLookup.isEstimate && taxLookup.county ? ` (${taxLookup.county} Co.)` : ''}
            </span>
            <span className="text-sm font-medium text-heading">${taxMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">Est. Home Insurance</span>
            <span className="text-sm font-medium text-heading">${insuranceMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
            <span className="text-sm text-body">HOA Fees</span>
            <span className="text-sm font-medium text-heading">${hoaFees.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          {ltv > 80 && (
            <div className="flex justify-between items-center py-1.5 border-b border-edge/50">
              <span className="text-sm text-body">PMI (LTV {ltv.toFixed(1)}%)</span>
              <span className="text-sm font-medium text-heading">${pmiMonthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-xs text-body/60 leading-relaxed">
          {!taxLookup.isEstimate && taxLookup.county
            ? `Property tax estimate based on ${taxLookup.county} County average effective rate (${(taxLookup.rate * 100).toFixed(2)}%). Actual taxes vary based on assessed value, exemptions, and local levies. Insurance estimate based on WA state average. Not a commitment to lend.`
            : 'Property tax based on WA state average (0.76%). Enter your zip code for a local estimate. Insurance estimate based on WA state average. Not a commitment to lend.'}
        </p>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-edge/50">
          <div>
            <span className="block text-xs text-body mb-1">Total Interest Paid</span>
            <span className="text-lg font-semibold text-heading">${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
          </div>
          <div>
            <span className="block text-xs text-body mb-1">Total Cost of Loan</span>
            <span className="text-lg font-semibold text-heading">${totalCost.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
          </div>
        </div>

        {/* Amortization Toggle */}
        <button
          onClick={() => setShowAmortization(!showAmortization)}
          className="mt-4 w-full h-10 px-6 inline-flex items-center justify-center rounded-lg bg-surface border border-edge text-body text-sm font-medium hover:bg-surface transition-colors"
        >
          <Icon icon={showAmortization ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"} className="mr-2" />
          {showAmortization ? 'Hide' : 'Show'} Amortization Schedule
        </button>

        {showAmortization && (
          <div className="mt-4">
            <AmortizationTable schedule={amortizationSchedule} />
          </div>
        )}
      </div>
    </div>
  );
}
