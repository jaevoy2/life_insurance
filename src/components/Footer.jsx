import { Link } from 'react-router-dom'
import { products, PHONE_TOLL, PHONE_LOCAL, EMAIL, ADDRESS } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo light"><img src="/images/abf-insurance-brokers.png" alt="ABF Insurance Brokers" className="logo-img foot" /></div>
          <p>ABF Insurance Brokers. Affordable insurance &amp; retirement products for Islanders.</p>
        </div>
        <div>
          <h4>Services</h4>
          {products.map(p => <Link key={p.slug} to={'/' + p.slug}>{p.name}</Link>)}
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/paul-trainor">Paul Trainor</Link>
          <Link to="/location">Location</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={'tel:' + PHONE_TOLL.replace(/-/g, '')}>{PHONE_TOLL}</a>
          <a href="tel:9029405927">{PHONE_LOCAL}</a>
          <a href={'mailto:' + EMAIL}>{EMAIL}</a>
          <span>{ADDRESS}</span>
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} Life Insurance PEI. All rights reserved.</div>
    </footer>
  )
}
