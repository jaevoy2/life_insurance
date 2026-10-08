import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const fmt = n => n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 })

export default function RetirementCalculator() {
  const [saved, setSaved] = useState(25000)
  const [monthly, setMonthly] = useState(500)
  const [years, setYears] = useState(25)
  const [rate, setRate] = useState(5)

  const r = rate / 100 / 12
  const n = years * 12
  const growth = Math.pow(1 + r, n)
  const total = r === 0 ? saved + monthly * n : saved * growth + monthly * ((growth - 1) / r)
  const num = set => e => set(Math.max(0, Number(e.target.value) || 0))

  return (
    <>
      <PageHero title="Retirement" accent="Calculator">See how your savings could grow.</PageHero>
      <section className="container narrow">
        <div className="card form">
          <label>Current savings ($)<input type="number" value={saved} onChange={num(setSaved)} /></label>
          <label>Monthly contribution ($)<input type="number" value={monthly} onChange={num(setMonthly)} /></label>
          <label>Years until retirement<input type="number" value={years} onChange={num(setYears)} /></label>
          <label>Expected annual return (%)<input type="number" step="0.1" value={rate} onChange={num(setRate)} /></label>
          <div className="result">Projected savings <strong>{fmt(total)}</strong></div>
          <small>Illustration only; not a guarantee of returns.</small>
        </div>
      </section>
    </>
  )
}
