# Prime State Lending — Rebuild Audit Report

**Audit Date:** 2026-03-23
**Live Site:** https://www.primestatelending.com/
**Rebuild Project:** /Users/yonatanbayeh/Desktop/bizz/prime-state-lending/prime-state-lending/

---

## HOW THIS REPORT WAS PRODUCED

All live site pages were fetched directly via HTTP. All rebuild source files were read in full. Differences are based on exact text comparisons. Where a live page returned HTTP 404, that is noted.

---

## PAGE-BY-PAGE COMPARISON

---

### PAGE: Homepage — https://www.primestatelending.com/ vs app/page.tsx + components/home/*

**MISSING FROM REBUILD (exists on live, not in project):**

- Hero headline: Live reads **"Home Loans for Every Stage of Your Life"** — rebuild has "A smarter way to finance your dream home."
- Live site navigation includes: Home, Purchase, Refinance, Calculators, **Resources (dropdown with: Loan Programs, Loan Process, Mortgage Basics, Online Forms, FAQ)**, Contact, About, **Blog**
- Phone numbers displayed in header/body: live shows **(425) 582-5615** and **206-849-4267**
- Email address: live shows **info@primestatelending.com** — rebuild has no email in footer or header
- Live footer address: **6100 219th St SW Suite 480, Mountlake Terrace, WA 98043** — rebuild footer shows "6000 244th St SW, Mountlake Terrace, WA 98043" (DIFFERENT address — see Critical section)
- Real NMLS number on live site: **Company NMLS #2394256** — rebuild shows placeholder "NMLS #1234567"
- Live site has **Equal Housing Lender** logo/image badge — rebuild has it only as inline text
- Live site links to **www.nmlsconsumeraccess.org** — rebuild has no NMLS consumer access link
- Live footer has **"Powered By LenderHomePage.com"** — rebuild has no such attribution
- Live footer links include: Legal, Privacy Policy, Accessibility Statement, **Site Map** — rebuild has Privacy Policy, Terms of Service, Licensing (all with `href="#"` placeholder anchors)
- Live homepage includes a **"Welcome to Prime State Lending, We are home loan experts dedicated to making sure your home purchase or refinance experience is top-notch."** welcome statement
- Live homepage has **"Get Pre qualified Now"** and **"Apply Now"** CTAs linking to an actual online application
- Live homepage has **"Contact us today!"** CTA
- Live site has an **Apply Now** link to a secure 12-minute application: *"Our Secure Application takes about 12 minutes to complete, and is required for a 'Pre-Approval.'"* — rebuild wizard collects partial info but does not submit to a real application platform
- Live site includes a **UserWay Accessibility Widget** for WCAG 2.1 compliance — rebuild has no accessibility widget
- Live site references an accessibility statement page — rebuild has no accessibility statement

**ADDED IN REBUILD (exists in project, not on live site):**

- Rebuild homepage hero sub-badge: "Local to Mountlake Terrace, WA"
- Rebuild QuickInfoCards stats: "$2B+ Loans Funded", "4.9/5 Customer Rating", "21 Days Average Closing", "0% Hidden Fees" — none of these appear on the live site
- Rebuild hero includes an interactive Rate Calculator mockup showing "$3,482/mo" and "6.125% Rate" — this is static/decorative, not a real calculator
- Rebuild homepage includes a 4-step Process Section ("Apply Online in Minutes", "Get Pre-Approved", "Underwriting & Appraisal", "Clear to Close")
- Rebuild CTABanner section: "Ready to unlock your home's potential?" / "Join thousands of Washington residents who trust Prime State Lending"

**CHANGED (exists in both but different):**

- Live: hero headline **"Home Loans for Every Stage of Your Life"**
  Rebuilt: **"A smarter way to finance your dream home."**

- Live: site description/mission **"We are home loan experts dedicated to making sure your home purchase or refinance experience is top-notch."**
  Rebuilt: **"Experience a fully digital mortgage process with transparent rates, expert local guidance, and absolutely no hidden fees."**

- Live: copyright/NMLS line absent or unspecified year
  Rebuilt: **"© 2024 Prime State Lending. All rights reserved. NMLS #1234567. Equal Housing Lender."** — year is 2024 (site is live in 2026), and NMLS number is a placeholder

---

