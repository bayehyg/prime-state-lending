'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import LoanProgramModal from '@/components/LoanProgramModal';

const rateTypes = [
  {
    title: 'Fixed Rate Mortgage',
    icon: 'solar:home-2-linear',
    description:
      'The most common type of loan option, the traditional fixed-rate mortgage includes monthly principal and interest payments which never change during the loan\'s lifetime.',
    modalKey: 'fixed-rate',
  },
  {
    title: 'Adjustable Rate Mortgage (ARM)',
    icon: 'solar:chart-square-linear',
    description:
      'Adjustable-rate mortgages include interest payments which shift during the loan\'s term, depending on current market conditions. Typically, these loans carry a fixed-interest rate for a set initial period, then adjust periodically based on an index.',
    modalKey: 'arm',
  },
  {
    title: 'Interest Only Mortgage',
    icon: 'solar:wallet-linear',
    description:
      'Interest only mortgages are home loans in which borrowers make monthly payments solely toward the interest accruing on the loan, rather than the principle, for a specific period of time.',
    modalKey: 'interest-only',
  },
  {
    title: 'Graduated Payment Mortgage',
    icon: 'solar:graph-up-linear',
    description:
      'Graduated Payment Mortgages are loans in which mortgage payments increase annually for a predetermined period of time (e.g. five or ten years) and then level off for the duration of the loan.',
    modalKey: 'graduated',
  },
];

const loanPrograms = [
  {
    title: 'FHA Home Loans',
    icon: 'solar:shield-keyhole-linear',
    description:
      'FHA home loans are mortgages which are insured by the Federal Housing Administration (FHA), allowing borrowers to get low mortgage rates with a minimal down payment.',
    modalKey: 'fha',
  },
  {
    title: 'VA Loans',
    icon: 'solar:star-fall-linear',
    description:
      'VA loans are mortgages guaranteed by the Department of Veteran Affairs. These loans offer military veterans exceptional benefits, including low interest rates and no down payment requirement.',
    modalKey: 'va',
  },
  {
    title: 'USDA Loans',
    icon: 'solar:leaf-linear',
    description:
      'If you\'re looking to buy a home in a rural or suburban area with no down payment and minimal investment, you might consider the USDA Rural Development Loan.',
    modalKey: 'usda',
  },
  {
    title: 'Jumbo Loans',
    icon: 'solar:chart-square-linear',
    description:
      'A jumbo loan is a mortgage used to finance properties that are too expensive for a conventional conforming loan. The maximum amount for a conforming loan is set by the Federal Housing Finance Agency.',
    featured: true,
    modalKey: 'jumbo',
  },
  {
    title: 'Home Equity Loans',
    icon: 'solar:home-angle-linear',
    description:
      'A home equity loan allows you to borrow against the equity you have built up in your home. These loans can be used for home improvements, debt consolidation, and other major expenses.',
    modalKey: 'home-equity',
  },
  {
    title: 'Reverse Mortgage',
    icon: 'solar:restart-linear',
    description:
      'A reverse mortgage is a loan available to homeowners 62 years or older that allows them to convert part of the equity in their home into cash without having to sell their home or pay additional monthly bills.',
    modalKey: 'reverse',
  },
];

function FixedRateContent() {
  return (
    <>
      <p>The traditional fixed rate mortgage is the most common type of loan program, where monthly principal and interest payments never change during the life of the loan. Fixed rate mortgages span 10 to 30 years and typically allow early payoff without penalties. These loans are amortized to be fully paid by term&apos;s end.</p>
      <p>Monthly payments may fluctuate if an impound account exists. Beyond principal and interest, borrowers putting down less than 20% pay mortgage insurance. Lenders also collect prorated monthly amounts for property taxes and homeowners insurance in impound accounts, adjusting payments if these costs change. Despite this, the overall payments in a fixed rate mortgage are very stable and predictable.</p>
    </>
  );
}

