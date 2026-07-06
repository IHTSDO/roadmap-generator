# Canonical content library

Snapshot of `src/app/roadmap-content/*.ts` from
https://github.com/ihtsdo/roadmap-generator. When the repo is available, prefer
its current content. `COUNTRY` is a placeholder: keep it as
`<span class='country'>COUNTRY</span>` in `roadmap.json`; substitute the real
name in rendered documents. Every option is `{ opSelector, text }` — the
`opSelector` is the short display name, the `text` is the HTML body.

## Background (single choice: "Short" or "Long")

**Short**

```html
<p>SNOMED CT is the world's most comprehensive clinical terminology. It enables users to record clinical
data more accurately, share patient data within the health care team and with patients, exchange data both locally and across borders,
and improve patient outcomes. Furthermore, stakeholders can use SNOMED CT to enable clinical analytics, population analytics,
management analytics, clinical research, applied research, and other research activities to improve health care.</p>
<p>To achieve its full potential in <span class='country'>COUNTRY</span>, SNOMED CT must be widely implemented in well designed systems.
This document describes a roadmap for the successful adoption of SNOMED CT in <span class='country'>COUNTRY</span>.</p>
```

**Long** — the Short first paragraph, plus paragraphs introducing SNOMED
International (the not-for-profit organization that owns and maintains SNOMED
CT, its role in determining standards for codified clinical language, growth
from 9 founding countries in 2007 to 43 Members in July 2022, use in more than
eighty countries), a note that SNOMED CT is a global standard adaptable to each
country's requirements, and the same closing "This document describes a
roadmap…" paragraph.

## Vision (multi-select; rendered as intro + `<ul>` of the selected items)

Intro: `Our vision for SNOMED CT in COUNTRY is that:`

**Better health**

```html
<li>The use of a unified clinical terminology in health information systems across <span class='country'>COUNTRY</span>
will result in better health, improved patient outcomes, and a stronger engagement of all citizens to make informed health related choices.</li>
```

**Continuity of care**

```html
<li>Leveraging the power of standardized clinical terminology in digital technologies will allow us to realize our goals of
strengthening the continuity of care services across <span class='country'>COUNTRY</span> and supporting the key principles
of patient centricity and better access to health care for all.</li>
```

**Better information**

```html
<li>The use of SNOMED CT in healthcare systems will allow clinicians to record, share and access patient information in a way
that retains the semantic fidelity (meaning) of clinical encounters. Researchers and public health planners will also be able to access
clinical data collected from a wide range of healthcare systems and perform meaningful queries across the rich clinical detail.</li>
```

## Current eHealth landscape (single; always customized)

Intro pattern — a paragraph `The current eHealth landscape in COUNTRY can be
summarized as follows:` followed by a `<ul>` covering (fill in real values,
never ship the placeholders):

- Number of healthcare regions and their responsibilities
- Hospitals (public/private), general practice clinics, other organisations
- Workforce numbers (secondary care doctors, general practitioners, …)
- Percentage of facilities with computerised clinical records
- Vendor landscape / locally developed systems
- eHealth standards in use (e.g. HL7 messaging, national minimum datasets)
- Code systems currently in use, where, and for what purpose
- National infrastructure in place or planned (connectivity, national EHR, …)
- Relevant national legislation
- Current challenges/barriers in the eHealth sector

## Goals (multi-select; rendered as intro + `<ul>` of `<li><b>{name}</b> {text}</li>`)

Intro: `The adoption of SNOMED CT will support the following eHealth goals:`

**Standardization of health record data**

```html
<p>SNOMED CT will be defined as the standard for capturing data in clinical systems, including the domains of diagnoses,
therapeutic and diagnostic procedures, medications, immunizations, and allergies.
When SNOMED CT is implemented in clinical systems it allows practitioners to accurately represent clinical concepts, generating datasets
ready to be used in analytics, quality metrics, decision support and many other use cases.
In cases where local code systems or classifications are required for reporting purposes, a map will be developed from SNOMED CT to the other
code system to enable clinical data entry to be standardized using SNOMED CT and then transformed as required.</p>
```

**Data exchange**

