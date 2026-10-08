import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const rows = [
  ['Who owns the policy', 'The bank / lender', 'You'],
  ['Who is paid', 'The lender', 'Your chosen beneficiary'],
  ['Coverage as mortgage shrinks', 'Decreases, premium stays the same', 'Stays level'],
  ['If you switch lenders', 'Coverage may end', 'Coverage stays with you'],
  ['Underwriting', 'Often after a claim', 'Up front, so coverage is certain'],
]

export default function MortgageVsLife() {
  return (
    <>
      <PageHero title="Mortgage Insurance" accent="vs Life Insurance">Which one protects your family better?</PageHero>
      <section className="container narrow">
        <div className="table-wrap">
          <table>
            <thead><tr><th></th><th>Mortgage insurance</th><th>Personal life insurance</th></tr></thead>
            <tbody>{rows.map(r => <tr key={r[0]}><th>{r[0]}</th><td>{r[1]}</td><td>{r[2]}</td></tr>)}</tbody>
          </table>
        </div>
        <p><Link className="btn" to="/contact">Compare quotes <span className="arrow">↗</span></Link></p>
      </section>
    </>
  )
}
