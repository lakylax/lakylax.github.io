// ═══════════════════════════════════════════════════════════════
// PORTFOLIO DATA — Edit this file to update all site content
// ═══════════════════════════════════════════════════════════════

const SITE_DATA = {

  // ─── Personal Info ───────────────────────────────────────────
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
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree form ID
  },

  // ─── About / Summary ─────────────────────────────────────────
  about: {
    summary: [
      "Security Risk Analyst at Amazon, safeguarding global operations through risk analysis, crisis management, and AI-powered automation. I build intelligent systems using Amazon Bedrock, Lambda, and LLMs that modernize how security teams detect, respond to, and prevent incidents at scale.",
      "Backed by 38 hands-on projects spanning offensive security (penetration testing, exploit development, MITM attacks), cryptographic systems, cloud infrastructure, and full-stack development — each documented with in-depth technical reports. M.S. Information Assurance (NSA/DHS CAE-CD program) and B.Eng. Computer Science & IT across two continents."
    ],
    stats: [
      { number: "5+", label: "Years Experience" },
      { number: "8+", label: "Certifications & Badges" },
      { number: "38", label: "Projects & Labs" },
      { number: "25", label: "Documented Reports" }
    ]
  },

  // ─── Skills (categorized) ────────────────────────────────────
  skills: [
    {
      category: "AI / ML / GenAI",
      items: ["Generative AI", "LLMs", "Agentic AI", "Prompt Engineering", "Conversational AI", "NLP", "Predictive Modeling", "XGBoost", "Gemini API", "Whisper"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "GCP", "Azure", "Docker", "Singularity", "Amazon Connect", "AWS Lambda", "Amazon Bedrock", "SageMaker", "DynamoDB", "Firebase", "AWS EC2", "Oracle Database", "MongoDB", "IIS", "Apache", "VirtualBox"]
    },
    {
      category: "Cybersecurity",
      items: ["Penetration Testing", "Vulnerability Assessment", "Risk Management", "Network Security", "MITM Attacks", "ARP Spoofing", "DNS Poisoning", "SQL Injection", "XSS", "Buffer Overflow", "Cryptography", "Digital Forensics", "Incident Response", "PCI DSS", "NIST Framework", "Steganography", "Forensic Imaging", "SSL/TLS"]
    },
    {
      category: "Programming & Tools",
      items: ["Python", "Java", "JavaScript", "C", "Dart/Flutter", "SQL", "HTML/CSS", "Flask", "Scapy", "Metasploit", "Burp Suite", "Nmap", "Wireshark", "tshark", "Nessus", "OpenVAS", "Zmap", "CrypTool", "OpenSSL", "Kali Linux", "Git", "FTK", "Scilab", "Cisco Packet Tracer"]
    },
    {
      category: "Platforms & Systems",
      items: ["Linux (Ubuntu/Kali)", "Windows Server", "VirtualBox", "Oracle SQL Developer", "IntelliJ IDEA", "Moodle LMS", "UFW", "Certbot/Let's Encrypt", "Tableau Write Blockers", "Phantym-A Forensics", "Cisco IOS", "XAMPP"]
    }
  ],

  // ─── Experience ──────────────────────────────────────────────
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
        "Managed the Industry Partner Program (IPP) — coordinated 8 industry speakers from CheckPoint, Capgemini, and other firms for student engagement sessions on cybersecurity careers and emerging threats",
        "Conducted competitive analysis of 20+ university Information Assurance programs nationwide to benchmark SCSU's MSIA curriculum and identify improvement opportunities",
        "Organized CSAW 2024 (Cybersecurity Awareness Week) — planned workshops, CTF demonstrations, and speaker sessions for 200+ students at an NSA/DHS CAE-CD designated institution",
        "Built research publication website content and digital marketing materials to promote the Center for Information Assurance Studies (CIAS) programs",
        "Supported the Student Ambassador Program — mentored incoming international graduate students on academic planning and career development in cybersecurity"
      ]
    },
    {
      role: "Graduate Assistant — BCRL/Digital Forensics Lab",
      company: "St. Cloud State University",
      location: "St. Cloud, MN",
      period: "2023",
      highlights: [
        "Developed a comprehensive insurance fraud forensic training case for the Digital Forensics Lab (funded by $316K DoD/NSA grant) — created 25+ digital evidence artifacts used in graduate-level coursework",
        "Researched SSD forensics challenges — presented findings on TRIM command impact, wear leveling, and garbage collection effects on forensic evidence acquisition and integrity",
        "Provided technical support in the BCRL/Digital Forensics Lab — maintained Phantym-A forensic workstations, Tableau write blockers, and enterprise imaging equipment",
        "Organized CSAW Fall 2023 event — coordinated cybersecurity awareness workshops and hands-on forensic demonstrations for the university community",
        "Assisted faculty with forensic evidence acquisition, preservation, and analysis methodologies using industry-standard tools (FTK, EnCase, FTK Imager)"
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

  // ─── Projects ───────────────────────────────────────────────
    projects: [
    {
      title: "AI-Powered Documentation Automation",
      description: "Led development of an AI-powered documentation system that won the Company Innovation Challenge. Integrates Amazon Bedrock LLMs with serverless infrastructure to automatically generate, format, and distribute operational documentation — reducing analyst workload and improving consistency across thousands of daily reports.",
      tech: ["Amazon Bedrock", "AWS Lambda", "DynamoDB", "Python", "NLP", "Serverless"],
      link: null,
    },
    {
      title: "ML Predictive Risk Model",
      description: "Built a machine learning pipeline for predictive risk scoring — using XGBoost and historical incident data to forecast security events. Integrated with existing dashboards for real-time risk visualization and automated alerting thresholds.",
      tech: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Data Visualization", "Risk Modeling"],
      link: null,
    },
    {
      title: "Conversational AI Voice System",
      description: "Designed and deployed a voice-based AI system using Amazon Connect, Lex, and Bedrock for automated incident triage. Handles real-time voice interactions, performs intent classification, creates tickets, and routes escalations — reducing human operator workload for routine security calls.",
      tech: ["Amazon Connect", "Lex", "Bedrock", "Lambda", "DynamoDB", "Voice AI"],
      link: null,
    },
    {
      title: "Sathi — AI Mental Health Companion",
      description: "Developed an AI-powered mental health companion app at the Nepal-US Hackathon 2026. Built with Flutter/Dart frontend and Gemini API backend, featuring conversational therapy sessions, mood tracking, crisis detection, and culturally-aware responses for South Asian users.",
      tech: ["Flutter", "Dart", "Gemini API", "Firebase", "AI/ML", "Mobile Development"],
      link: "https://github.com/lakylax/sathi",
      report: "assets/reports/hackathon/sathi/index.html",
    },
    {
      title: "Python Port Scanner",
      description: "Developed a custom network port scanner in Python for reconnaissance and vulnerability discovery. Implemented TCP connect scanning, service banner grabbing, multi-threaded scanning for performance, and formatted output reporting. Used as part of ethical hacking methodology for target enumeration and attack surface mapping.",
      tech: ["Python", "Socket Programming", "TCP/IP", "Multithreading", "Network Reconnaissance"],
      link: null,
    },
    {
      title: "Steganography Detection & Analysis",
      description: "Performed digital forensics investigation focused on steganography — detecting and extracting hidden data concealed within image and media files. Applied forensic analysis techniques to identify covert communication channels and hidden information in digital evidence.",
      tech: ["Steganography", "Digital Forensics", "Hidden Data Detection", "Forensic Analysis", "Evidence Investigation"],
      link: null,
    },
    {
      title: "CSAW Cybersecurity Event Organization",
      description: "Organized and managed Cybersecurity Awareness Week (CSAW) events at SCSU as Graduate Assistant — coordinated workshops, speaker sessions, and hands-on security demonstrations. CSAW is a globally recognized cybersecurity event (originated at NYU Tandon, 20,000+ annual participants). Managed logistics, marketing materials, and student engagement for the university's flagship security event.",
      tech: ["Event Management", "Cybersecurity Awareness", "CSAW", "Workshop Coordination", "Public Speaking"],
      link: null,
    },
    {
      title: "Digital Forensics Training Case Development",
      description: "Created a comprehensive insurance fraud forensic training case for the SCSU Digital Forensics Lab (funded by $316K DoD/NSA grant). Developed the full evidence scenario with 25+ digital artifacts, designed investigation workflows for students, and documented expected findings. Used in graduate-level forensics coursework at an NSA/DHS CAE-CD designated institution.",
      tech: ["Digital Forensics", "Case Development", "Evidence Fabrication", "FTK", "Training Design", "Forensic Methodology"],
      link: null,
    },
    {
      title: "SSD Forensics Research",
      description: "Researched and presented on the challenges of digital forensics on Solid State Drives (SSDs) — examining how TRIM commands, wear leveling, and garbage collection make traditional forensic acquisition methods unreliable. Analyzed implications for evidence integrity and proposed alternative forensic approaches for modern storage media.",
      tech: ["SSD Forensics", "TRIM", "Wear Leveling", "Evidence Acquisition", "Research Methodology", "Digital Forensics"],
      link: null,
    },
    {
      title: "Digital Forensic Investigation",
      description: "Full digital forensic investigation of a simulated homicide case — analyzed suspect's hard drive image using FTK, created forensic case files, verified hash values (MD5, SHA1, SHA256), examined email evidence, recovered deleted files, and successfully linked digital evidence to the perpetrator through timeline reconstruction and evidence correlation.",
      tech: ["FTK", "Hash Verification", "Evidence Chain of Custody", "Email Forensics", "Deleted File Recovery", "Timeline Analysis"],
      link: null,
    },
    {
      title: "NIST Cybersecurity Framework Analysis",
      description: "Comprehensive 67,000-word analysis of the NIST Cybersecurity Framework — covering all five core functions (Identify, Protect, Detect, Respond, Recover), implementation tiers, and framework profiles. Applied to real-world organizational scenarios with risk assessment methodologies and control mapping.",
      tech: ["NIST CSF", "Risk Assessment", "GRC", "Security Controls", "Compliance", "Policy Development"],
      link: null,
    },
    {
      title: "Intrusion Detection & Prevention Systems Research",
      description: "Research proposal and implementation study on Intrusion Detection and Prevention Systems — covered Snort, Suricata, and OSSEC for host-based and network-based intrusion detection. Analyzed signature-based vs. anomaly-based detection, evaluated false positive rates, and proposed deployment architectures for enterprise environments.",
      tech: ["IDS/IPS", "Snort", "Suricata", "OSSEC", "Network Monitoring", "Threat Detection"],
      link: null,
    },
    {
      title: "AWS EC2 — Oracle Database Deployment & Security",
      description: "Launched and configured an AWS EC2 Windows Server 2022 instance, installed Oracle 19c Database Server, configured Oracle Listener/TNS for remote connectivity, set up AWS Security Groups with custom inbound rules (Oracle-RDS), and established secure remote database access via SQL Developer from external machines.",
      tech: ["AWS EC2", "Oracle 19c", "Windows Server 2022", "Security Groups", "SQL Developer", "RDP"],
      link: null,
      report: "assets/reports/cloud-security/aws-ec2-oracle-deployment/index.html"
    },
    {
      title: "Vulnerability Assessment — MongoDB in Linux Containers",
      description: "Performed comprehensive vulnerability assessment of MongoDB in Singularity containers on Ubuntu/VirtualBox. Used OpenVAS, Nessus, Nmap, and Zmap to identify critical vulnerabilities including default credentials, expired SSL certificates, and OS-level CVEs. Documented risk levels and proposed mitigation strategies in a formal project report.",
      tech: ["OpenVAS", "Nessus", "Nmap", "Zmap", "Singularity", "MongoDB", "Ubuntu", "VirtualBox"],
      link: null,
      report: "assets/reports/cloud-security/mongodb-vulnerability-assessment/index.html"
    },
    {
      title: "Application Security — Secure Flask Development",
      description: "Secured a Flask web application's registration and login system — implemented password hashing, session management, CSRF protection, and input sanitization. Analyzed authentication vulnerabilities and applied secure coding practices to prevent common web application attacks.",
      tech: ["Flask", "Python", "SQLite", "Authentication", "Session Management", "CSRF Protection", "Secure Coding"],
      link: null,
      report: "assets/reports/application-security/flask-login-security/index.html"
    },
    {
      title: "Application Security — Linux Web Server Hardening",
      description: "Deployed and hardened an Ubuntu 20.04 web server — configured Apache, obtained SSL/TLS certificates, implemented UFW firewall rules, set up DNS, and secured SSH access. Full server-to-production security configuration.",
      tech: ["Ubuntu 20.04", "Apache", "SSL/TLS", "UFW Firewall", "DNS", "SSH Hardening", "Azure"],
      link: null,
      report: "assets/reports/application-security/ubuntu-web-server-security/index.html"
    },
    {
      title: "Ethical Hacking — Threat Environment & TCP Analysis",
      description: "Explored the Internet Protocol Suite (TCP/IP), port scanning fundamentals, and threat categorization. Identified live hosts, open ports, and running services using Nmap. Analyzed network traffic patterns and identified potential attack vectors.",
      tech: ["TCP/IP", "Nmap", "Port Scanning", "Threat Analysis", "Network Reconnaissance"],
      link: null,
      report: "assets/reports/ethical-hacking/threat-environment-tcp/index.html"
    },
    {
      title: "Ethical Hacking — Footprinting & Reconnaissance",
      description: "Performed passive and active reconnaissance techniques. Used WHOIS lookups, DNS interrogation, Google dorking, Shodan, and social engineering research to gather intelligence about target organizations.",
      tech: ["WHOIS", "DNS Interrogation", "Google Dorking", "Shodan", "OSINT"],
      link: null,
      report: "assets/reports/ethical-hacking/footprinting-reconnaissance/index.html"
    },
    {
      title: "Ethical Hacking — Network Scanning & Enumeration",
      description: "Conducted comprehensive network scanning using Nmap and Zenmap. Performed OS fingerprinting, service version detection, and network enumeration to map attack surfaces and identify vulnerabilities.",
      tech: ["Nmap", "Zenmap", "OS Fingerprinting", "Service Detection", "Network Mapping"],
      link: null,
      report: "assets/reports/ethical-hacking/reconnaissance-scanning/index.html"
    },
    {
      title: "Ethical Hacking — ARP Cache Poisoning (MITM)",
      description: "Implemented ARP cache poisoning using Python Scapy to perform Man-in-the-Middle attacks. Intercepted traffic between victim and gateway, demonstrated credential harvesting, and analyzed ARP spoofing impact.",
      tech: ["Python", "Scapy", "ARP Spoofing", "MITM", "Packet Crafting", "Wireshark"],
      link: null,
      report: "assets/reports/ethical-hacking/arp-cache-poisoning/index.html"
    },
    {
      title: "Ethical Hacking — DNS Attack Lab",
      description: "Executed DNS cache poisoning and DNS spoofing attacks in a controlled environment. Configured rogue DNS servers, performed Kaminsky-style attacks, and demonstrated traffic redirection to malicious servers.",
      tech: ["DNS Poisoning", "DNS Spoofing", "Bind9", "Cache Poisoning", "Linux"],
      link: null,
      report: "assets/reports/ethical-hacking/local-dns-attacks/index.html"
    },
    {
      title: "Ethical Hacking — Metasploit & Exploitation",
      description: "Used Metasploit Framework for penetration testing — identified exploitable vulnerabilities, gained remote shell access, escalated privileges, and documented the full exploitation chain. Implemented host hardening countermeasures.",
      tech: ["Metasploit", "Meterpreter", "Privilege Escalation", "Exploitation", "Host Hardening", "Kali Linux"],
      link: null,
      report: "assets/reports/ethical-hacking/metasploit-host-hardening/index.html"
    },
    {
      title: "Ethical Hacking — Burp Suite & SQL Injection",
      description: "Attacked web applications using Burp Suite for traffic interception and SQL injection exploitation. Performed manual and automated SQLi to extract databases, bypass authentication, and demonstrate OWASP Top 10 risks.",
      tech: ["Burp Suite", "SQL Injection", "Web App Pentesting", "Authentication Bypass", "OWASP"],
      link: null,
      report: "assets/reports/ethical-hacking/burp-suite-sql-injection/index.html"
    },
    {
      title: "Ethical Hacking — Cross-Site Scripting (XSS)",
      description: "Discovered and exploited Reflected, Stored, and DOM-based XSS vulnerabilities. Crafted malicious payloads for cookie theft and session hijacking. Implemented Content Security Policy as remediation.",
      tech: ["XSS", "Reflected XSS", "Stored XSS", "DOM XSS", "Cookie Theft", "JavaScript"],
      link: null,
      report: "assets/reports/ethical-hacking/cross-site-scripting/index.html"
    },
    {
      title: "Ethical Hacking — Buffer Overflow Exploitation",
      description: "Exploited buffer overflow vulnerabilities to achieve code execution. Analyzed stack memory layout, crafted shellcode payloads, used GDB for debugging, and demonstrated control flow hijacking through improper input validation.",
      tech: ["Buffer Overflow", "Shellcode", "GDB", "Stack Exploitation", "C", "Assembly"],
      link: null,
      report: "assets/reports/ethical-hacking/buffer-overflow-attack/index.html"
    },
    {
      title: "Ethical Hacking — Race Condition (TOCTOU)",
      description: "Exploited Time-of-Check to Time-of-Use race conditions in privileged programs. Created symlink attacks, demonstrated file system race conditions, and analyzed concurrency-based security vulnerabilities.",
      tech: ["Race Condition", "TOCTOU", "Symlink Attack", "Privilege Escalation", "Concurrency"],
      link: null,
      report: "assets/reports/ethical-hacking/race-condition-toctou/index.html"
    },
    {
      title: "Cryptography — Symmetric-Key Cipher Analysis",
      description: "Analyzed and broke classical symmetric ciphers using CrypTool-1. Implemented Caesar cipher decryption, performed frequency analysis on ciphertext, and compared encryption strength across substitution and transposition ciphers.",
      tech: ["CrypTool", "Caesar Cipher", "Frequency Analysis", "Cryptanalysis"],
      link: null,
      report: "assets/reports/cryptography/symmetric-key-ciphers/index.html"
    },
    {
      title: "Cryptography — Classical Encryption Programming",
      description: "Programmatic implementation of classical encryption methods including Vigenère, Playfair, and Hill ciphers. Implemented encryption/decryption algorithms and analyzed their mathematical foundations.",
      tech: ["Vigen\u00e8re", "Playfair", "Hill Cipher", "Python", "Modular Arithmetic"],
      link: null,
      report: "assets/reports/cryptography/classical-encryption-techniques/index.html"
    },
    {
      title: "Cryptography — DES & AES Block Cipher Modes",
      description: "Tested and compared block cipher modes (ECB, CBC, CFB, OFB, CTR) for DES and AES. Demonstrated ECB mode weakness through pattern analysis, and verified the avalanche effect in AES.",
      tech: ["DES", "AES", "ECB", "CBC", "Block Cipher Modes", "CrypTool"],
      link: null,
      report: "assets/reports/cryptography/des-aes-modes/index.html"
    },
    {
      title: "Cryptography — RSA Implementation & Certificates",
      description: "Implemented RSA key generation, encryption/decryption, and digital signatures. Analyzed key sizes (512–4096 bits), performed factoring demonstrations, and generated X.509 certificates.",
      tech: ["RSA", "Key Generation", "Digital Signatures", "X.509", "Factoring", "CrypTool"],
      link: null,
      report: "assets/reports/cryptography/rsa-implementation/index.html"
    },
    {
      title: "Cryptography — Hash Functions & Digital Signatures",
      description: "Implemented cryptographic hash functions (MD5, SHA-1, SHA-256) and demonstrated sensitivity to modifications. Created HMAC-based authentication, generated/verified digital signatures, and analyzed collision resistance.",
      tech: ["SHA-256", "MD5", "HMAC", "Digital Signatures", "Hash Collision", "CrypTool"],
      link: null,
      report: "assets/reports/cryptography/hash-digital-signatures/index.html"
    },
    {
      title: "Piano Tone Recognition Tool",
      description: "Built a real-time audio frequency recognition system in Scilab that identifies piano notes from live microphone input. Implemented Constant Q Transform (CQT) for frequency analysis, template matching against reference tones, and a GUI for real-time visualization. 370+ lines of signal processing code.",
      tech: ["Scilab", "Signal Processing", "CQT/FFT", "Audio Analysis", "DAQ", "GUI", "Algorithm Design"],
      link: null,
      report: "assets/reports/bachelors/piano-tone-recognition/index.html"
    },
    {
      title: "E-Learning Platform Research — Nepal (Diploma Thesis)",
      description: "Bachelor's diploma thesis (57,000+ words) researching virtual classroom implementations in Nepal. Deployed Moodle LMS on XAMPP/MySQL, analyzed ICT infrastructure challenges, proposed bandwidth optimization frameworks, and evaluated e-learning adoption barriers.",
      tech: ["Moodle LMS", "XAMPP", "MySQL", "Research Methodology", "ICT Infrastructure", "Education Technology"],
      link: null,
      report: "assets/reports/bachelors/e-learning-platform-nepal/index.html"
    },
    {
      title: "E-Commerce Website (Full-Stack)",
      description: "Full-stack e-commerce web application built with PHP, MySQL, and Bootstrap. Implemented product catalog, shopping cart, user authentication, order management, and responsive design. Complete project with documentation.",
      tech: ["PHP", "MySQL", "Bootstrap", "HTML/CSS", "JavaScript", "Apache", "Full-Stack"],
      link: null,
      report: "assets/reports/bachelors/e-commerce-fullstack/index.html"
    },
    {
      title: "IT System Design — Automotive Shop",
      description: "Designed a complete information system for an automotive shop using structured analysis methods. Created Data Flow Diagrams (DFDs), Entity-Relationship models, system scope documents, and functional specifications.",
      tech: ["DFD", "ER Diagrams", "System Analysis", "Requirements Engineering", "UML"],
      link: null,
      report: "assets/reports/bachelors/it-system-design-automotive/index.html"
    },
    {
      title: "Security Labs — Wireshark, Telnet/SSH & Network Analysis",
      description: "Hands-on network security labs comparing Telnet vs SSH protocols using Wireshark. Captured and analyzed unencrypted Telnet credentials vs encrypted SSH sessions, demonstrated packet-level security differences, and configured network topologies in Cisco Packet Tracer.",
      tech: ["Wireshark", "Telnet", "SSH", "Packet Analysis", "Cisco Packet Tracer", "Network Security"],
      link: null,
    },
    {
      title: "Database Design & Implementation",
      description: "Designed and implemented a relational database system with SQL Server. Created ER diagrams, normalized schemas (3NF), wrote complex SQL queries including joins, subqueries, and stored procedures. Full project with documentation.",
      tech: ["SQL Server", "ER Diagrams", "Normalization", "SQL", "Stored Procedures", "Database Design"],
      link: null,
      report: "assets/reports/bachelors/database-design/index.html"
    },
    {
      title: "System Programming — Linux/C Labs",
      description: "Completed 8 comprehensive C/Linux system programming labs covering mmap(), fork/exec, POSIX threads, sysconf, file operations, and IPC. Built a reusable logging library as final project.",
      tech: ["C", "Linux", "POSIX", "mmap", "fork/exec", "pthreads", "System Calls", "Makefile"],
      link: null,
    }
  ],

  // ─── Certifications ──────────────────────────────────────────
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

  // ─── Volunteering ────────────────────────────────────────────
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

  // ─── Education ───────────────────────────────────────────────
  education: [
    {
      degree: "Master of Science in Information Assurance",
      school: "St. Cloud State University (NSA/DHS CAE-CD Designated)",
      location: "St. Cloud, MN",
      period: "2023 – 2024",
      gpa: null,
      concentration: null,
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

  // ─── Languages ───────────────────────────────────────────────
  languages: [
    { name: "Nepali", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Polish", level: "Intermediate" },
    { name: "German", level: "Intermediate" }
  ]
};
