// Scripted tour of a demo workspace — no real customer data.
// Each item's `next` is the delay (ms) before the following item appears.

export const people = {
  maya: { name: 'Maya Chen', init: 'MC', tone: 't1' },
  daniel: { name: 'Daniel Okafor', init: 'DO', tone: 't2' },
  sofia: { name: 'Sofia Reyes', init: 'SR', tone: 't3' },
  priya: { name: 'Priya Nair', init: 'PN', tone: 't4' },
  jared: { name: 'Jared', init: 'J', tone: 'jt' },
}

const At = ({ children }) => <span className="mention">{children}</span>

export const scenes = [
  {
    channel: 'founder',
    topic: 'Company-wide radar for the CEO',
    items: [
      { kind: 'msg', who: 'maya', time: '8:01 AM', next: 1600, text: <><At>@Jared</At> compare this week's signups to last week and flag anything that moved more than 10%</> },
      { kind: 'typing', next: 1800 },
      { kind: 'msg', who: 'jared', time: '8:06 AM', next: 2200, text: <>Signups are <b>up 23% week over week</b> - the only core metric that moved more than 10%. CAC is down 8%, activation is flat. The spike traces to Tuesday's Product Hunt feature. Want this as a recurring Monday briefing?</> },
      { kind: 'msg', who: 'daniel', time: '8:07 AM', next: 1400, text: <>yes please, and add pipeline movement to it</> },
      { kind: 'typing', next: 1400 },
      { kind: 'msg', who: 'jared', time: '8:07 AM', next: 4600, text: <>Done - every Monday at 8 AM in this channel, signups plus pipeline movement. I saved that as the <b>monday-metrics</b> skill so it runs the same way every week.</> },
    ],
  },
  {
    channel: 'clients',
    topic: 'Client work and reports',
    items: [
      { kind: 'msg', who: 'jared', time: '2:41 PM', next: 2200, reaction: '2', text: <>Heads up - Acme's invoice #1042 is now <b>7 days overdue</b>, and their last two threads mention a budget review. I drafted a friendly nudge that references the milestone we shipped Friday.</> },
      { kind: 'approval', title: 'Invoice nudge - Acme Corp', body: "Friendly reminder referencing Friday's milestone, tone matched to their last thread.", next: 4200 },
      { kind: 'approved', label: '✓ Approved · nudge sent at 2:44 PM', next: 1200 },
      { kind: 'msg', who: 'jared', time: '2:44 PM', next: 2000, text: <>Sent. I'll watch for the reply and follow up in 4 days if it goes quiet.</> },
      { kind: 'msg', who: 'priya', time: '2:45 PM', next: 4400, text: <>nice catch</> },
    ],
  },
  {
    channel: 'sales',
    topic: 'Pipeline and follow-ups',
    items: [
      { kind: 'msg', who: 'sofia', time: '9:11 AM', next: 1500, text: <>Pipeline review is tomorrow - <At>@Jared</At> pull every deal stuck over 2 weeks, flag the three biggest, and draft re-engagement notes for each</> },
      { kind: 'status', text: 'Pulling live deals from HubSpot…', next: 2400 },
      { kind: 'msg', who: 'jared', time: '9:13 AM', next: 1600, text: <><b>9 deals</b> have been stuck over 2 weeks. Biggest three: <b>Acme ($48k)</b>, <b>Meridian ($36k)</b>, <b>Foxglove ($22k)</b>. Re-engagement notes are drafted for all 9, tone matched to each thread.</> },
      { kind: 'approval', title: 'Sales follow-up workflow', body: '9 re-engagement emails drafted. Review them in your dashboard, or approve here.', next: 4400 },
      { kind: 'approved', label: '✓ Approved · 9 emails sent at 9:16 AM', next: 1200 },
      { kind: 'msg', who: 'jared', time: '9:16 AM', next: 4600, text: <>Sent. Replies land in HubSpot, and I'll bump anything unanswered in 3 days.</> },
    ],
  },
  {
    channel: 'eng',
    topic: 'Builds, deploys, incidents',
    items: [
      { kind: 'msg', who: 'priya', time: '10:32 AM', next: 1900, text: <>is anyone else seeing checkout errors this morning?</> },
      { kind: 'msg', who: 'jared', time: '10:33 AM', next: 2400, text: <>I am - <b>14 failed checkouts since 8 AM</b>, all hitting the same Stripe timeout. Filed <b>ENG-212</b> in Linear with the logs attached and posted the workaround in <At>#support</At>.</> },
      { kind: 'msg', who: 'daniel', time: '10:34 AM', next: 1600, text: <>how did you catch that so fast</> },
      { kind: 'msg', who: 'jared', time: '10:34 AM', next: 4800, text: <>I watch the error stream the way I watch your inboxes. The triage format came from the <b>incident-triage</b> skill I wrote last month - it gets sharper every incident.</> },
    ],
  },
]
