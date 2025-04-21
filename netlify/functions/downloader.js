// netlify/functions/download.js
import ytdl from 'ytdl-core';

export async function handler(event) {
  const videoId = event.queryStringParameters?.v;
  if (!videoId || !ytdl.validateID(videoId)) {
    return { statusCode: 400, body: 'Invalid or missing `v` parameter' };
  }

  try {
    // Fetch metadata & filter for muxed MP4s
    const info    = await ytdl.getInfo(videoId);                                // :contentReference[oaicite:0]{index=0}  
    const streams = ytdl.filterFormats(info.formats, 'audioandvideo')           // :contentReference[oaicite:1]{index=1}
      .map(fmt => ({
        qualityLabel: fmt.qualityLabel || fmt.itag,
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
