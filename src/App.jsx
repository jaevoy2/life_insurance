import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import useReveal from './useReveal.js'
import { notifyVisit } from './visitorNotify.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import Location from './pages/Location.jsx'
import Broker from './pages/Broker.jsx'
import MortgageVsLife from './pages/MortgageVsLife.jsx'
import IncomeCalculator from './pages/IncomeCalculator.jsx'
import RetirementCalculator from './pages/RetirementCalculator.jsx'
import Privacy from './pages/Privacy.jsx'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { notifyVisit() }, [])
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mortgage-insurance-vs-life-insurance" element={<MortgageVsLife />} />
          <Route path="/income-replacement-calculator" element={<IncomeCalculator />} />
          <Route path="/retirement-calculator" element={<RetirementCalculator />} />
          <Route path="/paul-trainor" element={<Broker />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/:slug" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
