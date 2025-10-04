---
{"dg-publish":true,"permalink":"/look-back/01-home/testing-another-note-1-1-1-1-1-1-1/","contentClasses":"theme-auto stagger-container cols-auto gap-md","noteIcon":"","created":"2025-09-22T17:02:07.021+02:00","updated":"2025-09-23T20:04:57.370+02:00"}
---

<!-- HERO: compact, centered -->
<a class="dg-card card-hero hero-constrained card-theme-crystal effect-glass" href="/01-Home/dashboard-interface" aria-label="Welcome to my garden">
  <!-- Optional background images (either or both). Keep as early children so they sit behind content -->
  <img class="parallax-layer" src="/img/linkicons/mainbanner.png" alt="" aria-hidden>
  <img class="hero-bg" src="/img/linkicons/mainbanner.png" alt="" aria-hidden>

  <!-- overlay (ensures legibility even on bright backgrounds) -->
  <div class="hero-overlay" aria-hidden></div>

  <!-- all visible content stays inside hero-content -->
  <div class="hero-content">
    <div class="hero-badge">Hub • Home</div>
    <h1 class="hero-title">Welcome to my Digital garden</h1>
    <p class="hero-lead">This is the place where I store all information I collect and preserve. Things could get edited or disappear, this is for personal storage and for others too see and look into. I hope you find something that interests you or that you enjoy.</p>

    <div class="hero-ctas">
      <span class="hero-cta primary">Collections</span>
      <span class="hero-cta">Today</span>
      <span class="hero-cta">Quick Capture</span>
      <span class="hero-cta">For press here----></span>
    </div>
  </div>
</a>



<!-- ===========================
   TOP NAV / PORTALS — 1st row (fast access)
   * Most important links go here (internal first, then external)
   =========================== -->
<div class="dg-grid cols-auto gap-md" role="list" style="--stagger-index:1;">
  <!-- Projects -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-forest" href="/projects" role="listitem" aria-label="Projects">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt=""></div>
      <div class="title-wrap">
        <div class="nav-title">Projects</div>
        <div class="nav-desc">Boards, repos, active work</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Prompts -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-paper" href="/prompts" role="listitem" aria-label="Prompts">
    <div class="nav-left">
      <div class="card-ico">💡</div>
      <div class="title-wrap">
        <div class="nav-title">Prompts</div>
        <div class="nav-desc">Saved templates & experiments</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Music -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-ocean" href="/music" role="listitem" aria-label="Music">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt=""></div>
      <div class="title-wrap">
        <div class="nav-title">Music</div>
        <div class="nav-desc">Playlists & artists</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Clips (videos) -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-film" href="/clips" role="listitem" aria-label="Clips">
    <div class="nav-left">
      <div class="card-ico">🎬</div>
      <div class="title-wrap">
        <div class="nav-title">Saved Clips</div>
        <div class="nav-desc">Gameplay & highlights</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Collections -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-ceramic" href="/collections" role="listitem" aria-label="Collections">
    <div class="nav-left">
      <div class="card-ico">📚</div>
      <div class="title-wrap">
        <div class="nav-title">Collections</div>
        <div class="nav-desc">Curated lists & galleries</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Quick search -->
  <a class="dg-card dg-link dg-card--md card-compact card-theme-minimal" href="/search" role="listitem" aria-label="Search">
    <div class="compact-icon">🔎</div>
    <div class="compact-text">Search</div>
  </a>
</div>

<!-- ===========================
   FEATURED ROW — mixed widths (wide hero-card + two side cards)
   =========================== -->
