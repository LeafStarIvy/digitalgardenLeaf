---
{"dg-publish":true,"permalink":"/01-home/testing-another-note-1-1-1-1-1-1-1-1/","contentClasses":"theme-auto dg-grid cols-auto gap-md stagger-container","noteIcon":"","created":"2025-09-22T17:02:12.611+02:00","updated":"2025-09-22T17:29:26.595+02:00"}
---


<!--
  FRONT PAGE: "Garden Hub" — a rich, side-by-side layout built from the archetypes.
  - Top -> most important: hero, immediate actions, pinned nav
  - Middle -> curated collections, external links, playlists
  - Lower -> recent notes, shortcuts, stats, deck, admin legend
  - All cards are per-card themed. Effects are opt-in only (no defaults).
-->

<!-- =========================
     HERO / PRIMARY (full-width)
     - big intro, primary CTAs, parallax layer
   ========================= -->
<a class="dg-card dg-link dg-card--hero card-hero card-theme-crystal effect-glass subtle-pop"
   href="/about" aria-label="About this Garden" style="--stagger-index:0;">
  <img class="parallax-layer" src="/img/MALOGO/Fullflavor.png" alt="" aria-hidden>
  <img class="hero-bg" src="/img/MALOGO/Fullflavor.png" alt="" aria-hidden>
  <div class="hero-overlay" aria-hidden></div>

  <div class="hero-badge">Garden Hub</div>
  <h1 class="hero-title">Welcome — My Digital Garden</h1>
  <p class="hero-lead">This page is the central hub for everything I care about: projects, prompts, playlists,
     saved clips, tools, reading, and external resources. Cards are intentionally translucent so the background sets the mood.</p>

  <div class="hero-ctas">
    <a class="hero-cta" href="/today">Today / Quick Start</a>
    <a class="hero-cta primary" href="/collections">Explore Collections</a>
    <a class="hero-cta" href="/capture">Quick Capture</a>
  </div>
</a>

<!-- =========================
     QUICK NAV ROW (High priority) — up to 6 side-by-side
     - Use compact nav cards for immediate entry points
   ========================= -->
<div class="dg-grid cols-auto" role="navigation" aria-label="Primary shortcuts" style="--stagger-index:1;">
  <a class="dg-card dg-link dg-card--md card-nav card-theme-forest" href="/projects" aria-label="Projects">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:8px;object-fit:cover;" alt=""></div>
      <div class="title-wrap"><div class="nav-title">Projects</div><div class="nav-desc">Boards & active work</div></div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <a class="dg-card dg-link dg-card--md card-nav card-theme-paper" href="/prompts" aria-label="Prompts">
    <div class="nav-left">
      <div class="card-ico">🧠</div>
      <div class="title-wrap"><div class="nav-title">Prompts</div><div class="nav-desc">Text & image templates</div></div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <a class="dg-card dg-link dg-card--md card-nav card-theme-ocean" href="/music" aria-label="Music">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt=""></div>
      <div class="title-wrap"><div class="nav-title">Music</div><div class="nav-desc">Playlists & artists</div></div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <a class="dg-card dg-link dg-card--md card-nav card-theme-vintage" href="/reading" aria-label="Reading">
    <div class="nav-left">
      <div class="card-ico">📚</div>
      <div class="title-wrap"><div class="nav-title">Reading</div><div class="nav-desc">Books & notes</div></div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <a class="dg-card dg-link dg-card--md card-nav card-theme-ceramic" href="/tools" aria-label="Tools">
    <div class="nav-left">
      <div class="card-ico">⚙️</div>
      <div class="title-wrap"><div class="nav-title">Tools</div><div class="nav-desc">Snippets & scripts</div></div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <a class="dg-card dg-link dg-card--md card-nav card-theme-pastel" href="/clips" aria-label="Clips">
    <div class="nav-left">
      <div class="card-ico">🎬</div>
      <div class="title-wrap"><div class="nav-title">Clips</div><div class="nav-desc">Saved gameplay & edits</div></div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>
</div>

<!-- =========================
     FEATURED / PILLARS (important categories; 3-up layout)
   ========================= -->
