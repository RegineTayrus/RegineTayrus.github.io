REGINE PORTFOLIO (REACT)

Requirements:
- Node.js 20.19+ (Node.js 24 is supported)
- npm

Run locally:
1. Open a terminal in this project folder.
2. Run: npm install
3. Run: npm run dev
4. Open the local URL printed by Vite (http://127.0.0.1:5173).

Build for deployment:
- Run: npm run build
- The production site is written to the dist folder.
- Run: npm run preview to preview the production build locally.

The app uses React Router hash URLs so page navigation works on GitHub Pages
without requiring server-side route configuration. Portfolio images remain in
the images folder and are bundled by Vite.

Deploy to GitHub Pages:
1. Push changes to the main branch.
2. In GitHub, open Settings > Pages.
3. Set the build and deployment source to GitHub Actions.
4. The workflow in .github/workflows/deploy.yml builds and deploys dist.
