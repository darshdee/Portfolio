# Darshil Desai — Portfolio

Personal site built with React. Lives at [darshildesai.vercel.app](https://darshildesai.vercel.app).

I'm a data scientist / data engineer based in Florida. The site is mostly a single scrolling homepage (hero, bio, skills, socials) plus separate pages for projects and resume.

## Stack

React, React Router, Bootstrap, react-pdf (resume viewer), tsparticles (background). Create React App under the hood.

## Run locally

```bash
npm install
npm start
```

Build for production:

```bash
npm run build
```

## Project layout (roughly)

- `src/components/Home/` — homepage sections
- `src/components/About/` — bio card, tech stack, tools
- `src/components/Projects/` — project cards (fill in `Projects.js`)
- `src/components/Resume/` — PDF preview + download
- `src/style.css` — theme variables and most styling

## Before you deploy

Swap placeholder content in `AboutCard.js`, add real projects in `Projects.js`, and drop your resume PDF in `src/components/Resume/` (update the import in `ResumeNew.js` if you rename the file).

## Credit

Forked from [Soumyajit Behera's portfolio template](https://github.com/soumyajit4419/Portfolio). I reworked the content, theme, and layout but the original design is his — link back if you fork this repo.

Thanks!
