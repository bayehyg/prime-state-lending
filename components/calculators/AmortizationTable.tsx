interface AmortizationRow {
  month: number;
  principal: number;
  interest: number;
  balance: number;
}

interface AmortizationTableProps {
  schedule: AmortizationRow[];
}

export default function AmortizationTable({ schedule }: AmortizationTableProps) {
  return (
    <div className="overflow-x-auto border border-slate-200 rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">Month</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wide">Principal</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wide">Interest</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wide">Balance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {schedule.map((row) => (
            <tr key={row.month} className="hover:bg-slate-50">
              <td className="px-4 py-3 text-slate-900 font-medium">{row.month}</td>
              <td className="px-4 py-3 text-right text-slate-600">${row.principal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-right text-slate-600">${row.interest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-right text-slate-900 font-medium">${row.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