function ARMContent() {
  return (
    <>
      <p>ARMs are loans whose interest rate can vary during the loan&apos;s term. These typically feature a fixed rate initially, then adjust based on market conditions. The introductory rate is lower than fixed mortgages, enabling purchase of pricier homes.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Standard 30-year amortization</li>
        <li>Initial fixed period: 1 month to 10 years</li>
        <li>All ARMs include a &quot;margin&quot; plus an &quot;index&quot;</li>
        <li>Typical margins range from 1.75% to 3.5%</li>
      </ul>
      <h3>Index Options</h3>
      <p>1-Year Treasury Security, LIBOR, Prime, 6-Month Certificate of Deposit, and 11th District Cost of Funds (COFI).</p>
      <h3>Rate Adjustments</h3>
      <p>The margin will be added to the index and typically rounded to the nearest 1/8 of one percent to arrive at the new interest rate. Adjustments occur annually, with caps limiting increases.</p>
      <h4>Example (3/1 ARM)</h4>
      <ul>
        <li>Initial cap: 2%</li>
        <li>Lifetime cap: 6%</li>
        <li>Starting rate: 6.25%</li>
        <li>Year 4 maximum: 8.25%</li>
        <li>Lifetime maximum: 12.25%</li>
      </ul>
    </>
  );
}

function InterestOnlyContent() {
  return (
    <>
      <p>A mortgage is called &quot;Interest Only&quot; when its monthly payment does not include the repayment of principal for a certain period of time. Interest Only loans are offered on fixed rate or adjustable rate mortgages as well as on option ARMs. At the end of the interest only period, the loan becomes fully amortized, thus resulting in greatly increased monthly payments. The new payment will be larger than it would have been if it had been fully amortizing from the beginning. The longer the interest only period, the larger the new payment will be when the interest only period ends.</p>
      <p>You won&apos;t build equity during the interest-only term, but it could help you close on the home you want instead of settling for the home you can afford.</p>
      <p>Since you&apos;ll be qualified based on the interest-only payment and will likely refinance before the interest-only term expires anyway, it could be a way to effectively lease your dream home now and invest the principal portion of your payment elsewhere while realizing the tax advantages and appreciation that accompany homeownership.</p>
      <p>As an example, if you borrow $250,000 at 6 percent, using a 30-year fixed-rate mortgage, your monthly payment would be $1,499. On the other hand, if you borrowed $250,000 at 6 percent, using a 30-year mortgage with a 5-year interest only payment plan, your monthly payment initially would be $1,250. This saves you $249 per month or $2,987 a year. However, when you reach year six, your monthly payments will jump to $1,611, or $361 more per month. Hopefully, your income will have jumped accordingly to support the higher payments or you have refinanced your loan by that time.</p>
      <p>Mortgages with interest only payment options may save you money in the short-run, but they actually cost more over the 30-year term of the loan. However, most borrowers repay their mortgages well before the end of the full 30-year loan term.</p>
      <p>Borrowers with sporadic incomes can benefit from interest-only mortgages. This is particularly the case if the mortgage is one that permits the borrower to pay more than interest-only. In this case, the borrower can pay interest-only during lean times and use bonuses or income spurts to pay down the principal.</p>
    </>
  );
}

function GraduatedContent() {
  return (
    <>
      <p>A graduated payment mortgage is a loan where the payment increases each year for a predetermined amount of time (such as 5 or 10 years), then becomes fixed for the remaining duration of the loan.</p>
      <p>When interest rates are high, borrowers can use a graduated payment mortgage to increase their chances of qualifying for the loan because the initial payment is less. The downside of opting for a smaller initial payment is that the interest owed increases and the payment shortfall from the initial years of the loan is then added on to the loan, potentially leading to a situation called &quot;negative amortization.&quot; Negative amortization occurs when the loan payment for any period is less than the interest charged over that period, resulting in an increase in the outstanding balance of the loan.</p>
    </>
  );
}

