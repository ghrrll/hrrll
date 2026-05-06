// ─────────────────────────────────────────────
//  hrrll.com — site content
//  Edit this file to update copy on the site.
//  Wrap a phrase in <em>...</em> for gold italic accent.
// ─────────────────────────────────────────────

const CONTENT = {

  // Tagline under the wordmark. Use <span class="dot">·</span> as separator.
  role: `Product <span class="dot">·</span> AI <span class="dot">·</span> Strategy`,

  // Short bio paragraph. <em> phrases will be styled gold + italic.
  bio: `Nine years turning <em>messy business problems</em> into products people actually use — across hospitality, data, healthcare, and AI. My work lives at the intersection of data and customer empathy.`,

  // Work column — three short items.
  work: [
    {
      label: "Currently",
      text:  `Director of Product at <em>Kalibri</em> — building data and AI products for the hotel industry.`
    },
    {
      label: "Building",
      text:  `An AI product layer inside Kalibri — competitive intelligence agents, automated market briefings, revenue analytics.`
    },
    {
      label: "On the side",
      text:  `<em>hrrll</em> — design &amp; build for people and projects I believe in.`
    }
  ],

  // Now section — what you're up to right now. Edit freely.
  // Use <em>...</em> for emphasis (renders gold italic).
  // Use <span class="by">— author</span> for secondary text.
  now: [
    { key: "Reading",   val: `<em>For we are Many</em> <span class="by">— Dennis E. Taylor</span>` },
    { key: "Listening", val: `<em>Miles Davis</em>, on repeat` },
    { key: "In my Free Time",  val: `A 130 yearold house full of projects and me having no idea what I'm doing` },
    { key: "Drinking",  val: `Coffee, always coffee....` }
  ],

  // Contact links. Email is rendered first (primary CTA).
  links: {
    email:    "graham@hrrll.com",
    linkedin: "https://www.linkedin.com/in/grahamharrell",
    github:   "https://github.com/ghrrll",
    calendar: "https://calendar.app.google/yeAArevTXXeCeWkp9"
  },

  footer: "© hrrll · MMXXVI"

};
