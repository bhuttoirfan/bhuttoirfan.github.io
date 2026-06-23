# Irfan Khan — Portfolio

A fast, dark-themed personal portfolio built as a static site. No backend, no database — it deploys free to GitHub Pages.

## Tech stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** (custom dark theme)
- **Framer Motion** for animations
- **React Router** (hash routing) for multi-page navigation
- **@react-pdf/renderer** for the résumé, generated on the fly from your data
- **Web3Forms** for the contact form (emails you directly, no server)
- **GitHub Actions** → **GitHub Pages** for hosting

## Local development

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Editing your content

All content lives in plain data files — no need to touch components:

- `src/data/profile.ts` — name, title, bio, location, email, social links
- `src/data/experience.ts` — work history
- `src/data/projects.ts` — projects (each becomes a detail page)
- `src/data/skills.ts` — skills, grouped
- `src/data/resume.ts` — education and certifications

The downloadable résumé is **generated as a PDF from these same data files** (see
`src/resume/ResumeDocument.tsx`), so anything you add here — a new project, a new role —
shows up in the résumé automatically. There's no PDF file to keep in sync.

## Contact form setup (required for the form to work)

1. Go to [web3forms.com](https://web3forms.com) and enter your email — you'll get a free **access key**.
2. Open `src/pages/Contact.tsx` and replace `YOUR_WEB3FORMS_ACCESS_KEY` with that key.
3. Messages will be delivered to the email tied to the key.

The access key is safe to commit — Web3Forms keys are designed to be public on the client.

## Deploying to GitHub Pages

1. Create a repository named **`bhuttoirfan.github.io`** on your personal GitHub account.
2. Push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/bhuttoirfan/bhuttoirfan.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Every push to `main` auto-builds and deploys. Your site goes live at **https://bhuttoirfan.github.io**.

> Using a different repo name (a project repo) instead of `username.github.io`? Set `base: "/<repo-name>/"` in `vite.config.ts`.
