import { create } from 'zustand'

export type Intent = '' | 'buy' | 'lower-payment' | 'equity' | 'not-sure'
export type CreditScore = '' | '720+' | '680-719' | '640-679' | 'below-640' | 'not-sure'
export type Timeline = '' | 'asap' | '1-3mo' | '3-6mo' | 'exploring'
export type Income = '' | 'under-50k' | '50-100k' | '100-200k' | '200k+'
export type DebtAmount = '' | 'under-500' | '500-1500' | '1500+'

export interface MortgageState {
  intent: Intent
  homePrice: number
  downPaymentPercent: number
  creditScore: CreditScore
  timeline: Timeline
  income: Income
  hasDebts: boolean | null
  debtAmount: DebtAmount
  zipCode: string
  name: string
  email: string
  phone: string
  currentStep: number
}

interface MortgageStore extends MortgageState {
  direction: 1 | -1
  setField: <K extends keyof MortgageState>(key: K, value: MortgageState[K]) => void
  nextStep: () => void
  prevStep: () => void
  resetStore: () => void
}

const initialState: MortgageState = {
  intent: '',
  homePrice: 350000,
  downPaymentPercent: 10,
  creditScore: '',
  timeline: '',
  income: '',
  hasDebts: null,
  debtAmount: '',
  zipCode: '',
  name: '',
  email: '',
  phone: '',
  currentStep: 1,
}

export const useMortgageStore = create<MortgageStore>((set) => ({
  ...initialState,
  direction: 1,
  setField: (key, value) => set({ [key]: value } as Partial<MortgageStore>),
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 8),
      direction: 1,
    })),
  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
      direction: -1,
    })),
  resetStore: () => set({ ...initialState, direction: 1 }),
}))
