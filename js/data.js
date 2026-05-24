/**
 * Global Portfolio Configuration Data
 */

const SITE_DATA = {
  personal: {
    name: "Laxman Puri",
    title: "Security Risk Analyst",
    tagline: "Cybersecurity Professional & AI Innovator",
    subtitle: "Cybersecurity, GenAI & Cloud — from risk analysis to intelligent automation.",
    email: "laxrule@gmail.com",
    phone: "623-523-2262",
    location: "Phoenix, AZ",
    linkedin: "https://www.linkedin.com/in/laxman-p-6b98a9351/",
    github: "https://github.com/lakylax",
    credly: "https://www.credly.com/users/laxman-puri/badges",
    resumeFile: "assets/resume.pdf",
    profileImage: "assets/images/profile-placeholder.svg",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
  },

  about: {
    summary: [
      "Security Risk Analyst at Amazon, contributing to safeguarding global operations by conducting security risk analysis and crisis management. I design and deploy AI-powered automation solutions using cloud services and Large Language Models to modernize operational workflows and enable real-time incident management.",
      "Graduate with a Master's in Information Assurance and a Bachelor's in Computer Science & IT. Passionate about cybersecurity, AI/ML, risk management, and building intelligent systems that transform how organizations approach security operations."
    ],
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "8+", label: "Certifications & Badges" },
      { number: "3", label: "Cloud Platforms" },
      { number: "5", label: "Languages Spoken" }
    ]
  },

  skills: [
    {
      category: "AI / ML / GenAI",
      items: ["Generative AI", "LLMs", "Agentic AI", "Prompt Engineering", "Conversational AI", "NLP", "Predictive Modeling", "XGBoost", "Gemini API", "Whisper"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "GCP", "Azure", "Docker", "Singularity", "Amazon Connect", "AWS Lambda", "Amazon Bedrock", "SageMaker", "DynamoDB", "Firebase"]
    },
    {
      category: "Cybersecurity",
      items: ["Risk Management", "Vulnerability Assessment", "Network Security", "PCI DSS", "Digital Forensics", "Incident Response", "NIST Framework", "Compliance", "Ethical Hacking", "IoT Security", "Cryptography"]
    },
    {
      category: "Programming & Tools",
      items: ["Python", "JavaScript", "Dart/Flutter", "SQL", "HTML/CSS", "Wireshark", "Nessus", "OpenVAS", "Kali Linux", "Metasploitable", "Git", "FTK"]
    }
  ],

  experience: [
    {
      role: "Security Risk Analyst",
      company: "Amazon",
      location: "Goodyear, AZ",
      period: "2024 – Present",
      highlights: [
        "Conduct security risk analysis and crisis management for a global security operations center, safeguarding personnel, data, and operations across thousands of sites",
        "Design and deploy AI-powered automation solutions using Amazon Connect, Bedrock, Lambda, DynamoDB, and Lex to modernize operational workflows",
        "Create conversational AI systems integrating LLMs with serverless infrastructure for real-time, voice-based incident triage and automated task creation",
        "Build NLP pipelines with Python-based Lambda functions for fuzzy matching validation, duplicate detection, and workflow automation",
        "Won the Company Innovation Challenge — led development of an AI-powered documentation automation solution that streamlines analyst workflows",
        "Evaluate emerging AI services including speech-to-speech capabilities and next-generation voice assistant architecture"
      ]
    },
    {
      role: "Graduate Assistant — Information Systems Department",
      company: "St. Cloud State University",
      location: "St. Cloud, MN",
      period: "2024",
      highlights: [
        "Supported the Student Ambassador Program — mentored incoming graduate students on academic planning and career development in cybersecurity",
        "Coordinated the Industry Partner Program (IPP) — facilitated connections between students and cybersecurity professionals for internship and job placement",
        "Organized Cybersecurity Awareness Week (CSAW) — planned workshops, speaker sessions, and hands-on demonstrations for 200+ students",
        "Provided research and administrative support for IT and cybersecurity initiatives within the Center for Information Assurance Studies (CIAS)",
        "Assisted faculty with curriculum development for graduate-level information assurance courses"
      ]
    },
    {
      role: "Graduate Assistant — BCRL/Digital Forensics Lab",
      company: "St. Cloud State University",
      location: "St. Cloud, MN",
      period: "2023",
      highlights: [
        "Provided technical support in the Business Computer Research Lab (BCRL) — maintained lab infrastructure including enterprise servers, workstations, and forensic imaging equipment",
        "Assisted in developing digital forensic methodologies for evidence acquisition, preservation, and analysis using industry-standard tools (FTK, EnCase)",
        "Researched emerging trends in digital forensics including mobile device forensics, cloud forensics, and anti-forensic techniques",
        "Contributed to curriculum improvements for graduate courses in digital forensics and ethical hacking",
        "Assisted in organizing networking events connecting students with industry professionals in cybersecurity and law enforcement forensics"
      ]
    },
    {
      role: "Senior Support Analyst (PCI Compliance)",
      company: "VikingCloud",
      location: "Warsaw, Poland",
      period: "2022",
      highlights: [
        "Led PCI DSS compliance support for merchant customers — guided businesses through Self-Assessment Questionnaires (SAQs), vulnerability scanning, and remediation steps",
        "Developed and delivered a comprehensive training program for new analysts covering PCI DSS v3.2.1 requirements, payment security fundamentals, and customer communication",
        "Conducted team training sessions on complex compliance scenarios including scope reduction, compensating controls, and network segmentation",
        "Mentored junior analysts on technical troubleshooting and escalation procedures for ASV scan failures and compliance validation issues",
        "Collaborated with product and engineering teams to improve the compliance platform based on customer feedback and common pain points"
      ]
    },
    {
      role: "Support Analyst (PCI Compliance)",
      company: "VikingCloud",
      location: "Warsaw, Poland",
      period: "2021 – 2022",
      highlights: [
        "Provided technical support to merchant customers via phone, email, and web chat — guiding them through PCI DSS compliance processes and platform navigation",
        "Assisted clients with Approved Scanning Vendor (ASV) vulnerability scans — interpreting results, explaining findings, and advising on remediation steps",
        "Analyzed customer feedback patterns and collaborated with the product team to implement UX improvements reducing support ticket volume",
        "Maintained up-to-date knowledge of PCI DSS requirements, payment industry best practices, and emerging threats to cardholder data environments",
        "Achieved first-contact resolution targets while handling high-volume inbound inquiries across multiple communication channels"
      ]
    }
  ],

  projects: [
    {
      title: "AI-Powered Documentation Automation",
      description: "Led development of an AI-powered solution that automates documentation workflows — integrating live AI processing, automated data retrieval, intelligent documentation generation, and streamlined communication. Won the company-wide Innovation Challenge competing against hundreds of participants.",
      tech: ["GenAI", "LLMs", "Cloud Architecture", "Automation", "NLP"],
      link: null
    },
    {
      title: "ML Predictive Risk Model",
      description: "Designed end-to-end machine learning predictive risk model architecture (Glue → S3 → SageMaker → Bedrock) for proactive incident management. Identified XGBoost can run natively on SageMaker without scikit-learn — architecture optimization. Delivered 714-line comprehensive PoC plan.",
      tech: ["XGBoost", "SageMaker", "Bedrock", "Python", "AWS Glue", "S3"],
      link: null
    },
    {
      title: "Conversational AI Voice System",
      description: "Built conversational AI systems integrating LLMs with serverless infrastructure for real-time voice-based incident triage, automated task creation, and intelligent call routing. Evaluated Amazon Nova Sonic for speech-to-speech capabilities.",
      tech: ["Amazon Connect", "Lex", "Lambda", "DynamoDB", "NLP", "Nova Sonic"],
      link: null
    },
    {
      title: "Sathi — AI Mental Health Companion",
      description: "Built at the Nepal-US Hackathon 2026 (Nepali Leaders Network). A Flutter-based mental health support platform with AI-assisted voice journaling, mood analysis via Gemini API, weekly wellbeing check-ins, private social feed, and mobile home-screen widget. Led the AI Integration (Gemini) component.",
      tech: ["Flutter", "Dart", "Gemini API", "Whisper", "Firebase", "Python"],
      link: "https://github.com/lakylax/sathi"
    },
    {
      title: "Digital Forensic Investigation",
      description: "Conducted full digital forensic investigation using FTK (Forensic Toolkit) — analyzed hard drive images, verified MD5/SHA hash integrity, recovered deleted files, examined email artifacts, browser history, and purchase records to reconstruct event timelines and establish digital evidence chain of custody.",
      tech: ["FTK", "Hash Verification (MD5/SHA)", "Evidence Recovery", "Timeline Analysis", "Chain of Custody"],
      link: null
    },
    {
      title: "Vulnerability Assessment — MongoDB in Linux Containers",
      description: "Performed comprehensive vulnerability assessment of MongoDB in Singularity containers on Ubuntu/VirtualBox. Used OpenVAS, Nessus, Nmap, and Zmap to identify critical vulnerabilities including default credentials, expired SSL certificates, and OS-level CVEs. Documented risk levels and proposed mitigation strategies.",
      tech: ["OpenVAS", "Nessus", "Nmap", "Zmap", "Docker", "Singularity", "MongoDB", "Ubuntu"],
      link: null
    },
    {
      title: "Intrusion Detection & Prevention Systems Research",
      description: "Developed comprehensive research proposal evaluating IDPS effectiveness using cross-sectional survey methodology. Investigated signature-based vs. behavior-based detection, machine learning approaches (deep learning, anomaly detection), and false positive impact on SOC performance.",
      tech: ["IDPS", "Machine Learning", "Anomaly Detection", "Network Security", "Research Design"],
      link: null
    },
    {
      title: "NIST Cybersecurity Framework Analysis",
      description: "In-depth analysis of the NIST CSF — examining all five core functions (Identify, Protect, Detect, Respond, Recover), implementation tiers, and profiles. Evaluated applicability across financial services, healthcare, and small businesses with practical implementation strategies.",
      tech: ["NIST CSF", "Risk Management", "PCI DSS", "HIPAA", "Security Governance"],
      link: null
    },
    {
      title: "Security Architecture Evaluation",
      description: "Comparative evaluation of security architectures — TCSEC (Orange Book), TCB, ITSEC, and Common Criteria (EAL1-EAL7). Analyzed trade-offs between simplicity and security, zero-trust frameworks, and determined Common Criteria provides optimal balance for modern systems.",
      tech: ["Common Criteria", "TCSEC", "ITSEC", "Zero Trust", "EAL Levels"],
      link: null
    },
    {
      title: "Network Security & Ethical Hacking Labs",
      description: "Hands-on penetration testing and network security labs — conducted vulnerability scanning with Nessus/OpenVAS, exploited Metasploitable targets, performed packet analysis with Wireshark, configured firewalls, and executed ethical hacking techniques including reconnaissance, enumeration, and exploitation.",
      tech: ["Kali Linux", "Metasploitable", "Wireshark", "Nessus", "Nmap", "Firewalls"],
      link: null
    },
    {
      title: "Cryptographic Protocols & Secure Communications",
      description: "Implemented and analyzed cryptographic protocols including symmetric/asymmetric encryption, digital signatures, certificate authorities, and secure key exchange. Studied protocol vulnerabilities and secure electronic commerce implementations.",
      tech: ["Cryptography", "PKI", "SSL/TLS", "Digital Signatures", "Key Exchange", "Secure E-Commerce"],
      link: null
    }
  ],

  certifications: [
    {
      name: "CompTIA Security+ ce",
      issuer: "CompTIA",
      issued: "08/2025",
      expires: "08/2028",
      image: "https://images.credly.com/images/80d8a06a-c384-42bf-ad36-db81bce5adce/blob",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issued: "01/2026",
      expires: "01/2029",
      image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      issued: "06/2024",
      expires: "06/2027",
      image: "https://images.credly.com/images/2030e43f-8003-4d4b-9630-847add403c87/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      name: "Deploy Kubernetes Applications on Google Cloud",
      issuer: "Google Cloud",
      issued: "04/2025",
      expires: null,
      image: "https://images.credly.com/images/f0388a0c-130f-47cd-8750-d6357e907e58/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      name: "Develop Your Google Cloud Network",
      issuer: "Google Cloud",
      issued: "04/2025",
      expires: null,
      image: "https://images.credly.com/images/b126c61c-4781-4f03-9b2b-062963003abf/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      name: "Implement Load Balancing on Compute Engine",
      issuer: "Google Cloud",
      issued: "04/2025",
      expires: null,
      image: "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      name: "Set Up an App Dev Environment on Google Cloud",
      issuer: "Google Cloud",
      issued: "04/2025",
      expires: null,
      image: "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    }
  ],

  volunteering: [
    {
      title: "Cybersecurity Exam Development Volunteer",
      organization: "ISC2",
      description: "Volunteered in ISC2 exam development workshops — writing, revising, and reviewing exam items for cybersecurity certifications. Participated in updating exam outlines and standard setting.",
      image: "https://images.credly.com/images/54d3717b-b54c-41d0-9b85-e019c0b574b0/image.png",
      credlyUrl: "https://www.credly.com/users/laxman-puri/badges"
    },
    {
      title: "ISC2 Scholarship Reviewer",
      organization: "ISC2 Center for Cyber Safety and Education",
      description: "Selected as a Scholarship Reviewer for cybersecurity programs across associate, undergraduate, and graduate levels. Evaluated competitive applications from students pursuing degrees in cybersecurity and information assurance worldwide — supporting a program that has awarded over 1,000 scholarships since 2011.",
      image: null,
      credlyUrl: null
    }
  ],

  education: [
    {
      degree: "Master of Science in Information Assurance",
      school: "St. Cloud State University",
      location: "St. Cloud, MN",
      period: "2023 – 2024",
      gpa: "3.55",
      concentration: "Networking",
      coursework: "Ethical Hacking, Digital Forensics & Ethics, Intrusion Detection & Prevention, Security & Cryptographic Protocols, Application Layer Security, IoT Security, Defensive Security & Firewalls, Database Application Security & Auditing, Secure Electronic Commerce, IT Security Policy & Risk Management"
    },
    {
      degree: "Bachelor of Science in Computer Science & IT",
      school: "Społeczna Akademia Nauk",
      location: "Warsaw, Poland",
      period: "2018 – 2022",
      gpa: null,
      concentration: null,
      coursework: "Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, Database Management Systems, Software Engineering, Web Development, Discrete Mathematics, Computer Architecture, Artificial Intelligence"
    }
  ],

  languages: [
    { name: "Nepali", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Polish", level: "Intermediate" },
    { name: "German", level: "Intermediate" }
  ]
};