export default function PageHero({ title, accent, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title} {accent && <em>{accent}</em>}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  )
}
