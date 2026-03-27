'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const liveFaqs = [
  {
    question: 'When should I refinance?',
    answer: `It's generally a good time to refinance when mortgage rates are 2% lower than the current rate on your loan. However, even a rate reduction of 1% can be significant. For example, on a $100,000 loan at 8.5%, the monthly payment for principal and interest is approximately $770 (not including taxes and insurance). If you refinance to 7.5%, the payment drops to about $700 — a savings of $70 per month. Your actual savings will depend on your income, budget, loan amount, and the rate change. Consult your lender for a personalized calculation.`,
  },
  {
    question: 'What are points?',
    answer: `A point is a percentage of the loan amount, or 1-point = 1% of the loan, so one point on a $100,000 loan is $1,000. Points are costs you pay to the lender for the mortgage loan under given terms. Discount points are fees you pay to the lender for reducing the interest rate — essentially paying interest up-front. Lenders may refer to costs in terms of basis points in hundredths of a percent, 100 basis points = 1 point, or 1% of the loan amount.`,
  },
  {
    question: 'Should I pay points to lower my interest rate?',
    answer: `Yes, if you plan to stay in the property for at least a few years. Paying discount points to obtain a lower interest rate will reduce your monthly mortgage payment and may increase the amount you can afford to borrow. However, if you plan to stay in the property for only a year or two, your monthly savings may not be enough to recoup the cost of the discount points that you paid up-front.`,
  },
  {
    question: 'What is an APR?',
    answer: `The annual percentage rate (APR) is an interest rate reflecting the cost of a mortgage as a yearly rate. This rate is likely to be higher than the stated note rate or advertised rate on the mortgage because it takes into account points and other credit costs. The APR allows homebuyers to compare different types of mortgages based on the annual cost for each loan.`,
  },
  {
    question: 'What does it mean to lock the interest rate?',
    answer: `Mortgage rates can change from the day you apply for a loan to the day you close the transaction. If interest rates rise during that period, it could unexpectedly increase your monthly payments. A lender can allow the borrower to "lock-in" the loan's interest rate, guaranteeing that rate for a specified time period, often 30-60 days, sometimes for a fee. This protects you from rate increases while your loan is being processed.`,
  },
  {
    question: 'What documents do I need to prepare for my loan application?',
    answer: `Your Property:
• Copy of signed sales contract including all riders
• Verification of the deposit you placed on the home
• Names, addresses and telephone numbers of all realtors, builders, insurance agents and attorneys involved
• Copy of Listing Sheet and legal description if available (if the property is a condominium please provide condominium declaration, by-laws and most recent budget)

Your Income:
• Copies of your pay-stubs for the most recent 30-day period and year-to-date
• Copies of your W-2 forms for the past two years
• Names and addresses of all employers for the last two years
• Letter explaining any gaps in employment in the past 2 years
• Work visa or green card (copy front & back)

If self-employed or receive commission or bonus, interest/dividends, or rental income:
• Provide full tax returns for the last two years PLUS year-to-date Profit and Loss statement (please provide complete tax return including attached schedules and statements)
• K-1's for all partnerships and S-Corporations for the last two years
• Completed and signed Federal Partnership (1065) and/or Corporate Income Tax Returns (1120) including all schedules, statements and addenda for the last two years (Required only if your ownership position is 25% or greater)

If you will use Alimony or Child Support to qualify:
• Provide divorce decree/court order stating amount, as well as, proof of receipt of funds for last year

If you receive Social Security income, Disability or VA benefits:
• Provide award letter from agency or organization

Source of Funds and Down Payment:
• Sale of your existing home — provide a copy of the signed sales contract and statement or listing agreement if unsold (at closing, provide a settlement/Closing Statement)
• Savings, checking or money market funds — provide copies of bank statements for the last 3 months
• Stocks and bonds — provide copies of your statement from your broker or copies of certificates
• Gifts — If part of your cash to close, provide Gift Affidavit and proof of receipt of funds

Debt or Obligations:
• Prepare a list of all names, addresses, account numbers, balances, and monthly payments for all current debts with copies of the last three monthly statements
• Include all names, addresses, account numbers, balances, and monthly payments for mortgage holders and/or landlords for the last two years
• If you are paying alimony or child support, include marital settlement/court order stating the terms of the obligation
• Check to cover Application Fee(s)`,
  },
  {
    question: 'How is my credit judged by lenders?',
    answer: `Credit scoring is a system creditors use to help determine whether to give you credit. A credit scoring system awards points for each factor that helps predict who is most likely to repay a debt. Information about you and your credit experiences, such as your bill-paying history, the number and type of accounts you have, late payments, collection actions, outstanding debt, and the age of your accounts, is collected from your credit application and your credit report. Using a statistical program, creditors compare this information to the credit performance of consumers with similar profiles.

FICO scores range from 350 (high risk) to 850 (low risk). We recommend checking your credit report for accuracy before you apply for a mortgage. You can contact the three major credit bureaus:

• Equifax: (800) 685-1111
• Experian (formerly TRW): (888) EXPERIAN (397-3742)
• Trans Union: (800) 916-8800

You can also get a free annual credit report from each agency at https://www.annualcreditreport.com`,
  },
  {
    question: 'What can I do to improve my credit score?',
    answer: `Concentrate on paying your bills on time, paying down outstanding balances, and not taking on new debt. Your credit score is evaluated in five key areas:

1. Payment History — It is likely that your score will be affected negatively if you have paid bills late, had an account referred to collections, or declared bankruptcy.

2. Outstanding Debt — Models evaluate the amount of debt you have compared to your credit limits. If the amount you owe is close to your credit limit, that is likely to have a negative effect on your score.

3. Credit History Length — Generally, models consider the length of your credit track record. An insufficient credit history may have an effect on your score.

4. Recent Credit Applications — If you have applied for too many new accounts recently, that may negatively affect your score.

5. Types and Number of Accounts — Although it is generally good to have established credit accounts, too many credit card accounts may have a negative effect on your score.`,
  },
  {
    question: 'What is an appraisal?',
    answer: `An Appraisal is an estimate of a property's fair market value. It is performed by a state-licensed appraiser and is required by lenders before loan approval to ensure the mortgage amount does not exceed the property's value.`,
  },
  {
    question: 'What is PMI (Private Mortgage Insurance)?',
    answer: `When your down payment is less than 20% of the purchase price, mortgage lenders usually require you get Private Mortgage Insurance (PMI). PMI protects the lender against loss in the event that you default on the mortgage. The cost of PMI varies depending on the size of your down payment and the loan type. The Homeowners Protection Act of 1998 allows you to request cancellation of PMI when you reach 20% equity and provides for automatic termination at 22% equity based on the original property value.`,
  },
  {
    question: 'What is 80-10-10 financing?',
    answer: `80-10-10 financing was created for high-income buyers who may have difficulty saving a 20% down payment and want to avoid PMI costs. The structure works as follows: a savings and loan association, bank, or other institutional lender provides a traditional 80% first mortgage, you get a 10% second mortgage, and make a cash down payment equal to 10% of the home's purchase price.

A variant, 80-15-5 financing, is also available with just 5% down. However, because a smaller cash down payment increases the lender's risk of default, do not be surprised when you are asked to pay higher loan fees and a higher mortgage interest rate for 80-15-5 than you pay for 80-10-10.`,
  },
  {
    question: 'What happens at closing?',
    answer: `The property is officially transferred from the seller to you at "Closing" or "Funding." Your Closing may include real estate agents, your attorney, the seller's attorney, the lender's representative, title and escrow firm representatives, and other staff. You can have an attorney represent you if you can't attend the closing meeting, for instance if you're out-of-state. Closing can take anywhere from 1-hour to several depending on contingency clauses in the purchase offer, or any escrow accounts needing to be set up.

Before closing, you should conduct a final inspection, or "walk-through," to ensure requested repairs were performed, and items agreed to remain with the house are there such as drapes, lighting fixtures, etc.

Most paperwork in closing or settlement is done by attorneys and real estate professionals. In most states, the settlement is completed by a title or escrow firm in which you forward all materials and information plus the appropriate cashier's checks so the firm can make the necessary disbursement. Your representative will deliver the check to the seller, and then give the keys to you.`,
  },
];