<div class="dg-grid cols-auto gap-md" role="list" aria-label="Featured pillars" style="--stagger-index:2;">
  <a class="dg-card dg-link dg-card--lg card-theme-velvet effect-gradient-border effect-glow" href="/featured/visuals">
    <div class="dg-content">
      <h3 class="dg-title">Featured Visuals</h3>
      <div class="dg-sub">Curated artwork & showcase</div>
      <p class="dg-excerpt">A rotating selection of visuals I return to. Use this to spotlight big projects or collabs.</p>
    </div>
  </a>

  <a class="dg-card dg-link dg-card--lg card-theme-crystal card-collection" href="/collections/personal-knowledge">
    <div class="dg-content">
      <h3 class="dg-title">Knowledge Collections</h3>
      <div class="dg-sub">PKM, systems & notes</div>
      <p class="dg-excerpt">Topic hubs linking to deep-dive notes and evergreen resources.</p>
    </div>
  </a>

  <a class="dg-card dg-link dg-card--lg card-theme-aurora card-playlist" href="/music/essentials">
    <img class="playlist-image" src="/img/MALOGO/Fullflavor.png" alt="Essentials playlist">
    <div class="play-overlay"><div class="play-icon">▶</div></div>
    <div class="playlist-body">
      <h4 class="dg-title">Essentials</h4>
      <div class="dg-sub">Music that keeps me productive</div>
    </div>
  </a>
</div>

<!-- =========================
     EXTERNAL LINKS — per-card themes + external icons
     (Open external sites in new tab; rel attributes present)
   ========================= -->

<!-- =========================
     RECENT NOTES (compact grid + mini meta)
   ========================= -->
<h2 class="dg-title">Recent Notes & Captures</h2>

<div class="dg-grid cols-auto gap-sm" role="list" aria-label="Recent notes" style="--stagger-index:5;">
  <a class="dg-card dg-link card-note card-theme-minimal" href="/notes/today" role="listitem">
    <div class="card-head">
      <img class="card-thumb" src="/img/MALOGO/Fullflavor.png" alt="">
      <div class="title-wrap"><h4 class="dg-title">Daily Capture</h4><div class="dg-sub">Today • Quick log</div></div>
    </div>
    <div class="dg-excerpt">Two quick ideas, a reference link, and a TODO to file.</div>
    <div class="card-meta-row"><div>5 min read</div><div class="dg-tag">Journal</div></div>
  </a>

  <a class="dg-card dg-link card-note card-theme-paper" href="/notes/idea-fastsearch">
    <div class="card-head"><div class="card-ico">🧩</div><div class="title-wrap"><h4 class="dg-title">Fast Search Idea</h4><div class="dg-sub">Research notes</div></div></div>
    <div class="dg-excerpt">Notes on indexing and quick retrieval strategy using tags + backlinks.</div>
    <div class="card-meta-row"><div>Updated 2d</div><div class="dg-tag">PKM</div></div>
  </a>

  <a class="dg-card dg-link card-note card-theme-ceramic" href="/notes/reading-notes">
    <div class="card-head"><img class="card-ico" src="/img/MALOGO/Fullflavor.png" alt=""><div class="title-wrap"><h4 class="dg-title">Reading Notes — 'Atomic Docs'</h4><div class="dg-sub">Book highlights</div></div></div>
    <div class="dg-excerpt">Line-level notes & my takeaway list — quick to reference when writing.</div>
    <div class="card-meta-row"><div>16 pages</div><div class="dg-tag">Reading</div></div>
  </a>

  <a class="dg-card dg-link card-note card-theme-midnight" href="/notes/code-snippets">
    <div class="card-head"><div class="card-ico">💻</div><div class="title-wrap"><h4 class="dg-title">Code Snippets</h4><div class="dg-sub">Useful copy/paste</div></div></div>
    <div class="dg-excerpt">Small helpers I reuse across projects (build scripts & dev commands).</div>
    <div class="card-meta-row"><div>3 items</div><div class="dg-tag">Dev</div></div>
  </a>

  <a class="dg-card dg-link card-note card-theme-pastel" href="/notes/recipes">
    <div class="card-head"><img class="card-thumb" src="/img/MALOGO/Fullflavor.png" alt=""><div class="title-wrap"><h4 class="dg-title">Pasta Riffs</h4><div class="dg-sub">Kitchen experiments</div></div></div>
    <div class="dg-excerpt">Simple steps & tasting notes for quick reference while cooking.</div>
    <div class="card-meta-row"><div>7 steps</div><div class="dg-tag">Food</div></div>
  </a>
</div>

<!-- =========================
     SHORTCUTS & ACTIONS (very high utility)
   ========================= -->
