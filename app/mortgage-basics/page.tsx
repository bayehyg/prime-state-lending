'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';

const topics = [
  {
    title: 'Application Checklist',
    intro: 'Applying for a mortgage can seem like a daunting and scary process. To help, we\'ve created a checklist of things for you to compile, complete and acknowledge before applying.',
    icon: 'solar:checklist-linear',
    content: `Below is a list of documents that are required when you apply for a mortgage. However, every situation is unique and you may be required to provide additional documentation. So, if you are asked for more information, be cooperative and provide the information requested as soon as possible. It will help speed up the application process.

**Your Property**
• Copy of signed sales contract including all riders
• Verification of the deposit you placed on the home
• Names, addresses and telephone numbers of all realtors, builders, insurance agents and attorneys involved
• Copy of Listing Sheet and legal description if available (if the property is a condominium please provide condominium declaration, by-laws and most recent budget)

**Your Income**
• Copies of your pay-stubs for the most recent 30-day period and year-to-date
• Copies of your W-2 forms for the past two years
• Names and addresses of all employers for the last two years
• Letter explaining any gaps in employment in the past 2 years
• Work visa or green card (copy front & back)

If self-employed or receive commission or bonus, interest/dividends, or rental income:
• Provide full tax returns for the last two years PLUS year-to-date Profit and Loss statement (please provide complete tax return including attached schedules and statements. If you have filed an extension, please supply a copy of the extension.)
• K-1's for all partnerships and S-Corporations for the last two years (please double-check your return. Most K-1's are not attached to the 1040.)
• Completed and signed Federal Partnership (1065) and/or Corporate Income Tax Returns (1120) including all schedules, statements and addenda for the last two years. (Required only if your ownership position is 25% or greater.)

If you will use Alimony or Child Support to qualify:
• Provide divorce decree/court order stating amount, as well as, proof of receipt of funds for last year

If you receive Social Security income, Disability or VA benefits:
• Provide award letter from agency or organization

**Source of Funds and Down Payment**
• Sale of your existing home - provide a copy of the signed sales contract on your current residence and statement or listing agreement if unsold (at closing, you must also provide a settlement/Closing Statement)
• Savings, checking or money market funds - provide copies of bank statements for the last 3 months
• Stocks and bonds - provide copies of your statement from your broker or copies of certificates
• Gifts - If part of your cash to close, provide Gift Affidavit and proof of receipt of funds
• Based on information appearing on your application and/or your credit report, you may be required to submit additional documentation

**Debt or Obligations**
• Prepare a list of all names, addresses, account numbers, balances, and monthly payments for all current debts with copies of the last three monthly statements
• Include all names, addresses, account numbers, balances, and monthly payments for mortgage holders and/or landlords for the last two years
• If you are paying alimony or child support, include marital settlement/court order stating the terms of the obligation
• Check to cover Application Fee(s)`,
  },
  {
    title: 'Credit',
    intro: 'Credit history is a recorded file of past and current credit that is utilized to compile a credit score. Read about credit, how it works, how to improve your score and more.',
    icon: 'solar:card-linear',
    content: `**What is a credit report?**
Your credit payment history is recorded in a file or report. These files or reports are maintained and sold by "consumer reporting agencies" (CRAs), also known as credit bureaus.

**What information do credit bureaus collect?**
Credit bureaus collect the following types of information:
• Identification and employment information — your name, Social Security number, and employer
• Payment history across different creditors
• Inquiries from creditors requesting your history
• Public record information — bankruptcies, foreclosures, and tax liens

**Credit Scoring**
Credit scoring is a system creditors use to help determine whether to give you credit. Using a statistical program, creditors compare your credit information to the credit performance of consumers with similar profiles. FICO scores, the most commonly used type, range from 350 (high risk) to 850 (low risk).

**How to improve your score**
Concentrate on paying your bills on time, paying down outstanding balances, and not taking on new debt. The five key evaluation areas are:
1. Payment History — paying bills late, collections, or bankruptcy will negatively affect your score
2. Outstanding Debt — if the amount you owe is close to your credit limit, that is likely to have a negative effect
3. Credit History Length — a longer credit track record is generally better
4. Recent Credit Applications — too many new account applications recently may negatively affect your score
5. Types and Number of Accounts — too many credit card accounts may have a negative effect

**Your Rights Under the Fair Credit Reporting Act (FCRA)**
You have the right to:
• Obtain a free annual credit report from each major agency
• Know who has accessed your file
• Dispute inaccurate information
• Receive explanations for credit denials

**Free Credit Reports**
You can get a free annual credit report from each of the three major agencies at annualcreditreport.com or by contacting:
• Equifax: (800) 685-1111
• Experian: (888) 397-3742
• Trans Union: (800) 916-8800`,
  },
  {
    title: 'Closing Costs',
    intro: 'A closing cost is a payment required to finalize a home loan and is separate from a down-payment. Read about closing costs, their purpose, how you can pay them and more.',
    icon: 'solar:document-linear',
    content: `"Closing" is the last step of buying and financing a home and when the property is officially transferred from the seller to you. At Closing you and all the other parties in the mortgage loan transaction sign the necessary documents.

Your Closing may include some or all of these entities: real estate agents, your attorney, the seller's attorney, lender's representative, title and escrow firm representatives, clerks, secretaries, and other staff. Closing can take anywhere from 1-hour to several depending on contingency clauses in the purchase offer, or any escrow instructions needing to be executed.

**Statutory Closing Costs**
These are expenses you have to pay to state and local agencies, even if you paid cash for the house:
• Transfer Taxes — Required by some localities to transfer the title and deed from the seller to the buyer
• Deed Recording Fees — To pay for the County Clerk to record the deed and mortgage, and to change the property tax billing
• Pro-Rated Taxes — Property taxes may need to be split between the buyer and the seller since they are due at different times of the year
• State & Local Fees — Other state and local mortgage taxes and fees may apply

**Third-Party Costs**
• Attorney Fees — They usually charge a percentage of the selling price up to 1%, or some work on an hourly basis or for a flat fee
• Title Search Costs — To ensure there are no obstacles such as liens or lawsuits regarding the property
• Homeowner's Insurance — Most lenders require you prepay the first year's premium
• Real Estate Agent's Sales Commission — The seller pays the real estate agent's commission

**Lender Charges**
• Origination Fee — For processing the mortgage application, a flat fee or a percentage of the mortgage loan
• Credit Report — Most lenders require a credit report on you and your spouse
• Points — One point is equal to 1% of the amount borrowed and can be payable when the loan is approved
• Lender's Attorney's Fees — For drawing up documents and ensuring the title is clear
• Document Preparation Fees — For preparing documents during the home-buying process
• Preparation of Amortization Schedule — Some lenders will prepare a detailed amortization for the full term
• Land Survey — Lenders may require that the property be surveyed
• Appraisals — Professional appraisers compare the value of the property to recently sold neighborhood properties
• Lender's Mortgage Insurance — If your down payment is 20% or less, many lenders require Private Mortgage Insurance (PMI)
• Lender's Title Insurance — Insurance to protect the lender's mortgage investment, a 1-time premium usually paid at closing
• Release Fees — Fees to release any liens on the property, usually paid by the seller
• Inspections Required by Lenders — Termite inspection for FHA or VA loans, water tests in rural areas
• Prepaid Interest — Interest costs begin at closing time; the lender will calculate interest owed for the period before your first payment
• Escrow Account — Lenders often require an escrow account for taxes, homeowner's insurance, and sometimes PMI

**What is RESPA?**
The Real Estate Settlement Procedures Act (RESPA) requires your lender to provide a "Loan Estimate" within 3 business days of your mortgage application, estimating your settlement or closing costs.`,
  },
  {
    title: 'Appraisals',
    intro: 'An appraisal is an estimate of a property\'s fair market value and is required by a lender to ensure the loan amount is not more than the property value. Read about appraisals, how they work, ownership and more.',
    icon: 'solar:clipboard-check-linear',
    content: `An Appraisal is an estimate of a property's fair market value. It is required by lenders before loan approval to ensure the mortgage amount doesn't exceed the property's value. A state-licensed appraiser conducts this assessment.

**Reasons for Appraisals**
Beyond securing a loan, appraisals serve multiple purposes including property tax disputes, insurance replacement costs, divorce and estate settlements, real estate negotiations, eminent domain cases, and legal proceedings.

**Three Appraisal Methods**

Cost Approach: Calculates land value plus reconstruction costs minus depreciation.

Sales Comparison Approach: Compares 3-4 recently sold comparable properties within ½ mile, considering square footage, bedrooms, bathrooms, age, lot size, views, and condition.

Income Approach: Converts future income streams into present value, suited for income-producing properties.

**Appraisal Ownership & Transferability**
The mortgage company owns the appraisal even though the borrower paid for it. Appraisals can typically transfer to another lender, though some firms charge retype fees.

**Market Value Determination**
Property sellers set prices, not appraisers. Real estate agents perform Comparative Market Analysis (CMA) to suggest listing prices based on recent neighborhood sales.`,
  },
  {
    title: 'Private Mortgage Insurance (PMI)',
    intro: 'Private Mortgage Insurance or PMI is insurance that protects a lender from increased risk from borrowers putting less than 20% down on a house. Read about PMI, how it works, cost and more.',
    icon: 'solar:shield-check-linear',
    content: `When your down payment is less than 20% of the purchase price on a conventional mortgage, lenders require Private Mortgage Insurance (PMI) to protect them in case you default on your mortgage.

**How It Works**
PMI companies insure approximately the top 20% of the mortgage. Upon borrower default, the lender sells the property and receives reimbursement from the PMI company for the remaining debt up to the policy limits.

**Qualification Benefits**
PMI enables borrowers to qualify for larger loans. For example, a family with $42,000 annual income could afford a $44,600 home without PMI, but $62,300 with it — representing 39% additional purchasing power.

**Costs**
A highly leveraged adjustable-rate mortgage requires the borrower to pay a higher premium. With 5% down on a $150,000 purchase: approximately 0.78% annually ($92.67 monthly). With 10% down: 0.52% annually ($58.50 monthly).

**Payment Options**
• Pay one year's premium at closing
• Add a higher monthly premium to regular payments
• Finance a lump-sum into the loan with potential rebate if canceled early

**Cancellation Rights**
The Homeowners Protection Act of 1998 allows automatic termination at 22% equity (based on original property value) or borrower-requested cancellation at 20% equity if payments are current. Exceptions apply for high-risk loans, payment delinquency, or additional liens.`,
  },
  {
    title: 'Refinance',
    intro: 'Refinancing your mortgage is a common practice used to lower monthly payments, interest rates, lower your DTI and more. Read about refinancing, how it works, cost and more.',
    icon: 'solar:refresh-circle-linear',
    content: `**When to Refinance**
It's generally a good time to refinance when mortgage rates are 2% lower than the current rate on your loan.

**Cost Considerations**
Refinancing costs are estimated at 2-3% of the loan amount, beginning with application fees of $250-$350 plus origination fees typically at 1% of the loan.

**Moving Timeline**
If you are planning to relocate within a couple of years, your monthly savings may not be enough to offset the refinancing fees. For example, a $1,000 refinance cost would require 20 months of $50 monthly savings to break even.

**Interest Rate Lock**
Borrowers can secure rates for 30-60 days, sometimes for a fee, protecting against rate increases during processing.

**Points**
One point on a $100,000 loan is $1,000, representing 1% of the loan amount. Points can be used to reduce your interest rate.

**Credit Considerations**
Past credit difficulties don't automatically disqualify applicants, though higher interest rates and larger down payments (20%-50%) may apply. Being late fewer than 3 times within the past year, with delays under 30 days, still permits competitive rates.

**Choosing a Lender**
Balance two factors when choosing a lender: service quality and cost transparency.`,
  },
  {
    title: 'Glossary of Terms',
    intro: 'See a full list of mortgage terms by clicking learn more below.',
    icon: 'solar:book-linear',
    content: `**Adjustable-Rate Mortgage (ARM)** — A mortgage with an interest rate that adjusts periodically based on a pre-selected index, affecting monthly payments.

**Amortization** — The gradual reduction of a debt through periodic installment payments of principal and interest.

**Annual Percentage Rate (APR)** — The yearly cost of a mortgage expressed as an interest rate, including fees, points, and mortgage insurance.

**Appraisal** — An estimate of a property's fair market value by a licensed appraiser.

**Closing** — The final step in a real estate transaction where documents are signed and the property title is transferred.

**Closing Costs** — Expenses beyond the property price paid at the closing of a real estate transaction.

**Conventional Loan** — A mortgage not insured or guaranteed by a government agency.

**Deed** — A legal document that transfers ownership of property.

**Down Payment** — The portion of a home's purchase price paid in cash upfront.

**Earnest Money** — A deposit made to a seller as a sign of good faith in a real estate transaction.

**Equity** — The difference between the fair market value of a property and the amount still owed on the mortgage.

**Escrow** — An account held by a third party to pay taxes, insurance, and other property expenses.

**FHA Loan** — A mortgage insured by the Federal Housing Administration.

**Fixed-Rate Mortgage** — A mortgage with an interest rate that remains the same for the life of the loan.

**Foreclosure** — The legal process in which a lender takes control of a property from a borrower who has defaulted.

**Interest Rate** — The percentage charged by a lender for borrowing money.

**Jumbo Loan** — A mortgage that exceeds conforming loan limits set by the Federal Housing Finance Agency.

**Lien** — A legal claim on a property as security for a debt.

**Loan-To-Value (LTV)** — The ratio of the mortgage loan amount to the appraised value of the property.

**Mortgage Insurance Premium (MIP)** — Insurance required on FHA loans to protect the lender.

**PITI** — Principal, Interest, Taxes, and Insurance — the four components of a monthly mortgage payment.

**Points** — Fees paid to the lender at closing, equal to 1% of the loan amount, to reduce the interest rate.

**Pre-Approval** — A commitment from a lender to provide a mortgage up to a specified amount, subject to conditions.

**Pre-Qualification** — An estimate of how much you may be able to borrow based on preliminary financial information.

**Principal** — The amount of money borrowed for a mortgage, not including interest.

**Private Mortgage Insurance (PMI)** — Insurance required on conventional loans when the down payment is less than 20%.

**Refinance** — Replacing an existing mortgage with a new loan, typically to get better terms.

**Title** — A document proving legal ownership of a property.

**Title Insurance** — Insurance protecting the lender and/or buyer against disputes over property ownership.

**Underwriting** — The process lenders use to evaluate the risk of a mortgage application.

**VA Loan** — A mortgage guaranteed by the Department of Veterans Affairs for eligible veterans and service members.`,
  },
  {
    title: 'Foreclosure',
    intro: 'Foreclosure is the process of a lender seizing a property in accordance with the terms stipulated in the mortgage contract. Read about foreclosure and how to avoid it.',
    icon: 'solar:danger-triangle-linear',
    content: `Foreclosure is when a homeowner is unable to make principal and/or interest payments on their mortgage. The lender, a bank or building society, can seize and sell the property.

Both a Foreclosure and a Deficiency Judgment can affect your ability to qualify for credit in the future.

**Prevention Steps**
If you are having trouble making your payments, take these steps immediately:
• Contact your lender immediately when payment will be late
• Never ignore lender communications
• Don't assume your situation is hopeless

**Long-Term Solutions**

Mortgage Modification — Restructuring loan terms, extending the length of the loan, or reducing payments to make them more manageable.

Pre-Foreclosure Sale — Selling the property below the mortgage balance. This requires being at least 2 months delinquent and typically allows a 3-5 month sale window.

Deed in Lieu of Foreclosure — The lender allows you to give-back your property and forgives the debt.

FHA/VA Assistance Programs — Special options are available for federally-backed loans.

**Temporary Solutions**

Reinstatement — Making a lump sum payment to bring the mortgage current.

Forbearance — The lender agrees to delay or reduce payments temporarily.

Repayment Plan — Spreading overdue amounts across future payments.

Partial Claim — A one-time payment from the FHA insurance fund to help bring the mortgage current.`,
  },
];