<div class="dg-grid cols-auto gap-md" style="grid-template-columns: 2fr 1fr 1fr; --stagger-index:2;">
  <!-- Big featured -->
  <a class="dg-card dg-link dg-card--lg card-theme-velvet effect-gradient-border effect-glow" href="/featured" style="min-height:260px;">
    <div class="dg-content">
      <h3 class="dg-title">This Week — Picks & experiments</h3>
      <div class="dg-sub">A rotating selection of projects, music & prompts</div>
      <p class="dg-excerpt">Click to open a curated list. Swap this card’s theme or effects to instantly change emphasis.</p>
    </div>
  </a>

  <!-- Shortcut: YouTube playlist -->
  <a class="dg-card dg-link dg-card--md card-theme-neon effect-shimmer" href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">
    <img class="dg-image" src="/img/MALOGO/Fullflavor.png" alt="YouTube">
    <div class="dg-content">
      <h4 class="dg-title">YouTube — Saved Clips</h4>
      <div class="dg-sub">External videos & streams</div>
    </div>
  </a>

  <!-- Shortcut: GitHub -->
  <a class="dg-card dg-link dg-card--md card-theme-terminal" href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">
    <div class="dg-content">
      <h4 class="dg-title">GitHub</h4>
      <div class="dg-sub">Repos & snippets</div>
      <div class="dg-tags"><span class="dg-tag">code</span><span class="dg-tag">scripts</span></div>
    </div>
  </a>
</div>

<!-- ===========================
   QUICK ACTIONS / SHORTCUTS row (compact)
   =========================== -->
<div class="dg-grid cols-auto gap-sm" style="--stagger-index:3;">
  <a class="dg-card dg-link card-compact card-theme-minimal" href="/capture"><div class="compact-icon">✚</div><div class="compact-text">Quick Capture</div></a>
  <a class="dg-card dg-link card-compact card-theme-paper" href="/prompts/new"><div class="compact-icon">💾</div><div class="compact-text">Save Prompt</div></a>
  <a class="dg-card dg-link card-compact card-theme-mono" href="/shortcuts"><div class="compact-icon">⚡</div><div class="compact-text">Shortcuts</div></a>
  <a class="dg-card dg-link card-compact card-theme-ocean" href="/music/now"><div class="compact-icon">♪</div><div class="compact-text">Now Playing</div></a>
  <a class="dg-card dg-link card-compact card-theme-ceramic" href="/reading/now"><div class="compact-icon">📖</div><div class="compact-text">Reading</div></a>
  <a class="dg-card dg-link card-compact card-theme-forest" href="/projects/current"><div class="compact-icon">🧭</div><div class="compact-text">Active Project</div></a>
</div>

<div class="dg-grid cols-auto gap-md" role="list" style="--stagger-index:1;">
  <!-- Projects -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-forest" href="/projects" role="listitem" aria-label="Projects">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt=""></div>
      <div class="title-wrap">
        <div class="nav-title">Projects</div>
        <div class="nav-desc">Boards, repos, active work</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Prompts -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-paper" href="/prompts" role="listitem" aria-label="Prompts">
    <div class="nav-left">
      <div class="card-ico">💡</div>
      <div class="title-wrap">
        <div class="nav-title">Prompts</div>
        <div class="nav-desc">Saved templates & experiments</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Music -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-ocean" href="/music" role="listitem" aria-label="Music">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt=""></div>
      <div class="title-wrap">
        <div class="nav-title">Music</div>
        <div class="nav-desc">Playlists & artists</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Clips (videos) -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-film" href="/clips" role="listitem" aria-label="Clips">
    <div class="nav-left">
      <div class="card-ico">🎬</div>
      <div class="title-wrap">
        <div class="nav-title">Saved Clips</div>
        <div class="nav-desc">Gameplay & highlights</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Collections -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-ceramic" href="/collections" role="listitem" aria-label="Collections">
    <div class="nav-left">
      <div class="card-ico">📚</div>
      <div class="title-wrap">
        <div class="nav-title">Collections</div>
        <div class="nav-desc">Curated lists & galleries</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>

  <!-- Quick search -->
  <a class="dg-card dg-link dg-card--md card-nav card-theme-ocean" href="/music" role="listitem" aria-label="Music">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:6px;object-fit:cover;" alt=""></div>
      <div class="title-wrap">
        <div class="nav-title">Music</div>
        <div class="nav-desc">Playlists & artists</div>
      </div>
    </div>
    <div class="nav-arrow" aria-hidden>→</div>
  </a>
