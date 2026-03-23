import { Icon } from '@iconify/react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">A transparent process from application to keys.</h2>
            <p className="text-base text-slate-500 mb-10">We've stripped away the archaic paperwork and confusing jargon. Our streamlined digital platform keeps you updated every step of the way.</p>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-semibold">1</span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] pl-6 md:pl-0 md:group-even:pr-6 md:group-odd:pl-6 text-left md:group-even:text-right">
                  <h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Apply Online in Minutes</h4>
                  <p className="text-sm text-slate-500">Connect your bank accounts securely for instant verification. No printing required.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-semibold">2</span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] pl-6 md:pl-0 md:group-even:pr-6 md:group-odd:pl-6 text-left md:group-even:text-right">
                  <h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Get Pre-Approved</h4>
                  <p className="text-sm text-slate-500">Receive a verified pre-approval letter so you can shop for homes with confidence.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-semibold">3</span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] pl-6 md:pl-0 md:group-even:pr-6 md:group-odd:pl-6 text-left md:group-even:text-right">
                  <h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Underwriting &amp; Appraisal</h4>
                  <p className="text-sm text-slate-500">Our local team works fast behind the scenes to clear conditions and appraise the property.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-100 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <span className="text-sm font-semibold">4</span>
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] pl-6 md:pl-0 md:group-even:pr-6 md:group-odd:pl-6 text-left md:group-even:text-right">
                  <h4 className="text-base font-semibold tracking-tight text-slate-900 mb-1">Clear to Close</h4>
                  <p className="text-sm text-slate-500">Sign your final documents digitally or in-person. Welcome to your new home.</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Visual for Process */}
          <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200">
            {/* Dashboard Mock */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-100 px-4 py-3 flex items-center gap-3 bg-slate-50/50">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                  <Icon icon="solar:user-linear" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-900">Application Status</div>
                  <div className="text-[10px] text-slate-500">Updated 2 hours ago</div>
                </div>
                <div className="ml-auto text-xs px-2 py-1 bg-emerald-50 text-emerald-600 rounded-md font-medium border border-emerald-100">
                  In Review
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-xs font-medium text-slate-500">Progress</span>
                  <span className="text-sm font-semibold text-slate-900">65%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mb-6">
                  <div className="bg-indigo-600 h-2 rounded-full w-[65%]"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
                    <Icon icon="solar:check-circle-linear" className="text-emerald-500" />
                    <span className="text-sm text-slate-600">Credit Pull</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
                    <Icon icon="solar:check-circle-linear" className="text-emerald-500" />
                    <span className="text-sm text-slate-600">Income Verification</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-indigo-100 bg-indigo-50/50 shadow-sm relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
                    <div className="w-5 h-5 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                    <span className="text-sm text-indigo-900 font-medium">Appraisal Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