### PAGE: Home Purchase — https://www.primestatelending.com/home-purchase/ vs app/home-purchase/page.tsx + components/MortgageWizard.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live /home-purchase page is a **full loan application form** collecting: Estimated Home Value, Mortgage Balance, Date of Birth, SSN, Property Type (Single Family, Multi Family, Condominium, Townhouse, Manufactured Home), Property Use (Primary Residence, Vacation Home, Investment), Credit Rating (Excellent, Very Good, Good, Fair, Poor), Purchase Price, Military Service status, Employment Status, Annual Household Income, Monthly Debt Payments, Bankruptcy History, Foreclosure History, Late Mortgage Payments, FHA Loan Status, Property Zip Code, Best Time to Contact
- Live form collects **SSN (Social Security Number)** and **Date of Birth** — rebuild explicitly touts "No SSN required"
- Live loan purposes include: Lower Interest Rate, Lower Monthly Payment, Debt Consolidation, Change Rate/Term, Home Improvement, Take Cash Out
- Live down payment options: "0% VA/USDA", "3% Conv.", "3.5% FHA", 5%, 10%, 20%
- Live loan types offered on this page: Home Refinance, Home Purchase, **Home Equity**, **Reverse Mortgage**
- Live contact info (425-582-5615) visible on the application page
- Live NMLS #2394256 displayed on this page

**ADDED IN REBUILD (exists in project, not on live site):**

- 8-step mortgage wizard (intent → home price → down payment → credit score → timeline → results with payment estimate → income/debt → contact info)
- "Find Out What You Can Afford in Minutes" hero with trust strip: "✓ No SSN required", "✓ Takes 2 minutes", "✓ No credit pull"
- Rate range display based on credit score tier
- Animated payment counter (Step 6)
- In-wizard disclaimer: "Estimates are illustrative only and not a commitment to lend. Rates shown are for informational purposes."
- Step 8 "See your loan options" with lead capture (name, email, phone) — submits only to `console.log()` (no actual backend integration)

**CHANGED:**

- Live: Full mortgage application (collects SSN, DOB, full financial profile, submits to LenderHomePage.com platform)
  Rebuilt: Pre-qualification wizard (no SSN, no DOB, estimates only, no real submission endpoint)

---

### PAGE: Refinance — https://www.primestatelending.com/refinance/ vs app/refinance/page.tsx

**STATUS: Live page returns HTTP 404**

The URL https://www.primestatelending.com/refinance/ returns a 404 error on the live site. The live site uses /refinance (without trailing slash) which redirects, but also 404s. The live navigation links to "Refinance" as a top-level item. This may be a CMS redirect issue or the page may exist under a different path.

**ADDED IN REBUILD (not on live site since live 404s):**

- Page heading: "Refinance Your Mortgage"
- "Why Refinance?" section with four items: Lower Your Rate, Cash-Out Refinance, Switch Loan Types, Shorten Your Term
- CTA section: "See how much you could save"
- Buttons: "Calculate Savings" → /calculators, "Talk to an Expert" → /contact

---

### PAGE: Loan Programs — https://www.primestatelending.com/loan-programs/ vs app/loan-programs/page.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live page heading: **"Which Mortgage is Right for You?"** — rebuild heading is "Loan Programs"
- Live lists four **rate-type mortgages** as distinct sections: Fixed Rate, Adjustable ARM, Interest Only, Graduated Payments — rebuild does not have Interest Only or Graduated Payment types
- Live lists **USDA Loans** as a loan program — rebuild does not include USDA Loans
- Live description for USDA: "Rural or suburban area with no down payment and minimal investment"
- Live Jumbo description references conforming loan limits in general terms; rebuild specifies "Loans above $766,550"
- Live page contact info and NMLS #2394256 in sidebar/footer

**ADDED IN REBUILD (exists in project, not on live site):**

- Specific conforming loan limit called out: "Loans above $766,550"
- Rebuild has bullet-point feature lists under each loan type (e.g., "Down payment as low as 3%", "0% down payment option", "No PMI required")
- Rebuild has individual "Get Started → /contact" links on each loan card

**CHANGED (exists in both but different):**

- Live page title: **"Which Mortgage is Right for You?"**
  Rebuilt: **"Loan Programs"**

- Live: Four loan programs (FHA, VA, USDA, Jumbo) plus four rate types (Fixed, ARM, Interest Only, Graduated)
  Rebuilt: Four loan programs only (Conventional, FHA, VA, Jumbo) — no rate types section, no USDA, no Interest Only, no Graduated Payments

- Live FHA description: "Mortgages which are insured by the Federal Housing Administration"
  Rebuilt: "Government-backed loans perfect for first-time buyers with lower credit scores or smaller down payments."

- Live VA description: "Mortgages guaranteed by the Department of Veteran Affairs"
  Rebuilt: "Exclusive benefits for veterans, active military, and eligible spouses. No down payment required."

---

