---
{"dg-publish":true,"permalink":"/01-home/testing-another-note-1-1-1-1-1-1-1/","contentClasses":"theme-auto stagger-container cols-auto gap-md","noteIcon":"","created":"2025-09-22T17:02:07.021+02:00","updated":"2025-09-23T13:16:48.722+02:00"}
---

---

# wrapper: frontpage ensures see-through styling for all cards on this page
dg-content-classes: "frontpage"
---



<!-- Compact hero card example (constrained) -->
<a class="dg-card card-hero card-theme-aurora card-theme-glass-heavy" href="/about"
   style="--tint:#2EE6B1; --tint-opacity:0.05; --accent:#2EE6B1;" data-contrast="medium">
  <img class="hero-bg" src="/img/MALOGO/Fullflavor.png" alt="" aria-hidden style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0; opacity:.5; filter: blur(10px) saturate(1.05);">
  <div class="hero-content" style="position:relative; z-index:10;">
    <div class="hero-badge">Hub • Home</div>
    <h1 class="hero-title">Welcome — Adaptive Garden</h1>
    <p class="hero-lead">Translucent themes adapt to the background. Use data-contrast="high" on bright areas.</p>
    <div class="hero-ctas"><span class="hero-cta primary">Collections</span><span class="hero-cta">Today</span></div>
  </div>
</a>

<!-- Card with high contrast (use when background is bright or busy) -->
<a class="dg-card card-theme-ocean card-theme-strong" href="#" data-contrast="high" style="--tint:#06B6D4; --tint-opacity:0.06;">
  <div><strong>Ocean (high contrast)</strong><div style="font-size:.86rem;margin-top:.4rem;opacity:.9">Use this when the background is bright here</div></div>
</a>

<!-- Card with low contrast (soft) -->
<a class="dg-card card-theme-pastel" href="#" data-contrast="low" style="--tint:#FFB3C6; --tint-opacity:.045;">
  <div><strong>Pastel (soft)</strong><div style="font-size:.86rem;margin-top:.4rem;opacity:.9">Soft and airy</div></div>
</a>

<!-- Inline accent override -->
<a class="dg-card card-theme-velvet" href="#" style="--accent:#FF8B6B; --tint:#FF8B6B; --tint-opacity:.05;" data-contrast="medium">
  <div><strong>Velvet with warm accent</strong></div>
</a>




<!-- =========================
     HERO (compact, robust) — uses the fixed hero markup
     ========================= -->
<a class="dg-card card-hero hero-constrained card-theme-crystal effect-glass" href="/about" aria-label="Welcome to my garden">
  <img class="parallax-layer" src="/img/MALOGO/Fullflavor.png" alt="" aria-hidden>
  <img class="hero-bg" src="/img/MALOGO/Fullflavor.png" alt="" aria-hidden>
  <div class="hero-overlay" aria-hidden></div>

  <div class="hero-content">
    <div class="hero-badge">Hub • Home</div>
    <h1 class="hero-title">Welcome — My Digital Garden</h1>
    <p class="hero-lead">A living, growing collection of projects, prompts, music, clips, reading notes, and tiny experiments. Everything on this page is translucent so the background sets the atmosphere.</p>

    <div class="hero-ctas">
      <span class="hero-cta primary">Collections</span>
      <span class="hero-cta">Today</span>
      <span class="hero-cta">Quick Capture</span>
    </div>
  </div>
</a>

<!-- =========================
     PORTALS — first row of important links (compact)
     ========================= -->
