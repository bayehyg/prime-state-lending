'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface PaymentBreakdownChartProps {
  principalInterest: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  pmi: number;
}

export default function PaymentBreakdownChart({
  principalInterest,
  propertyTax,
  insurance,
  hoa,
  pmi,
}: PaymentBreakdownChartProps) {
  const data = [
    { name: 'Principal & Interest', value: principalInterest, color: '#4f46e5' },
    { name: 'Property Tax', value: propertyTax, color: '#06b6d4' },
    { name: 'Insurance', value: insurance, color: '#10b981' },
  ];

  if (hoa > 0) {
    data.push({ name: 'HOA Fees', value: hoa, color: '#f59e0b' });
  }

  if (pmi > 0) {
    data.push({ name: 'PMI', value: pmi, color: '#ef4444' });
  }

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => <span className="text-sm text-slate-600">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
