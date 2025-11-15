export default async function handler(req, res) {
  // a Farcaster küldi a választ JSON-ben, kinyerjük a mezőt
  const body = req.body || {};
  
  // Hova lépett a játékos? (1..9)
  const move = body.untrustedData?.buttonIndex;

  // Alap 3×3 tábla (".": üres)
  let board = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
  ];

  // Ha volt előző állás, akkor visszatöltjük
  if (body.trustedData?.state) {
    board = JSON.parse(body.trustedData.state);
  }

  // Melyik játékos jön? X vagy O?
  const flat = board.flat();
  const countX = flat.filter(c => c === "X").length;
  const countO = flat.filter(c => c === "O").length;
  const current = countX === countO ? "X" : "O";

  // Átalakítjuk a mező indexet sor/oszlopra
  const pos = move - 1;
  const row = Math.floor(pos / 3);
  const col = pos % 3;

  // Üres helyre tesszük a lépést
  if (board[row][col] === ".") {
    board[row][col] = current;
  }

  // Új tábla kép generálása URL szerint
  // FIGYELEM → cseréld ki a SAJÁT URL-jeidre:
  const map = {
    ".": "IMG_2135.png", // üres tábla
    "X": "IMG_2135.png", // ha X lép, egyelőre a saját képedet mutatjuk
    "O": "IMG_2135.png"  // ugyanez, később cseréljük le O-képre
  };

  // A kép mindig a te képed lesz → később dinamikussá tesszük
  const imageUrl = `https://raw.githubusercontent.com/Mukedlii/Amoba-Farcaster-/main/IMG_2135.png`;

  // Frame válasz vissza
  res.setHeader("Content-Type", "text/html");
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta property="og:title" content="Amőba" />
  
  <meta name="fc:frame" content="vNext" />
  <meta name="fc:frame:image" content="${imageUrl}" />
  
  <!-- újabb 9 gomb -->
  ${[1,2,3,4,5,6,7,8,9].map(i => `
  <meta name="fc:frame:button:${i}" content="${i}" />
  <meta name="fc:frame:button:${i}:action" content="post" />
  `).join("")}

  <!-- új állapot -->
  <meta name="fc:frame:state" content='${JSON.stringify(board)}' />
</head>
</html>
  `);
}
