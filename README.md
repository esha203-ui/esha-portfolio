# Esha Agarwal Portfolio — landing page starter

A Vite + React starter for the interactive landing page.

## Run it

1. Install Node.js (LTS) if you don't already have it: https://nodejs.org/
2. Open this folder in Bolt.new, or download it and open it in a code editor.
3. In the terminal, run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints (usually http://localhost:5173).

## Interactions included

- Pearl wordmark is the default material.
- Hover or keyboard-focus a material swatch to preview it.
- Click a swatch to lock that material in.
- On mobile, tap a swatch to change material.
- Subtle pointer parallax on the wordmark, reduced-motion support, responsive layout.

## Important asset note

The supplied portrait and pearl wordmark are in `src/assets/`. The non-pearl finishes in this first pass are CSS treatments of the same pearl artwork, not physically simulated 3D materials. To make the material changes truly convincing, replace the wordmark with aligned transparent PNG/WebP exports for chrome, liquid glass and crochet-inspired stitch, all with identical canvas dimensions and placement. The interaction code will work without changes.

## Personalise

- Replace `src/assets/portrait.webp` with your approved final background image (keep the filename, or update the import in `src/App.jsx`).
- Replace `src/assets/wordmark.png` with your final transparent pearl wordmark.
- Update the email address and navigation destinations in `src/App.jsx`.