### PAGE: Loan Process — https://www.primestatelending.com/loan-process/ vs app/loan-process/page.tsx + components/home/ProcessSection.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live process has **5 named steps**: (1) Find Out How Much You Can Borrow, (2) Select The Right Loan Program, (3) Apply For A Loan, (4) Begin Loan Processing, (5) Close Your Loan
- Live Step 4 includes processing checklist items: Income/Employment Check, Credit Check, Asset Evaluation, Property Appraisal, Other Documentation
- Live Step 4 quotes the loan approval criteria: **"Approval is based on two factors: your ability and willingness to repay the loan and the value of the property."**
- Live page has a **"Click To Apply For A Loan"** CTA within the page content
- Live mentions both fixed-rate and adjustable-rate mortgage types in Step 2 (15–30 year fixed; ARM with variable rates)
- Live contact info, NMLS #2394256 displayed on this page

**ADDED IN REBUILD (exists in project, not on live site):**

- Rebuild has an animated/visual dashboard mock (progress bar, application status widget showing "65%", "In Review" badge, checklist: Credit Pull ✓, Income Verification ✓, Appraisal Pending)
- Rebuild page sub-heading: "Our streamlined digital process makes getting a mortgage simple, transparent, and fast."

**CHANGED:**

- Live: 5-step process with detailed descriptions
  Rebuilt: 4-step process (Apply Online, Get Pre-Approved, Underwriting & Appraisal, Clear to Close) — Step 2 "Select Loan Program" is absent; step descriptions are shorter and more marketing-oriented

- Live Step 1 label: **"Find Out How Much You Can Borrow"**
  Rebuilt Step 1: **"Apply Online in Minutes"**

- Live Step 5 label: **"Close Your Loan"**
  Rebuilt Step 4: **"Clear to Close"**

---

### PAGE: Mortgage Calculators — https://www.primestatelending.com/mortgage-calculators/ vs app/calculators/page.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live calculator page URL is **/mortgage-calculators/** — rebuild route is **/calculators** (URL mismatch)
- Live offers **10 distinct calculator tools**: Mortgage Calculator, Refinance Calculator, Extra Payment Calculator, "How much home can I afford?", Principal Calculator, Tax Benefits of Buying, "What's my APR?", Interest-Only Calculator, "Should I pay Points?", "How much income to qualify?"
- Live calculator page disclaimer: **"Information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice."** — rebuild has no such disclaimer
- Live "Powered By LenderHomePage.com" attribution

**ADDED IN REBUILD (exists in project, not on live site):**

- Rebuild has 3 custom-built interactive calculators: Mortgage Calculator (with amortization table, payment breakdown chart, PMI calculation, HOA fees), Refinance Calculator (break-even analysis), Affordability Calculator (DTI-based max home price)
- Rebuild Affordability Calculator disclaimer: "Based on 43% debt-to-income ratio. Actual approval may vary based on credit score and other factors."
- Rebuild calculator includes amortization schedule table toggle

**CHANGED:**

- Live: 10 calculator tools (some from third-party widget platform)
  Rebuilt: 3 custom-built calculators

- Live URL path: **/mortgage-calculators/**
  Rebuilt URL path: **/calculators**

---

### PAGE: Mortgage Basics — https://www.primestatelending.com/mortgage-basics/ vs app/mortgage-basics/page.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live page sub-heading: **"Jump in and get an overview on common mortgage terms"**
- Live organizes content as a directory of **topics with "Learn More" links**: Application Checklist, Credit, Closing Costs, Appraisals, PMI, Refinance, Glossary of Terms, **Foreclosure** — rebuild does not include Application Checklist, Closing Costs, Appraisals, Glossary of Terms, or Foreclosure
- Live has individual deep-dive article pages for each topic linked from here
- Live contact info and NMLS #2394256 displayed on this page

**ADDED IN REBUILD (exists in project, not on live site):**

- Rebuild covers: Principal, Interest, Term, Escrow (as definition boxes)
- Rebuild covers: Fixed-Rate Mortgage, Adjustable-Rate Mortgage (ARM), Government-Backed Loans
- Rebuild CTA section: "Ready to Learn More?" with buttons to calculators and contact

**CHANGED:**

- Live page heading: **"Mortgage Basics"** with sub-heading **"Jump in and get an overview on common mortgage terms"**
  Rebuilt heading: **"Mortgage Basics"** with sub-heading: **"Your guide to understanding home loans and the mortgage process."**

- Live: Topic-directory format linking to individual deep-dive articles (8+ topics)
  Rebuilt: Inline reference content covering basics only (2 sections)

- Live includes Foreclosure topic — rebuild has no content on foreclosure
- Live includes Closing Costs topic — rebuild has no content on closing costs
- Live includes Application Checklist — rebuild has no application checklist content
- Live includes Glossary of Terms — rebuild has no glossary

---

### PAGE: FAQ — https://www.primestatelending.com/faq/ vs app/faq/page.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

