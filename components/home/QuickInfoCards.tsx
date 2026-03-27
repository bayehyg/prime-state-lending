export default function QuickInfoCards() {
  return (
    <div className="border-y border-edge/60 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <p className="text-center text-xs font-medium text-body/70 uppercase tracking-widest mb-8">Trusted by families across Washington State</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-edge/50">
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-heading mb-1">$2B+</h4>
            <p className="text-sm text-body">Loans Funded</p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-heading mb-1">4.9/5</h4>
            <p className="text-sm text-body">Customer Rating</p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-heading mb-1">21 Days</h4>
            <p className="text-sm text-body">Average Closing</p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold tracking-tight text-heading mb-1">0%</h4>
            <p className="text-sm text-body">Hidden Fees</p>
          </div>
        </div>
      </div>
    </div>
  );
}
