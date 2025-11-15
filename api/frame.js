export default function handler(req, res) {
  const imageUrl = "https://raw.githubusercontent.com/Mukedlii/Amoba-Farcaster-/main/IMG_2135.png";

  res.setHeader("Content-Type", "text/html");

  res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />

  <!-- Kötelező OG cím -->
  <meta property="og:title" content="Amőba" />
  <meta property="og:image" content="${imageUrl}" />

  <!-- FRAME AKTIVÁLÁS -->
  <meta name="fc:frame" content="vNext" />
  <meta name="fc:frame:image" content="${imageUrl}" />

  <!-- 1 GOMB TESZTNEK -->
  <meta name="fc:frame:button:1" content="Lépés 1" />
  <meta name="fc:frame:button:1:action" content="post" />
  <meta name="fc:frame:button:1:post_url" content="https://amoba-farcaster.vercel.app/api/move" />

</head>
<body></body>
</html>
`);
}

