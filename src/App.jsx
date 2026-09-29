import SlackDemo from './SlackDemo.jsx'
import { Logo, integrations } from './logos.jsx'

const APP_URL = 'https://openaide.vercel.app'
const INSTALL_URL = 'https://openaide.vercel.app/get-started'

const icon = {
  memory: (
    <path d="M12 3c4.4 0 8 1.8 8 4v10c0 2.2-3.6 4-8 4s-8-1.8-8-4V7c0-2.2 3.6-4 8-4Zm-8 4c0 2.2 3.6 4 8 4s8-1.8 8-4M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" />
  ),
  skills: (
    <path d="M5 4h10l4 4v12H5V4Zm10 0v4h4M8.5 12.5h7M8.5 16h5" />
  ),
  approvals: (
    <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Zm-3.2 9.2 2.2 2.2 4.4-4.6" />
  ),
}

const features = [
  {
    key: 'memory',
    label: 'Memory',
    title: 'Remembers everything',
    body: "Persistent memory across every session. Jared learns your company's context once - your clients, your pipeline, your voice - and keeps it.",
  },
  {
    key: 'skills',
    label: 'Skills',
    title: 'Studies your workspace',
    body: 'Jared reads how your team works and writes durable skills for itself: your playbooks, in its own words, getting sharper with every run.',
  },
  {
    key: 'approvals',
    label: 'Approvals',
    title: 'Asks before it acts',
    body: 'Reads are free. Every write waits for a yes from a human, with a full audit trail of what ran and who approved it.',
  },
]

const workflows = [
  { n: '01', title: 'Founder briefing', body: 'A morning read on what changed overnight: leads, invoices, standups, and the three things that need a decision.' },
  { n: '02', title: 'Client status report', body: 'Pulls the state of every engagement into one update your clients can read without a call.' },
  { n: '03', title: 'Sales follow-up', body: 'Drafts the follow-ups your pipeline is owed, then holds every send behind an approval gate.' },
]

const pricing = [
  { metric: 'Starter credits', note: 'Every new workspace starts with 10,000 credits on us.', value: '10,000' },
  { metric: 'Per connected tool', note: 'Each tool your team connects adds 2,000 more credits.', value: '+2,000' },
  { metric: 'Usage-based billing', note: 'Hosted by us, metered by the work Jared actually does.', value: 'Per token' },
]

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="wordmark">Jared</a>
        <nav className="nav-links" aria-label="Sections">
          <a href="#workflows">Workflows</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="nav-cta">
          <a href={APP_URL} className="nav-text">Live product</a>
          <a href={INSTALL_URL} className="btn btn-primary btn-sm">Add to Slack</a>
        </div>
      </div>
    </header>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero */}
        <section className="hero wrap">
          <p className="eyebrow">Not a tool, a hire.</p>
          <h1 className="display-lg">
            Your team's <mark>AI coworker</mark> lives in Slack
          </h1>
          <p className="lede">
            Jared joins your workspace like a new hire. It remembers every conversation,
            connects to the tools you already use, and returns finished work - asking
            before it acts on anything that matters.
          </p>
          <div className="actions">
            <a href={INSTALL_URL} className="btn btn-primary">Add Jared to Slack</a>
            <a href="#demo" className="btn btn-ghost">See how it works</a>
          </div>
          <p className="caption fog">Free to start - 10,000 credits for every new workspace.</p>
        </section>

        {/* Product mock */}
        <section className="canvas" id="demo">
          <div className="wrap">
            <div className="mock">
              <SlackDemo />
            </div>
            <p className="caption fog center mock-note">
              A scripted tour of a demo workspace - no real customer data.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="section wrap">
          <p className="eyebrow left">Capabilities</p>
          <h2 className="display">
            What a hire <mark>actually</mark> does
          </h2>
          <p className="lede left">
            Everything Jared does, it does inside Slack - the place your team already works.
          </p>
          <div className="cards">
            {features.map((f) => (
              <article key={f.key} className="card">
                <svg className="card-icon" viewBox="0 0 24 24" aria-hidden="true">
                  {icon[f.key]}
                </svg>
                <p className="eyebrow left">{f.label}</p>
                <h3 className="heading-sm">{f.title}</h3>
                <p className="body">{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="section wrap" id="workflows">
          <p className="eyebrow left">Workflows</p>
          <h2 className="display">Ships with real workflows</h2>
          <p className="lede left">Running in production from day one of the install.</p>
          <ol className="rows">
            {workflows.map((w) => (
              <li key={w.n} className="row">
                <span className="row-n">{w.n}</span>
                <span className="row-title">{w.title}</span>
                <span className="row-body">{w.body}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Integrations */}
        <section className="canvas section-pad" id="integrations">
          <div className="wrap center-block">
            <p className="eyebrow">Integrations</p>
            <h2 className="display">
              <mark>3,000+</mark> tools, one connection flow
            </h2>
            <p className="lede">
              Jared connects to the apps your team already uses through Pipedream Connect -
              each person links their own accounts, and every write stays approval-gated.
            </p>
            <ul className="logos">
              {integrations.map((name) => (
                <li key={name} className="logo">
                  <Logo name={name} />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section className="section wrap" id="pricing">
          <p className="eyebrow left">Pricing</p>
          <h2 className="display">Pay for what it does</h2>
          <p className="lede left">
            Usage-based pricing, per token. No seat licenses, no tiers to decode.
          </p>
          <div className="table-card">
            <table className="metrics">
              <tbody>
                {pricing.map((r) => (
                  <tr key={r.metric}>
                    <th scope="row">
                      <span className="m-name">{r.metric}</span>
                      <span className="m-note">{r.note}</span>
                    </th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="closing wrap">
          <h2 className="display-lg">
            Hire <mark>Jared</mark>.
          </h2>
          <p className="lede">One OAuth install and it is in your Slack, learning the business.</p>
          <div className="actions">
            <a href={INSTALL_URL} className="btn btn-primary">Add Jared to Slack</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="wordmark">Jared</span>
          <span className="caption fog">An AI coworker for teams.</span>
        </div>
      </footer>
    </>
  )
}
