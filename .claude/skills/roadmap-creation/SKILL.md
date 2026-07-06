---
name: roadmap-creation
description: Create a SNOMED CT implementation roadmap document for a country, region or organization, following the structure, content library, and branding of the SNOMED International Roadmap Generator (https://github.com/ihtsdo/roadmap-generator). Use when asked to create, draft, update or import a SNOMED CT implementation roadmap, adoption plan, or national eHealth terminology roadmap — including building one from data held in JIRA, Google Sheets, Excel/CSV, Confluence, or an existing roadmap.json.
---

# SNOMED CT Implementation Roadmap Creation

This skill produces SNOMED CT implementation roadmaps that follow the exact same
approach as the SNOMED International **Roadmap Generator** app:

- Repository: https://github.com/ihtsdo/roadmap-generator
- Live app: https://ihtsdo.github.io/roadmap-generator/

The skill is self-contained — everything needed (document structure, canonical
content library, JSON format, branding) is bundled in `references/`. The repo is
the source of truth: when you have access to it (locally or via network), prefer
its current content in `src/app/roadmap-content/*.ts` over the bundled snapshot,
and always tell the user that the finished `roadmap.json` can be uploaded to the
live app for further interactive editing, Gantt/timeline views, and Word/PDF export.

## Reference files (read as needed)

| File | When to read |
|---|---|
| `references/content-library.md` | Always — the canonical boilerplate text for every section, and the four step groups with all standard steps |
| `references/json-format.md` | When producing the `roadmap.json` deliverable (app-compatible format) |
| `references/branding.md` | When producing a rendered document (HTML/Word/PDF) or diagrams — colors, logo, typography, icons, chart conventions |

## Workflow

### 1. Understand the engagement

Establish, asking the user (use AskUserQuestion) for anything you cannot infer:

- **Country / Organization name** — used throughout the document (every
  occurrence of the `COUNTRY` placeholder is replaced with it).
- **Roadmap start and end dates** — the overall planning window.
- **Deliverables wanted** — any combination of:
  - `roadmap.json` (always produce this; it is the interchange format the
    Roadmap Generator app can load via *File → Upload Roadmap*)
  - A rendered document (HTML, Word or PDF) following the branding guide
  - Planning diagrams (Gantt chart, milestone timeline)

### 2. Ask where the roadmap data comes from (REQUIRED)

Always ask this before drafting steps and dates. Use AskUserQuestion with a
question like *"Where does the source data for the roadmap steps, dates and
milestones live?"* with options:

1. **JIRA** — epics/issues represent roadmap steps.
   - Ingest via an available JIRA MCP tool or the JIRA REST API if credentials
     are provided; otherwise ask the user to export the relevant issues to CSV
     and share the file.
   - Ask which project/board/filter (or JQL) identifies the roadmap items.
   - Suggested field mapping (confirm with the user): Epic/Issue summary →
     step name; description → step text; labels/components/epic → step group;
     start date (or created/sprint start) → `dateStart`; due date → `dateEnd`;
     child issues or fix versions with dates → milestones.
2. **Google Sheets** — a planning spreadsheet.
   - Ingest via a Google Drive/Sheets tool if connected; otherwise ask for a
     CSV export or a share link readable without auth.
   - Ask which sheet/tab and which columns hold: group, step name,
     description, start date, end date, milestone name(s)/date(s).
3. **Excel / CSV file** — ask the user to provide the file, then map columns
   as for Google Sheets.
4. **Existing `roadmap.json`** — a file previously saved from the Roadmap
   Generator app. Load it, preserve its structure, and apply the requested
   changes (see `references/json-format.md`).
5. **Confluence or another document** — ask for the page/export and extract
   steps, dates and milestones from it.
6. **No existing data source** — build the roadmap interactively from the
   standard content library, proposing steps from the four standard groups and
   agreeing on dates with the user.

After ingesting, show the user a short mapping summary (e.g. a table of the
first few rows → group/step/dates) and confirm it before generating the full
roadmap. Normalize all dates to ISO 8601. Flag rows/issues that have no dates
or fall outside the roadmap window instead of silently dropping them.

### 3. Assemble the document sections

The document always follows this structure and order (headings exactly as
shown; skipped sections are simply omitted):

1. `<h1>A SNOMED CT Implementation Roadmap for {COUNTRY}</h1>`
2. **Background** — single choice: Short or Long
3. **Vision** — intro sentence + one or more vision bullet points (multi-select)
4. **Current eHealth landscape** — single, customized text
5. **Goals** — intro sentence + one or more goals (multi-select, rendered as `<b>{name}</b> {text}` bullets)
6. **Clinical focus** — intro sentence + one or more focus areas (multi-select, same bullet style)
7. **Implementation steps** — intro sentence + steps grouped under the four
   standard groups (in this order): **Plan Adoption**, **Standards and
   Artifacts**, **Infrastructure**, **Capacity Building**
8. **Implementation projects** — single, customized text
9. **Closing remarks** — single choice: Short or Long

Rules:

- Start from the canonical texts in `references/content-library.md`; customize
  them for the country/organization rather than writing from scratch. Custom
  sections/steps are allowed and follow the same shape.
- Everywhere the source text has the `COUNTRY` placeholder, keep it wrapped as
  `<span class='country'>COUNTRY</span>` in the JSON (the app substitutes it),
  and substitute the actual name in any rendered document.
- Templates containing `<mark>[INSTRUCTIONS …]</mark>` blocks (Current eHealth
  landscape, Clinical focus, Implementation projects) MUST be filled in with
  real content — never ship a deliverable containing `[ADD …]`, `[N]`, `[P]%`
  or `[INSTRUCTIONS]` markers unless the user explicitly wants a template.
- Each step renders as: bold step name, date range `(YYYY-MM-DD to YYYY-MM-DD)`,
  the step description, then its milestones (sorted by date) as
  `YYYY-MM-DD - {name}: {text}` bullets.

### 4. Produce the deliverables

- **`roadmap.json`** — follow `references/json-format.md` exactly, so the file
  loads cleanly in the live app. Validate: parse it, check every step has
  `group`, `step.opSelector`, `step.text`, `dateStart`, `dateEnd`, and that
  milestone dates fall within (or near) their step's range.
- **Rendered document** — follow `references/branding.md` (black header with
  the SNOMED CT logo, Roboto, section order above). The app exports Word/PDF
  from the same HTML, so a single clean HTML document is the right base.
- **Diagrams** — a Gantt chart (steps as bars between dateStart/dateEnd,
  milestones as point markers, grouped by the four groups) and a timeline
  (entries sorted by dateEnd, bracketed by "Roadmap starts!" and "Roadmap
  ends!" entries). Mermaid `gantt`/`timeline` blocks are a good standalone
  equivalent of the app's charts; keep the group iconography/colors from the
  branding guide.

### 5. Close the loop with the repo

In your final summary, always point the user back to the source of this
approach:

- The `roadmap.json` can be uploaded at https://ihtsdo.github.io/roadmap-generator/
  (*File → Upload Roadmap*) for interactive editing, date planning, Gantt and
  timeline views, and Word/PDF export.
- Canonical content and any future updates live in
  https://github.com/ihtsdo/roadmap-generator (`src/app/roadmap-content/`).
