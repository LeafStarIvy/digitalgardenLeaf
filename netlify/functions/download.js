// netlify/functions/download.js
import ytdl from 'ytdl-core';

// Handler signature for Netlify Functions
export async function handler(event) {
  const { v: videoId } = event.queryStringParameters || {};
  if (!videoId || !ytdl.validateID(videoId)) {
    return { statusCode: 400, body: 'Invalid or missing `v` parameter' };
  }

  try {
    // Fetch metadata (formats) from YouTube
    const info = await ytdl.getInfo(videoId);                                   // :contentReference[oaicite:0]{index=0}
    // Choose only formats with both video+audio, sorted by quality
    const streams = ytdl.filterFormats(info.formats, 'audioandvideo')            // :contentReference[oaicite:1]{index=1}
      .map(fmt => ({
        qualityLabel: fmt.qualityLabel || `${fmt.container}/${fmt.itag}`,
        url: fmt.url
      }));

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(streams)
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 502, body: 'Failed to fetch video info' };
  }
}
