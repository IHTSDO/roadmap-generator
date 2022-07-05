export const stepsIntro = `The roadmap for SNOMED CT implementation in <span class='country'>COUNTRY</span> will be include the following steps:`;
export const steps = [
    {
      group: "Standards and Artifacts",
      options: [
        {
          opSelector: "Data Models",
          text: `<p>Identify information model standards for recording, exchanging, integrating and analysing clinical data.
          This step involves the following tasks:</p>
          <ul>
            <li>Identify data model standards to be used for each relevant clinical data functions (e.g. HL7 FHIR for 
              data exchange).</li>
            <li>Specify minimum datasets for common clinical use cases (e.g. emergency department minimum dataset).</li>
            <li>Create policy to establish the use of these data model standards across the healthcare sector.</li>
          </ul>`
        },
        {
          opSelector: "Code Systems",
          text: `<p>Establish SNOMED CT as the primary reference terminology in <span class='country'>COUNTRY</span>. 
          This step involves the following tasks:</p>
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
          opSelector: "Terminology Binding",
          text: `<p>Bind information models to SNOMED CT and other relevant code systems. This step involves the following tasks:</p>
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
          This step involves the following tasks:</p>
          <ul>
            <li>Prioritise the SNOMED CT subhierarchies and value sets requiring translation, based on implementation use cases
            and predicted frequency of use (frequency data can be gathered from experience in other countries).</li>
            <li>Define the translation process, including appropriate tooling and review processes.</li>
            <li>Identify suitable translation resources, with appropriate language and terminology skills (note: SNOMED CT training 
              should be offered to translators with no prior SNOMED CT experience).</li>
            <li>Perform translation and review process based on identified priorities.</li>
            <li>Distribute and/or deploy translations (e.g. via a terminology server or RF2 files).</li>
          </ul>`
        },
        {
          opSelector: "Maps",
          text: `<p>Create an maintain maps between SNOMED CT  and classifications and terminologies 
          used in <span class='country'>COUNTRY</span>. As SNOMED CT will be the primary 
          data entry vocabulary it is necessary to make available maps from SNOMED CT to other classifications, like ICD-10, in 
          order to support public health reporting use cases.</p>
          <p>During the implementation the need for new maps will be identified, and maps will be developed also for reimbursement 
          vocabularies, local interface terminologies, and others.</p>`
        },
        {
          opSelector: "National SNOMED CT extension",
          text: `<p>Create and maintain the <span class='country'>COUNTRY</span> Edition of SNOMED CT. Creating and 
          maintaining the extension requires establishing an authoring team, that will be in charge of creating new concepts, 
          updating descriptions to match local need, creating reference sets and maps.</p>
          <p>The <span class='country'>COUNTRY</span> Edition of SNOMED CT will be distributed using standard file packages, ready for 
          use on any compatible Terminology Server.</p>`
        },
        {
          opSelector: "Quality Framework",
          text: `<p>Implement a Quality Framework to guide the development of all the terminology artifacts required for
          the SNOMED CT implementation, including new concepts, translations, reference sets, maps, etc.</p>
          <p>Only through continuous improvement processes and indicators it's possible to ensure the best quality for the terminology 
          products that used in clinical care.</p>`
        }
      ]
    },
    {
      group: "Infrastructure",
      options: [
        {
          opSelector: "Shared terminology server",
          text: `<p>Deploy a National Terminology Server for integration with clinical tools. In order to facilitate the 
          adoption process, developers in charge of integrating SNOMED CT will have access to a shared Terminology Server 
          configured with the latest terminology artifacts. The server will be accessible through the HL7 FHIR Terminology APIs 
          (CodeSystems, ValueSets, ConceptMaps), and will support the use of Expression Constraint Language queries (ECL).</p>
          <p>Separate production and test instances will be available to support the development process.</p>`
        },
        {
          opSelector: "Shared EHR and clinical registries",
          text: `<p>Add support for SNOMED CT to the National EHR infrastructure in <span class='country'>COUNTRY</span> in all 
          data entry interfaces. The data collection forms in all National Registries will be gradually adapted for 
          SNOMED CT as well, benefiting from data exchange from other clinical platforms, and with the possibility of outputting 
          datasets encoded with legacy classifications through the use of mapping.</p>`
        },
        {
          opSelector: "National interoperability platform",
          text: `<p>Implement a National Interoperability Platform in <span class='country'>COUNTRY</span> based on the common data 
          model, including the necessary the terminology bindings to ensure the communication of detailed clinical information 
          encoded with SNOMED CT.</p>
          <p>In addition to clinical records storage and exchange services, SNOMED CT will be introduced in a set of ancillary services 
          that are required to support full interoperability, including a validation service that tests conformance with common model 
          structures and terminology bindings, a patient identification service, a national provider identification service, etc.</p>`
        },
        {
          opSelector: "National Release Center",
          text: `<p>Create the SNOMED National Release Center (NRC) for <span class='country'>COUNTRY</span>. 
          The responsibilities of the NRC include receiving the International Release of SNOMED CT from SNOMED International, making it 
          available to licensees in the Member country, and promoting and supporting adoption and deployment of SNOMED CT in 
          <span class='country'>COUNTRY</span>.</p>
          <p>The NRC is the primary contact point for both national Affiliates and SNOMED International, the NRC plays a central role in 
          effective and efficient collaboration with the various partners.<br>
          The NRC will address national implementation requirements, with training strategy based on the adoption and customization of 
          training resources published by SNOMED International.</p>`
        },
        {
          opSelector: "National education and training services",
          text: `<p>Implement a National education and training strategy. The strategy will have content tailored to 
          different audiences, including clinicians, software developers, implementers, etc. The training materials will be based on 
          the International training materials, and will be adapted and expanded according to local needs.</p>
          <p>The process will include on-line and in-person training sessions and will implement a certification process for validating 
          the skills acquired by the students.</p>`
        }
      ]
    },
    {
      group: "Promote Adoption",
      options: [
        {
          opSelector: "Develop national strategy for promoting adoption",
          text: `<p>Implement a strategy to identify the barriers and facilitators for the adoption of SNOMED CT and to execute 
          of actions to promote adoption based on this understanding. The adoption 
          strategy defines a set of activities aimed to reduce the barriers of adoption and to introduce a set of incentives to promote 
          the integration of SNOMED CT to clinical health information systems.</p>
          <p>It will be necessary to identify any legal or policy requirements that conflict with the adoption of a standard terminology, and
          to introduce the necessary changes. The availability of a robust national infrastructure, including a national terminology server 
          can be a way to avoid technological entry barriers for systems. Training is always a key element ot promote adoption and it should be
          accessible at no cost and using mechanisms that would allow participation even from remote locations.</p>
          <p>Financial incentives have proven to be effective in promoting adoption, balancing some of the costs of the adaptations require to 
          introduce support for SNOMED CT in existing software systems.</p>
          <p>Vendor certification is an incentive for companies that want to introduce new features in their systems and want to promote 
          the support of SNOMED CT as one of the arguments for their marketing strategy.</p>`
        },
        {
          opSelector: "Onboard influencers / champions",
          text: `<p>Contact early adopters to generate examples of successful implementations. During the implementation 
          process champions or influencers would be identified, selecting prestigious actors that have a clear view of the benefits of 
          SNOMED CT. The implementer team will work with these champions to produce communication pieces, webinars, and exemplar implementations 
          for training material.</p>`
        },
        {
          opSelector: "Identify quick wins / low hanging fruit projects",
          text: `<p>Identify projects that are good candidates for short and effective implementations. This strategy will prioritize 
          small projects with a clear goal and benefit from implementing SNOMED CT, and with proactive, skilled, and flexible teams.</p>
          <p>Dedicated implementation guidance from the NRC and SNOMED International will be key to accelerate the implementation process and 
          produce compelling results early.</p>`
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
          banks, philanthropic donors, etc.</p>`
        },
        {
          opSelector: "Engage clinicians",
          text: `<p>Create specific training materials oriented to clinicians, with real world clinical examples and demonstrating practical 
          healthcare benefits. It's important to consider the diversity in the clinicians activity, from primary care doctors, internists, 
          specialists, etc. An important aspect of the training is to assure that with effective implementations SNOMED CT is easy to use, 
          requires no special training and can be used even in busy care workflows.</p>
          <p>Clinicians can be great contributors to the implementation processes, facilitating the identification of barriers for adoption and 
          good practices.</p>`
        },
        {
          opSelector: "Engage software specialists",
          text: `<p>Establish a community of software specialists, backed in forums or social networks, with the goal of accelerating the 
          onboarding of new developers and ensure the best possible quality of implementations.</p>
          <p>Software specialists are a fundamental actor in the integration of SNOMED CT in clinical tools. They require training tailored 
          to their needs, including access to reference implementations, code examples, and open source components.</p>`
        },
        {
          opSelector: "Engage with the research community",
          text: `<p>Develop training material and organize workshops for interactive demonstrations of SNOMED CT capabilities for 
          analytics and research.</p>
          <p>The research community needs to have access to information on the benefits of using SNOMED CT encoded datasets, and to the 
          tools and techniques used for data analytics.</p>`
        },
        {
          opSelector: "Engage other stakeholders",
          text: `<p>Define a strategy to engage other groups that have access to SNOMED CT or are involved in some aspect of the data 
          management and analysis, like patients, healthcare  administrators, public health managers, government/policy makers, 
          system procurers, etc.</p>`
        }
      ]
    }
  ];
