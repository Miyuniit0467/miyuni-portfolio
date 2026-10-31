# Miyuni Devanga – QA Portfolio

## Setup (VS Code)
1. Install Node.js 18+ and open this folder in VS Code.
2. `npm install`
3. `npm run dev` then open the printed localhost URL.

## Personalise
- Edit `src/data/siteData.js`: email, GitHub, LinkedIn, project repos, demo links, tech stack.
- Photo: save as `src/assets/profile.jpg` (auto-detected; placeholder shows until then).
- Screenshots: put images in `src/assets`, `import shot from '../assets/aswanna.png'` in siteData.js, set `image: shot`.
- CV: place PDF at `public/Miyuni_Devanga_CV.pdf`.
- Pinned projects live in `featured`; other repos load automatically from the public GitHub API (no token).

## Contact form (EmailJS)
Create an account at emailjs.com, add an email service and a template using variables `from_name`, `reply_to`, `subject`, `message`. Copy `.env.example` to `.env` and fill in the three IDs. Until then the form tells visitors nothing was sent.

## Deploy
Vercel/Netlify: push to GitHub, import the repo, build command `npm run build`, output `dist`. Add the three `VITE_EMAILJS_*` variables in the project settings.
