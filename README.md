# avikwok.dev

My personal website: projects, experience, awards and skills, navigated by picking a Yoshi.

Live at [avikwok.dev](https://avikwok.dev).

## Stack

React 19, Vite, Tailwind CSS v4, lucide-react. Hosted on Vercel with Vercel Analytics.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Editing content

| What | Where |
| --- | --- |
| Section order and Yoshi colours | `src/App.jsx` |
| About text, quick facts, links | `src/components/About.jsx` |
| Projects | `src/components/Projects.jsx` |
| Experience and awards | `src/components/Experience.jsx` |
| Skills | `src/components/Skills.jsx` |
| ??? photo gallery | `src/gallery.js`, images in `public/gallery/` |
| Resume | `public/Avidan-Kwok-Resume.pdf` |

## Subdomains

`vercel.json` redirects `github.`, `linkedin.`, `resume.` and `altamyra.avikwok.dev` to their targets. `jobhunt.`, `wordhunt.` and `mushu.avikwok.dev` are separate Vercel projects.