</div>

<!-- ===========================
   LIVE PLAYLIST + MINI PLAYER CARD (visual demo)
   =========================== -->
<div class="dg-grid cols-auto gap-md" style="--stagger-index:4;">
  <a class="dg-card dg-link card-playlist card-theme-ocean effect-shimmer" href="/music/late-night">
    <img class="playlist-image" src="/img/MALOGO/Fullflavor.png" alt="playlist cover">
    <div class="play-overlay"><div class="play-icon">▶</div></div>
    <div class="playlist-body">
      <h4 class="dg-title">Late-night Mix</h4>
      <div class="dg-sub">15 tracks • Chill</div>
      <div style="margin-top:8px;">
        <div class="track"><div class="idx">1</div><div style="flex:1;color:var(--text-secondary)">Track name — Short</div><div style="color:var(--text-muted);font-size:0.82rem">3:24</div></div>
        <div class="track"><div class="idx">2</div><div style="flex:1;color:var(--text-secondary)">Track name — Short</div><div style="color:var(--text-muted);font-size:0.82rem">2:58</div></div>
      </div>
    </div>
  </a>

  <!-- Artist quick -->
  <a class="dg-card dg-link card-artist card-theme-aurora" href="/people/fullflavor">
    <img class="artist-avatar" src="/img/MALOGO/Fullflavor.png" alt="artist">
    <div>
      <div class="artist-name">Fullflavor</div>
      <div class="artist-role">Producer • Curator</div>
      <div class="artist-links"><span class="dg-tag">Bandcamp</span><span class="dg-tag">SoundCloud</span></div>
    </div>
  </a>

  <!-- Small stats -->
  <a class="dg-card dg-link card-stats card-theme-ceramic" href="/stats">
    <div class="stat-number">1,284</div>
    <div class="stat-label">Garden Notes</div>
    <div class="stat-delta">+4.8% this month</div>
  </a>
</div>
<h2 class="dg-title" style="--stagger-index:10;">External Links & Utilities</h2>
<div class="dg-grid cols-auto gap-md">
  <a class="dg-card dg-link card-theme-neon" href="https://www.youtube.com/" target="_blank" rel="noopener"> 
    <div class="dg-content"><h4 class="dg-title">YouTube</h4><div class="dg-sub">Watch & capture clips</div></div>
  </a>

  <a class="dg-card dg-link card-theme-terminal" href="https://github.com/" target="_blank" rel="noopener"> 
    <div class="dg-content"><h4 class="dg-title">GitHub</h4><div class="dg-sub">Code & snippets</div></div>
  </a>

  <a class="dg-card dg-link card-theme-ocean" href="https://open.spotify.com/" target="_blank" rel="noopener">
    <div class="dg-content"><h4 class="dg-title">Spotify</h4><div class="dg-sub">Playlists & tracks</div></div>
  </a>

  <a class="dg-card dg-link card-theme-aurora" href="https://soundcloud.com/" target="_blank" rel="noopener">
    <div class="dg-content"><h4 class="dg-title">SoundCloud</h4><div class="dg-sub">Artists & demos</div></div>
  </a>

  <a class="dg-card dg-link card-theme-paper" href="https://en.wikipedia.org/wiki/Main_Page" target="_blank" rel="noopener">
    <div class="dg-content"><h4 class="dg-title">Wikipedia</h4><div class="dg-sub">Reference</div></div>
  </a>

  <a class="dg-card dg-link card-theme-crystal" href="https://news.ycombinator.com/" target="_blank" rel="noopener">
    <div class="dg-content"><h4 class="dg-title">Hacker News</h4><div class="dg-sub">Tech links</div></div>
  </a>
</div>



<!-- ===========================
   RECENT NOTES (list-style compact cards)
   =========================== -->
