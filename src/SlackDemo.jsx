import { useEffect, useState } from 'react'
import { people, scenes } from './demoScript.jsx'

const reduceMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function Avatar({ who }) {
  const p = people[who]
  return <span className={'av ' + p.tone}>{p.init}</span>
}

function Dots() {
  return (
    <span className="dots" aria-hidden="true">
      <i /><i /><i />
    </span>
  )
}

function Message({ who, time, reaction, children }) {
  const p = people[who]
  return (
    <div className="msg">
      <Avatar who={who} />
      <div className="msg-main">
        <div className="msg-head">
          <span className="msg-name">{p.name}</span>
          {who === 'jared' && <span className="app-badge">APP</span>}
          <span className="msg-time">{time}</span>
        </div>
        <div className="msg-body">{children}</div>
        {reaction && <span className="reaction">👍 {reaction}</span>}
      </div>
    </div>
  )
}

function Approval({ title, body, approved, label }) {
  return (
    <div className="approval">
      <div className="approval-eyebrow">Needs approval</div>
      <div className="approval-title">{title}</div>
      <div className="approval-body">{body}</div>
      {approved ? (
        <div className="approval-done">{label}</div>
      ) : (
        <div className="approval-actions">
          <span className="abtn primary">Approve</span>
          <span className="abtn">Decline</span>
        </div>
      )}
    </div>
  )
}

export default function SlackDemo() {
  const [state, setState] = useState(
    reduceMotion ? { s: 0, n: scenes[0].items.length } : { s: 0, n: 0 },
  )
  const scene = scenes[state.s]

  useEffect(() => {
    if (reduceMotion) return
    const items = scenes[state.s].items
    const wait =
      state.n < items.length ? (state.n === 0 ? 800 : items[state.n - 1].next) : 4200
    const t = setTimeout(() => {
      setState((p) =>
        p.n < items.length ? { s: p.s, n: p.n + 1 } : { s: (p.s + 1) % scenes.length, n: 0 },
      )
    }, wait)
    return () => clearTimeout(t)
  }, [state])

  // Typing/status indicators disappear once the message they announce lands.
  const shown = scene.items
    .slice(0, state.n)
    .filter((it, i, all) =>
      it.kind === 'typing'
        ? !all.slice(i + 1).some((x) => x.kind === 'msg' || x.kind === 'status')
        : it.kind === 'status'
          ? !all.slice(i + 1).some((x) => x.kind === 'msg')
          : true,
    )

  const rows = []
  shown.forEach((it, i) => {
    if (it.kind === 'msg') {
      rows.push(
        <Message key={i} who={it.who} time={it.time} reaction={it.reaction}>
          {it.text}
        </Message>,
      )
    } else if (it.kind === 'typing') {
      rows.push(
        <div key={i} className="status">
          <Avatar who="jared" />
          <span>Jared is typing</span>
          <Dots />
        </div>,
      )
    } else if (it.kind === 'status') {
      rows.push(
        <div key={i} className="status">
          <Avatar who="jared" />
          <Dots />
          <em>{it.text}</em>
        </div>,
      )
    } else if (it.kind === 'approval') {
      const done = shown.slice(i + 1).find((x) => x.kind === 'approved')
      rows.push(
        <div key={i} className="msg">
          <Avatar who="jared" />
          <div className="msg-main">
            <Approval title={it.title} body={it.body} approved={!!done} label={done?.label} />
          </div>
        </div>,
      )
    }
  })

  return (
    <div className="slack" aria-label="Animated demo of Jared working in a Slack workspace">
      <aside className="sb">
        <div className="sb-ws">
          Lumen Studio <span className="sb-chev">▾</span>
        </div>
        <div className="sb-label">Channels</div>
        {scenes.map((sc, i) => (
          <div key={sc.channel} className={'sb-ch' + (i === state.s ? ' active' : '')}>
            <span className="hash">#</span> {sc.channel}
          </div>
        ))}
        <div className="sb-ch"><span className="hash">#</span> general</div>
        <div className="sb-ch"><span className="hash">#</span> support</div>
        <div className="sb-label">Direct messages</div>
        <div className="sb-ch">
          <span className="presence" /> Jared <span className="app-badge side">APP</span>
        </div>
      </aside>
      <div className="pane">
        <div className="pane-head">
          <span className="pane-name"><span className="hash">#</span>{scene.channel}</span>
          <span className="pane-topic">{scene.topic}</span>
          <span className="pane-members">
            <span className="stack">
              <Avatar who="maya" />
              <Avatar who="daniel" />
              <Avatar who="sofia" />
            </span>
            6
          </span>
        </div>
        <div className="pane-msgs" key={state.s} aria-live="polite">
          {rows}
        </div>
        <div className="composer">
          <span>Message #{scene.channel}</span>
          <span className="send" aria-hidden="true">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M8 13V3M3.5 7.5L8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}