Live site has **12 FAQ items**. Rebuild has **8 FAQ items**. The following questions exist on the live site but NOT in the rebuild:

1. **"When should I refinance?"** — Live answer: "It's generally a good time to refinance when mortgage rates are 2% lower than your current loan rate."
2. **"What are points?"** — Live answer: "A point is a percentage of the loan amount, or 1-point = 1% of the loan."
3. **"Should I pay points to lower my interest rate?"** — Live: detailed answer about break-even analysis
4. **"What is an APR?"** — Live: "The annual percentage rate (APR) is an interest rate reflecting the cost of a mortgage as a yearly rate."
5. **"What does it mean to lock the interest rate?"** — Live: "A lender can allow the borrower to 'lock-in' the loan's interest rate guaranteeing that rate for a specified time period, often 30-60 days."
6. **"What is 80-10-10 financing?"** — Live: explains piggyback mortgage structure
7. **"What happens at closing?"** — Live: detailed closing process description
8. **"How is my credit judged by lenders?"** — Live: includes credit bureau contact numbers (Equifax 800-685-1111, Experian 888-397-3742, Trans Union 800-916-8800)

Live FAQ also includes the following that are partially covered or reworded in the rebuild:
- **"What documents do I need to prepare for my loan application?"** — Live answer is far more detailed, with categorized document lists (property docs, income docs, self-employed docs, alimony/child support, Social Security/VA, down payment sources, debt obligations)

**CHANGED:**

- Live FAQ question: **"What can I do to improve my credit score?"**
  Rebuilt question: (not present — rebuild has no credit score improvement FAQ)

- Live FAQ count: **12 questions**
  Rebuilt FAQ count: **8 questions** (4 questions from the live site are absent, 4 new questions were added)

**ADDED IN REBUILD (not on live site):**

These 4 FAQ questions appear in the rebuild but not on the live site:
1. "How long does the mortgage process take?" (with 21-day claim)
2. "What is PMI and when is it required?" (partially covered on live site but not as a standalone FAQ)
3. "Can I get pre-approved before house hunting?"
4. "Do you offer refinancing?"

---

### PAGE: About Us — https://www.primestatelending.com/about-us/ vs app/about/page.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live mission statement: **"Our mission is to serve our customers with honesty, integrity and competence. Our goal is to provide home loans to our clients while providing them with the lowest interest rates and closing costs possible."** — rebuild has no mission statement
- Live company description: **"We've been helping customers afford the home of their dreams for many years and we love what we do."** — rebuild does not use this copy
- Live NMLS #2394256 and link to nmlsconsumeraccess.org
- Live contact info (address, both phones, email)
- Live Equal Housing Lender logo/badge

**ADDED IN REBUILD (exists in project, not on live site):**

- Rebuild "Our Story" section: "Founded in the heart of the Pacific Northwest, Prime State Lending was built on a simple belief: getting a mortgage shouldn't be complicated, stressful, or opaque."
- Rebuild three value pillars: Transparent ("No hidden fees, ever. What you see is what you get."), Fast ("Close in as little as 21 days with our digital process."), Local ("Based in Mountlake Terrace, serving all of Washington.")
- Rebuild CTA: "Ready to get started?" / "Contact Us Today"

**CHANGED:**

- Live company tagline/intro: **"We are home loan experts dedicated to making sure your home purchase or refinance experience is top-notch."**
  Rebuilt tagline: **"Local expertise meets digital innovation in Mountlake Terrace, Washington."**

- Live: minimal "About Us" content (mission + contact info)
  Rebuilt: expanded story, values, and visual treatment

---

### PAGE: Contact Us — https://www.primestatelending.com/contact-us/ vs app/contact/page.tsx

**MISSING FROM REBUILD (exists on live, not in project):**

- Live contact page URL is **/contact-us/** — rebuild route is **/contact** (URL mismatch)
- Live phone: **(425) 582-5615** — rebuild shows **(800) 555-0199** (a placeholder toll-free number)
- Live second phone: **206-849-4267** — rebuild has no second phone number
- Live email: **info@primestatelending.com** — rebuild has no email address on contact page
- Live address: **6100 219th St SW Suite 480, Mountlake Terrace, WA 98043** — rebuild shows **6000 244th St SW, Mountlake Terrace, WA 98043** (DIFFERENT address)
- Live NMLS #2394256 — rebuild has no NMLS number on contact page
- Live has no contact form (relies on separate application flow) — the rebuild has a custom contact form

**ADDED IN REBUILD (exists in project, not on live site):**