function FHAContent() {
  return (
    <>
      <p>FHA home loans are mortgage loans that are insured against default by the Federal Housing Administration (FHA). These are available for single and multifamily homes. The FHA doesn&apos;t issue loans or set interest rates, it just guarantees against default.</p>
      <p>FHA loans allow individuals who may not qualify for a conventional mortgage obtain a loan, especially first time home buyers with low down payments, reasonable credit expectations, and flexible income requirements.</p>

      <h3>What is an FHA Loan?</h3>
      <p>Established in 1934 to improve housing standards and provide mortgage insurance. FHA does not make home loans, it insures a loan; should a homebuyer default, the lender is paid from the insurance fund.</p>
      <h4>Key Benefits</h4>
      <ul>
        <li>Buy with as little as 3.5% down</li>
        <li>Ideal for first-time homebuyers unable to make larger down payments</li>
        <li>Right solution for those who may not qualify for conventional loans</li>
        <li>Down payment assistance programs available</li>
      </ul>

      <h3>Documents Needed for FHA Loans</h3>
      <h4>Employment</h4>
      <ul>
        <li>Complete Income Tax Returns for past 2 years</li>
        <li>W-2 &amp; 1099 Statements for past 2 years</li>
        <li>Pay-Check Stubs for past 2 months</li>
        <li>Self-Employed Income Tax Returns and YTD Profit &amp; Loss Statements for past 3 years</li>
      </ul>
      <h4>Savings</h4>
      <ul>
        <li>Complete bank statements for all accounts for past 3 months</li>
        <li>Recent account statements for retirement, 401k, Mutual Funds, Money Market, Stocks, etc.</li>
      </ul>
      <h4>Credit</h4>
      <ul>
        <li>Recent bills &amp; statements indicating account numbers and minimum payments</li>
        <li>Landlord&apos;s name, address, telephone number, or 12 months cancelled rent checks</li>
        <li>Recent utility bills to supplement thin credit</li>
        <li>Bankruptcy &amp; Discharge Papers if applicable</li>
        <li>12 months cancelled checks written by someone you co-signed for</li>
      </ul>
      <h4>Personal</h4>
      <ul>
        <li>Driver&apos;s License</li>
        <li>Social Security Card</li>
        <li>Any Divorce, Palimony or Alimony or Child Support papers</li>
        <li>Green Card or Work Permit if applicable</li>
        <li>Any homeownership papers</li>
      </ul>
      <h4>Refinancing or Own Rental Property</h4>
      <ul>
        <li>Note &amp; Deed from any Current Loan</li>
        <li>Property Tax Bill</li>
        <li>Hazard Homeowners Insurance Policy</li>
        <li>A Payment Coupon for Current Mortgage</li>
        <li>Rental Agreements for a Multi-Unit Property</li>
      </ul>

      <h3>FHA Versus Conventional Loans</h3>
      <p>The main difference between a FHA Loan and a Conventional Home Loan is that a FHA loan requires a lower down payment, and the credit qualifying criteria for a borrower is not as strict.</p>
      <p>This allows those without a credit history, or with minor credit problems to buy a home. FHA requires a reasonable explanation of any derogatory items, but will use common sense credit underwriting.</p>
      <p>Some borrowers, with extenuating circumstances surrounding bankruptcy discharged 3 years ago, can work around past credit problems. Conventional financing relies heavily on credit scoring from bureaus like Experian, Trans-Union, or Equifax.</p>

      <h3>What Can I Afford?</h3>
      <p>Your monthly costs should not exceed 29% of your gross monthly income for a FHA Loan.</p>
      <h4>PITI Components</h4>
      <ul>
        <li>P = Principal</li>
        <li>I = Interest</li>
        <li>T = Taxes</li>
        <li>I = Insurance</li>
      </ul>
      <p>Example: Monthly Income x .29 = Maximum PITI. $3,000 x .29 = $870 Maximum PITI.</p>
      <p>Your total monthly costs, or debt to income (DTI) adding PITI and long-term debt like car loans or credit cards, should not exceed 41% of your gross monthly income.</p>
      <p>Example: Monthly Income x .41 = Maximum Total Monthly Costs. $3,000 x .41 = $1,230. $1,230 total - $870 PITI = $360 Allowed for Monthly Long Term Debt.</p>
      <p>FHA Loan ratios are more lenient than a typical conventional loan.</p>

      <h3>Bankruptcy and FHA Loans</h3>
      <p>Yes, generally a bankruptcy won&apos;t preclude a borrower from obtaining a FHA Loan. Requirements include:</p>
      <ul>
        <li>Re-establish credit with minimum of two credit accounts (car loan or credit card)</li>
        <li>Wait two years since discharge of Chapter 7 bankruptcy</li>
        <li>Minimum one year of repayment for Chapter 13 (must seek court permission)</li>
        <li>No credit issues like late payments, collections, or charge-offs since bankruptcy</li>
        <li>Special exceptions possible for extenuating circumstances</li>
      </ul>
    </>
  );
}