export default function MortgageBasicsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-heading mb-4">
              Mortgage Basics
            </h1>
            <p className="text-lg text-body">
              Jump in and get an overview on common mortgage terms
            </p>
          </div>

          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div key={topic.title} className="bg-white border border-edge rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-surface transition-colors"
                >
                  <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                    <Icon icon={topic.icon} className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-base font-semibold text-heading block">{topic.title}</span>
                    {openIndex !== index && (
                      <span className="text-sm text-body line-clamp-1">{topic.intro}</span>
                    )}
                  </div>
                  <Icon
                    icon={openIndex === index ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'}
                    className="text-body/70 text-xl shrink-0"
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-sm text-body mb-4 italic">{topic.intro}</p>
                    <div className="text-sm text-body leading-relaxed whitespace-pre-line">
                      {topic.content.split('\n').map((line, i) => {
                        if (line.startsWith('**') && line.endsWith('**')) {
                          const text = line.slice(2, -2);
                          return (
                            <h3 key={i} className="text-base font-semibold text-heading mt-4 mb-2">
                              {text}
                            </h3>
                          );
                        }
                        if (line.startsWith('**') && line.includes('**')) {
                          const match = line.match(/^\*\*(.+?)\*\*(.*)$/);
                          if (match) {
                            return (
                              <p key={i} className="mb-1">
                                <strong className="text-heading">{match[1]}</strong>
                                {match[2]}
                              </p>
                            );
                          }
                        }
                        if (line.startsWith('•')) {
                          return (
                            <div key={i} className="flex items-start gap-2 ml-2 mb-1">
                              <span className="text-accent mt-1 shrink-0">•</span>
                              <span>{line.slice(2)}</span>
                            </div>
                          );
                        }
                        if (line.match(/^\d+\./)) {
                          return (
                            <div key={i} className="flex items-start gap-2 ml-2 mb-1">
                              <span>{line}</span>
                            </div>
                          );
                        }
                        if (line.trim() === '') {
                          return <div key={i} className="h-2" />;
                        }
                        return <p key={i} className="mb-2">{line}</p>;
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
