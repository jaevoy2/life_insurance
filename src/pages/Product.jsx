import { Link, useParams } from 'react-router-dom'
import { products } from '../data.js'
import PageHero from '../components/PageHero.jsx'
import QuoteForm from '../components/QuoteForm.jsx'

export default function Product() {
  const { slug } = useParams()
  const p = products.find(x => x.slug === slug)
  if (!p) return (
    <PageHero title="Page not" accent="found">That page does not exist. <Link to="/">Return home</Link></PageHero>
  )
  const [first, ...rest] = p.name.split(' ')
  return (
    <>
      <PageHero title={first} accent={rest.join(' ')}>{p.short}</PageHero>
      <section className="container two-col">
        <div>
          {p.image && <img className="product-img" src={p.image} alt={p.name} />}
          <p className="lead">{p.intro}</p>
          <ul className="checks">{p.points.map(x => <li key={x}>{x}</li>)}</ul>
          {p.slug === 'pei-retirement-planning' && (
            <p><Link className="btn" to="/retirement-calculator">Retirement calculator <span className="arrow">↗</span></Link></p>
          )}
          {p.slug === 'mortgage-insurance' && (
            <p><Link className="btn" to="/mortgage-insurance-vs-life-insurance">Mortgage vs Life <span className="arrow">↗</span></Link></p>
          )}
        </div>
        <QuoteForm title={'Quote: ' + p.name} />
      </section>
    </>
  )
}
