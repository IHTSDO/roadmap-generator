# roadmap.json format

The interchange format saved/loaded by the Roadmap Generator app
(*File → Download/Upload Roadmap* at https://ihtsdo.github.io/roadmap-generator/).
Always produce this file — it lets the user continue working in the app.
Reference implementation: `updateAllFieldsFromData()` and `export()` in
`src/app/app.component.ts`; live examples in `src/assets/examples/`.

## Top-level structure

```json
{
  "country": "Snomedland",
  "roadmapStart": "2026-01-01T00:00:00.000Z",
  "roadmapEnd": "2026-12-31T00:00:00.000Z",
  "selectedBackground": { "opSelector": "Short", "text": "<p>…</p>" },
  "selectedVisions": [ { "opSelector": "Better health", "text": "<li>…</li>" } ],
  "selectedCurrentState": { "opSelector": "Customized text", "text": "<p>…</p>" },
  "selectedGoals": [ { "opSelector": "Data exchange", "text": "<p>…</p>" } ],
  "selectedClinicalFocus": [ { "opSelector": "Healthcare sectors", "text": "<p>…</p>" } ],
  "selectedSteps": [ /* see below */ ],
  "selectedProject": { "opSelector": "Customized text", "text": "<p>…</p>" },
  "selectedClosing": { "opSelector": "Long", "text": "<p>…</p>" }
}
```

## Step entries

```json
{
  "group": "Standards and Artifacts",
  "step": {
    "opSelector": "Data models",
    "text": "<p>…step description HTML…</p><ul><li>…</li></ul>",
    "milestones": [
      {
        "name": "Draft Data Model Specifications",
        "text": "<p>Deliver a draft documentation of the data model</p>",
        "date": "2026-03-15T00:00:00.000Z"
      }
    ]
  },
  "date": "",
  "dateStart": "2026-01-01T00:00:00.000Z",
  "dateEnd": "2026-03-31T00:00:00.000Z"
}
```

## Rules

- **Dates** are ISO 8601 strings (the app revives them with `new Date(...)`).
  `dateStart`/`dateEnd` live on the step entry (not inside `step`); milestone
  `date` lives on each milestone. Keep the legacy `"date": ""` field on each
  step entry.
- **`group`** must be one of the four standard groups: `Plan Adoption`,
  `Standards and Artifacts`, `Infrastructure`, `Capacity Building` (the app's
  select, Gantt grouping and timeline icons key off these).
- **`opSelector`** is the short display name. Reusing a canonical name means
  the app treats it as that library option (options are matched by
  `opSelector`); custom steps/sections should use a distinct name.
- **`text`** is an HTML fragment. Keep the country placeholder as
  `<span class='country'>COUNTRY</span>` — the app substitutes the `country`
  value into every `.country` span. `milestones` is optional.
- **Single-choice sections** (`selectedBackground`, `selectedCurrentState`,
  `selectedProject`, `selectedClosing`) are objects; multi-select sections
  (`selectedVisions`, `selectedGoals`, `selectedClinicalFocus`) are arrays.
  Vision texts are `<li>` fragments; the others are `<p>`-level HTML.
  All sections are expected by the app's loader — for a section the user wants
  omitted, prefer an empty array (multi-select) and confirm single-choice
  sections are present with real content rather than null.

## Validation checklist before delivering

1. File parses as JSON; all dates parse with `new Date()`.
2. Every step has `group` (one of the four), `step.opSelector`, `step.text`,
   `dateStart`, `dateEnd`, with `dateStart <= dateEnd`.
3. Steps fall within `roadmapStart`–`roadmapEnd`; milestone dates fall within
   their step's range (warn the user about intentional exceptions).
4. No unresolved template markers (`[ADD …]`, `[N]`, `[INSTRUCTIONS]`) unless
   the user asked for a template.
5. `COUNTRY` placeholders are wrapped in `<span class='country'>` spans.
