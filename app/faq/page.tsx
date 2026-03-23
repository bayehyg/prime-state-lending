'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const faqs = [
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
    question: 'What is PMI and when is it required?',
    answer: 'Private Mortgage Insurance (PMI) is required on conventional loans when your down payment is less than 20%. It typically costs 0.5-1% of the loan amount annually and can be removed once you reach 20% equity.',
  },
  {
    question: 'Can I get pre-approved before house hunting?',
    answer: 'Absolutely! Getting pre-approved is one of the smartest steps you can take. It shows sellers you\'re a serious buyer and helps you understand your budget. Our pre-approval process takes just minutes online.',
  },
  {
    question: 'What documents do I need to apply?',
    answer: 'You\'ll need proof of income (pay stubs, W-2s, tax returns), bank statements, photo ID, and information about your debts. Our digital platform makes uploading documents simple and secure.',
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'Never. We believe in complete transparency. All fees are disclosed upfront in your Loan Estimate, and we\'ll walk you through every line item so there are no surprises at closing.',
  },
  {
    question: 'Do you offer refinancing?',
    answer: 'Yes! We offer rate-and-term refinancing, cash-out refinancing, and streamline refinances for FHA and VA loans. Use our refinance calculator to see your potential savings.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-500">
              Everything you need to know about mortgages with Prime State Lending.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="text-base font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <Icon
                    icon={openIndex === index ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                    className="text-slate-400 text-xl shrink-0"
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Still have questions?</h2>
            <p className="text-slate-400 mb-6">Our team is here to help you navigate the mortgage process.</p>
            <Link href="/contact" className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