- Full contact form with fields: Name (required), Email (required), Phone (required), Loan Type (select: Home Purchase, Refinance, Conventional, FHA, VA, Jumbo), Message (required)
- Client-side validation with inline error messages
- Business hours listed: Mon-Fri 8am–6pm, Sat 9am–3pm — these hours do not appear on the live site
- Success state: "Thank you! We've received your message and will get back to you within 24 hours."
- Form submits to no real endpoint (client-side only, `setSubmitted(true)`)

**CHANGED:**

- Live phone: **(425) 582-5615**
  Rebuilt: **(800) 555-0199**

- Live address: **6100 219th St SW Suite 480, Mountlake Terrace, WA 98043**
  Rebuilt: **6000 244th St SW, Mountlake Terrace, WA 98043**

---

### PAGE: Blog — https://www.primestatelending.com/blog/ vs (no blog route exists in rebuild)

**MISSING FROM REBUILD:**

- The live site has an active **Blog** section with dated articles (most recent: March 19, 2026)
- Live blog articles include:
  1. "Smart Buyers Can Benefit When Rates Rise" (Mar 19, 2026)
  2. "Where an ARM (Adjustable-Rate Mortgage) May Be a Smarter Move" (Mar 5, 2026)
  3. "Is Refinancing Your Mortgage the Right Move?" (Feb 27, 2026)
  4. "Housing Affordability in 2026: Why Rates Are not the Only Factor" (Feb 20, 2026)
  5. "Loyalty to Your Bank? Even With Your Home-Loan?" (Feb 6, 2026)
- Blog is listed in live navigation — rebuild navbar has no Blog link
- Blog is listed in live footer Resources section — rebuild footer has no Blog link

**ADDED IN REBUILD:** Nothing; no blog exists in the rebuild.

---

### PAGE: Online Forms — https://www.primestatelending.com/online-forms/ vs (no route exists in rebuild)

**MISSING FROM REBUILD:**

- Live site has a dedicated **Online Forms** page at /online-forms/ that provides downloadable PDF forms:
  - Uniform Residential Loan Application
  - Uniform Residential Loan Application — Unmarried Addendum
  - Uniform Residential Loan Application — Additional Borrower
- Rebuild has no equivalent page or downloadable forms

---

### PAGES EXISTING IN REBUILD BUT NOT ON LIVE SITE

| Rebuild Route | Description |
|---|---|
| /purchase | "Home Purchase Loans" static info page — live site uses /home-purchase for application |
| /thank-you | Post-wizard completion page |

Note: The live site uses /home-purchase/ as the application entry point, which maps to a full loan application. The rebuild has both /home-purchase (wizard) and /purchase (static info page), creating potential confusion.

---

## SPECIAL FOCUS AREAS

---

### 1. LEGAL & COMPLIANCE COPY

| Item | Live Site | Rebuild | Status |
|---|---|---|---|
| Company NMLS # | **#2394256** | **#1234567** (placeholder) | CRITICAL |
| NMLS Consumer Access link | www.nmlsconsumeraccess.org linked | Not present | CRITICAL |
| Equal Housing Lender | Logo/badge displayed | Text only, no linked badge | Review |
| "Not a commitment to lend" | Not in footer; appears in rebuild wizard only | Present in MortgageWizard Step 6: "Estimates are illustrative only and not a commitment to lend." | OK (rebuild only) |
| Privacy Policy | Linked page (appears functional) | `href="#"` placeholder | CRITICAL |
| Terms of Service | Not on live site (live has "Legal" link) | `href="#"` placeholder | Review |
| Accessibility Statement | Full page at /accessibility-statement/ | Not present at all | CRITICAL |
| Licensing page | Not as standalone (NMLS link covers this) | `href="#"` placeholder | Review |
| Legal page | "Legal" link in footer | "Terms of Service" with `href="#"` | Changed |
| Site Map | Linked in live footer | Not present | Missing |
| Copyright year | Not specified | 2024 (site is running in 2026) | Review |
| Powered By | "Powered By LenderHomePage.com" | Not present (rebuild is custom) | Informational |

---

### 2. CONTACT INFORMATION

| Item | Live Site | Rebuild | Status |
|---|---|---|---|
| Primary phone | **(425) 582-5615** | **(800) 555-0199** (fake) | CRITICAL |
| Secondary phone | **206-849-4267** | Not present | CRITICAL |
| Email | **info@primestatelending.com** | Not displayed anywhere in rebuild | CRITICAL |
| Street address | **6100 219th St SW Suite 480, Mountlake Terrace, WA 98043** | **6000 244th St SW, Mountlake Terrace, WA 98043** (different street number, no suite) | CRITICAL |
| Business hours | Not specified on live site | Mon-Fri 8am–6pm, Sat 9am–3pm (unverified) | Review |

---

### 3. NAVIGATION