```html
<p>SNOMED CT will be defined as the common reference terminology for sharing data between facilities and/or healthcare providers. Information
exchange is the key to implement continuity of care and patient centered care. Implementation guides that combine the benefits of SNOMED CT with
a common information model (e.g. HL7 FHIR resources) will ensure the consistent transmission of information and meaning between different systems.</p>
```

**Clinician support**

```html
<p>SNOMED CT will be defined as the standard for representing clinical knowledge in decision support systems.
Clinical decision support tools link patient information to clinical knowledge, protocols or guidelines, providing alerts and advice
to clinicians during the care of the patient. SNOMED CT provides the level of detail needed to encode knowledge rules, conditions and actions.
Using SNOMED CT it's possible to share knowledge databases and access a wide market of vendors that provide services using the standard.</p>
```

**Population health**

```html
<p>Data analysts supporting population health will have detailed, high quality and up to date information. Direct data entry
by clinicians using SNOMED CT ensures that the information will travel directly from the point of care to the epidemiological
analysis avoiding transcriptions and manual classification steps, to support functions such as trend analysis,
pharmacovigilance and clinical audit.</p>
```

**Clinical research**

```html
<p>Researchers will be trained to leverage the power of SNOMED CT for clinical research. The availability of large SNOMED CT
encoded datasets opens many opportunities for very accurate patient selection for inclusion in clinical trials, it facilitates retrospective
studies, and opens the door to the realization of real world evidence-based studies.</p>
```

## Clinical focus (multi-select; same bullet style as Goals; always customized)

Intro: `This SNOMED CT roadmap will focus on the following clinical priority areas:`

- **Healthcare sectors** — priority sectors, e.g. hospitals, general practice,
  pharmacy, clinical registries, clinical research.
- **Clinical specialties** — priority specialties, e.g. cardiology, emergency
  department.
- **Clinical goals** — priority goals, e.g. improve stroke management, reduce
  deaths from diabetes, increase continuity of care for cancer patients.

## Implementation steps

Intro: `The roadmap for SNOMED CT implementation in COUNTRY will include the following steps:`

Steps are grouped into exactly these four groups, in this order. Each step has
a name (`opSelector`), an HTML description (typically an intro paragraph
followed by a "This step may involve the following tasks:" `<ul>`), a
`dateStart`/`dateEnd`, and optional milestones.

### Group: Plan Adoption

| Step | Summary of description |
|---|---|
| Develop a national strategy for promoting SNOMED CT adoption | Identify barriers (legislation, policy, infrastructure, knowledge, skills, commercial interests) and enablers (champions, policy, infrastructure, education providers, financial interests); implement actions to reduce barriers and increase enablers. |
| Identify requirements of policy changes | Understand coding/reporting regulations (public health statistics, billing, registries, coverage); plan maps from SNOMED CT to existing code systems; update regulations to include SNOMED CT. |
| Identify impactful national projects | Select projects aligned to top national healthcare priorities; agree SNOMED CT goals with stakeholders; design implementation and guidance; measure benefits; share outcomes and lessons learned. |
| Identify quick wins and low hanging fruit projects | Prioritize small projects with clear goals, proactive skilled teams; dedicated guidance from the NRC and SNOMED International; produce compelling results early; share outcomes. |
| Onboard influencers / champions | Contact early adopters for success stories; identify champions who see the benefits; train and support them; co-produce communication pieces, webinars and exemplar implementations. |

### Group: Standards and Artifacts

| Step | Summary of description |
|---|---|
| Data models | Define information model standards for recording, exchanging, integrating and analysing clinical data (e.g. HL7 FHIR for exchange); specify common datasets for common use cases; create policy establishing the standards. |
| Code systems | Establish SNOMED CT as the primary reference terminology via policy/legislation; mandate use for specific purposes (admissions, diagnoses, procedures, medications, allergies); define the function of other code systems (e.g. ICD-10). |
| Terminology binding | Identify the code system for each coded data element; define value sets (intensional or extensional); develop an implementation guide specifying bindings for data entry, validation and analytics. |
| Translation | Prioritise subhierarchies/value sets to translate; design process, tooling, review and maintenance; identify and train translators; perform translation and review; distribute and maintain translations. |
| Maps | Identify and prioritise other code systems needing maps; design mapping process, tooling and maintenance; identify dual-skilled mapping resources; perform, review, distribute and maintain maps. |
| National SNOMED CT extension | Create and maintain the COUNTRY Edition: establish and certify an authoring team; select authoring platform and content request system; establish editorial guidelines and release processes; validate, publish, distribute and maintain the RF2 package. |
| Quality framework | Identify all terminology artifacts; develop quality processes and measures per artifact; establish governance bodies; automate quality measures; review the framework regularly. |

