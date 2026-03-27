'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface PaymentBreakdownChartProps {
  principalInterest: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  pmi: number;
}

const RADIAN = Math.PI / 180;

function renderPercentLabel({ cx = 0, cy = 0, midAngle = 0, innerRadius = 0, outerRadius = 0, percent = 0 }: {
  cx?: number; cy?: number; midAngle?: number; innerRadius?: number; outerRadius?: number; percent?: number;
}) {
  if (percent < 0.03) return null;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={600}>
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
}

export default function PaymentBreakdownChart({
  principalInterest,
  propertyTax,
  insurance,
  hoa,
  pmi,
}: PaymentBreakdownChartProps) {
  const data = [
    { name: 'Principal & Interest', value: principalInterest, color: '#B79D2F' },
    { name: 'Property Tax', value: propertyTax, color: '#06b6d4' },
    { name: 'Insurance', value: insurance, color: '#10b981' },
  ];

  if (hoa > 0) {
    data.push({ name: 'HOA Fees', value: hoa, color: '#f59e0b' });
  }

  if (pmi > 0) {
    data.push({ name: 'PMI', value: pmi, color: '#ef4444' });
  }

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={85}
              paddingAngle={2}
              dataKey="value"
              label={renderPercentLabel}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => {
                const pct = ((Number(value) / total) * 100).toFixed(1);
                return `$${Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${pct}%)`;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Legend below chart */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5 text-xs text-body">
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
            <span>{entry.name}</span>
            <span className="font-medium text-heading">{((entry.value / total) * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
