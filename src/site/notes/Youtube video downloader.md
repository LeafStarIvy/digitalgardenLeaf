---
{"dg-publish":true,"permalink":"/youtube-video-downloader/","noteIcon":"","created":"2025-04-21T16:45:04.088+02:00","updated":"2025-04-21T17:01:41.533+02:00"}
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>YouTube Downloader</title>
  <style>
    body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; }
    input, select, button { width: 100%; margin: .5rem 0; padding: .75rem; border-radius: .5rem; border: 1px solid #ccc; }
    button { background: #007acc; color: #fff; border: none; cursor: pointer; transition: .2s; }
    button:disabled { background: #999; cursor: not-allowed; }
    button:hover:not(:disabled) { background: #005fa3; }
  </style>
</head>
<body>
  <h1>YouTube Downloader</h1>
  <input id="urlInput" type="url" placeholder="https://www.youtube.com/watch?v=ID" />
  <select id="qualitySelect" disabled><option>— load a video first —</option></select>
  <button id="downloadBtn" disabled>Download</button>

  <script>
    const urlInput = document.getElementById('urlInput');
    const qualitySelect = document.getElementById('qualitySelect');
    const downloadBtn = document.getElementById('downloadBtn');

    function parseId(url) {
      try {
        const u = new URL(url);
        return u.searchParams.get('v');
      } catch { return null; }
    }

    async function fetchWithTimeout(resource, opts = {}, timeout = 7000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);
      const res = await fetch(resource, { ...opts, signal: controller.signal });
      clearTimeout(id);
      return res;
    }

    urlInput.addEventListener('change', async () => {
      const id = parseId(urlInput.value.trim());
      if (!id) return alert('Invalid YouTube URL');
      qualitySelect.innerHTML = '<option>Loading…</option>';
      qualitySelect.disabled = downloadBtn.disabled = true;

      try {
        const res = await fetchWithTimeout(`/.netlify/functions/download?v=${encodeURIComponent(id)}`, {}, 7000);
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
        alert('Could not load video info.');
        qualitySelect.innerHTML = '<option>— error loading —</option>';
      }
    });

    downloadBtn.addEventListener('click', () => {
      const url = qualitySelect.value;
      if (url) window.location.href = url;
    });
  </script>
</body>
</html>
