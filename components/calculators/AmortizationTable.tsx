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
    <div className="overflow-x-auto border border-edge rounded-lg">
      <table className="w-full text-sm">
        <thead className="bg-surface border-b border-edge">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-body uppercase tracking-wide">Month</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-body uppercase tracking-wide">Principal</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-body uppercase tracking-wide">Interest</th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-body uppercase tracking-wide">Balance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-edge/50">
          {schedule.map((row) => (
            <tr key={row.month} className="hover:bg-surface">
              <td className="px-4 py-3 text-heading font-medium">{row.month}</td>
              <td className="px-4 py-3 text-right text-body">${row.principal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-right text-body">${row.interest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td className="px-4 py-3 text-right text-heading font-medium">${row.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
