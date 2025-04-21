---
{"dg-publish":true,"permalink":"/youtube-video-downloader/","noteIcon":"","created":"2025-04-21T16:45:04.088+02:00","updated":"2025-04-21T16:45:26.555+02:00"}
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>YouTube Video Downloader</title>
  <style>
    body {
      font-family: sans-serif;
      max-width: 600px;
      margin: 2rem auto;
      background: #fafafa;
      color: #333;
      padding: 1rem;
    }
    h1 { text-align: center; margin-bottom: 1rem; }
    input, select, button {
      width: 100%;
      padding: 0.75rem;
      margin: 0.5rem 0;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
      font-size: 1rem;
    }
    button {
      background: #007acc;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover { background: #005fa3; }
    .note {
      font-size: 0.9rem;
      color: #666;
      margin-top: 1rem;
    }
  </style>
</head>
<body>
  <h1>YouTube Downloader</h1>

  <label for="urlInput">YouTube URL:</label>
  <input type="url" id="urlInput" placeholder="https://www.youtube.com/watch?v=VIDEO_ID">

  <label for="qualitySelect">Select Quality:</label>
  <select id="qualitySelect" disabled>
    <option>— no video loaded —</option>
  </select>

  <button id="downloadBtn" disabled>Download</button>

  <p class="note">
    Uses Invidious API at <a href="https://yewtu.be" target="_blank">yewtu.be</a>.
  </p>

  <script>
    const urlInput = document.getElementById('urlInput');
    const qualitySelect = document.getElementById('qualitySelect');
    const downloadBtn = document.getElementById('downloadBtn');

    let streams = [];

    urlInput.addEventListener('change', async () => {
      const url = new URL(urlInput.value.trim());
      // Extract video ID from either www.youtube.com?v= or youtu.be/
      const videoId = url.hostname.includes('youtu.be')
        ? url.pathname.slice(1)
        : url.searchParams.get('v');
      if (!videoId) return alert('Invalid YouTube URL');

      // Fetch video metadata (formatStreams)
      try {
        const res = await fetch(`https://yewtu.be/api/v1/videos/${videoId}`);
        const data = await res.json();
        streams = data.formatStreams; // array of { qualityLabel, url } :contentReference[oaicite:5]{index=5}

        // Populate dropdown
        qualitySelect.innerHTML = '';
        streams.forEach(s => {
          const opt = document.createElement('option');
          opt.value = s.url;
          opt.textContent = s.qualityLabel || s.quality;
          qualitySelect.appendChild(opt);
        });
        qualitySelect.disabled = false;
        downloadBtn.disabled = false;
      } catch (e) {
        alert('Failed to fetch video info.');
        console.error(e);
      }
    });

    downloadBtn.addEventListener('click', () => {
      const downloadUrl = qualitySelect.value;
      if (!downloadUrl) return;
      // Trigger browser download
      window.location = downloadUrl;
    });
  </script>
</body>
</html>
