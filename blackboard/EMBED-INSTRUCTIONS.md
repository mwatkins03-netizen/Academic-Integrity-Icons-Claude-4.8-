# Putting the icons into Blackboard

Four methods, roughly in order of how often people want them. All of them work in both
**Ultra** and **Original**.

---

## Method A — Paste an HTML snippet (fastest, most bulletproof)

1. Open the site's **Build a badge set** tab and choose what's allowed for each category.
   Switch off anything that doesn't apply. For AI, pick one of the five
   **AI Assessment Scale** levels.
2. Go to **Share & embed** and copy the **Paste-in HTML** (card 3). *(There's also a
   **Copy HTML** button right under the preview on the build tab.)*
3. In Blackboard, create or edit an **Item / Document**, or open an assignment's
   **Description**.
4. In the editor toolbar, open the source view — the `<>` button.
   - **Ultra:** the **+** (or **⋯ / Insert content**) menu → **Insert/Edit HTML**.
   - **Original:** the **HTML** button in the text-editor toolbar.
5. **Paste**, then **Save/Update** and **Submit**.

The snippet uses only inline styles and inline SVG — no external files, fonts, scripts, or
links — so it passes Blackboard's HTML sanitizer everywhere, and it keeps working even if
the site is ever moved or taken down.

A ready-made example is in **`sample-embed.html`** (an in-class midterm configuration).
Open it in a browser: it shows the snippet rendered the way students will see it, with a
**Copy the snippet** button underneath. Edit the wording freely once it's pasted in.

---

## Method B — Share a link

1. On **Share & embed**, copy the **Student link** (card 1).
2. Paste it into an announcement, the syllabus, or the assignment instructions —
   or add it as **Build Content → Web Link** (Original) / **+ → Link** (Ultra).

Students get a clean, printable page showing only your rules. The entire configuration
lives inside the address, so nothing is stored on a server and the link never expires.

Use card 4 the same way to link the **full icon guide** — the page that explains what
every badge means. Most people post that once at the top of the course and link to it from
each assignment.

---

## Method C — Embed with an iframe

1. On **Share & embed**, copy the **embed code** from card 2 (your badge set) or card 4
   (the icon guide).
2. Paste it through the same `<>` source-code view described in Method A.

Tips:

- The `height="…"` number in the code is a starting guess. If the frame scrolls or leaves
  a gap, just edit the number and save again.
- The **full** icon guide is a long page; embedded, it scrolls inside its frame. Choosing a
  single category in card 4 — the AI scale, for instance — gives a much tidier embed.
- **If the embed vanishes after you save**, your institution's Blackboard strips
  `<iframe>` from the HTML editor. Use **Insert content → Embed** (Ultra) or add it as a
  Web Link instead — or fall back to Method A, which nothing strips.

---

## Method D — Import the SCORM package

Use this to drop the whole student icon guide in as a single content item.

1. Grab **`um-integrity-icons-scorm.zip`** from the package root — do **not** unzip it.
2. In your course:
   - **Original:** **Build Content → Content Package (SCORM)** → upload the zip.
   - **Ultra:** **+ → Upload** → choose the SCORM zip.
3. Accept the defaults. It appears as an item students open in place, and reports
   **completed** when opened.

---

## General tips

- Keep the small attribution line at the bottom of each generated set — the AI guidance is
  used under the AIAS **CC BY-NC-SA 4.0** license.
- You can paste several sets on one page (different rules per section, for instance).
- Need a picture for a syllabus or a slide? Use **PNG** or **SVG** under the preview for
  the whole set, or the per-badge **SVG / PNG** buttons in the icon gallery.
- Everything prints cleanly — the student guide has a **Print this guide** button for a
  paper handout.
