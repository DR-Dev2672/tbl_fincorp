import React from 'react';

export const  FinA=()=> {
  return (
    <main className='mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold text-slate-900 mb-6'>Finance Planning for Different Loans</h1>
      <p className='text-base text-slate-700 mb-6'>Taking a loan is a major financial step. Smart planning can help you choose the right loan type and manage repayments effectively.</p>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>1. Set your goals</h2>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Identify the purpose (home, education, auto, business, personal, consolidation).</li>
          <li>Define amount required and ideal repayment timeline.</li>
          <li>Include emergency buffer and additional expenses like insurance and fees.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>2. Check affordability</h2>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Review monthly income, expenses, and existing debt obligations.</li>
          <li>Keep debt-to-income ratio under 40% to maintain coverage.</li>
          <li>Use EMI calculators and pre-approval tools before finalizing.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>3. Compare loan types</h2>
        <div className='grid gap-5 sm:grid-cols-1 lg:grid-cols-2'>
          <article className='rounded-lg border border-slate-200 p-4 bg-white shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Home Loan</h3>
            <p className='text-slate-700 mb-2'>Long tenure, lower interest rates, requires property collateral.</p>
            <ul className='list-disc list-inside text-slate-700 space-y-1'>
              <li>Check fixed vs floating rate options.</li>
              <li>Plan for upfront costs: stamp duty, registration, broker fees.</li>
              <li>Remember prepayment/foreclosure conditions and tax benefits.</li>
            </ul>
          </article>

          <article className='rounded-lg border border-slate-200 p-4 bg-white shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Personal Loan</h3>
            <p className='text-slate-700 mb-2'>Unsecured credit with higher interest, good for small immediate needs.</p>
            <ul className='list-disc list-inside text-slate-700 space-y-1'>
              <li>Lower amounts, shorter terms, and quick approval cycles.</li>
              <li>Should be used for income-generating or high-return expenditures.</li>
              <li>Avoid taking too many personal loans; it affects credit score.</li>
            </ul>
          </article>

          <article className='rounded-lg border border-slate-200 p-4 bg-white shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Auto Loan</h3>
            <p className='text-slate-700 mb-2'>Secured by vehicle; evaluate total cost including insurance and maintenance.</p>
            <ul className='list-disc list-inside text-slate-700 space-y-1'>
              <li>Compare bank vs dealer financing for better rate.</li>
              <li>Consider larger down payment to reduce EMI burden.</li>
              <li>Check loan-to-value (LTV) and residual value terms.</li>
            </ul>
          </article>

          <article className='rounded-lg border border-slate-200 p-4 bg-white shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Education Loan</h3>
            <p className='text-slate-700 mb-2'>Often has grace period; plan for post-study repayment.</p>
            <ul className='list-disc list-inside text-slate-700 space-y-1'>
              <li>Confirm fully covered fees, living costs, and contingency funds.</li>
              <li>Understand moratorium, interest capitalization, and co-signer requirements.</li>
              <li>Explore scholarships, grants and part-time income before borrowing.</li>
            </ul>
          </article>

          <article className='rounded-lg border border-slate-200 p-4 bg-white shadow-sm'>
            <h3 className='text-xl font-semibold mb-2'>Business Loan</h3>
            <p className='text-slate-700 mb-2'>Needs cash flow planning; often needs business plan and collateral.</p>
            <ul className='list-disc list-inside text-slate-700 space-y-1'>
              <li>Match loan structure to revenue cycle and working capital necessity.</li>
              <li>Plan for operational risk and macroeconomic variables.</li>
              <li>Account for currency and interest rate risks where applicable.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>4. Verify before signing</h2>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Read the loan agreement thoroughly for rates, charges and default penalties.</li>
          <li>Confirm the exact EMI, tenure, and total cost of loan (principal + interest + fees).</li>
          <li>Prefer EMI payment date close to salary date; maintain an emergency fund.</li>
          <li>Keep digital and physical copies of sanction letter, repayment schedule, and receipts.</li>
        </ul>
      </section>

      <section className='rounded-lg bg-slate-100 p-5 border border-slate-200'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-2'>Quick checklist</h2>
        <ol className='list-decimal list-inside text-slate-700 space-y-2'>
          <li>Define purpose, amount, tenure, and down payment.</li>
          <li>Check credit score, documents, and DTI ratio.</li>
          <li>Compare APR, tenure, and total interest across lenders.</li>
          <li>Assess prepayment, foreclosure, and insurance requirements.</li>
          <li>Create HELOC or savings buffer for unexpected expenses.</li>
        </ol>
      </section>
    </main>
  );
}
