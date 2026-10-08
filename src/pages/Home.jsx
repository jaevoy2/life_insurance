import { Link } from 'react-router-dom'
import { products, insurerLogos, PHONE_TOLL } from '../data.js'
import QuoteForm from '../components/QuoteForm.jsx'

const icons = {
  shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z" />,
  pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
  home: <path d="M4 11l8-7 8 7v9H4z" />,
}
const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icons[name]}</svg>
)

const featured = [
  { icon: 'shield', title: 'Term Life', image: '/images/term.jpg', text: 'Affordable coverage for 10, 20 or 30 years to protect your income and family.', to: '/term-insurance' },
  { icon: 'heart', title: 'Whole Life', image: '/images/whole-life.jpg', text: 'Permanent protection that lasts a lifetime and can build cash value.', to: '/whole-life' },
  { icon: 'pulse', title: 'Critical Illness', text: 'A tax-free lump sum if you face a serious diagnosis.', to: '/critical-illness' },
  { icon: 'home', title: 'Mortgage Insurance', image: '/images/mortgage-insurance.gif', text: 'Keep the home in the family. Compare lender vs personal coverage.', to: '/mortgage-insurance', dark: true },
]

const steps = [
  ['01', 'Tell us your needs', 'A quick form or call about your goals, family and budget.'],
  ['02', 'We compare insurers', 'We shop 15+ Canadian and international companies for you.'],
  ['03', 'You are covered', 'We handle the application and stay with you for the long run.'],
]

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <span className="pill-tag">ABF Insurance Brokers · North Rustico, PEI</span>
          <h1>Protect what matters most, <em>across PEI</em></h1>
          <p>Affordable insurance and retirement products for Islanders. We compare 15+ insurers so you get real choice, plain language and exceptional service.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn">Get a free quote</Link>
            <a href="tel:18449405927" className="btn ghost">{PHONE_TOLL}</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <img className="hero-logo" src="/images/abf-insurance-brokers.png" alt="" />
          <div className="chip chip1"><strong>15+</strong> insurers compared</div>
          <div className="chip chip2"><strong>Free</strong> no-obligation quotes</div>
          <span className="plus">+</span>
        </div>
      </section>

      <section className="container cards4">
        {featured.map(f => (
          <article key={f.title} className={'tile' + (f.dark ? ' dark' : '')}>
            {f.image ? <img className="tile-img" src={f.image} alt="" /> : <span className="icon-dot"><Icon name={f.icon} /></span>}
            <h3>{f.title}</h3>
            <p>{f.text}</p>
            <div className="tile-actions">
              <Link to={f.to} className={'btn sm' + (f.dark ? ' light' : '')}>Learn more</Link>
              <Link to="/contact" className="btn sm ghost">Quote</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container mosaic">
        <div className="mosaic-a">
          <img src="/images/health-insurance-guaranteed.png" alt="" className="mosaic-logo" />
          <strong>Real product choice</strong>
          <span>Not tied to one company</span>
        </div>
        <div className="mosaic-b" aria-hidden="true"><img src="/images/retirement-planning.png" alt="" /></div>
        <h2>Simple, honest advice for every stage of life.</h2>
      </section>

      <section className="container duo">
        <article className="panel soft">
          <h3>Insurance in plain language</h3>
          <p>No hidden clauses and no confusing jargon. We explain your options so you can decide with confidence.</p>
          <Link to="/mortgage-insurance-vs-life-insurance" className="btn sm">Mortgage vs Life</Link>
        </article>
        <article className="panel warm">
          <span className="pill-tag light">Your broker</span>
          <h3>Meet Paul Trainor</h3>
          <p>Personal guidance from a licensed Island broker who shops the market on your behalf.</p>
          <Link to="/paul-trainor" className="btn sm light">About Paul</Link>
        </article>
      </section>

      <section className="container navy-band">
        <div>
          <h2>We&apos;re with you every step of the way</h2>
          <ol className="steps">
            {steps.map(s => (
              <li key={s[0]}><span>{s[0]}</span><div><strong>{s[1]}</strong><p>{s[2]}</p></div></li>
            ))}
          </ol>
          <Link to="/contact" className="btn light">Start now</Link>
        </div>
        <div className="white-card">
          <h4>Popular services</h4>
          {products.slice(0, 6).map(p => (
            <Link key={p.slug} to={'/' + p.slug} className="list-row"><span>{p.name}</span><span>→</span></Link>
          ))}
          <div className="logos">{insurerLogos.map(([n, src]) => <img key={n} src={src} alt={n} />)}</div>
        </div>
      </section>

      <section className="container quote-band">
        <div>
          <h2>Get your <em>free quote</em></h2>
          <p>Tell us what you need and we will compare options from multiple insurers for you.</p>
        </div>
        <QuoteForm />
      </section>
    </>
  )
}