<div class="dg-grid cols-auto gap-sm" style="--stagger-index:6;">
  <a class="dg-card dg-link card-compact card-theme-minimal" href="/capture" aria-label="Quick Capture"><div class="compact-icon">✚</div><div class="compact-text">Quick Capture</div></a>
  <a class="dg-card dg-link card-compact card-theme-mono" href="/search" aria-label="Search"><div class="compact-icon">🔎</div><div class="compact-text">Search Vault</div></a>
  <a class="dg-card dg-link card-compact card-theme-paper" href="/new-note" aria-label="New Note"><div class="compact-icon">📝</div><div class="compact-text">New Note</div></a>
  <a class="dg-card dg-link card-compact card-theme-ceramic" href="/export" aria-label="Export"><div class="compact-icon">⬇️</div><div class="compact-text">Export</div></a>
  <a class="dg-card dg-link card-compact card-theme-terminal" href="/terminal" aria-label="Commands"><div class="compact-icon">⌘</div><div class="compact-text">Commands</div></a>
  <a class="dg-card dg-link card-compact card-theme-retro" href="/archive" aria-label="Archive"><div class="compact-icon">🗄️</div><div class="compact-text">Archive</div></a>
</div>

<!-- =========================
     STATS + KPI (small dashboard)
   ========================= -->
<div class="dg-grid cols-auto gap-md" style="--stagger-index:7;">
  <a class="dg-card dg-link card-stats card-theme-ceramic" href="/stats/notes"><div class="stat-number">1,284</div><div class="stat-label">Notes</div><div class="stat-delta">+4.8% this month</div></a>
  <a class="dg-card dg-link card-stats card-theme-aurora" href="/stats/music"><div class="stat-number">248</div><div class="stat-label">Playlists</div><div class="stat-delta">+2</div></a>
  <a class="dg-card dg-link card-stats card-theme-forest" href="/stats/projects"><div class="stat-number">32</div><div class="stat-label">Active Projects</div><div class="stat-delta">-1</div></a>
</div>

<!-- =========================
     PRIORITY DECK (small overlapping stack for 'now' items)
   ========================= -->
<div class="dg-deck" style="--stagger-index:8;">
  <a class="dg-card dg-link dg-card--lg card-stack-3 card-theme-timber" href="/archive">
    <div class="dg-content"><h3 class="dg-title">Archive</h3><div class="dg-sub">Reference</div></div>
  </a>

  <a class="dg-card dg-link dg-card--lg card-stack-2 card-theme-pastel" href="/backlog">
    <div class="dg-content"><h3 class="dg-title">Backlog</h3><div class="dg-sub">Ideas to triage</div></div>
  </a>

  <a class="dg-card dg-link dg-card--lg card-stack-1 card-theme-velvet effect-glass effect-tilt" data-tilt="mild" href="/today">
    <div class="dg-content"><h3 class="dg-title">Now / Today</h3><div class="dg-sub">Focus & quick actions</div></div>
  </a>
</div>

<!-- =========================
     FOOTER — sitemap, tags and admin quick links
   ========================= -->
<div class="dg-grid cols-auto gap-sm" style="margin-top:var(--space-lg); --stagger-index:9;">
  <a class="dg-card dg-link card-compact card-theme-mono" href="/sitemap"><div class="compact-icon">🗺️</div><div class="compact-text">Site Map</div></a>
  <a class="dg-card dg-link card-compact card-theme-paper" href="/tags"><div class="compact-icon">🏷️</div><div class="compact-text">Tags</div></a>
  <a class="dg-card dg-link card-compact card-theme-ceramic" href="/settings"><div class="compact-icon">⚙️</div><div class="compact-text">Settings</div></a>
  <a class="dg-card dg-link card-compact card-theme-retro" href="/admin-legend"><div class="compact-icon">❓</div><div class="compact-text">Legend</div></a>
  <a class="dg-card dg-link card-compact card-theme-bubblegum" href="mailto:you@example.com" target="_blank" rel="noopener noreferrer"><div class="compact-icon">✉️</div><div class="compact-text">Contact</div></a>
  <a class="dg-card dg-link card-compact card-theme-velvet" href="/donate" aria-label="Support"><div class="compact-icon">♥</div><div class="compact-text">Support</div></a>
</div>

<!-- =========================
     END — small guidance (editor visible)
   ========================= -->
<div style="padding:var(--space-sm); opacity:0.9; font-size:0.9rem; color:var(--text-secondary); margin-top:var(--space-lg);">
  <div><strong>How to edit:</strong> change any card's class to swap theme (e.g., <code>card-theme-aurora</code>). Add / remove effect classes (e.g., <code>effect-shimmer</code>, <code>effect-parallax</code>) only where you want them.</div>
  <div style="margin-top:0.6rem"><strong>Performance tip:</strong> for index pages with many cards, add <code>dg-compact-mode</code> to <code>dg-content-classes</code> to disable heavy paints (backdrop-filter, shimmer).</div>
</div>