| Live Nav Item | Live Destination | Rebuild Nav Item | Rebuild Destination | Status |
|---|---|---|---|---|
| Home | / | (implied via logo) | / | OK |
| Purchase | /home-purchase | Buy a Home | /home-purchase | Label changed |
| Refinance | /refinance | (none — separate nav item implied) | /refinance | OK path |
| Calculators | /mortgage-calculators/ | Rates | /calculators | Label changed; URL different |
| Resources > Loan Programs | /loan-programs/ | Loan Types | /loan-programs | Label changed |
| Resources > Loan Process | /loan-process/ | How it Works | /loan-process | Label changed |
| Resources > Mortgage Basics | /mortgage-basics/ | (not in nav) | /mortgage-basics | Missing from rebuild nav |
| Resources > Online Forms | /online-forms/ | (not in rebuild) | N/A | Page missing |
| Resources > FAQ | /faq/ | (not in main nav) | /faq | In footer only |
| Contact | /contact-us/ | (no CTA in nav) | /contact | URL different |
| About | /about-us/ | About Us | /about | URL different |
| Blog | /blog/ | (not in nav) | N/A | Missing from rebuild nav |
| Get Pre-Approved (CTA button) | /home-purchase | Get Pre-approved | /home-purchase | OK |

**Nav items missing from rebuild entirely:**
- Blog
- Resources dropdown structure (Mortgage Basics, Online Forms, FAQ are not in main nav)

---

### 4. FOOTER

| Item | Live Footer | Rebuild Footer | Status |
|---|---|---|---|
| Company tagline | Not present | "Modern lending solutions for the Pacific Northwest. Local expertise, digital speed." | Added |
| Social icons | Not visible in live | Email icon (href="#"), Phone icon (href="#") | Added (non-functional) |
| Products column | Not structured this way | Home Purchase, Refinance, Jumbo Loans, VA & FHA | Added |
| Resources column | Loan Programs, Loan Process, Mortgage Basics, Online Forms, FAQ | Mortgage Calculator, Current Rates, Homebuyer Guide, FAQ | Different set |
| Address | **6100 219th St SW Suite 480, Mountlake Terrace, WA 98043** | **6000 244th St SW, Mountlake Terrace, WA 98043** | CRITICAL mismatch |
| Phone | **(425) 582-5615** and **206-849-4267** | **(800) 555-0199** only | CRITICAL |
| Email | **info@primestatelending.com** | Not shown | CRITICAL |
| NMLS in footer | **Company NMLS #2394256** | **NMLS #1234567** (placeholder) | CRITICAL |
| NMLS link | Links to www.nmlsconsumeraccess.org | Not present | CRITICAL |
| Equal Housing | Logo/badge | Text inline | Reduced |
| Copyright year | Not shown | © 2024 | Stale year |
| Footer bottom links | Legal, Privacy Policy, Accessibility Statement, Site Map | Privacy Policy, Terms of Service, Licensing (all href="#") | All non-functional |
| Blog link in footer | Present in live Resources section | Not present | Missing |
| Online Forms | Present in live Resources section | Not present | Missing |
| Powered By | "Powered By LenderHomePage.com" | Not present | N/A (custom rebuild) |

---

### 5. FORMS

| Form | Live Site | Rebuild | Status |
|---|---|---|---|
| Loan Application | Full URLA-style form at /home-purchase collecting SSN, DOB, employment, income, debts, property details — submits to LenderHomePage.com platform | 8-step pre-qual wizard (no SSN, no DOB, no real submission endpoint — logs to console only) | CRITICAL |
| Contact Form | Not present on live site (relies on application form) | Custom form at /contact with 5 fields (Name, Email, Phone, Loan Type, Message) — no real submission endpoint | Non-functional |
| Mortgage Wizard backend | N/A | `console.log('Mortgage wizard submission:', formData)` then `await new Promise(r => setTimeout(r, 800))` then redirects to /thank-you — no API call, no CRM, no email | CRITICAL |
| Online Forms (PDF downloads) | Uniform Residential Loan Application (PDF), Addendum, Additional Borrower form | Not present | Missing |
| Pre-qualification qualifier copy | "Our Secure Application takes about 12 minutes to complete, and is required for a 'Pre-Approval.'" | "No paperwork. No commitment. Just a quick estimate." | Different positioning |

---

### 6. LOAN PROGRAMS