<div class="front-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:1rem; margin-bottom:1rem;">
  <a class="dg-card card-nav card-theme-aurora" href="/projects" aria-label="Projects">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:8px;object-fit:cover;" alt=""></div>
      <div style="min-width:0">
        <div class="nav-title">Projects</div>
        <div class="nav-desc">Active work & boards</div>
      </div>
    </div>
    <div class="nav-arrow">→</div>
  </a>

  <a class="dg-card card-nav card-theme-crystal" href="/prompts" aria-label="Prompts">
    <div class="nav-left">
      <div class="card-ico">💡</div>
      <div>
        <div class="nav-title">Prompts</div>
        <div class="nav-desc">Saved templates & experiments</div>
      </div>
    </div>
    <div class="nav-arrow">→</div>
  </a>

  <a class="dg-card card-nav card-theme-ocean" href="/music" aria-label="Music">
    <div class="nav-left">
      <div class="card-ico"><img src="/img/MALOGO/Fullflavor.png" style="width:36px;height:36px;border-radius:8px;object-fit:cover;" alt=""></div>
      <div>
        <div class="nav-title">Music</div>
        <div class="nav-desc">Playlists & artists</div>
      </div>
    </div>
    <div class="nav-arrow">→</div>
  </a>

  <a class="dg-card card-nav card-theme-frosted" href="/clips" aria-label="Clips">
    <div class="nav-left">
      <div class="card-ico">🎬</div>
      <div>
        <div class="nav-title">Clips</div>
        <div class="nav-desc">Saved videos & highlights</div>
      </div>
    </div>
    <div class="nav-arrow">→</div>
  </a>
</div>

<!-- =========================
     FEATURED ROW (wide + smalls)
     ========================= -->
<div style="display:grid; grid-template-columns: 1.8fr 1fr 1fr; gap:1rem; margin-bottom:1rem;">
  <a class="dg-card card-hero card-theme-velvet" href="/featured" style="min-height:200px;">
    <div class="hero-content">
      <div class="hero-badge">Featured</div>
      <h2 class="hero-title" style="font-size:1.15rem; margin-top:0.6rem;">Weekly Curation</h2>
      <p class="hero-lead" style="font-size:0.9rem;">Rotating highlights: music, experiments, and projects that are worth revisiting.</p>
    </div>
  </a>

  <a class="dg-card card-playlist card-theme-crystal" href="/music/late-night">
    <img class="playlist-image" src="/img/MALOGO/Fullflavor.png" alt="Late night">
    <div class="play-overlay"><div class="play-icon">▶</div></div>
    <div class="playlist-body">
      <h4 class="dg-title">Late-night Mix</h4>
      <div class="dg-sub">Chill synth & ambience</div>
    </div>
  </a>

  <a class="dg-card card-artist card-theme-aurora" href="/people/fullflavor">
    <img class="artist-avatar" src="/img/MALOGO/Fullflavor.png" alt="">
    <div>
      <div class="artist-name">Fullflavor</div>
      <div class="artist-role">Producer & curator</div>
    </div>
  </a>
</div>

<!-- =========================
     QUICK ACTIONS (compact shortcuts)
     ========================= -->
<div style="display:flex; gap:0.6rem; flex-wrap:wrap; align-items:center; margin-bottom:1rem;">
  <a class="dg-card card-compact card-theme-crystal" href="/capture"><div class="compact-icon">✚</div><div class="compact-text">Quick Capture</div></a>
  <a class="dg-card card-compact card-theme-frosted" href="/prompts/new"><div class="compact-icon">➕</div><div class="compact-text">New Prompt</div></a>
  <a class="dg-card card-compact card-theme-ocean" href="/music/now"><div class="compact-icon">♪</div><div class="compact-text">Now Playing</div></a>
  <a class="dg-card card-compact card-theme-midnight" href="/search"><div class="compact-icon">🔎</div><div class="compact-text">Search</div></a>
  <a class="dg-card card-compact card-theme-crystal" href="/shortcuts"><div class="compact-icon">⚡</div><div class="compact-text">Shortcuts</div></a>
</div>

<!-- =========================
     SHOWCASE CAROUSEL (radios)
     ========================= -->
<div style="margin-bottom:1rem;">
  <h3 class="dg-title">Showcase</h3>
  <input type="radio" id="front-c1" name="front-c" checked>
  <input type="radio" id="front-c2" name="front-c">
  <input type="radio" id="front-c3" name="front-c">

  <div class="carousel" style="margin-top:0.6rem;">
    <div class="slides">
      <div class="slide s1">
        <a class="dg-card card-showcase card-theme-holo" href="/features/visuals"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Visual Feature</h4></div></a>
      </div>

      <div class="slide s2">
        <a class="dg-card card-showcase card-theme-velvet" href="/features/essay"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Long Read</h4></div></a>
      </div>

      <div class="slide s3">
        <a class="dg-card card-showcase card-theme-crystal" href="/features/prompt-collection"><img class="show-img" src="/img/MALOGO/Fullflavor.png" alt=""><div class="show-overlay"><h4 class="dg-title">Prompt Collection</h4></div></a>
      </div>
    </div>

    <div class="controls" role="tablist" aria-label="Showcase slides">
      <label for="front-c1" role="tab" tabindex="0"></label>
      <label for="front-c2" role="tab" tabindex="0"></label>
      <label for="front-c3" role="tab" tabindex="0"></label>
    </div>
  </div>
