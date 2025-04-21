---
{"dg-publish":true,"permalink":"/youtube-video-downloader/","noteIcon":"","created":"2025-04-21T16:45:04.088+02:00","updated":"2025-04-21T16:57:28.715+02:00"}
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>YouTube Downloader</title>
  <style>
    body { font-family:sans-serif; max-width:600px; margin:2rem auto; padding:1rem; background:#f9f9f9; }
    input, select, button { width:100%; margin:0.5rem 0; padding:0.75rem; border-radius:0.5rem; border:1px solid #ccc; }
    button { background:#007acc; color:#fff; cursor:pointer; border:none; transition:0.2s; }
    button:disabled { background:#999; cursor:not-allowed; }
    button:hover:not(:disabled) { background:#005fa3; }
  </style>
</head>
<body>
  <h1>YouTube Downloader</h1>

  <input id="urlInput" type="url" placeholder="https://www.youtube.com/watch?v=VIDEO_ID">
  <select id="qualitySelect" disabled>
    <option>— load a video first —</option>
  </select>
  <button id="downloadBtn" disabled>Download</button>

  <script>
    const urlInput      = document.getElementById('urlInput');
    const qualitySelect = document.getElementById('qualitySelect');
    const downloadBtn   = document.getElementById('downloadBtn');

    // Helper to extract v= ID
    function parseId(url) {
      try {
        const u = new URL(url);
        return u.searchParams.get('v') || null;
      } catch {
        return null;
      }
    }

    async function fetchWithTimeout(url, opts = {}, timeout = 5000) {
      const controller = new AbortController();                                    // :contentReference[oaicite:5]{index=5}
      const id = setTimeout(() => controller.abort(), timeout);
      try {
        const res = await fetch(url, { ...opts, signal: controller.signal });
        return res;
      } finally {
        clearTimeout(id);
      }
    }

    urlInput.addEventListener('change', async () => {
      const id = parseId(urlInput.value.trim());
      if (!id) return alert('Invalid YouTube URL');
      qualitySelect.innerHTML = '<option>Loading…</option>';
      qualitySelect.disabled = downloadBtn.disabled = true;

      try {
        const res = await fetchWithTimeout(
          `/.netlify/functions/download?v=${encodeURIComponent(id)}`, 
          { mode: 'cors' }, 
          7000
        );
        if (!res.ok) throw new Error('Bad response');
        const streams = await res.json();

        qualitySelect.innerHTML = '';
        streams.forEach(s => {
          const opt = document.createElement('option');
          opt.value = s.url;
          opt.textContent = s.qualityLabel;
          qualitySelect.appendChild(opt);
        });
        qualitySelect.disabled = downloadBtn.disabled = false;
      } catch (e) {
        console.error(e);
        alert('Could not load video info. Try again later.');
        qualitySelect.innerHTML = '<option>— error loading —</option>';
      }
    });

    downloadBtn.addEventListener('click', () => {
      const url = qualitySelect.value;
      if (url) window.location.href = url;                                         // :contentReference[oaicite:6]{index=6}
    });
  </script>
</body>
</html>

