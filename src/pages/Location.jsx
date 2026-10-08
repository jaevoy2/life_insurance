import PageHero from '../components/PageHero.jsx'
import { ADDRESS, PHONE_LOCAL } from '../data.js'

export default function Location() {
  const q = encodeURIComponent(ADDRESS)
  return (
    <>
      <PageHero title="Our" accent="location">Visit us in North Rustico, Prince Edward Island.</PageHero>
      <section className="container">
        <p className="lead">{ADDRESS} · {PHONE_LOCAL}</p>
        <iframe className="map" title="Map" loading="lazy" src={`https://www.google.com/maps?q=${q}&output=embed`} />
      </section>
    </>
  )
}