function VAContent() {
  return (
    <>
      <p>The VA Loan provides veterans with federally guaranteed home financing requiring no down payment. The Veterans Administration provides insurance to lenders in case of loan default.</p>

      <h3>What is a VA Loan?</h3>
      <p>Originated in 1944 via the Servicemen&apos;s Readjustment Act (GI Bill), signed by President Franklin D. Roosevelt. Private lenders offer these loans to eligible veterans; the lender receives protection against loss if default occurs.</p>

      <h3>Eligibility Requirements</h3>
      <h4>Wartime/Conflict Veterans</h4>
      <ul>
        <li>Served at least 90 days (no dishonorable discharge)</li>
        <li>Periods: WWII (Sept 16, 1940–July 25, 1947), Korean Conflict (June 27, 1950–Jan 31, 1955), Vietnam Era (Aug 5, 1964–May 7, 1975), Persian Gulf War, Afghanistan &amp; Iraq</li>
      </ul>
      <h4>Peacetime Service</h4>
      <ul>
        <li>181 continuous active duty days minimum</li>
        <li>Periods: July 26, 1947–June 26, 1950; Feb 1, 1955–Aug 4, 1964; May 8, 1975–Sept 7, 1980 (enlisted) or Oct 16, 1981 (officers)</li>
        <li>Post-1980/1981: 24-month continuous duty requirement with honorable discharge</li>
      </ul>
      <h4>Reserves and National Guard</h4>
      <ul>
        <li>Allied forces WWII service</li>
        <li>Surviving spouses of eligible veterans (unmarried)</li>
        <li>Spouses of POW/MIA members (90+ days)</li>
      </ul>

      <h3>Eligible Property Types</h3>
      <ul>
        <li>Existing single-family homes</li>
        <li>Townhouses/condominiums (VA-approved)</li>
        <li>New construction</li>
        <li>Manufactured homes/lots</li>
        <li>Home refinances and certain improvements</li>
      </ul>

      <h3>Benefits</h3>
      <ul>
        <li>100% financing with no down payment</li>
        <li>No private mortgage insurance (PMI)</li>
        <li>No prepayment penalties</li>
        <li>Competitive interest rates</li>
        <li>Easier qualification than conventional loans</li>
        <li>Sellers may cover closing costs</li>
        <li>Combinable with down payment assistance</li>
      </ul>

      <h3>Application Process</h3>
      <p>Required at application:</p>
      <ul>
        <li>Certificate of Eligibility (VA Form 26-1880)</li>
        <li>Military service proof from VA Eligibility Center</li>
      </ul>

      <h3>Multiple VA Loans</h3>
      <p>Eligibility is reusable if prior loan is paid and property disposed. One-time restoration available if paid-off but property retained. The Veteran must send the Veterans Administration a completed VA Form 26-1880.</p>

      <h3>Disadvantages</h3>
      <ul>
        <li>Pre-March 1, 1988 loans assumable without buyer qualification; veteran may face liability if buyer defaults</li>
        <li>Longer processing than conventional loans discourages some sellers</li>
        <li>Sellers less likely to negotiate price when covering closing costs</li>
      </ul>
    </>
  );
}

function USDAContent() {
  return (
    <>
      <p>USDA loans are low-interest mortgages with zero down payments designed for low-income Americans who don&apos;t have good enough credit to qualify for traditional mortgages.</p>
      <p>You must use a USDA loan to buy a home in a designated area that covers several rural and suburban locations.</p>
    </>
  );
}

function JumboContent() {
  return (
    <>
      <p>A jumbo loan is a mortgage used to finance properties that are too expensive for a conventional conforming loan. The maximum amount for a conforming loan is $548,250 in most counties, as determined by the Federal Housing Finance Agency (FHFA). Homes that exceed the local conforming loan limit require a jumbo loan.</p>
      <p>Also called non-conforming conventional mortgages, jumbo loans are considered riskier for lenders because these loans can&apos;t be guaranteed by Fannie and Freddie, meaning the lender is not protected from losses if a borrower defaults. Jumbo loans are typically available with either a fixed interest rate or an adjustable rate, and they come with a variety of terms.</p>
    </>
  );
}

