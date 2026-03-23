'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Icon } from '@iconify/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.loanType) newErrors.loanType = 'Please select a loan type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Icon icon="solar:check-circle-linear" className="text-4xl" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Thank you!</h1>
            <p className="text-slate-500 mb-8">We've received your message and will get back to you within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="h-11 px-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-500">
              Ready to start your mortgage journey? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="solar:map-point-linear" className="text-xl" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Visit Us</h3>
                <p className="text-sm text-slate-500">
                  6000 244th St SW<br />
                  Mountlake Terrace, WA 98043
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="solar:phone-linear" className="text-xl" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Call Us</h3>
                <p className="text-sm text-slate-500">(800) 555-0199</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="solar:clock-circle-linear" className="text-xl" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Hours</h3>
                <p className="text-sm text-slate-500">
                  Mon-Fri: 8am - 6pm<br />
                  Sat: 9am - 3pm
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full h-11 border ${errors.name ? 'border-red-300' : 'border-slate-200'} rounded-lg px-4 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full h-11 border ${errors.email ? 'border-red-300' : 'border-slate-200'} rounded-lg px-4 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full h-11 border ${errors.phone ? 'border-red-300' : 'border-slate-200'} rounded-lg px-4 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Loan Type</label>
                    <select
                      value={formData.loanType}
                      onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                      className={`w-full h-11 border ${errors.loanType ? 'border-red-300' : 'border-slate-200'} rounded-lg px-4 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    >
                      <option value="">Select a loan type</option>
                      <option value="purchase">Home Purchase</option>
                      <option value="refinance">Refinance</option>
                      <option value="conventional">Conventional</option>
                      <option value="fha">FHA</option>
                      <option value="va">VA</option>
                      <option value="jumbo">Jumbo</option>
                    </select>
                    {errors.loanType && <p className="text-xs text-red-600 mt-1">{errors.loanType}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className={`w-full border ${errors.message ? 'border-red-300' : 'border-slate-200'} rounded-lg px-4 py-3 text-slate-900 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none`}
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 h-11 px-6 inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors w-full"
                >
                  Send Message
                  <Icon icon="solar:arrow-right-linear" className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
