export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  const domain = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://your-domain.vercel.app";

  res.status(200).json({
    accepts: [domain],
    frames: [
      {
        version: "vNext",
        image: `${domain}/frame.png`,
        buttons: [
          {
            action: "post",
            label: "Start vs AI",
            target: `${domain}/api/frame`
          }
        ]
      }
    ]
  });
}