function HomeEquityContent() {
  return (
    <>
      <p>A home equity loan allows you to borrow against the equity you have built up in your home. These loans can be used for home improvements, debt consolidation, and other major expenses.</p>
      <p className="text-body/70 italic">Contact us to learn more about our home equity loan options.</p>
    </>
  );
}

function ReverseMortgageContent() {
  return (
    <>
      <p>A reverse mortgage is a loan available to homeowners 62 years or older that allows them to convert part of the equity in their home into cash without having to sell their home or pay additional monthly bills.</p>
      <p className="text-body/70 italic">Contact us to learn more about our reverse mortgage options.</p>
    </>
  );
}

const modalContentMap: Record<string, { title: string; content: React.ReactNode }> = {
  'fixed-rate': { title: 'Fixed Rate Mortgages', content: <FixedRateContent /> },
  'arm': { title: 'Adjustable Rate Mortgages (ARM)', content: <ARMContent /> },
  'interest-only': { title: 'Interest Only Mortgages', content: <InterestOnlyContent /> },
  'graduated': { title: 'Graduated Payment Mortgages', content: <GraduatedContent /> },
  'fha': { title: 'FHA Home Loans', content: <FHAContent /> },
  'va': { title: 'VA Home Loans', content: <VAContent /> },
  'usda': { title: 'USDA Loans', content: <USDAContent /> },
  'jumbo': { title: 'Jumbo Loans', content: <JumboContent /> },
  'home-equity': { title: 'Home Equity Loans', content: <HomeEquityContent /> },
  'reverse': { title: 'Reverse Mortgage', content: <ReverseMortgageContent /> },
};

export default function LoanProgramsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (key: string) => setActiveModal(key);
  const closeModal = () => setActiveModal(null);

  const modalData = activeModal ? modalContentMap[activeModal] : null;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-heading mb-4">
              Which Mortgage is Right for You?
            </h1>
            <p className="text-lg text-body max-w-2xl mx-auto">
              Explore our mortgage rate options and loan programs to find the best fit for your needs.
            </p>
          </div>

          {/* Rate-Based Mortgage Types */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight text-heading mb-8 text-center">
              Mortgage Rate Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {rateTypes.map((item) => (
                <div key={item.title} className="bg-white border border-edge rounded-2xl p-8">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                    <Icon icon={item.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight text-heading mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed mb-6">{item.description}</p>
                  <button
                    onClick={() => openModal(item.modalKey)}
                    className="text-sm font-medium text-accent flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                  >
                    Learn More <Icon icon="solar:arrow-right-linear" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Programs */}
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-heading mb-8 text-center">
              Loan Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {loanPrograms.map((item) =>
                item.featured ? (
                  <div key={item.title} className="bg-nav rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-footer rounded-full blur-2xl opacity-50"></div>
                    <div className="w-12 h-12 bg-footer text-white rounded-xl flex items-center justify-center mb-6 relative z-10">
                      <Icon icon={item.icon} className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-3 relative z-10">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6 relative z-10">{item.description}</p>
                    <button
                      onClick={() => openModal(item.modalKey)}
                      className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all relative z-10 cursor-pointer"
                    >
                      Inquire Now <Icon icon="solar:arrow-right-linear" />
                    </button>
                  </div>
                ) : (
                  <div key={item.title} className="bg-white border border-edge rounded-2xl p-8">
                    <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                      <Icon icon={item.icon} className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-heading mb-3">{item.title}</h3>
                    <p className="text-sm text-body leading-relaxed mb-6">{item.description}</p>
                    <button
                      onClick={() => openModal(item.modalKey)}
                      className="text-sm font-medium text-accent flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                    >
                      Get Started <Icon icon="solar:arrow-right-linear" />
                    </button>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <LoanProgramModal
        isOpen={!!modalData}
        onClose={closeModal}
        title={modalData?.title ?? ''}
        content={modalData?.content}
      />
    </>
  );
}
