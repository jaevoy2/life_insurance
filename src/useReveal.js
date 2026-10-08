import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TARGETS = '.hero, .tile, .mosaic > *, .panel, .navy-band, .quote-band > *, .page-hero, .two-col > *, .narrow > *, .card, .footer-grid > *, .section-title'

// Fades/slides elements in as they scroll into view; re-runs on every route change.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    const els = document.querySelectorAll(TARGETS)
    els.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--d', `${(i % 4) * 80}ms`)
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])
}
