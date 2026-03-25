
export default function InsurancePage() {
  return (
    <main className='mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold text-slate-900 mb-6'>Insurance solutions for loan protection</h1>
      <p className='text-base text-slate-700 mb-6'>Building a robust insurance plan alongside your loan helps protect you and your family from repayment risk due to illness, disability, or job loss.</p>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>1. Loan protection insurance</h2>
        <p className='text-slate-700 mb-3'>Also known as credit life insurance, it covers outstanding loan balance in case of borrower’s death or permanent disability.</p>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Covers full or partial loan amount linked to the loan tenure.</li>
          <li>Often optional at loan disbursal; compare premiums and coverage terms.</li>
          <li>Check whether it is single premium or annual renewal-based.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>2. Disability and critical illness cover</h2>
        <p className='text-slate-700 mb-3'>Income protection insurance ensures EMIs are funded if borrower cannot work.</p>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Choose policies that cover partial and total disability.</li>
          <li>Verify waiting periods, definitions of disability, and claim proof requirements.</li>
          <li>Include critical illness cover for major conditions that impair repayment ability.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>3. Job loss protection</h2>
        <p className='text-slate-700 mb-3'>Unemployment insurance can help maintain repayments during job transition.</p>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Look for policies that cover involuntary unemployment and offer a benefit period aligned with EMIs.</li>
          <li>Understand eligibility criteria (e.g. continuous employment duration, no self-employed cover in some plans).</li>
          <li>Keep an emergency buffer of 3-6 months’ expenses even with this protection.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-3'>4. Property and asset insurance for secured loans</h2>
        <p className='text-slate-700 mb-3'>For home and auto loans, protect the collateral-against damage, theft, and natural disasters.</p>
        <ul className='list-disc list-inside text-slate-700 space-y-2'>
          <li>Homeowners insurance should cover fire, flood, cyclone, and third-party liability.</li>
          <li>Auto insurance should include comprehensive cover and add-ons like personal accident and zero depreciation.</li>
          <li>Maintain proof of coverage to avoid lender-triggered force-placed insurance with higher costs.</li>
        </ul>
      </section>

      <section className='rounded-lg bg-slate-100 p-5 border border-slate-200'>
        <h2 className='text-2xl font-semibold text-slate-900 mb-2'>Insurance planning checklist</h2>
        <ol className='list-decimal list-inside text-slate-700 space-y-2'>
          <li>Match insurance type to your loan (life, credit, disability, unemployment, property).</li>
          <li>Review all policy exclusions and claims process before finalizing.</li>
          <li>Confirm total cost, premium frequency and tax benefits on premiums paid.</li>
          <li>Keep policies in force until loan is fully repaid, and update coverage if loan outstanding changes.</li>
          <li>Discuss with your lender to understand minimum insurance requirements for collateralized loans.</li>
        </ol>
      </section>
    </main>
  );
}
