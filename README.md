# Amőba Farcaster Frame – Alap projekt

Ez egy minimális, működő Farcaster Frame backend Vercelhez.

## Fájlok

- `vercel.json` – Vercel runtime beállítás (Node.js 18)
- `package.json` – minimális Node projekt
- `api/frame.js` – a Farcaster Frame API endpoint

## Használat

1. Töltsd fel ezt a mappát egy új GitHub repository-ba (pl. `amoba-frame`).
2. Vercel-en:
   - New Project → Import from GitHub → válaszd ki a repót.
   - Framework: **Other** vagy **Node.js**.
   - Nincs szükség build parancsra.
3. Deploy után:
   - A frame URL: `https://<projekt-nev>.vercel.app/api/frame`
   - Ezt tedd be Farcaster cast-ba.

## Kép beállítása

A `api/frame.js` a `frame.png` képet várja a gyökérben (`https://domain/frame.png`).

Ha akarsz képet:
- tölts fel egy `frame.png` fájlt a projekt gyökerébe (GitHubon),
- vagy írd át az `image:` sort egy saját képed URL-jére.
