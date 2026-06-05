# University of Mississippi — Academic Integrity Icons

A faculty resource for stating, at a glance, what students may and may not do on an
assignment. Inspired by the academic-integrity icon table approach used at other
institutions, restyled in University of Mississippi colors (Oxford navy `#14213D`,
Lyceum red `#CE1126`), and extended with **nuance sub-menus** so each rule can be more
than a simple yes/no. The **AI** category is driven by the
[AI Assessment Scale (AIAS)](https://aiassessmentscale.com/).

## What's in here

```
olemiss-academic-integrity-icons/
├── index.html                          ← the standalone site (GitHub Pages entry point)
├── README.md
├── ATTRIBUTION.md
├── blackboard/
│   ├── sample-embed.html               ← a ready-made example snippet to copy
│   └── EMBED-INSTRUCTIONS.md           ← step-by-step for both Blackboard methods
├── scorm/                              ← SCORM source (the page + manifest)
│   ├── imsmanifest.xml
│   └── index.html
└── olemiss-integrity-icons-scorm.zip   ← importable SCORM 1.2 package for Blackboard
```

## The icon set

Nine categories, each with nuance options (29 states total):

1. **Getting Help** — no help / instructor only / tutoring center / peers / any source
2. **Collaboration** — individual only / discuss but submit own / group
3. **Reusing Prior Work** — not permitted / own work if cited / reuse OK
4. **Open-Book Research** — closed book / course materials only / open research
5. **Where You Work** — in class / proctored vs. take-home
6. **AI Use** — the five **AIAS** levels: No AI · AI Planning · AI Collaboration · Full AI · AI Exploration
7. **Citation & Sources** — required vs. not required
8. **Individual vs. Group** — individual / pairs / group
9. **Devices & Calculators** — none / calculator only / devices OK

Status colors: green = permitted, amber = conditions apply, red = not permitted, slate =
format/structure. The AI badges use the AIAS 1–5 color scale and show the level number.

## Two ways to use it

### 1. Standalone site (host on GitHub Pages)
1. Create a GitHub repo and upload the contents of this folder (keep `index.html` at the root).
2. **Settings → Pages → Source:** `main` branch, `/ (root)`, **Save**.
3. Live at `https://<username>.github.io/<repo>/`. Faculty open it, build a badge set, and
   copy the HTML or download an image.

### 2. Inside a Blackboard course
- **Paste HTML:** build a set on the site → **Copy HTML for Blackboard** → paste via the
  editor's source-code (`<>`) button. Works on Ultra and Original.
- **SCORM import:** upload `olemiss-integrity-icons-scorm.zip` as a SCORM content package.

Full steps: see `blackboard/EMBED-INSTRUCTIONS.md`.

## Customizing

Everything lives in one file (`index.html`). To change wording, add a category, or adjust
options, edit the `CAT` array near the bottom of the file. Colors are CSS variables at the
top (`--navy`, `--red`, etc.). Icons are inline SVG — no build step, no dependencies.

## License & attribution

The icon designs and site are provided for University of Mississippi educational use.
The **AI Assessment Scale (AIAS)** content is by Mike Perkins, Leon Furze, Jasper Roe, and
Jason MacVaugh, used under **CC BY-NC-SA 4.0**. Keep the attribution line that appears on
every generated badge set. See `ATTRIBUTION.md`.