</div>

<!-- =========================
     RECENT NOTES (list)
     ========================= -->
<h3 class="dg-title">Recent Notes</h3>
<div style="display:grid; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-bottom:1rem;">
  <a class="dg-card card-note card-theme-crystal" href="/notes/today">
    <div class="card-head">
      <img class="card-thumb" src="/img/MALOGO/Fullflavor.png" alt="">
      <div class="title-wrap"><h4 class="dg-title">Daily Notes — Today</h4><div class="dg-sub">Quick capture</div></div>
    </div>
    <div class="card-excerpt">Thoughts about site structure and design — tag these so they become evergreen notes later.</div>
    <div class="backlink-preview"><span class="pill">2 backlinks</span><span class="pill">Updated 1h ago</span></div>
  </a>

  <a class="dg-card card-note card-theme-aurora" href="/notes/architecture">
    <div class="card-head"><div class="card-ico">🧭</div><div class="title-wrap"><h4 class="dg-title">System Architecture</h4><div class="dg-sub">PKM · structure</div></div></div>
    <div class="card-excerpt">A map of how the garden wires into projects and notes.</div>
  </a>

  <a class="dg-card card-note card-theme-frosted" href="/notes/booknotes">
    <div class="card-head"><div class="card-ico">📚</div><div class="title-wrap"><h4 class="dg-title">Book Notes</h4><div class="dg-sub">Reading highlights</div></div></div>
    <div class="card-excerpt">Takeaways and quotes from recent reads.</div>
  </a>
</div>

<!-- =========================
     GALLERY / MASONRY (grid-based, will be side-by-side)
     ========================= -->
<h3 class="dg-title">Gallery / Visuals</h3>
<div class="dg-masonry" style="--stagger-index:7; margin-bottom:1rem;">
  <a class="dg-card dg-link card-showcase card-theme-crystal" href="/gallery/photo1">
    <img class="show-img" src="/img/MALOGO/Fullflavor.png" alt="">
    <div class="show-overlay"><h4 class="dg-title">Photo One</h4></div>
  </a>

  <a class="dg-card dg-link card-showcase card-theme-frosted" href="/gallery/photo2">
    <img class="show-img" src="/img/MALOGO/Fullflavor.png" alt="">
    <div class="show-overlay"><h4 class="dg-title">Photo Two</h4></div>
  </a>

  <a class="dg-card dg-link card-showcase card-theme-aurora" href="/gallery/photo3">
    <img class="show-img" src="/img/MALOGO/Fullflavor.png" alt="">
    <div class="show-overlay"><h4 class="dg-title">Photo Three</h4></div>
  </a>

  <a class="dg-card dg-link card-showcase card-theme-ocean" href="/gallery/photo4">
    <img class="show-img" src="/img/MALOGO/Fullflavor.png" alt="">
    <div class="show-overlay"><h4 class="dg-title">Photo Four</h4></div>
  </a>

  <a class="dg-card dg-link card-showcase card-theme-midnight" href="/gallery/photo5">
    <img class="show-img" src="/img/MALOGO/Fullflavor.png" alt="">
    <div class="show-overlay"><h4 class="dg-title">Photo Five</h4></div>
  </a>

  <a class="dg-card dg-link card-showcase card-theme-holo" href="/gallery/photo6">
    <img class="show-img" src="/img/MALOGO/Fullflavor.png" alt="">
    <div class="show-overlay"><h4 class="dg-title">Photo Six</h4></div>
  </a>
</div>

<!-- =========================
     DECK / FOCUS STACK
     ========================= -->