const additionalFaqs = [
  {
    question: 'How long does the mortgage process take?',
    answer: 'Our average closing time is 21 days from application to keys. With our digital platform and efficient local team, we can often close even faster depending on your situation.',
  },
  {
    question: 'What credit score do I need?',
    answer: 'Credit requirements vary by loan type. Conventional loans typically require 620+, FHA loans can go as low as 580, and VA loans are more flexible. Contact us to discuss your specific situation.',
  },
  {
    question: 'How much down payment do I need?',
    answer: 'Down payment requirements range from 0% (VA loans) to 3.5% (FHA) to 3-20% (Conventional). The amount depends on your loan type, credit profile, and financial goals.',
  },
  {
    question: 'Can I get pre-approved before house hunting?',
    answer: "Absolutely! Getting pre-approved is one of the smartest steps you can take. It shows sellers you're a serious buyer and helps you understand your budget. Our pre-approval process takes just minutes online.",
  },
  {
    question: 'Are there any hidden fees?',
    answer: "Never. We believe in complete transparency. All fees are disclosed upfront in your Loan Estimate, and we'll walk you through every line item so there are no surprises at closing.",
  },
  {
    question: 'Do you offer refinancing?',
    answer: 'Yes! We offer rate-and-term refinancing, cash-out refinancing, and streamline refinances for FHA and VA loans. Use our refinance calculator to see your potential savings.',
  },
];

function FAQAccordion({ faqs, startIndex = 0 }: { faqs: typeof liveFaqs; startIndex?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white border border-edge rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface transition-colors"
          >
            <span className="text-base font-semibold text-heading pr-4">{faq.question}</span>
            <Icon
              icon={openIndex === index ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
              className="text-body/70 text-xl shrink-0"
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 pt-2">
              <div className="text-sm text-body leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-heading mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-body">
              Everything you need to know about mortgages with Prime State Lending.
            </p>
          </div>

          <FAQAccordion faqs={liveFaqs} />

          <div className="mt-16 mb-8">
            <h2 className="text-2xl font-semibold tracking-tight text-heading mb-6 text-center">
              More Questions
            </h2>
            <FAQAccordion faqs={additionalFaqs} startIndex={liveFaqs.length} />
          </div>

          <div className="mt-16 bg-nav text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Still have questions?</h2>
            <p className="text-white/60 mb-6">Our team is here to help you navigate the mortgage process.</p>
            <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white text-heading text-sm font-medium hover:bg-surface transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
