# Adding the icons to Blackboard — two ways

You have two ready-to-use options in this folder and the project site. Pick whichever fits your workflow.

## Option A — Paste an HTML snippet (fastest, recommended)

1. Open the **project site** (`index.html`) and go to **Build a Badge Set**.
2. Choose what's allowed for each category. Toggle off anything that doesn't apply.
   (For AI, pick one of the five **AI Assessment Scale** levels.)
3. Click **Copy HTML for Blackboard**.
4. In Blackboard, create or edit an **Item / Document**, or open an assignment's **Description**.
5. In the content editor toolbar, click the **source-code** button — the `<>` icon.
   - **Ultra:** click the **+** (or the **⋯ / Insert content** menu) → **Insert/Edit HTML**.
   - **Original:** click the **HTML** button in the text-editor toolbar.
6. **Paste** the copied HTML, click **Save/Update**, then **Submit**.

The badges appear inline with your assignment. The snippet uses only inline styles and
inline SVG — no external files, fonts, scripts, or links — so it passes Blackboard's HTML
sanitizer on both Ultra and Original.

A ready-made example is in **`sample-embed.html`** (an in-class midterm configuration).
Open it in a browser, copy everything between the `COPY FROM HERE` / `TO HERE` markers,
and paste into Blackboard. Edit the text freely once it's in.

## Option B — Import the SCORM package

Use this if you'd rather add the whole interactive tool as a single content item.

1. Grab **`olemiss-integrity-icons-scorm.zip`** (in the package root — do not unzip it).
2. In your course:
   - **Original:** **Build Content → Content Package (SCORM)** → upload the zip.
   - **Ultra:** **+ → Content Market** is not needed; use **Upload** and choose the SCORM zip,
     or **Build Content → SCORM package**.
3. Accept the defaults. It appears as an item students open in place; it reports
   **completed** when opened.

## Tips

- Keep the small attribution line at the bottom of the generated set — the AI guidance is
  used under the AIAS CC BY-NC-SA 4.0 license.
- You can paste several sets on one page (e.g., different rules per section).
- Need a picture instead of HTML (for a syllabus or slide)? Use **Download as image (PNG)**
  on the builder, or **Download SVG** on the Icon Reference tab.
