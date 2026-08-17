# University of Mississippi — Academic Integrity Icons

A faculty resource for stating, at a glance, what students may and may not do on an
assignment. Restyled in University of Mississippi colors (Oxford navy `#14213D`, Lyceum
red `#CE1126`) and extended with **nuance sub-menus** so each rule can be more than a
simple yes/no. The **AI** category is driven by the
[AI Assessment Scale (AIAS)](https://aiassessmentscale.com/).

Build a badge set for an assignment, then hand it to students **four different ways**:
a link, an iframe embed, pasted HTML, or a SCORM package.

## What's in here

```
academic-integrity-icons/
├── index.html                     ← faculty builder (GitHub Pages entry point)
├── gallery.html                   ← student icon guide — the shareable/embeddable page
├── view.html                      ← a single shared badge set, from a link
├── assets/
│   ├── icons.js                   ← icon data + SVG generation, shared by all pages
│   └── app.css                    ← shared styles
├── blackboard/
│   ├── EMBED-INSTRUCTIONS.md      ← step-by-step for every method
│   └── sample-embed.html          ← a ready-made snippet to copy
├── scorm/                         ← SCORM source (student guide + manifest)
├── um-integrity-icons-scorm.zip   ← importable SCORM 1.2 package
├── build-scorm.sh                 ← regenerates scorm/ and the zip after an edit
├── .nojekyll                      ← tells GitHub Pages to serve files as-is
├── ATTRIBUTION.md
└── README.md
```

No build step, no dependencies, no server code, no tracking. Everything is static.

## The icon set

Ten categories, each with nuance options (32 states total):

1. **Getting Help** — no help / instructor only / tutoring center / peers / any source
2. **Collaboration** — individual only / discuss but submit own / group
3. **Reusing Prior Work** — not permitted / own work if cited / reuse OK
4. **Open-Book Research** — closed book / course materials only / open research
5. **Where You Work** — in class / proctored vs. take-home
6. **AI Use** — the five **AIAS** levels: No AI · AI Planning · AI Collaboration · Full AI · AI Exploration
7. **Citation & Sources** — required vs. not required
8. **Individual vs. Group** — individual / pairs / group
9. **Devices & Calculators** — none / calculator only / devices OK
10. **Deadlines & Late Work** — firm deadline / late with penalty / revision allowed

Status colors: green = permitted, amber = conditions apply, red = not permitted, slate =
format/structure. The AI badges use the AIAS 1–5 color scale and show the level number.

## Four ways to give it to students

Build a set on the **Build a badge set** tab, then open **Share & embed**:

| | What you get | Best when |
|---|---|---|
| **1. Link** | A clean, printable page (`view.html?…`) showing only the rules you chose | You want one place to update, or you're pasting into an announcement |
| **2. Embed** | An `<iframe>` of that same page | Students should see the rules without leaving the Blackboard page |
| **3. Paste-in HTML** | Self-contained inline HTML + SVG, no scripts or external files | You want the badges frozen into the assignment, immune to any outage |
| **4. Icon guide** | A link or embed for `gallery.html` — every icon explained | Posting the key once at the top of the course |

The whole configuration travels **inside the link** — nothing is stored on a server, and
links never expire. The builder also keeps its own address in sync, so you can bookmark a
working set or send it to a colleague to reuse.

### Handy URLs

- `gallery.html` — the full student guide
- `gallery.html?cat=ai` — just the five AI Assessment Scale levels
- `gallery.html?embed=1` — chrome-free, for embedding
- `view.html?s=help-center.ai-l3&t=Essay%202` — a badge set built straight from a URL

## Deploy to GitHub Pages

### Option A — github.com, no command line

1. Create a repository (e.g. `Academic-Integrity-Icons`).
2. **Add file → Upload files**, then drag in everything from this folder, keeping
   `index.html` at the root and the `assets` folder intact. (If `.nojekyll` is hidden in
   Finder, press **Cmd+Shift+.** to show hidden files.) Commit.
3. **Settings → Pages** → **Source: Deploy from a branch**, **Branch: main**,
   **Folder: / (root)**. Save.
4. After a minute the site is live at `https://<username>.github.io/<repo>/`. Every link
   and embed the builder generates will point at your copy automatically.

### Option B — command line

```bash
cd academic-integrity-icons
git init
git add .
git commit -m "Academic Integrity Icons"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Then enable Pages as in step 3 above.

## Customizing

- **Wording, categories, options:** edit the `CAT` array in `assets/icons.js`. Each option
  needs an `id`, a `short` label, a `status` (`yes` / `cond` / `no` / `info`) and the
  `text` students read.
- **Which categories start switched on:** the `DEFAULT_ON` array in the same file.
- **Colors:** CSS variables at the top of `assets/app.css`.
- **Icons:** inline SVG in the `G` object in `assets/icons.js`, drawn in a 24×24 space.

All three pages read the same data, so one edit updates the builder, the gallery, and
every shared link. The SCORM package holds its own copies, so run `./build-scorm.sh`
after an edit if you hand that package out.

## Accessibility and printing

Every badge carries an `aria-label` and `<title>` describing the category and its status,
so screen readers announce "AI Use: AIAS level 3", not "image". Status is never carried by
color alone — each badge also has a distinct corner symbol (✓ / ✕ / ! / i / a level
number) and a text label. Every page prints cleanly: navigation, buttons, and code boxes
drop out automatically.

## License & attribution

The icon designs and site are provided for University of Mississippi educational use.
The **AI Assessment Scale (AIAS)** content is by Mike Perkins, Leon Furze, Jasper Roe, and
Jason MacVaugh, used under **CC BY-NC-SA 4.0**. Keep the attribution line that appears on
every generated badge set. See `ATTRIBUTION.md`.

Created by Marc Watkins. Built collaboratively with Claude; all editorial direction and
policy wording are the author's.
