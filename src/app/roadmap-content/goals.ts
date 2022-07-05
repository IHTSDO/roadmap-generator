export const goalsIntro = `The adoption of SNOMED CT will support the following eHealth goals:`;
export const goals = [
    {
    opSelector: "Standardization of health record data",
    text: `<p>SNOMED CT will be defined as the standard for capturing data in clinical systems, including the domains of diagnoses, 
    therapeutic and diagnostic procedures, medications, immunizations, and allergies. 
    When SNOMED CT is implemented in clinical systems it allows practitioners to accurately represent clinical concepts, generating datasets 
    ready to be used in analytics, quality metrics, decision support and many other use cases.
    In cases where local code systems or classifications are required for reporting purposes, a map will be developed from SNOMED CT to the other 
    code system to enable clinical data entry to be standardized using SNOMED CT and then transformed as required. </p>`
    },
    {
    opSelector: "Data exchange",
    text: `<p>SNOMED CT will be defined as the common reference terminology for sharing data between facilities and/or healthcare providers. Information 
    exchange is the key to implement continuity of care and patient centered care. Implementation guides that combine the benefits of SNOMED CT with 
    a common information model (e.g. HL7 FHIR resources) will ensure the consistent transmission of information and meaning between different systems.</p>`
    },
    {
    opSelector: "Clinician support",
    text: `<p>SNOMED CT will be defined as the standard for representing clinical knowledge in decision support systems. 
    Clinical decision support tools link patient information to clinical knowledge, protocols or guidelines, providing alerts and advice 
    to clinicians during the care of the patient. SNOMED CT provides the level of detail needed to encode knowledge rules, conditions and actions.
    Using SNOMED CT it's possible to share knowledge databases and access a wide market of vendors that provide services using the standard.</p>`
    },
    {
    opSelector: "Population health",
    text: `<p>Data analysts supporting population health will have detailed, high quality and up to date information. Direct data entry 
    by clinicians using SNOMED CT ensures that the information will travel directly from the point of care to the epidemiological 
    analysis avoiding transcriptions and manual classification steps, to support functions such as trend analysis, 
    pharmacovigilance and clinical audit.</p>`
    },
    {
    opSelector: "Clinical research",
    text: `<p>Researchers will be trained to leverage the power of SNOMED CT for clinical research. The availability of large SNOMED CT 
    encoded datasets opens many opportunities for very accurate patient selection for inclusion in clinical trials, it facilitates retrospective 
    studies, and opens the door to the realization of real world evidence-based studies.</p>`
    }
];