| Loan Type | Live Site | Rebuild | Status |
|---|---|---|---|
| Fixed Rate Mortgage | Yes (as rate type) | Via Conventional loans section | Implicit |
| Adjustable Rate (ARM) | Yes (as rate type) | Not as standalone program | Missing |
| Interest Only | Yes | Not present | Missing |
| Graduated Payments | Yes | Not present | Missing |
| FHA Home Loan | Yes | Yes | Present |
| VA Loans | Yes | Yes | Present |
| USDA Loans | Yes | **Not present** | CRITICAL gap |
| Jumbo Loans | Yes | Yes | Present |
| Conventional Loans | Implied (not named separately) | Yes (named) | Added |
| Home Equity | Listed as loan type on application | Not a standalone program page | Missing |
| Reverse Mortgage | Listed as loan type on application | Not present | Missing |

---

### 7. FAQ COUNT AND QUESTION COMPARISON

| # | Live FAQ Question | In Rebuild? |
|---|---|---|
| 1 | When should I refinance? | No |
| 2 | What are points? | No |
| 3 | Should I pay points to lower my interest rate? | No |
| 4 | What is an APR? | No |
| 5 | What does it mean to lock the interest rate? | No |
| 6 | What documents do I need to prepare for my loan application? | Partial (shorter answer) |
| 7 | How is my credit judged by lenders? | No |
| 8 | What can I do to improve my credit score? | No |
| 9 | What is an appraisal? | No |
| 10 | What is PMI (Private Mortgage Insurance)? | Partial (shorter answer) |
| 11 | What is 80-10-10 financing? | No |
| 12 | What happens at closing? | No |

**Live: 12 FAQs. Rebuild: 8 FAQs. Overlap: ~2 partial matches.**

Rebuild-only FAQs (not on live site):
1. How long does the mortgage process take?
2. What credit score do I need?
3. How much down payment do I need?
4. Can I get pre-approved before house hunting?
5. Are there any hidden fees?
6. Do you offer refinancing?

---

## SUMMARY REPORT

---

### CRITICAL (must resolve before launch)

**1. Wrong NMLS Number — Legal/Regulatory**
- Rebuild uses placeholder **NMLS #1234567** everywhere (footer, copyright line)
- Real number is **NMLS #2394256**
- This is a federal regulatory requirement (SAFE Act). Displaying an incorrect NMLS number is a compliance violation.
- No link to www.nmlsconsumeraccess.org is present in the rebuild.

**2. Wrong Physical Address**
- Live site: **6100 219th St SW Suite 480, Mountlake Terrace, WA 98043**
- Rebuild: **6000 244th St SW, Mountlake Terrace, WA 98043**
- Different street number, different street name, no suite number. This incorrect address appears in the footer, contact page, and thank-you page.

**3. Wrong Phone Number**
- Live site: **(425) 582-5615** (primary) and **206-849-4267** (secondary)
- Rebuild: **(800) 555-0199** — this is a fictional placeholder number used in US TV/film. It will not connect to a real business.

**4. No Email Address**
- Live site displays **info@primestatelending.com** on every page
- Rebuild displays no email address anywhere

**5. Non-Functional Form Submissions**
- The mortgage wizard (Step 8) submits data only to `console.log()` with a fake 800ms delay before redirecting to /thank-you. No lead data is sent to any backend, CRM, or email system.
- The contact form at /contact submits only client-side (sets `submitted = true`). No data is transmitted anywhere.
- The live site uses LenderHomePage.com as its application platform, which actually processes and routes submissions.

**6. No Accessibility Statement**
- Live site has a dedicated accessibility statement page and a UserWay accessibility widget for WCAG 2.1 compliance.
- Rebuild has no accessibility statement page, no accessibility widget.
- This is a potential ADA/WCAG compliance gap.

**7. Privacy Policy and Legal Links Are Broken Placeholders**
- All three footer compliance links in the rebuild (Privacy Policy, Terms of Service, Licensing) use `href="#"` — they go nowhere.
- Live site has real, functional Privacy Policy and Legal pages.

**8. USDA Loan Missing**
- Live site lists USDA Loans as an available program.
- Rebuild does not mention USDA loans anywhere. If Prime State Lending offers USDA loans, their omission means eligible rural/suburban borrowers won't find this option.

---

### CONTENT GAPS (should review before launch)

**1. Blog Section Entirely Absent**
- Live site has an active blog with recent articles (dated March 2026). It is linked in the main navigation and footer.
- Rebuild has no blog route, no blog link in nav or footer.

**2. Online Forms Page Missing**
- Live site provides downloadable Uniform Residential Loan Application PDFs.
- Rebuild has no equivalent.

**3. Mortgage Basics Content Depth**
- Live site links to 8+ topic deep-dives (Application Checklist, Credit, Closing Costs, Appraisals, PMI, Refinance, Glossary of Terms, Foreclosure).
- Rebuild covers only basics inline with no topic articles, no glossary, no foreclosure, no application checklist, no closing costs page.

