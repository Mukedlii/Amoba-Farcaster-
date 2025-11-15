export default function handler(req, res) {
  const imageUrl = "https://raw.githubusercontent.com/Mukedlii/Amoba-Farcaster-/main/IMG_2135.png";

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />

  <!-- Kötelező OG cím és kép -->
  <meta property="og:title" content="Amőba" />
  <meta property="og:image" content="${imageUrl}" />

  <!-- FRAME bekapcsolása -->
  <meta name="fc:frame" content="vNext" />
  <meta name="fc:frame:image" content="${imageUrl}" />

  <!-- 9 gomb -->
  ${[1,2,3,4,5,6,7,8,9].map(i => `
    <meta name="fc:frame:button:${i}" content="${i}" />
    <meta name="fc:frame:button:${i}:action" content="post" />
    <meta name="fc:frame:button:${i}:post_url" content="https://amoba-farcaster.vercel.app/api/move" />
  `).join("")}

  <!-- MINIAPP META TAG (EZ A FONTOS!) -->
  <meta name="fc:miniapp" content='{
    "version":"1",
    "imageUrl":"${imageUrl}",
    "button":{
      "title":"Játssz",
      "action":{
        "type":"launch_frame",
        "url":"https://amoba-farcaster.vercel.app/api/frame"
      }
    }
  }' />

</head>
<body></body>
</html>
  `);
}
