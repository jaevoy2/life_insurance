import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const fmt = n => n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 })

export default function IncomeCalculator() {
  const [income, setIncome] = useState(60000)
  const [years, setYears] = useState(10)
  const [debts, setDebts] = useState(200000)
  const [savings, setSavings] = useState(50000)
  const need = Math.max(0, income * years + debts - savings)
  const num = set => e => set(Math.max(0, Number(e.target.value) || 0))

  return (
    <>
      <PageHero title="Income Replacement" accent="Calculator">Estimate how much coverage your family may need.</PageHero>
      <section className="container narrow">
        <div className="card form">
          <label>Annual income ($)<input type="number" value={income} onChange={num(setIncome)} /></label>
          <label>Years of income to replace<input type="number" value={years} onChange={num(setYears)} /></label>
          <label>Debts incl. mortgage ($)<input type="number" value={debts} onChange={num(setDebts)} /></label>
          <label>Existing savings &amp; coverage ($)<input type="number" value={savings} onChange={num(setSavings)} /></label>
          <div className="result">Suggested coverage <strong>{fmt(need)}</strong></div>
          <small>Estimate only. Speak with a broker for personalized advice.</small>
        </div>
      </section>
    </>
  )
}
