import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={close}><img src="/images/abf-insurance-brokers.png" alt="ABF Insurance Brokers" className="logo-img" /></Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
        <nav className={'nav' + (open ? ' open' : '')}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <div className="dropdown">
            <span className="dd-label">Services ▾</span>
            <div className="dd-menu">
              {products.map(p => <NavLink key={p.slug} to={'/' + p.slug} onClick={close}>{p.name}</NavLink>)}
              <a href="https://www.peitravelinsurance.com/" target="_blank" rel="noreferrer">Travel Insurance ↗</a>
              <a href="http://www.peibusinessfederation.org/peiautoinsurance.html" target="_blank" rel="noreferrer">Auto &amp; Home ↗</a>
            </div>
          </div>
          <div className="dropdown">
            <span className="dd-label">Tools ▾</span>
            <div className="dd-menu">
              <NavLink to="/income-replacement-calculator" onClick={close}>Income Replacement Calculator</NavLink>
              <NavLink to="/retirement-calculator" onClick={close}>Retirement Calculator</NavLink>
              <NavLink to="/mortgage-insurance-vs-life-insurance" onClick={close}>Mortgage vs Life Insurance</NavLink>
            </div>
          </div>
          <NavLink to="/paul-trainor" onClick={close}>About us</NavLink>
          <NavLink to="/location" onClick={close}>Location</NavLink>
          <NavLink to="/contact" className="nav-cta" onClick={close}>Get started</NavLink>
        </nav>
      </div>
    </header>
  )
}
