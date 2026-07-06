# Branding and rendering guide

How the Roadmap Generator app looks and how its documents render. Follow this
when producing standalone HTML/Word/PDF documents or diagrams so they match
the app's output. Source of truth: `src/custom-theme.scss`,
`src/app/app.component.css`, `src/styles.css` and the chart components in the
repo.

## Identity

- Product name: **SNOMED CT Implementation Roadmap Generator**, by the SNOMED
  International Implementation Support Team.
- Logo: SNOMED CT small logo — `src/assets/img/small_logo.png` in the repo
  (raw: https://raw.githubusercontent.com/ihtsdo/roadmap-generator/main/src/assets/img/small_logo.png).
- Hero/welcome image: `src/assets/img/sct-worldwide_1.jpeg` (SNOMED CT
  worldwide map), used full-width behind the welcome title.

## Colors (Angular Material light theme)

| Role | Value | Notes |
|---|---|---|
| Header / toolbar | `#000000` background, `#FFFFFF` text | Black toolbar with the logo at 60px height, title to its right |
| Primary | Material Gray 700 `#616161` | Buttons, FABs, controls |
| Accent | Material Light Blue 800 `#0277BD` | Accents, links |
| Warn | Material Red `#F44336` | Errors only |
| Section highlight | `#F0FC03` | Transient yellow flash when a section updates (app UI only) |
| Welcome title | White text on solid black block | Bold, large (40px), boxed |
| Chart icons | grey | Timeline icons are grey FontAwesome icons |

The look is deliberately monochrome (black/grey/white) with restrained
light-blue accents — do not introduce new brand colors.

## Typography

- Font stack: `Roboto, "Helvetica Neue", sans-serif`.
- Document headings: `<h1>` document title, `<h2>` section headings, `<h3>`
  step-group headings inside Implementation steps.
- Emphasis: step and goal names in `<b>`; editable placeholders in `<mark>`
  (must be resolved before delivery).

## Document rendering

The document is a single HTML fragment (the app exports Word via
`html-docx-js` and PDF via `pdfmake` from this same HTML), so keep markup
simple and export-safe: headings, paragraphs, nested `<ul>` lists, `<b>`,
no CSS-dependent layout. Standalone wrapper for an HTML deliverable:

```html
<body style="margin:0;font-family:Roboto,'Helvetica Neue',sans-serif">
  <div style="background:#000;color:#fff;display:flex;align-items:center;padding:8px 16px">
    <img src="small_logo.png" height="60" alt="SNOMED CT">
    <span style="margin-left:15px;font-size:20px">A SNOMED CT Implementation Roadmap for {COUNTRY}</span>
  </div>
  <div style="margin:15px">
    <!-- roadmap sections here -->
  </div>
</body>
```

Section rendering (mirrors `app.component.ts`):

- Vision/Goals/Clinical focus: intro `<p>` then `<ul>`; Goals and Clinical
  focus items as `<li><b>{name}</b> {text}</li>`.
- Implementation steps: intro `<p>`, then per group
  `<li><h3>{group}</h3><ul>…steps…</ul></li>`, each step as
  `<li><b>{name}</b> ({start} to {end})<p>{text}</p><ul>…milestones…</ul></li>`
  with dates as `YYYY-MM-DD` and milestones (sorted by date) as
  `<li>{YYYY-MM-DD} - {name}: {text}</li>`.

## Planning diagrams

Rendered after the document under an `<h1>Roadmap planning diagrams</h1>`
heading, Gantt first, then Timeline.

**Gantt chart** — one bar per step from `dateStart` to `dateEnd`, milestones
as child point-markers on the step. The app uses `@worktile/gantt`; for a
standalone equivalent use a Mermaid `gantt` with one `section` per step group
in the standard order (Plan Adoption, Standards and Artifacts, Infrastructure,
Capacity Building) and `milestone` tasks for milestones.

**Timeline** — a vertical list of entries sorted by `dateEnd`, bracketed by a
start and end entry, each rendered `{Mediumdate}: {step name}`:

- First entry: 🏁 (flag-checkered) `{roadmapStart}: Roadmap starts!`
- Last entry: ✔ (check) `{roadmapEnd}: Roadmap ends!`
- Per-group icons (grey): Plan Adoption → graduation cap; Standards and
  Artifacts → list; Infrastructure → network-wired; Capacity Building → users.

## Voice and tone

Professional, encouraging, implementation-focused. Written from the country's
or organization's perspective ("Our vision…", "we will…"). Steps are concrete
and task-oriented ("This step may involve the following tasks:" + actionable
bullets). Reference SNOMED International resources where relevant
(https://courses.ihtsdotools.org, https://www.value.snomed.org/).
