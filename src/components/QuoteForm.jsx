import { useState } from 'react'

export default function QuoteForm({ title = 'Get a free quote' }) {
  const [sent, setSent] = useState(false)
  const submit = e => { e.preventDefault(); setSent(true) }
  if (sent) return <div className="card form"><h3>Thank you!</h3><p>We have received your request and will be in touch shortly.</p></div>
  return (
    <form className="card form" onSubmit={submit}>
      <h3>{title}</h3>
      <label>Type of coverage
        <select name="coverage" required defaultValue="">
          <option value="" disabled>Select…</option>
          <option>Term Life</option><option>Whole Life</option><option>Mortgage Insurance</option>
          <option>Disability</option><option>Critical Illness</option><option>Long Term Care</option>
          <option>Health &amp; Dental</option><option>Travel</option><option>Business Overhead</option>
        </select>
      </label>
      <label>Name<input name="name" required /></label>
      <div className="row">
        <label>Phone<input name="phone" type="tel" required /></label>
        <label>Email<input name="email" type="email" required /></label>
      </div>
      <div className="row">
        <label>Coverage amount<input name="amount" placeholder="$250,000" /></label>
        <label>People &amp; ages<input name="ages" placeholder="e.g. 1 person, age 35" /></label>
      </div>
      <label>Smoker?
        <select name="smoker" defaultValue="No"><option>No</option><option>Yes</option></select>
      </label>
      <label>Special requirements<textarea name="notes" rows="3" /></label>
      <button className="btn" type="submit">Request quote <span className="arrow">↗</span></button>
    </form>
  )
}
