import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function LoanProcessPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              The Loan Process
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Understanding the mortgage process from start to finish.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Find Out How Much You Can Borrow
                </h2>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                <p>
                  The first step in obtaining a loan is to determine how much money you can borrow. You can &quot;pre-qualify&quot; by answering a few questions based on standard lender guidelines to calculate your buying power.
                </p>
                <p>
                  If you want to pursue pre-approval, your lender will need verification of your income, credit, assets and liabilities. Pre-approval gives you a stronger position when making an offer on a home.
                </p>

                <h3 className="text-base font-semibold text-slate-900 pt-2">Loan-To-Value &amp; Debt Ratios</h3>
                <p>
                  The Loan-To-Value (LTV) ratio represents the maximum amount a lender will loan against the property. Lenders typically require that your monthly mortgage payment not exceed 1/3 of your gross monthly income. Higher debt obligations may necessitate a larger down payment.
                </p>

                <h3 className="text-base font-semibold text-slate-900 pt-2">Credit Scores</h3>
                <p>
                  FICO scores measure your creditworthiness using factors including payment history, amounts you owe, length of credit history, and recent credit inquiries. Multiple lender inquiries within a short period can negatively impact your score.
                </p>

                <h3 className="text-base font-semibold text-slate-900 pt-2">Self-Employment</h3>
                <p>
                  Self-employed applicants face stricter requirements. Since pay stubs aren&apos;t available, lenders typically require 2 years of tax returns for income documentation.
                </p>

                <h3 className="text-base font-semibold text-slate-900 pt-2">Down Payment Source</h3>
                <p>
                  Lenders expect saved funds for your down payment. If unavailable, borrowers may use gift funds from acceptable donors with signed documentation stating repayment isn&apos;t required.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Select The Right Loan Program
                </h2>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                <p>
                  There are two primary mortgage types to choose from:
                </p>

                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">Fixed-Rate Mortgages</h3>
                    <p>
                      Fixed-rate mortgages have terms lasting 15 or 30 years. The interest rate and monthly payments remain the same for the life of the loan. Choose this option for stability, especially if you plan to remain in your home longer than 7 years.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">Adjustable-Rate Mortgages (ARM)</h3>
                    <p>
                      Adjustable-rate mortgages also span 15 or 30 years, but the interest rate on the loan may go up or down, adjusting your monthly payments accordingly. This option may be suitable if you&apos;re planning to stay fewer than 5 years and anticipate income growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Apply For A Loan
                </h2>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                <p>
                  Once you have determined how much you can borrow and selected the right loan program, the next step is to submit your loan application. You can apply through our online system to get started quickly.
                </p>
                <Link
                  href="/home-purchase"
                  className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
                >
                  Click To Apply For A Loan
                  <Icon icon="solar:arrow-right-linear" />
                </Link>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Begin Loan Processing
                </h2>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                <p>
                  Once you have submitted your loan application, your loan processor will verify all the information you have provided. Approval is based on two factors: <strong>your ability and willingness to repay the loan and the value of the property.</strong>
                </p>

                <h3 className="text-base font-semibold text-slate-900 pt-2">The processor will evaluate:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Income/Employment Check',
                    'Credit Check',
                    'Asset Evaluation',
                    'Property Appraisal',
                    'Other Documentation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
                      <Icon icon="solar:check-circle-linear" className="text-emerald-500 shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-base font-semibold text-slate-900 pt-2">Tips for a smooth process:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Complete your application thoroughly</li>
                  <li>Respond promptly to documentation requests</li>
                  <li>Avoid unexplained fund transfers between accounts</li>
                  <li>Postpone major purchases until after closing</li>
                  <li>Remain available for your closing date</li>
                </ul>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold">5</span>
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  Close Your Loan
                </h2>
              </div>
              <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                <p>
                  After your loan is approved, you are ready to sign the final loan documents. At the closing table, you will sign the necessary documents before a notary. Be sure to review all terms for accuracy and completeness.
                </p>
                <p>
                  You will need to provide a cashier&apos;s check or bank wire for any closing costs or fees due at settlement. The first regular mortgage payment is usually due 6-8 weeks from closing.
                </p>
                <p>
                  Federal law permits a 3-day review period for owner-occupied refinances. During this period, you can review the documents before the closing is finalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
