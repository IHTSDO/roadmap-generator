export const stepsIntro = `The roadmap for SNOMED CT implementation in <span class='country'>COUNTRY</span> will be include the following steps:`;
export const steps = [
    {
      group: "Plan Adoption",
      options: [
        {
          opSelector: "Develop a national strategy for promoting SNOMED CT adoption",
          text: `<p>Implement a strategy to identify the barriers and enablers for the adoption of SNOMED CT and to execute 
          actions to promote adoption based on this understanding. This step may involve the following tasks:</p>
          <ul>
            <li>Identify the barriers for SNOMED CT adoption in <span class='country'>COUNTRY</span>, including legislation,  
              policy, lack of availability of robust national infrastructure, knowledge, skills and commercial interests.</li>
            <li>Identify the enablers for SNOMED CT adoption in <span class='country'>COUNTRY</span>. including 
              local champions of SNOMED CT, legislation, policy, availability of national infrastructure, knowledge, skills, 
              education providers, and commercial or financial interests.</li>
            <li>Implement actions to reduce barriers and increase enablers of SNOMED CT adoption in clinical health information 
              systems, e.g. legislation and policy changes, development of national infrastructure, provision of financial incentives.</li>
          </ul>`
        },
        {
          opSelector: "Identify requirements of policy changes",
          text: `<p>The use of terminologies and code systems are usually mandated by policies and regulations around public 
          health statistics, billing, existing disease registries, healthcare coverage benefits, etc. It is important to 
          understand these requirements to ensure that the proposed SNOMED implementation will fit properly with those requirements 
          or that any necessary changes are introduced:</p>
          <ul>
            <li>Identify regulations that mandate clinical coding and reporting.</li>
            <li>Plan the creation of maps from SNOMED to existing code systems.</li>
            <li>Update regulations to include SNOMED CT.</li>
          </ul>`
        },
        {
          opSelector: "Identify impactful national projects",
          text: `<p>Identify projects that will have a significant impact in the national healthcare scenario, supporting 
          the implementation of policies related to the top priorities of the national healthcare agenda.</p>
          <p>This step may involve the following tasks:</p>
          <ul>
            <li>Identify the priorities of the healthcare agenda and select projects that would contribute to its execution.</li>
            <li>Work with project stakeholders to agree on goals for use of SNOMED CT within the selected projects.</li>
            <li>Design and architect how SNOMED CT will be implemented in the projects and develop SNOMED CT implementation guidance.</li>
            <li>Implement project with SNOMED CT and measure the benefits to support policy implementation monitoring.</li>
            <li>Share outcomes with stakeholders and future projects, including benefits and lessons learned.</li>
          </ul>`
        },
        {
          opSelector: "Identify quick wins and low hanging fruit projects",
          text: `<p>Identify projects that are good candidates for short and effective implementations. This strategy will prioritize 
          small projects with a clear goal and benefit from implementing SNOMED CT, and with proactive, skilled, and flexible teams. Dedicated 
          implementation guidance from the NRC and SNOMED International will be key to accelerate the implementation process and 
          produce compelling results early.</p>
          <p>This step may involve the following tasks:</p>
          <ul>
            <li>Identify projects that may be good candidates for achieving benefits quickly and/or with low effort.</li>
            <li>Work with project stakeholders to agree on goals for use of SNOMED CT within the selected projects.</li>
            <li>Design and architect how SNOMED CT will be implemented in the projects and develop SNOMED CT implementation guidance.</li>
            <li>Implement project with SNOMED CT and measure the benefits where possible.</li>
            <li>Share outcomes with stakeholders and future projects, including benefits and lessons learned.</li>
          </ul>`
        },
        {
          opSelector: "Onboard influencers / champions",
          text: `<p>Engage with champions and influencers from early adopters of SNOMED CT.
          This step may involve the following tasks:</p>
          <ul>
            <li>Contact early adopters to find examples of successful SNOMED CT implementations.</li>
            <li>Identify SNOMED CT champions or influencers from early adopters (or other relevant stakeholders), who have a clear 
              view of the benefits of SNOMED CT.</li>
            <li>Provide any necessary training, support and/or information for the selected champions.</li>
            <li>Engage with the champions to produce communication pieces, webinars, and exemplar implementation examples 
              for training.</li>
          </ul>`
        }
      ]
    },
    {
      group: "Standards and Artifacts",
      options: [
        {
          opSelector: "Data models",
          text: `<p>Define information model standards for recording, exchanging, integrating and analysing clinical data.
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify data model standards to be used for each relevant clinical data functions (e.g. HL7 FHIR for 
              data exchange).</li>
            <li>Specify common datasets for common clinical use cases (e.g. emergency department minimum dataset).</li>
            <li>Create policy to establish the use of these data model standards across the healthcare sector.</li>
          </ul>`
        },
        {
          opSelector: "Code systems",
          text: `<p>Establish SNOMED CT as the primary reference terminology in <span class='country'>COUNTRY</span>. 
          This step may involve the following tasks:</p>
          <ul>
            <li>Create policy or legislation to establish SNOMED CT as the primary reference terminology both nationally and 
            in specific healthcare sectors.</li>
            <li>Mandate the use of SNOMED CT for specific purposes, e.g. to record reason for admission into hospital, diagnoses, 
            procedures, medications, allergies etc.</li>
            <li>Identify other code systems that will be used for reporting or local business purposes, e.g. ICD-10, and
            clearly define the function of each code system.</li>
          </ul>`
        },
        {
          opSelector: "Terminology binding",
          text: `<p>Bind information models to SNOMED CT and other relevant code systems. This step may involve the following tasks:</p>
          <ul>
            <li>Identify the code system to be used for each coded data element in each information model.</li>
            <li>Define the value set that may be used to populate each coded data element, either using a computable query (intensionally) 
            or by defining a fixed list of concept identifiers (extensionally).</li>
            <li> Develop an implementation guide that specifies the terminology binding for each coded data element. 
            Note: This implementation guidance can be used by developers to restrict the values a user is allowed to enter into
            a specific data field, for validation of exchanged messages, for data analytics, and many other use cases.</li>
          </ul>`
        },
        {
          opSelector: "Translation",
          text: `<p>Translate SNOMED CT into the local language dialect(s) spoken in <span class='country'>COUNTRY</span>.
          This step may involve the following tasks:</p>
          <ul>
            <li>Prioritise the SNOMED CT subhierarchies and value sets requiring translation, based on implementation use cases
            and predicted frequency of use (which may be gathered from prior experience in other countries).</li>
            <li>Design the translation process, including appropriate tooling, review and ongoing maintenance.</li>
            <li>Identify suitable translation resources, with appropriate language and terminology skills</li>
            <li> Offer SNOMED CT training to translators to ensure they have the appropriate level of SNOMED CT understanding.</li>
            <li>Perform translation and review process based on the identified priorities.</li>
            <li>Distribute and/or deploy translations (e.g. via a terminology server or RF2 files).</li>
            <li>Maintain the translations and republish at agreed intervals (ideally aligning with updates to the terminology)</li>
          </ul>`
        },
        {
          opSelector: "Maps",
          text: `<p>Create and maintain maps between SNOMED CT  and other code systems used in <span class='country'>COUNTRY</span>, 
          to support use cases, such as data integration, analysis, reimbursement and public health reporting. 
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify other code systems either currently used or needed in the future in <span class='country'>COUNTRY</span>. </li>
            <li>Prioritise the code systems requiring mapping to/from SNOMED CT, considering the priority projects and use cases. </li>
            <li>Design the mapping process, including appropriate tooling, review and ongoing maintenance. </li>
            <li>Identify suitable mapping resources, with an appropriate level of understanding of both SNOMED CT and the other code system. </li>
            <li>Perform the map and review processes based on the identified priorities.</li>
            <li>Distribute and/or deploy the maps (e.g. via a terminology server or RF2 files).</li>
            <li>Maintain the maps and republish at agreed intervals (e.g. to align with updates to the terminology)</li>
          </ul>`
        },
        {
          opSelector: "National SNOMED CT extension",
          text: `<p>Create and maintain the <span class='country'>COUNTRY</span> Edition of SNOMED CT. 
          Creating and 
          maintaining the extension requires establishing an authoring team, that will be in charge of creating new concepts, 
          updating descriptions to match local need, creating reference sets and maps.</p>
          <p>The <span class='country'>COUNTRY</span> Edition of SNOMED CT will be distributed using standard file packages, ready for 
          use on any compatible Terminology Server.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Establish an authoring team and provide SNOMED CT authoring training (e.g. using SNOMED International's authoring courses).</li>
            <li>Ensure authors are certified in SNOMED CT authoring with SNOMED International.</li>
            <li>Select and deploy a SNOMED CT authoring platform and a content request system for submission of new content requests.</li>
            <li>Establish editorial guidelines, authoring/release processes, roles and responsibilities.</li>
            <li>Validate, prepare and publish RF2 package for the <span class='country'>COUNTRY</span> Edition.</li>
            <li>Distribute the extension edition (e.g. via a terminology server or RF2 files), ready to deploy on any RF2-enabled terminology server.</li>
            <li>Maintain and republish the extension edition, following and agreed schedule.</li>
          </ul>`
        },
        {
          opSelector: "Quality framework",
          text: `<p>Implement a Quality Framework to guide the development of all the terminology artifacts required for
          the SNOMED CT implementation, including new concepts, translations, reference sets, maps, etc.</p>
          <p>Only through continuous improvement processes and indicators is it possible to ensure the best quality for the terminology 
          products that used in clinical care.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify all the terminology artifacts being developed.</li>
            <li>Develop quality processes and measures for each artifact.</li>
            <li>Identify appropriate governance bodies to oversee important clinical and technical decisions relating to the terminology artifacts.</li>
            <li>Implement quality processes and measures (automating as much as possible)</li>
            </li>Review quality framework, at regular intervals, for improvement opportunities.</li>
          </ul>`
        }
      ]
    },
    {
      group: "Infrastructure",
      options: [
        {
          opSelector: "Shared terminology server",
          text: `<p>Deploy a National Terminology Server configured with the latest terminology artifacts. This national 
          terminology server will support a set of agreed use cases, e.g. terminology distribution, integration with 
          clinical systems, data analytics, message validation, vendor community education etc.</p>
          </p>The national terminology server will be accessible through the HL7 FHIR terminology services APIs, and will provide full support
          for SNOMED CT-specific features, including the SNOMED ECL queries (Expression Constraint Language), appropriate dialect preferences, 
          and national extension content. Separate terminology server instances may be required to support different use cases 
          (e.g. a production instance, and training/test instance)
          This step may involve the following tasks:</p>
          <ul>
            <li>Define the key use cases and requirements for a national terminology server.</li>
            <li>Select terminology server software that meets your requirements. 
            (Note: Ensure that all required SNOMED CT features are available, including support for ECL queries.)</li>
            <li>Ensure technical resources are in place to deploy, maintain, upload new content and ensure the availability of the terminology services.</li>
            <li>Deploy and maintain (both software and content) terminology services</li>
            <li>Communicate, document and promote the terminology services</li>
            <li>Support, guide and educate users of the terminology services.</li>
          </ul>`
        },
        {
          opSelector: "Shared EHR and clinical registries",
          text: `<p>Add SNOMED CT coded data to all shared (e.g. national, regional) Electronic Health Records (EHRs) and clinical registries. 
          The data collection forms for all national registries will be adapted for SNOMED CT, enabling data integration from other
          clinical system that either use SNOMED CT natively, or can map legacy codes to SNOMED CT.
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify and prioritise shared EHR systems and clinical registries for SNOMED CT adoption.</li>
            <li>Bind SNOMED CT to appropriate data elements in the relevant information models, developing suitable value sets.</li>
            <li>Implement these SNOMED CT terminology bindings in the storage, user interfaces, and data analytics components of the systems.</li>
            <li>Maintain SNOMED CT value sets, bindings, and other implementation artifacts</li>
          </ul>`
        },
        {
          opSelector: "National interoperability platform",
          text: `<p>Implement a National Interoperability Platform in <span class='country'>COUNTRY</span> based on the common data 
          model for exchange and associated terminology bindings. This step may involve the following tasks:</p>
          <ul>
            <li>Identify national services required, e.g. clinical records storage, exchange service, message validation service, 
              patient identification service, national provider identification service </li>
            <li>Design, develop, deploy and maintain each service in the national interoperability platform, using one or more 
            SNOMED-enabled terminology servers to enable the searching, mapping and validation of SNOMED CT codes. </li>
          </ul>`
        },
        {
          opSelector: "National release center",
          text: `<p>Establish the SNOMED National release center (NRC) for <span class='country'>COUNTRY</span>. 
          The primary responsibilities of the NRC include making the SNOMED CT international release available
          to licensees in <span class='country'>COUNTRY</span>, and promoting the adoption of SNOMED CT.
          The NRC is the primary contact point for both national Affiliates and SNOMED International. The NRC also plays 
          a central role in effective and efficient collaboration with the various stakeholders and partners.<br>
          This step may involve the following tasks:</p>
          <ul>
            <li>Select an organisation to serve as <span class='country'>COUNTRY</span>'s NRC.</li>
            <li>Define the functions and responsibilities of the NRC.</li>
            <li>Recruit appropriate resources to the NRC and provide staff with SNOMED CT training</li>
            <li>Acquire appropriate tooling to support NRC's functions, e.g. terminology distribution service, authoring platform.</li>
            <li>Run the NRC in a sustainable way, promoting and supporting the adoption and implementation of SNOMED CT.</li>
          </ul>`
        },
        {
          opSelector: "National education and training services",
          text: `<p>Implement a National education and training programme. 
              This step may involve the following tasks:</p>
          <ul>
            <li>Identify the target audiences (e.g. clinicians, software developers, implementers) and learning objectives for 
              each target audience.</li>
            <li>Identify suitable education material from SNOMED International to promote and/or customize to a local audience.</li>
            <li>Engage with a suitable education delivery provider (eg university) to host localised SNOMED CT online training.</li>
            <li>Consider other modes of training, including in person workshops, vendor days and/or showcase events.</li>
            <li>Implements education plans, including running workshops and deploying customized online training.</li>
            <li>Participate in SNOMED International's ELearning Advisory Group to share education experiences with other Members.</li>
          </ul>`
        }
      ]
    },
    {
      group: "Capacity Building",
      options: [
        {
          opSelector: "Engage financial sponsors",
          text: `<p>Produce documentation and guidance on how to estimate the value proposition of the implementation of SNOMED CT and how to 
          calculate the return of investment (ROI). Promote the benefits of SNOMED CT in funding organizations like multi-lateral development 
          banks, philanthropic donors, etc.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Review the value proposition work developed by SNOMED International at https://www.value.snomed.org/.</li>
            <li>Identify the key national eHealth goals, projects, clinical focus areas, and potential SNOMED CT benefits that align with these.</li>
            <li>Develop the value proposition for using SNOMED CT in <span class='country'>COUNTRY</span>, building upon
          the above resources.</li>
            <li>Identify key financial sponsors and communicate the SNOMED CT value proposition (e.g. report, presentation, meetings)</li>
          </ul>`
        },
        {
          opSelector: "Engage clinicians",
          text: `<p>Create specific training materials oriented to clinicians, with real world clinical examples and demonstrating practical 
          healthcare benefits. It's important to consider the diversity in the clinicians activity, from primary care doctors, internists, 
          specialists, etc. An important aspect of the training is to assure that with effective implementations SNOMED CT is easy to use, 
          requires no special training and can be used even in busy care workflows.</p>
          <p>Clinicians can be great contributors to the implementation processes, facilitating the identification of barriers for adoption and 
          good practices.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify key clinician groups and prioritise - e.g. via healthcare facilities, clinical colleges, specialty groups.</li>
            <li>Identify key benefits of SNOMED CT for each clinical group and determine communication objectives.</li>
            <li>Share SNOMED International's clinician focused education - see https://courses.ihtsdotools.org.</li>
            <li>Develop additional materials for events, education and information sharing</li>
            <li>Arrange online training, workshops, demonstrations, presentations and other activities to engage with clinicians.</li>
          </ul>`
        },
        {
          opSelector: "Engage software specialists",
          text: `<p>Establish a community of software specialists, backed in forums or social networks, with the goal of accelerating the 
          onboarding of new developers and ensure the best possible quality of implementations.</p>
          <p>Software specialists are a fundamental actor in the integration of SNOMED CT in clinical tools. They require training tailored 
          to their needs, including access to reference implementations, code examples, and open source components.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify key vendors, software developers and relevant professional bodies in <span class='country'>COUNTRY</span>.</li>
            <li>Identify key benefits of SNOMED CT for software specialists in <span class='country'>COUNTRY</span>.</li> 
          including the Terminology Services Course and certification.</li>
            <li>Share software developer education material from SNOMED International, including the 
              Terminology Services Course and certification - see https://courses.ihtsdotools.org.</li>
            <li>Develop new local training materials for software specialists where required.</li>
            <li>Establish forums and social networks to engage with software specialists.</li>
          </ul>`
        },
        {
          opSelector: "Engage with the research community",
          text: `<p>Develop training material and organize workshops for interactive demonstrations of SNOMED CT capabilities for 
          analytics and research.</p>
          <p>The research community needs to have access to information on the benefits of using SNOMED CT encoded datasets, and to the 
          tools and techniques used for data analytics.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify key research groups - e.g. via universities, commercial organisations, and professional bodies.</li>
            <li>Identify key benefits of SNOMED CT for the research community in <span class='country'>COUNTRY</span>.</li>
            <li>Share data analytics education material from SNOMED International with research community 
          - see https://courses.ihtsdotools.org.</li>
            <li>Arrange workshops and other forums to showcase SNOMED CT use for analytics and research.</li>
          </ul>`
        },
        {
          opSelector: "Engage other stakeholders",
          text: `<p>Define a strategy to engage other groups that have access to SNOMED CT or are involved in some aspect of the data 
          management and analysis, like patients, healthcare  administrators, public health managers, government/policy makers, 
          system procurers, etc.</p>
          This step may involve the following tasks:</p>
          <ul>
            <li>Identify other key stakeholder groups.</li>
            <li>Identify key benefits of SNOMED CT for the other stakeholder groups.</li>
            <li>Share SNOMED CT education options offered by SNOMED International with other stakeholder groups.
                - see https://courses.ihtsdotools.org.</li>
            <li>Plan and implement a strategy to engage stakeholder groups, including forums, workshops, presentations etc.</li>
          </ul>`
        }
      ]
    }
  ];