<div><table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>📄 Note</span><span class="dataview small-text">5</span></th><th class="table-view-th"><span>🕑 Created</span></th><th class="table-view-th"><span>✏️ Modified</span></th><th class="table-view-th"><span>🔗 Links</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a data-tooltip-position="top" aria-label="Many notes and files/Events/Super Mario Galaxy Movie.md" data-href="Many notes and files/Events/Super Mario Galaxy Movie.md" href="Many notes and files/Events/Super Mario Galaxy Movie.md" class="internal-link" target="_blank" rel="noopener nofollow">Super Mario Galaxy Movie</a></span></td><td><span>2025-10-04 22:28</span></td><td><span>2025-10-04 22:33</span></td><td>1</td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Many notes and files/_templates/Future event template.md" data-href="Many notes and files/_templates/Future event template.md" href="Many notes and files/_templates/Future event template.md" class="internal-link" target="_blank" rel="noopener nofollow">Future event template</a></span></td><td><span>2025-10-04 21:35</span></td><td><span>2025-10-04 22:32</span></td><td>1</td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Things I'm Looking Forward To.md" data-href="Things I'm Looking Forward To.md" href="Things I'm Looking Forward To.md" class="internal-link" target="_blank" rel="noopener nofollow">Things I'm Looking Forward To</a></span></td><td><span>2025-10-03 16:13</span></td><td><span>2025-10-04 22:22</span></td><td>0</td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Many notes and files/Events/Ghost of Tsushima 2 Release.md" data-href="Many notes and files/Events/Ghost of Tsushima 2 Release.md" href="Many notes and files/Events/Ghost of Tsushima 2 Release.md" class="internal-link" target="_blank" rel="noopener nofollow">Ghost of Tsushima 2 Release</a></span></td><td><span>2025-10-04 21:02</span></td><td><span>2025-10-04 22:17</span></td><td>0</td></tr><tr><td><span><a data-tooltip-position="top" aria-label="Many notes and files/Events/Amsterdam Music Festival.md" data-href="Many notes and files/Events/Amsterdam Music Festival.md" href="Many notes and files/Events/Amsterdam Music Festival.md" class="internal-link" target="_blank" rel="noopener nofollow">Amsterdam Music Festival</a></span></td><td><span>2025-10-04 22:11</span></td><td><span>2025-10-04 22:17</span></td><td>1</td></tr></tbody></table></div>



<h2 class="dg-title" style="--stagger-index:6;">Recent Notes</h2>
<div class="dg-grid cols-auto gap-md">
  <a class="dg-card dg-link card-note card-theme-paper" href="/notes/today" style="--stagger-index:6;">
    <div class="card-head">
      <img class="card-thumb" src="/img/MALOGO/Fullflavor.png" alt="">
      <div class="title-wrap"><h4 class="dg-title">Daily Notes — Today</h4><div class="dg-sub">Quick log</div></div>
    </div>
    <div class="dg-excerpt">Capture quick thoughts, links and todo snippets. This room is your ephemeral workspace — move or file later.</div>
    <div class="backlink-preview"><span class="pill">2 backlinks</span><span class="pill">Updated 3h ago</span></div>
  </a>

  <a class="dg-card dg-link card-note card-theme-solarized" href="/notes/architecture">
    <div class="card-head"><div class="card-ico">🧭</div><div class="title-wrap"><h4 class="dg-title">System Architecture</h4><div class="dg-sub">PKM · evergreen</div></div></div>
    <div class="dg-excerpt">Top-level architecture notes for your site and tooling. Keep evergreen and link often.</div>
  </a>

  <a class="dg-card dg-link card-note card-theme-vintage" href="/notes/booknotes">
    <div class="card-head"><div class="card-ico">📚</div><div class="title-wrap"><h4 class="dg-title">Book Notes</h4><div class="dg-sub">Reading highlights</div></div></div>
    <div class="dg-excerpt">Short takeaways, quotes and page references — good to tag with themes & people.</div>
  </a>
</div>

<!-- ===========================
   MASONRY / GALLERY (image heavy) 
   - use dg-masonry to allow variable heights
   =========================== -->
