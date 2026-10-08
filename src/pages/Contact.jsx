import PageHero from '../components/PageHero.jsx'
import QuoteForm from '../components/QuoteForm.jsx'
import { PHONE_TOLL, PHONE_LOCAL, ADDRESS } from '../data.js'

export default function Contact() {
  return (
    <>
      <PageHero title="Contact" accent="us">Request a free, no-obligation quote.</PageHero>
      <section className="container two-col">
        <div>
          <div className="card info">
            <h3>Reach us</h3>
            <p><strong>Toll-free:</strong> <a href="tel:18449405927">{PHONE_TOLL}</a></p>
            <p><strong>Local:</strong> <a href="tel:9029405927">{PHONE_LOCAL}</a></p>
            <p><strong>Address:</strong> {ADDRESS}</p>
          </div>
        </div>
        <QuoteForm />
      </section>
    </>
  )
}