### Group: Infrastructure

| Step | Summary of description |
|---|---|
| Shared terminology server | Deploy a National Terminology Server (HL7 FHIR terminology APIs, full SNOMED CT features incl. ECL, national extension content); define use cases and requirements; select software; deploy, maintain, document, promote and support. |
| Shared EHR and clinical registries | Add SNOMED CT coded data to shared/national EHRs and registries; bind SNOMED CT to data elements with suitable value sets; implement in storage, UI and analytics; maintain the artifacts. |
| National interoperability platform | Implement a national platform on the common exchange data model and bindings; identify services (records storage, exchange, message validation, patient/provider identification); design, deploy and maintain each using SNOMED-enabled terminology servers. |
| National release center | Establish the NRC: select the hosting organisation; define functions and responsibilities; recruit and train staff; acquire tooling (distribution service, authoring platform); run sustainably, promoting adoption. |
| National education and training services | Identify audiences (clinicians, developers, implementers) and learning objectives; customize SNOMED International material; engage delivery providers (e.g. universities); run workshops, vendor days, online training; join the ELearning Advisory Group. |

### Group: Capacity Building

| Step | Summary of description |
|---|---|
| Engage financial sponsors | Build the value proposition and ROI case (see https://www.value.snomed.org/); align with national eHealth goals; identify sponsors (development banks, philanthropic donors) and communicate the value proposition. |
| Engage clinicians | Clinician-oriented training with real clinical examples and practical benefits; show SNOMED CT is easy to use in busy workflows; identify clinician groups via colleges/specialty groups; share https://courses.ihtsdotools.org content; run workshops and demos. |
| Engage software specialists | Build a developer community (forums/social networks); provide tailored training, reference implementations, code examples, open source components; share the Terminology Services Course and certification. |
| Engage with the research community | Training material and workshops demonstrating SNOMED CT for analytics and research; identify research groups; share data analytics education; showcase SNOMED CT-encoded dataset capabilities. |
| Engage other stakeholders | Strategy for patients, healthcare administrators, public health managers, government/policy makers, system procurers; identify benefits per group; share education options; run forums, workshops, presentations. |

For the full canonical HTML of each step, read
`src/app/roadmap-content/steps.ts` in the repo (or
https://raw.githubusercontent.com/ihtsdo/roadmap-generator/main/src/app/roadmap-content/steps.ts).
When writing steps yourself (custom steps or when the repo is unreachable),
match the canonical style: an opening `<p>` describing the step, then
`This step may involve the following tasks:` followed by a `<ul>` of concrete
tasks.

## Implementation projects (single; always customized)

Pattern: a paragraph `To deliver on our eHealth strategy for COUNTRY, SNOMED CT
will be implemented in the following eHealth projects:` followed by a `<ul>`
naming each project, its use case, location and scope (e.g. emergency
department system upgrade at hospital X; national EHR; national clinical
registry; national HIE infrastructure).

## Closing remarks (single choice: "Short" or "Long")

**Short**

```html
<p>SNOMED CT, the world's most comprehensive clinical terminology, has many potential benefits for the healthcare sector
in <span class='country'>COUNTRY</span>. It enables clinicians to record patient data more accurately and share this data with
other healthcare providers in a meaningful way to improve patient outcomes, it enables systems to integrate more effectively
with clinical decision support knowledge bases, and it enables clinical data to be integrated from disparate systems
for clinical analytics, population health management and clinical research.</p>
<p>Through the implementation of this SNOMED CT roadmap, <span class='country'>COUNTRY</span> can achieve
these benefits and deliver on our eHealth goals.</p>
```

**Long** — the Short text plus a middle paragraph: SNOMED CT will be
implemented at different levels of the health system (clinical records,
national registries, analytics and reporting), introduced as a requirement in
data exchange models and implementation guides, as a coordinated effort
including clinicians, software developers, public health officials and
technical interoperability architects.