<h2 class="dg-title" style="--stagger-index:7;">Gallery / Visuals</h2>
<div class="dg-masonry" style="--stagger-index:7;">
  <a class="dg-card dg-link card-showcase card-theme-crystal" href="/gallery/photo1"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Photo One</h4></div></a>
  <a class="dg-card dg-link card-showcase card-theme-film" href="/gallery/photo2"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Photo Two</h4></div></a>
  <a class="dg-card dg-link card-showcase card-theme-pastel" href="/gallery/photo3"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Photo Three</h4></div></a>
  <a class="dg-card dg-link card-showcase card-theme-vintage" href="/gallery/photo4"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Photo Four</h4></div></a>
</div>

<!-- ===========================
   DECK — small number of stacked focus items
   =========================== -->
<h2 class="dg-title" style="--stagger-index:8;">Deck — Focus stack</h2>
<div class="dg-deck" style="--stagger-index:8;">
  <a class="dg-card dg-link dg-card--lg card-stack-3 card-theme-timber" href="/archive"> 
    <div class="dg-content"><h3 class="dg-title">Archive</h3><div class="dg-sub">Old notes</div></div>
  </a>

  <a class="dg-card dg-link dg-card--lg card-stack-2 card-theme-aurora" href="/ideas">
    <div class="dg-content"><h3 class="dg-title">Ideas / Backlog</h3><div class="dg-sub">Seeds to plant</div></div>
  </a>

  <a class="dg-card dg-link dg-card--lg card-stack-1 card-theme-velvet effect-glass effect-tilt" data-tilt="med" href="/today">
    <div class="dg-content"><h3 class="dg-title">Today / Now</h3><div class="dg-sub">Quick context & actions</div></div>
  </a>
</div>

<!-- ===========================
   ADMIN / EDITOR PANEL — things you'll use while curating
   - Legend, theme preview shortcut, theme picker snippet to copy
   =========================== -->


<!-- ===========================
   CAROUSEL SHOWCASE (compact radio-driven) 
   - uses interactive carousel built in Phase 5
   =========================== -->
   
<div style="--stagger-index:5;">
  <h2 class="dg-title">Showcase</h2>

  <!-- radios -->
  <input type="radio" id="front-c1" name="front-c" checked>
  <input type="radio" id="front-c2" name="front-c">
  <input type="radio" id="front-c3" name="front-c">

  <div class="carousel">
    <div class="slides">
      <div class="slide s1">
        <a class="dg-card dg-link card-showcase card-theme-holo" href="/features/one"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Visual Feature</h4><div class="dg-sub">High-res gallery</div></div></a>
      </div>

      <div class="slide s2">
        <a class="dg-card dg-link card-showcase card-theme-velvet effect-glow" href="/features/two"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Long Read</h4><div class="dg-sub">Featured essay</div></div></a>
      </div>

      <div class="slide s3">
        <a class="dg-card dg-link card-showcase card-theme-crystal effect-glass" href="/features/three"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Experiment</h4><div class="dg-sub">Prompt collection</div></div></a>
      </div>
    </div>

    <div class="controls" role="tablist" aria-label="Front showcase">
      <label for="front-c1" role="tab" tabindex="0" aria-controls="slidef1" aria-selected="true"></label>
      <label for="front-c2" role="tab" tabindex="0" aria-controls="slidef2"></label>
      <label for="front-c3" role="tab" tabindex="0" aria-controls="slidef3"></label>
    </div>
  </div>
</div>

<h2 class="dg-title" style="--stagger-index:9;">Editor Tools & Legend</h2>

<div class="dg-grid cols-auto gap-md">
  <a class="dg-card dg-link dg-card--md card-theme-ceramic" href="#legend">
    <div class="dg-content"><h4 class="dg-title">Legend</h4><div class="dg-sub">What each class does</div></div>
  </a>

  <a class="dg-card dg-link dg-card--md card-theme-crystal" href="#theme-preview">
    <div class="dg-content"><h4 class="dg-title">Theme Preview</h4><div class="dg-sub">Use to pick per-card themes</div></div>
  </a>

  <a class="dg-card dg-link dg-card--md card-theme-minimal" href="#admin-snippets">
    <div class="dg-content"><h4 class="dg-title">Editor Snippets</h4><div class="dg-sub">Copy/paste building blocks</div></div>
  </a>
