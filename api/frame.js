export default function handler(req, res) {
  const imageUrl = "https://raw.githubusercontent.com/Mukedlii/Amoba-Farcaster-/main/IMG_2135.png";

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta property="og:title" content="Amőba" />
  <meta name="fc:frame" content="vNext" />
  <meta name="fc:frame:image" content="${imageUrl}" />

  ${[1,2,3,4,5,6,7,8,9].map(i => `
    <meta name="fc:frame:button:${i}" content="${i}" />
    <meta name="fc:frame:button:${i}:action" content="post" />
    <meta name="fc:frame:button:${i}:post_url" content="https://amoba-farcaster.vercel.app/api/move" />
  `).join("")}
</head>
</html>
  `);
}

