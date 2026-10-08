import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { PHONE_TOLL } from '../data.js'

export default function Broker() {
  return (
    <>
      <PageHero title="Paul" accent="Trainor">Licensed insurance broker, ABF Insurance Brokers.</PageHero>
      <section className="container narrow">
        <p className="lead">Paul helps Islanders find affordable life insurance and retirement products with exceptional service and guidance.</p>
        <p>As an independent broker, we shop 15+ Canadian and international insurers rather than selling the products of a single company, so you get real product choice.</p>
        <p>Call <a href={'tel:18449405927'}>{PHONE_TOLL}</a> or <Link to="/contact">request a quote online</Link>.</p>
      </section>
    </>
  )
}
