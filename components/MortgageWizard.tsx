'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  useMortgageStore,
  type Intent,
  type CreditScore,
  type Timeline,
  type Income,
  type DebtAmount,
} from '@/store/mortgageStore'
import { getTaxRateByZip } from '@/lib/wa-tax-rates'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function fmtCompact(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${Math.round(n / 1_000)}k`
  return fmt(n)
}

const RATE_MAP: Record<CreditScore, number> = {
  '720+': 0.068,
  '680-719': 0.072,
  '640-679': 0.078,
  'below-640': 0.085,
  'not-sure': 0.075,
  '': 0.075,
}

const RATE_RANGE_MAP: Record<CreditScore, string> = {
  '720+': '6.5% – 7.0%',
  '680-719': '7.0% – 7.5%',
  '640-679': '7.5% – 8.0%',
  'below-640': '8.3% – 8.8%',
  'not-sure': '7.0% – 7.8%',
  '': '7.0% – 7.8%',
}

function calcMonthlyPayment(loanAmount: number, creditScore: CreditScore): number {
  const r = (RATE_MAP[creditScore] || 0.075) / 12
  const n = 360
  return (loanAmount * r) / (1 - Math.pow(1 + r, -n))
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length < 4) return digits
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

// ─── Animation variants ───────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
}

const transition = { duration: 0.25, ease: 'easeInOut' as const }

// ─── Shared UI primitives ─────────────────────────────────────────────────────

function OptionCard({
  selected,
  onClick,
  children,
  className = '',
}: {
  selected: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full min-h-14 px-5 py-4 rounded-xl border text-left transition-all duration-150 cursor-pointer',
        selected
          ? 'border-accent bg-accent/10 ring-2 ring-accent'
          : 'border-edge bg-white hover:border-accent/40 hover:bg-surface',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function QuestionHeader({ question, helper }: { question: string; helper?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-heading mb-2">{question}</h2>
      {helper && <p className="text-sm text-body">{helper}</p>}
    </div>
  )
}

function NextBtn({ onClick, disabled = false }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="mt-6 w-full h-12 bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
    >
      Next →
    </button>
  )
}

// ─── Step 1 — Intent ──────────────────────────────────────────────────────────

function Step1({ onAutoAdvance }: { onAutoAdvance: () => void }) {
  const { intent, setField } = useMortgageStore()

  const options: { value: Intent; label: string }[] = [
    { value: 'buy', label: 'Buy a Home' },
    { value: 'lower-payment', label: 'Lower My Payment' },
    { value: 'equity', label: "Use My Home's Equity" },
    { value: 'not-sure', label: 'Not Sure' },
  ]

  function handleSelect(value: Intent) {
    setField('intent', value)
    setTimeout(onAutoAdvance, 180)
  }

  return (
    <div>
      <QuestionHeader question="What are you trying to do?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(({ value, label }) => (
          <OptionCard key={value} selected={intent === value} onClick={() => handleSelect(value)}>
            <span className="text-sm font-medium text-heading">{label}</span>
          </OptionCard>
        ))}
      </div>
    </div>
  )
}

// ─── Step 2 — Home Price ──────────────────────────────────────────────────────

function Step2({ onNext }: { onNext: () => void }) {
  const { homePrice, zipCode, setField } = useMortgageStore()
  const quickPicks = [250_000, 350_000, 500_000, 750_000, 1_000_000]

  function handleZipChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5)
    setField('zipCode', val)
  }

  return (
    <div>
      <QuestionHeader
        question="What's your estimated home price?"
        helper="This doesn't have to be exact"
      />

      <div className="text-center mb-6">
        <span className="text-4xl font-bold tracking-tight text-heading">{fmt(homePrice)}</span>
      </div>

      <input
        type="range"
        min={50_000}
        max={1_500_000}
        step={5_000}
        value={homePrice}
        onChange={(e) => setField('homePrice', Number(e.target.value))}
        className="w-full accent-accent cursor-pointer"
      />

      <div className="flex justify-between text-xs text-body/70 mt-1 mb-6">
        <span>$50k</span>
        <span>$1.5M</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-2">
        {quickPicks.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setField('homePrice', p)}
            className={[
              'flex-1 min-w-0 h-9 rounded-lg text-sm font-medium border transition-all',
              homePrice === p
                ? 'border-accent bg-accent/10 text-accent-hover ring-2 ring-accent'
                : 'border-edge text-body hover:border-accent/40',
            ].join(' ')}
          >
            {fmtCompact(p)}
          </button>
        ))}
      </div>

      {/* Zip code field */}
      <div className="mt-4 mb-2">
        <label className="block text-sm font-medium text-body mb-1.5">Property zip code (optional)</label>
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          value={zipCode}
          onChange={handleZipChange}
          placeholder="e.g. 98043"
          className="w-full h-11 border border-edge rounded-lg px-4 text-heading text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-accent placeholder:text-body/40"
        />
        <p className="mt-1 text-xs text-body/60">Helps us estimate your property tax</p>
      </div>

      <NextBtn onClick={onNext} />
    </div>
  )
}

// ─── Step 3 — Down Payment ────────────────────────────────────────────────────

function Step3({ onAutoAdvance }: { onAutoAdvance: () => void }) {
  const { homePrice, downPaymentPercent, setField } = useMortgageStore()
  const [custom, setCustom] = useState(false)
  const [customVal, setCustomVal] = useState('')

  const presets = [3, 5, 10, 20]
  const dollarAmount = Math.round((homePrice * downPaymentPercent) / 100)

  function handlePreset(pct: number) {
    setCustom(false)
    setField('downPaymentPercent', pct)
    setTimeout(onAutoAdvance, 180)
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^0-9.]/g, '')
    setCustomVal(raw)
    const n = parseFloat(raw)
    if (!isNaN(n) && n >= 0 && n <= 100) setField('downPaymentPercent', n)
  }

  return (
    <div>
      <QuestionHeader
        question="How much are you planning to put down?"
        helper="This affects your monthly payment estimate"
      />

      <div className="grid grid-cols-5 gap-2 mb-4">
        {presets.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => handlePreset(p)}
            className={[
              'h-12 rounded-lg text-sm font-medium border transition-all',
              downPaymentPercent === p && !custom
                ? 'border-accent bg-accent/10 text-accent-hover ring-2 ring-accent'
                : 'border-edge text-body hover:border-accent/40',
            ].join(' ')}
          >
            {p}%
          </button>
        ))}
        <button
          type="button"
          onClick={() => setCustom(true)}
          className={[
            'h-12 rounded-lg text-sm font-medium border transition-all',
            custom
              ? 'border-accent bg-accent/10 text-accent-hover ring-2 ring-accent'
              : 'border-edge text-body hover:border-accent/40',
          ].join(' ')}
        >
          Custom
        </button>
      </div>

      {custom && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <div className="relative">
            <input
              type="text"
              value={customVal}
              onChange={handleCustomChange}
              placeholder="Enter %"
              autoFocus
              className="w-full h-12 border border-edge rounded-lg px-4 pr-10 text-heading focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-body/70 text-sm">%</span>
          </div>
        </motion.div>
      )}

      <div className="bg-surface rounded-lg px-4 py-3 text-sm text-body mb-4">
        Down payment amount: <span className="font-semibold text-heading">{fmt(dollarAmount)}</span>
      </div>

      {custom && <NextBtn onClick={onAutoAdvance} />}
    </div>
  )
}

// ─── Step 4 — Credit Score ────────────────────────────────────────────────────

function Step4({ onAutoAdvance }: { onAutoAdvance: () => void }) {
  const { creditScore, setField } = useMortgageStore()

  const options: { value: CreditScore; label: string; sub: string }[] = [
    { value: '720+', label: '720+', sub: 'Excellent' },
    { value: '680-719', label: '680–719', sub: 'Good' },
    { value: '640-679', label: '640–679', sub: 'Fair' },
    { value: 'below-640', label: 'Below 640', sub: 'Needs work' },
    { value: 'not-sure', label: 'Not Sure', sub: "I'll check later" },
  ]

  function handleSelect(value: CreditScore) {
    setField('creditScore', value)
    setTimeout(onAutoAdvance, 180)
  }

  return (
    <div>
      <QuestionHeader question="What's your estimated credit score?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(({ value, label, sub }) => (
          <OptionCard key={value} selected={creditScore === value} onClick={() => handleSelect(value)}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-heading">{label}</span>
              <span className="text-xs text-body">{sub}</span>
            </div>
          </OptionCard>
        ))}
      </div>
    </div>
  )
}

// ─── Step 5 — Timeline ────────────────────────────────────────────────────────

function Step5({ onAutoAdvance }: { onAutoAdvance: () => void }) {
  const { timeline, setField } = useMortgageStore()
  const [showExploringMsg, setShowExploringMsg] = useState(false)

  const options: { value: Timeline; label: string; sub: string }[] = [
    { value: 'asap', label: 'ASAP', sub: 'Ready to move quickly' },
    { value: '1-3mo', label: '1–3 Months', sub: 'Getting close' },
    { value: '3-6mo', label: '3–6 Months', sub: 'Still planning' },
    { value: 'exploring', label: 'Just Exploring', sub: 'Not in a rush' },
  ]

  function handleSelect(value: Timeline) {
    setField('timeline', value)
    if (value === 'exploring') {
      setShowExploringMsg(true)
      setTimeout(onAutoAdvance, 2200)
    } else {
      setTimeout(onAutoAdvance, 180)
    }
  }

  return (
    <div>
      <QuestionHeader question="When are you planning to buy?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(({ value, label, sub }) => (
          <OptionCard key={value} selected={timeline === value} onClick={() => handleSelect(value)}>
            <div>
              <p className="text-sm font-semibold text-heading">{label}</p>
              <p className="text-xs text-body mt-0.5">{sub}</p>
            </div>
          </OptionCard>
        ))}
      </div>

      <AnimatePresence>
        {showExploringMsg && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 bg-accent/10 border border-accent/30 rounded-xl px-5 py-4"
          >
            <p className="text-sm text-accent-hover font-medium">No pressure at all.</p>
            <p className="text-sm text-accent mt-1">
              We'll still show you an estimate so you know what to expect when the time is right.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Step 6 — Results ─────────────────────────────────────────────────────────

function Step6({ onNext }: { onNext: () => void }) {
  const { homePrice, downPaymentPercent, creditScore, zipCode } = useMortgageStore()
  const [displayPayment, setDisplayPayment] = useState(0)

  const downDollars = Math.round((homePrice * downPaymentPercent) / 100)
  const loanAmount = homePrice - downDollars
  const monthlyPI = Math.round(calcMonthlyPayment(loanAmount, creditScore))
  const rateRange = RATE_RANGE_MAP[creditScore] || '7.0% – 7.8%'

  // Property tax from zip lookup
  const zipValid = /^\d{5}$/.test(zipCode)
  const taxLookup = zipValid ? getTaxRateByZip(zipCode) : { rate: 0.0076, county: null, isEstimate: true }
  const monthlyTax = Math.round((homePrice * taxLookup.rate) / 12)

  // Insurance estimate (~0.6% annually)
  const monthlyInsurance = Math.round((homePrice * 0.006) / 12)

  // PMI if down payment < 20%
  const monthlyPMI = downPaymentPercent < 20 ? Math.round((loanAmount * 0.008) / 12) : 0

  const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyPMI

  useEffect(() => {
    setDisplayPayment(0)
    const start = Date.now()
    const duration = 1400
    const end = totalMonthly

    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayPayment(Math.round(end * eased))
      if (progress >= 1) clearInterval(id)
    }, 16)

    return () => clearInterval(id)
  }, [totalMonthly])

  const rows = [
    { label: 'Estimated Home Price', value: fmt(homePrice) },
    { label: 'Estimated Down Payment', value: fmt(downDollars) },
    { label: 'Loan Amount', value: fmt(loanAmount) },
    { label: 'Estimated Rate Range', value: rateRange },
    { label: 'Principal & Interest', value: fmt(monthlyPI) + '/mo' },
    { label: `Est. Property Tax${!taxLookup.isEstimate && taxLookup.county ? ` (${taxLookup.county} Co.)` : ''}`, value: fmt(monthlyTax) + '/mo' },
    { label: 'Est. Home Insurance', value: fmt(monthlyInsurance) + '/mo' },
    ...(monthlyPMI > 0 ? [{ label: 'Est. PMI', value: fmt(monthlyPMI) + '/mo' }] : []),
  ]

  return (
    <div>
      <div className="text-center mb-6">
        <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">Your Estimate</p>
        <p className="text-5xl font-bold tracking-tight text-heading">
          {fmt(displayPayment)}
          <span className="text-xl font-normal text-body/70">/mo</span>
        </p>
        <p className="text-sm text-body mt-2">Estimated total monthly payment</p>
      </div>

      <div className="bg-white border border-edge rounded-2xl divide-y divide-edge/50 mb-5">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between px-5 py-3.5">
            <span className="text-sm text-body">{label}</span>
            <span className="text-sm font-semibold text-heading">{value}</span>
          </div>
        ))}
      </div>

      <p className="text-xs text-body/70 text-center mb-6 leading-relaxed">
        {!taxLookup.isEstimate && taxLookup.county
          ? `Property tax based on ${taxLookup.county} County average (${(taxLookup.rate * 100).toFixed(2)}%). `
          : 'Property tax based on WA state average (0.76%). '}
        Estimates are illustrative only and not a commitment to lend.
      </p>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onNext}
          className="w-full h-12 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-colors"
        >
          Get My Exact Rate →
        </button>
        <a
          href="tel:+14255825615"
          className="w-full h-12 flex items-center justify-center border border-edge hover:border-edge text-body font-medium rounded-lg transition-colors text-sm"
        >
          Talk to a Loan Officer
        </a>
      </div>
    </div>
  )
}

// ─── Step 7 — Financial Info ──────────────────────────────────────────────────

function Step7({ onNext }: { onNext: () => void }) {
  const { income, hasDebts, debtAmount, setField } = useMortgageStore()

  const incomeOptions: { value: Income; label: string }[] = [
    { value: 'under-50k', label: 'Under $50k' },
    { value: '50-100k', label: '$50k–$100k' },
    { value: '100-200k', label: '$100k–$200k' },
    { value: '200k+', label: '$200k+' },
  ]

  const debtSubOptions: { value: DebtAmount; label: string }[] = [
    { value: 'under-500', label: 'Under $500/mo' },
    { value: '500-1500', label: '$500–$1,500/mo' },
    { value: '1500+', label: '$1,500+/mo' },
  ]

  return (
    <div>
      <QuestionHeader question="About how much do you make per year?" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {incomeOptions.map(({ value, label }) => (
          <OptionCard
            key={value}
            selected={income === value}
            onClick={() => setField('income', value)}
          >
            <span className="text-sm font-medium text-heading">{label}</span>
          </OptionCard>
        ))}
      </div>

      <AnimatePresence>
        {income !== '' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 pt-2 border-t border-edge/50">
              <h3 className="text-lg font-semibold text-heading mb-1">Any significant monthly debts?</h3>
              <p className="text-sm text-body mb-5">Car payments, student loans, etc.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <OptionCard
                  selected={hasDebts === false}
                  onClick={() => { setField('hasDebts', false); setField('debtAmount', '') }}
                >
                  <span className="text-sm font-medium text-heading">No, not really</span>
                </OptionCard>
                <OptionCard
                  selected={hasDebts === true}
                  onClick={() => setField('hasDebts', true)}
                >
                  <span className="text-sm font-medium text-heading">Yes, some</span>
                </OptionCard>
              </div>

              <AnimatePresence>
                {hasDebts === true && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 gap-2 mb-4"
                  >
                    {debtSubOptions.map(({ value, label }) => (
                      <OptionCard
                        key={value}
                        selected={debtAmount === value}
                        onClick={() => setField('debtAmount', value)}
                      >
                        <span className="text-sm font-medium text-heading">{label}</span>
                      </OptionCard>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {(hasDebts === false || (hasDebts === true && debtAmount !== '')) && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <NextBtn onClick={onNext} />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Step 8 — Contact Info ────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(14, 'Please enter a valid phone number'),
})
type ContactForm = z.infer<typeof contactSchema>

function Step8() {
  const { setField } = useMortgageStore()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) })

  const phoneVal = watch('phone', '')

  const [submitError, setSubmitError] = useState('')

  async function onSubmit(data: ContactForm) {
    setSubmitting(true)
    setSubmitError('')
    setField('name', data.name)
    setField('email', data.email)
    setField('phone', data.phone)

    // Collect full state for the API call
    const store = useMortgageStore.getState()
    const formData = {
      intent: store.intent,
      homePrice: store.homePrice,
      downPaymentPercent: store.downPaymentPercent,
      zipCode: store.zipCode,
      creditScore: store.creditScore,
      timeline: store.timeline,
      income: store.income,
      hasDebts: store.hasDebts,
      debtAmount: store.debtAmount,
      name: data.name,
      email: data.email,
      phone: data.phone,
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@primestatelending.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Mortgage Pre-Qualification Lead',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          intent: formData.intent,
          homePrice: formData.homePrice,
          downPaymentPercent: formData.downPaymentPercent,
          zipCode: formData.zipCode,
          creditScore: formData.creditScore,
          timeline: formData.timeline,
          income: formData.income,
          hasDebts: formData.hasDebts,
          debtAmount: formData.debtAmount,
          source: 'Mortgage Wizard — primestatelending.com'
        })
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        setSubmitError('Something went wrong. Please call us at (425) 582-5615.')
        setSubmitting(false)
      }
    } catch {
      setSubmitError('Something went wrong. Please call us at (425) 582-5615.')
      setSubmitting(false)
    }
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value)
    setValue('phone', formatted, { shouldValidate: true })
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-heading mb-2">
          See your loan options
        </h2>
        <p className="text-sm text-body">
          A Prime State loan officer will reach out within 1 business day — no pressure.
        </p>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
        {['🔒 No credit pull', 'No SSN required', 'Local WA lender'].map((badge) => (
          <span key={badge} className="text-xs font-medium text-body bg-surface rounded-full px-3 py-1">
            {badge}
          </span>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-body mb-1.5">Full Name</label>
          <input
            {...register('name')}
            placeholder="Jane Smith"
            className={[
              'w-full h-12 border rounded-lg px-4 text-heading placeholder-body/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors',
              errors.name ? 'border-red-400 bg-red-50' : 'border-edge',
            ].join(' ')}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-body mb-1.5">Email Address</label>
          <input
            {...register('email')}
            type="email"
            placeholder="jane@example.com"
            className={[
              'w-full h-12 border rounded-lg px-4 text-heading placeholder-body/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors',
              errors.email ? 'border-red-400 bg-red-50' : 'border-edge',
            ].join(' ')}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-body mb-1.5">Phone Number</label>
          <input
            value={phoneVal}
            onChange={handlePhoneChange}
            placeholder="(206) 555-0100"
            type="tel"
            className={[
              'w-full h-12 border rounded-lg px-4 text-heading placeholder-body/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors',
              errors.phone ? 'border-red-400 bg-red-50' : 'border-edge',
            ].join(' ')}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full h-12 bg-accent hover:bg-accent-hover disabled:opacity-70 text-white font-medium rounded-lg transition-colors mt-2 flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Getting your options…
            </>
          ) : (
            'See My Loan Options →'
          )}
        </button>
        {submitError && (
          <p className="mt-3 text-sm text-red-600 text-center">{submitError}</p>
        )}
      </form>
    </div>
  )
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = ((current - 1) / (total - 1)) * 100

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-body">
          Step {current} of {total}
        </span>
        <span className="text-xs font-medium text-accent">{Math.round(pct)}% complete</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-accent rounded-full"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

// ─── Main Wizard ──────────────────────────────────────────────────────────────

export default function MortgageWizard() {
  const { currentStep, direction, nextStep, prevStep } = useMortgageStore()
  const TOTAL = 8

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(tag)) return

      if (e.key === 'Enter') {
        // Only advance on steps with explicit Next buttons
        if ([2, 7, 8].includes(currentStep)) return
      }
      if (e.key === 'Backspace' || e.key === 'Escape') {
        if (currentStep > 1) prevStep()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [currentStep, prevStep])

  const stepContent: Record<number, React.ReactNode> = {
    1: <Step1 onAutoAdvance={nextStep} />,
    2: <Step2 onNext={nextStep} />,
    3: <Step3 onAutoAdvance={nextStep} />,
    4: <Step4 onAutoAdvance={nextStep} />,
    5: <Step5 onAutoAdvance={nextStep} />,
    6: <Step6 onNext={nextStep} />,
    7: <Step7 onNext={nextStep} />,
    8: <Step8 />,
  }

  return (
    <div className="bg-white border border-edge rounded-2xl p-8 shadow-sm">
      <ProgressBar current={currentStep} total={TOTAL} />

      {currentStep > 1 && (
        <button
          type="button"
          onClick={prevStep}
          className="mb-5 -ml-1 flex items-center gap-1 text-sm text-body/70 hover:text-body transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
      )}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
        >
          {stepContent[currentStep]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