**4. FAQ Coverage**
- 10 of 12 live FAQ questions are not answered in the rebuild. Including important ones: APR, rate lock, points, what happens at closing, 80-10-10 financing, credit bureau contacts.

**5. URL Structure Mismatches**
- Live: /home-purchase/ → Rebuild: /home-purchase (OK)
- Live: /mortgage-calculators/ → Rebuild: /calculators (different URL)
- Live: /contact-us/ → Rebuild: /contact (different URL)
- Live: /about-us/ → Rebuild: /about (different URL)
- These mismatches will break any inbound links from search engines, social media, or existing marketing materials pointing to the live URLs.

**6. Refinance Page Is 404 on Live Site**
- The live site returns HTTP 404 for /refinance/. This may indicate the route was removed or is misconfigured on the live server. The rebuild has a /refinance page. This discrepancy should be clarified — is the live site's refinance page intentionally absent, or is it a broken URL?

**7. Process Step Count**
- Live: 5 detailed steps; Rebuild: 4 steps. "Select The Right Loan Program" step is entirely missing from the rebuild.

**8. Copyright Year**
- Footer shows "© 2024" but the site runs in 2026. Should be "© 2026" or dynamically generated.

**9. Home Equity and Reverse Mortgage Products**
- The live application form lists "Home Equity" and "Reverse Mortgage" as loan types.
- Neither appears in the rebuild's loan programs page, services section, or navigation.

**10. About Us — No Mission Statement**
- Live: "Our mission is to serve our customers with honesty, integrity and competence."
- Rebuild: No mission statement. The rebuild "Our Story" section is entirely fabricated copy not from the live site.

---

### ADDITIONS & ENHANCEMENTS (informational)

These features exist in the rebuild that are not on the live site. They represent design/UX improvements or new tools, but should be validated for accuracy before launch.

1. **8-Step Mortgage Wizard** at /home-purchase — interactive pre-qualification flow with animated step transitions, payment estimation engine, and contact capture. More user-friendly than the live full application form. However, form submissions currently go nowhere (see Critical #5).

2. **Custom Interactive Calculators** — The rebuild's 3 calculators (Mortgage, Refinance, Affordability) are more capable and visual than what's implied on the live site: full amortization schedule, payment breakdown chart, break-even analysis, PMI calculation.

3. **"Not a commitment to lend" disclaimer** — The rebuild MortgageWizard includes: "Estimates are illustrative only and not a commitment to lend. Rates shown are for informational purposes." This is good compliance language not present on the live site's equivalent page.

4. **Homepage Stats Section** — Rebuild shows "$2B+ Loans Funded", "4.9/5 Customer Rating", "21 Days Average Closing", "0% Hidden Fees." These are unverified claims that need to be confirmed accurate before publishing.

5. **Modern UI/Design** — The rebuild uses a contemporary design language (Tailwind CSS, Framer Motion animations, Iconify icons) compared to the live site which runs on LenderHomePage.com's template-based platform.

6. **Affordability Calculator** with DTI-based home price estimate — not available on live site as a standalone interactive tool.

7. **Thank-You Page** at /thank-you — post-wizard confirmation screen. Live site does not have an equivalent custom page.

8. **Business Hours listed on Contact page** — Mon-Fri 8am–6pm, Sat 9am–3pm. These are not shown on the live site and should be verified as accurate.

9. **Trust Strip on Home Purchase Page** — "✓ No SSN required", "✓ Takes 2 minutes", "✓ No credit pull" — these are accurate for the rebuild's wizard but contradict the live site's approach which DOES collect SSN.

---

## APPENDIX: PAGES INVENTORY

| Route | Live Site | Rebuild | Notes |
|---|---|---|---|
| / | Yes | Yes | Content differs significantly |
| /home-purchase/ | Yes (full application) | Yes (wizard) | Fundamentally different approach |
| /refinance/ | 404 | Yes | Live is broken; rebuild is new content |
| /loan-programs/ | Yes | Yes | USDA missing in rebuild |
| /loan-process/ | Yes | Yes | 5 steps vs 4 steps |
| /mortgage-calculators/ | Yes | /calculators (URL changed) | 10 tools vs 3 tools |
| /mortgage-basics/ | Yes | Yes | Live has more depth |
| /faq/ | Yes | Yes | 12 questions vs 8 questions |
| /about-us/ | Yes | /about | URL changed; content differs |
| /contact-us/ | Yes | /contact | URL changed; all contact info wrong |
| /blog/ | Yes | Missing | No blog in rebuild |
| /online-forms/ | Yes | Missing | No forms page in rebuild |
| /purchase/ | 404 | Yes | New static page in rebuild |
| /thank-you/ | Not present | Yes | New page in rebuild |

---

*End of Audit Report*