<h3 class="dg-title">Focus Deck</h3>
<div style="display:flex; gap:1rem; flex-wrap:wrap; margin-bottom:1rem;">
  <a class="dg-card dg-card--lg card-theme-velvet" href="/today" style="min-width:320px;">
    <div class="hero-content"><h4 class="hero-title" style="font-size:1rem;">Today / Now</h4><p class="hero-lead" style="font-size:0.9rem;">Quick context and action shortcuts.</p></div>
  </a>

  <a class="dg-card dg-card--lg card-theme-crystal" href="/ideas" style="min-width:320px;">
    <div class="hero-content"><h4 class="hero-title" style="font-size:1rem;">Ideas & Backlog</h4><p class="hero-lead" style="font-size:0.9rem;">Short seeds and prompts to revisit.</p></div>
  </a>
</div>

<!-- =========================
     A/B TESTING / Experimental area (accordion & examples)
     ========================= -->
<h3 class="dg-title">Experimental Tools</h3>

<!-- Accordion sample -->
<a class="dg-card card-theme-frosted">
  <div style="display:block;">
    <details>
      <summary style="display:flex;justify-content:space-between;align-items:center; padding:0.2rem 0;">
        <div><strong>Editor Tips</strong> &mdash; quick how-tos</div>
        <span class="dg-toggle-icon" aria-hidden>›</span>
      </summary>
      <div style="margin-top:0.6rem;">
        <ul>
          <li>Use `card-theme-crystal` / `card-theme-frosted` / `card-theme-aurora` for translucent cards.</li>
          <li>Do NOT nest anchors inside card anchors — use `<button role="button">` for internal clickable controls.</li>
          <li>Copy any card block from this page to rebuild a section elsewhere.</li>
        </ul>
      </div>
    </details>
  </div>
</a>

<!-- modal example -->
<a class="dg-card card-media card-theme-crystal" href="#front-modal-1">
  <img class="poster" src="/img/MALOGO/Fullflavor.png" alt="">
  <div class="media-overlay"><div class="media-icon">▶</div></div>
</a>

<div id="front-modal-1" class="dg-modal" role="dialog" aria-modal="true">
  <div class="modal-card">
    <a class="modal-close" href="#" aria-label="Close">✕</a>
    <h3 class="dg-title">Modal Preview</h3>
    <img src="/img/MALOGO/Fullflavor.png" alt="" style="width:100%;height:auto;border-radius:8px;margin-bottom:8px;">
    <p class="dg-excerpt">A CSS-only modal using `:target` for quick previews (works without JS).</p>
  </div>
</div>

<!-- =========================
     RESOURCES / EXTERNAL LINKS
     ========================= -->
<h3 class="dg-title">External</h3>
<div style="display:grid; grid-template-columns: repeat(auto-fit,minmax(200px,1fr)); gap:1rem; margin-bottom:1.25rem;">
  <a class="dg-card card-theme-crystal" href="https://www.youtube.com" target="_blank" rel="noopener"> <div class="dg-content"><h4 class="dg-title">YouTube</h4><div class="dg-sub">Video & clips</div></div></a>
  <a class="dg-card card-theme-ocean" href="https://open.spotify.com" target="_blank" rel="noopener"> <div class="dg-content"><h4 class="dg-title">Spotify</h4><div class="dg-sub">Playlists</div></div></a>
  <a class="dg-card card-theme-aurora" href="https://soundcloud.com" target="_blank" rel="noopener"> <div class="dg-content"><h4 class="dg-title">SoundCloud</h4><div class="dg-sub">Artists</div></div></a>
  <a class="dg-card card-theme-midnight" href="https://github.com" target="_blank" rel="noopener"> <div class="dg-content"><h4 class="dg-title">GitHub</h4><div class="dg-sub">Code & snippets</div></div></a>
</div>

<!-- =========================
     FOOTER / EDITOR NOTE
     ========================= -->
<div style="margin-top:2rem;">
  <a class="dg-card card-theme-crystal" href="#legend">
    <div class="dg-content">
      <h4 class="dg-title">Editor Legend</h4>
      <div class="dg-sub">Use only see-through themes on this page: crystal, frosted, aurora, ocean, midnight, holo, velvet.</div>
      <p class="dg-excerpt">Copy any block and paste to re-arrange sections. Keep hero at top and do not nest anchors to prevent markup issues.</p>
    </div>
  </a>
</div>