</div>

<!-- Real legend content (inline so you can copy) -->
<div id="legend" class="dg-card card-theme-paper">
  <div class="dg-content">
    <h3 class="dg-title">Class Legend (quick)</h3>
    <ul>
      <li><code>.card-theme-*</code> — apply visual theme to a single card</li>
      <li><code>effect-*</code> (tilt, shimmer, parallax, glow) — opt-in effects</li>
      <li><code>.dg-compact-mode</code> or <code>.effects-disable</code> — performance pages</li>
      <li>Use <code>&lt;a class="dg-card dg-link"&gt;</code> for full-card links</li>
    </ul>
  </div>
</div>



<!-- Admin snippet block you can copy directly -->
<div id="admin-snippets" class="dg-card card-theme-ceramic">
  <div class="dg-content">
    <h4 class="dg-title">Quick Snippets</h4>
    <p class="dg-excerpt">Copy any of these for editing or pasting elsewhere.</p>

    <pre style="white-space:pre-wrap; background:rgba(0,0,0,0.03); padding:8px; border-radius:8px;">
&lt;a class="dg-card dg-link dg-card--md card-theme-velvet effect-glow" href="/feature"&gt;
  &lt;div class="dg-content"&gt;&lt;h4 class="dg-title"&gt;Featured&lt;/h4&gt;&lt;/div&gt;
&lt;/a&gt;
    </pre>
  </div>
</div>

<!-- ===========================
   FOOTER — external links / social / resources
   =========================== -->

<!-- ===========================
   EXTRA: Useful interactive inset examples (accordion + modal)
   =========================== -->
<h2 class="dg-title" style="--stagger-index:11;">Interactive Examples (copy as needed)</h2>

<!-- Accordion example -->
<a class="dg-card dg-link dg-card--md">
  <div class="dg-content">
    <details>
      <summary style="display:flex;justify-content:space-between;align-items:center;">
        <div><strong>Editor Tips</strong> — open to see quick tips</div>
        <span class="dg-toggle-icon" aria-hidden>›</span>
      </summary>
      <div class="acc-panel">
        <ul>
          <li>Use <code>card-theme-*</code> per card to change look.</li>
          <li>Add <code>effect-shimmer</code> to a single card for attention.</li>
          <li>For large index pages set <code>dg-compact-mode</code> in frontmatter.</li>
        </ul>
      </div>
    </details>
  </div>
</a>

<!-- Modal example -->
<a class="dg-card dg-link card-media card-theme-crystal" href="#front-modal-1">
  <img class="poster" src="/img/icons/geometric_observatory_3 (3).svg" alt="">
  <div class="media-overlay"><div class="media-icon">▶</div></div>
</a>

<div id="front-modal-1" class="dg-modal" role="dialog" aria-modal="true">
  <div class="modal-card">
    <a class="modal-close" href="#" aria-label="Close">✕</a>
    <h3 class="dg-title">Modal Preview</h3>
    <img src="/img/icons/geometric_observatory_3 (3).svg" alt="" style="width:100%;height:auto;border-radius:8px;margin-bottom:8px;">
    <p class="dg-excerpt">This opens without JS using :target. Consider adding tiny JS from Phase 9 for focus management if you want.</p>
  </div>
</div>

<!-- ===========================
   COPYRIGHT / VERSION & QUICK NOTES
   =========================== -->
<div class="dg-card card-theme-paper">
  <div class="dg-content">
    <div class="dg-sub">Generated layout — modular. Edit and cut sections you do not want.</div>
    <div class="dg-excerpt">Tip: to test themes quickly, copy a small themed card and paste it near the top of a page while experimenting with CSS classes.</div>
  </div>
</div>

