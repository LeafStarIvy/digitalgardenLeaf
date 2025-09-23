---
{"dg-publish":true,"permalink":"/01-home/test-pages/testing-another-note-1-1-1/","noteIcon":"","created":"2025-09-22T17:00:08.544+02:00","updated":"2025-09-22T17:01:04.839+02:00"}
---

---
dg-publish: true
dg-content-classes: "theme-auto interactive carousel"
---

<h2 class="dg-title">Showcase Carousel (radio-driven)</h2>

<input type="radio" id="c1" name="c" checked>
<input type="radio" id="c2" name="c">
<input type="radio" id="c3" name="c">

<div class="carousel">
  <div class="slides">
    <div class="slide s1">
      <a class="dg-card dg-link card-showcase card-theme-holo" href="/feature/1"><img class="show-img" src="/img/MALOGO/Fullflavor.png"><div class="show-overlay"><h4 class="dg-title">Feature One</h4></div></a>
    </div>

    <div class="slide s2">
      <a class="dg-card dg-link card-showcase card-theme-velvet" href="/feature/2"><img class="show-img" src="/img/MALOGO/Fullflavor.png"><div class="show-overlay"><h4 class="dg-title">Feature Two</h4></div></a>
    </div>

    <div class="slide s3">
      <a class="dg-card dg-link card-showcase card-theme-aurora" href="/feature/3"><img class="show-img" src="/img/MALOGO/Fullflavor.png"><div class="show-overlay"><h4 class="dg-title">Feature Three</h4></div></a>
    </div>
  </div>

  <div class="controls" role="tablist" aria-label="Showcase slides">
    <label for="c1" role="tab" tabindex="0" aria-controls="slide1" aria-selected="true"></label>
    <label for="c2" role="tab" tabindex="0" aria-controls="slide2"></label>
    <label for="c3" role="tab" tabindex="0" aria-controls="slide3"></label>
  </div>
</div>

---
dg-publish: true
dg-content-classes: "theme-auto interactive interactive-accordion dg-grid cols-auto"
---

<h2 class="dg-title">Accordion Examples</h2>

<a class="dg-card dg-link dg-card--md">
  <div class="dg-content">
    <details>
      <summary>
        <div style="display:flex; gap:0.75rem; align-items:center;">
          <img src="/img/MALOGO/Fullflavor.png" style="width:46px;height:46px;border-radius:8px;object-fit:cover;" alt="">
          <div>
            <div class="dg-title">Research Notes</div>
            <div class="dg-sub">Daily log & references</div>
          </div>
        </div>
        <span class="dg-toggle-icon" aria-hidden>›</span>
      </summary>

      <div class="acc-panel">
        <p class="dg-excerpt">This is an accordion built on &lt;details&gt; / &lt;summary&gt; for great accessibility. Use it for notes you want to expand inline.</p>
        <ul><li>Link A</li><li>Link B</li><li>Link C</li></ul>
      </div>
    </details>
  </div>
</a>

