---
{"dg-publish":true,"permalink":"/tools/image-to-svg-converter/","noteIcon":"","created":"2025-04-21T13:40:25.463+02:00","updated":"2025-04-21T16:42:00.096+02:00"}
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Raster → SVG Converter</title>

  <!-- ImageTracer.js from UNPKG CDN -->
  <script src="https://unpkg.com/imagetracerjs@1.2.6/imagetracer_v1.2.6.js"></script>

  <style>
    body {
      font-family: sans-serif;
      padding: 2rem;
      max-width: 600px;
      margin: auto;
      background: #f9f9f9;
      color: #333;
    }
    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }
    .uploader {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    input[type="file"] {
      padding: 0.5rem;
    }
    button {
      padding: 0.75rem;
      border: none;
      border-radius: 0.5rem;
      background-color: #007acc;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    button:hover {
      background-color: #005fa3;
    }
    #preview, #svgOutput {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      padding: 1rem;
      background: white;
    }
    #svgOutput svg {
      width: 100%;
      height: auto;
      display: block;
    }
    .download-link {
      margin-top: 1rem;
      text-align: right;
    }
  </style>
</head>
<body>
  <h1>Raster → SVG</h1>
  <div class="uploader">
    <input type="file" id="fileInput" accept="image/png, image/jpeg" />
    <button id="convertBtn" disabled>Convert to SVG</button>
  </div>

  <!-- Hidden canvas for tracing -->
  <canvas id="hiddenCanvas" style="display:none;"></canvas>

  <!-- Preview of the uploaded image -->
  <h2>Preview</h2>
  <div id="preview">No image loaded.</div>

  <!-- SVG output -->
  <h2>SVG Output</h2>
  <div id="svgOutput">Your SVG will appear here.</div>
  <div class="download-link" id="downloadLink"></div>

  <script>
    const fileInput   = document.getElementById('fileInput');
    const convertBtn  = document.getElementById('convertBtn');
    const previewDiv  = document.getElementById('preview');
    const svgDiv      = document.getElementById('svgOutput');
    const downloadDiv = document.getElementById('downloadLink');
    const canvas      = document.getElementById('hiddenCanvas');
    const ctx         = canvas.getContext('2d');
    let img           = new Image();

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      img.onload = () => {
        // Resize canvas to image size
        canvas.width  = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        // Show preview
        previewDiv.innerHTML = '';
        previewDiv.appendChild(img);
        convertBtn.disabled = false;
      };
      img.src = url;
    });

    convertBtn.addEventListener('click', () => {
      // Extract data URL from canvas
      const dataURL = canvas.toDataURL();
      // Convert to SVG with default settings
      ImageTracer.imageToSVG(dataURL, svgString => {
        // Display SVG
        svgDiv.innerHTML = svgString;
        // Create download link
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'converted.svg';
        link.textContent = 'Download SVG';
        downloadDiv.innerHTML = '';
        downloadDiv.appendChild(link);
      });
    });
  </script>
</body>
</html>
