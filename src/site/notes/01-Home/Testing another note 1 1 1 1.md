---
{"dg-publish":true,"permalink":"/01-home/testing-another-note-1-1-1-1/","noteIcon":"","created":"2025-09-22T17:00:10.249+02:00","updated":"2025-09-22T17:01:09.806+02:00"}
---

---
dg-publish: true
dg-content-classes: "theme-auto interactive interactive-expand dg-grid cols-auto"
---

<h2 class="dg-title">Expandable Card</h2>

<div class="dg-card dg-card--md">
  <input id="ex-2" class="visually-hidden-focusable" type="checkbox" />
  <label for="ex-2" class="expand-label" tabindex="0" role="button" aria-controls="ex-2-body" aria-expanded="false">
    <div style="display:flex;gap:0.9rem;align-items:center;">
      <img src="/img/MALOGO/Fullflavor.png" style="width:46px;height:46px;border-radius:8px;object-fit:cover;" alt="">
      <div>
        <div class="dg-title">Project Alpha — Quick Summary</div>
        <div class="dg-sub">Milestones & status</div>
      </div>
    </div>
    <span class="dg-toggle-icon">+</span>
  </label>

  <div id="ex-2-body" class="expand-body">
    <p class="dg-excerpt">Expanded area with quick actions: checklists, links, and tiny embeds.</p>
    <div style="margin-top:8px;"><a class="dg-btn" href="/projects/alpha">Open project</a></div>
  </div>
</div>
