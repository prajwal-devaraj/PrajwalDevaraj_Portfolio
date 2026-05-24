import React, { useEffect, useMemo, useState } from "react";

const contact = {
  name: "PRAJWAL DEVARAJ",
  location: "Kent, Ohio, USA",
  locationLink: "https://www.google.com/maps/search/Kent+State+University+Kent+Ohio",
  email: "pdevaraj001@gmail.com",
  linkedin: "https://linkedin.com/in/prajwaldevaraj",
  github: "https://github.com/prajwal-devaraj",
};

const aboutParagraphs = [
  "Hi, I’m Prajwal. I’m the kind of person who started with curiosity, got pulled into technology, and somewhere along the way ended up building systems, teaching others, writing poetry, and occasionally arguing with my own code at 2 a.m.",
  "Right now, I’m a Software Engineer focused on AI/ML, Backend, Full Stack, and Database Systems, pursuing my Master’s at Kent State University. I spend my days working as a Graduate Research Assistant, building AI systems for real-world medical imaging, and as a Teaching Assistant, helping students understand Operating Systems and Databases without losing their sanity.",
  "I like building things that feel right, not just code that works, but systems that are efficient, clean, and meaningful. I enjoy breaking down complex problems, finding patterns, and turning chaos into something structured.",
  "People who’ve worked with me usually notice one thing: I’m easy to work with. I listen, I understand, and I don’t bring ego into the room.",
  "Outside engineering, I write stories, poems, and songs. I’ve been on stage as an actor and debater, and I’ve represented campuses, worked in bookstores, cafés, catering setups, and real service environments.",
  "I don’t just build applications. I build experiences, relationships, and ideas.",
  "And if nothing else, I promise I’ll at least fix the bugs… or become friends with them.",
];

const education = [
  {
    school: "Kent State University",
    location: "Kent, OH, USA",
    website: "https://www.kent.edu/",
    degree: "Master of Science in Computer Science",
    period: "Aug 2024 – May 2026",
    gpa: "3.966",
    details:
      "Advanced Database Systems, Data Mining, Social & Graph Networks, AI, ML & Deep Learning, Data Security & Privacy, Advanced Computer Graphics, IoT Integration, AI for Robotics.",
  },
  {
    school: "JSS Academy of Technical Education, VTU",
    location: "Bangalore, Karnataka, India",
    website: "https://www.jssateb.ac.in/",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Aug 2019 – Jun 2023",
    details:
      "Data Structures, Algorithms, DBMS, Web Development, Software Engineering, Operating Systems, OOP, Computer Networks, Computer Graphics, Cloud Computing, Mobile App Development, UI/UX, Cryptography.",
  },
];

const skills = {
  "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "SQL", "PHP", "Kotlin", "Shell", "Bash", "Go", "Rust"],
  "Frontend / Web": ["React", "HTML5", "CSS3", "Responsive Design", "Jinja2", "Bootstrap", "Tailwind", "Framer Motion", "Recharts", "UI/UX", "Design Systems"],
  "Backend / APIs": ["Flask", "Django", "Node.js", "Express.js", "REST APIs", "API Design", "JWT", "OAuth", "RBAC", "GraphQL", "WebSockets"],
  "AI / ML": ["Machine Learning", "Deep Learning", "CNNs", "MLPs", "MoE", "Computer Vision", "Feature Engineering", "Model Evaluation", "Drift Detection", "Explainable AI", "Model Deployment"],
  "Libraries": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "OpenCV", "SHAP", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Librosa", "NetworkX", "Gensim"],
  "Databases": ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "SQL Server", "Database Design", "Query Optimization", "Indexing", "Transactions", "ACID", "Sharding", "Replication", "GeoJSON"],
  "Cloud / DevOps": ["AWS EC2", "AWS S3", "Docker", "Docker Compose", "Kubernetes", "Render", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux", "Nginx", "MLflow", "Postman"],
  "Core CS / FAANG Skills": ["DSA", "Problem Solving", "Time Complexity", "Space Complexity", "Dynamic Programming", "Graphs", "Trees", "Heaps", "Hashing", "Sliding Window", "System Design"],
  "System Design": ["Distributed Systems", "CAP Theorem", "Load Balancing", "Caching", "Redis", "Rate Limiting", "Fault Tolerance", "High Availability", "Logging", "Monitoring", "Retry Systems"],
  "Security": ["AES-GCM", "HMAC", "bcrypt", "JWT", "RBAC", "Cryptography", "Web Security", "Authentication", "Authorization"],
};

const experience = [
  {
  role: "Junior Software Engineer",
  org: "RenuDev Traders",
  location: "Bengaluru, Karnataka, India",
  period: "May 2023 – Jun 2024",
  points: [
    {
      text: "Worked as a Backend Software Engineer developing internal business applications and operational systems for inventory, billing, and workflow management.",
    },
    {
      text: "Designed and developed backend services and APIs:",
      subPoints: [
        "Built RESTful APIs and server-side functionalities using Python, Flask, and SQL-based databases.",
        "Implemented authentication, validation, and secure backend logic for internal systems.",
        "Developed scalable modules supporting billing, inventory tracking, and operational workflows.",
      ],
    },
    {
      text: "Optimized backend performance and database operations:",
      subPoints: [
        "Designed and optimized SQL queries improving operational efficiency by 30%.",
        "Reduced manual processing efforts through workflow automation and backend-driven reporting systems.",
        "Improved application reliability through debugging, testing, and backend performance tuning.",
      ],
    },
    {
      text: "Collaborated with business stakeholders to gather requirements and deliver reliable technical solutions aligned with operational needs.",
    },
    {
      text: "Worked extensively on deployment support, issue resolution, and maintenance of production business applications.",
    },
    {
      text: "Recognized with the Best Employee Award for outstanding technical contribution, performance, and operational impact.",
    },
  ],
},

  {
    role: "Research Assistant",
    org: "Kent State University",
    location: "Kent, OH, USA",
    period: "May 2025 – May 2026",
    points: [
      {
        text: "Conducting advanced research in AI/ML and medical data analysis using high-performance GPU infrastructure (4+ GPUs) for large-scale model training.",
      },
      {
        text: "Working on CodeTheGenome (Genetic Variant Analysis) in collaboration with faculty and a research team:",
        subPoints: [
          "Developed machine learning models to analyze genetic variant conflicts using the ClinVar dataset.",
          "Designed feature engineering pipelines and trained ensemble models (XGBoost, LightGBM, CatBoost).",
          "Achieved 93% prediction accuracy, improving model reliability.",
          "Proposed a novel approach with no similar existing solutions.",
        ],
      },
      {
        text: "Independently proposed and executed research ideas, contributing to model design, optimization, and validation.",
      },
      {
        text: "Conducting research on Endoscopy Image Analysis for Gastrointestinal Applications:",
        subPoints: [
          "Worked with real-world clinical data from multiple healthcare centers.",
          "Developed AI models to detect blood clot patterns before and after gastric cancer surgery.",
          "Built preprocessing pipelines (noise reduction, normalization, augmentation).",
          "Collaborated with faculty on applied healthcare AI systems.",
        ],
      },
      {
        text: "Designed and evaluated models using precision, recall, F1-score, and accuracy metrics.",
      },
      {
        text: "Contributed to research documentation, technical reports, and publication efforts.",
      },
    ],
  },
{
  role: "Undergraduate Teaching Assistant",
  org: "Kent State University",
  location: "Kent, OH, USA",
  period: "Sep 2025 – May 2026",
  points: [
    {
      text: "Supported instruction for Operating Systems (CS 33211) and Intro to Database System Design (CS 33007) for 120+ students across honors and regular sections.",
    },
    {
      text: "Conducted doubt-clearing sessions and concept explanations:",
      subPoints: [
        "Explained CPU scheduling, memory management, and concurrency concepts.",
        "Guided students in database design, SQL, and system-level thinking.",
      ],
    },
    {
      text: "Led class sessions independently in the absence of the professor, delivering lectures and guiding discussions.",
    },
    {
      text: "Evaluated and graded assignments, projects, and examinations:",
      subPoints: [
        "Provided structured technical feedback to improve student performance.",
        "Ensured accurate and fair assessment across submissions.",
      ],
    },
    {
      text: "Held regular office hours to mentor students:",
      subPoints: [
        "Assisted with real-world project development and problem-solving approaches.",
        "Helped students build confidence in core CS concepts.",
      ],
    },
    {
      text: "Assisted in exam administration and invigilation, ensuring smooth execution and maintaining academic integrity.",
    },
  ],
},
{
  role: "Full-Stack Developer Intern",
  org: "BETSOL",
  location: "Bangalore, Karnataka, India",
  period: "May 2022 – Dec 2022",
  points: [
    {
      text: "Developed and deployed full-stack web applications using Python-based backend systems.",
    },
    {
      text: "Built and integrated RESTful APIs with frontend interfaces for real-time backend communication.",
    },
    {
      text: "Collaborated in cross-functional teams within an agile development environment to deliver scalable, production-ready features.",
    },
    {
      text: "Worked on enterprise-level applications including workflow automation and help desk systems.",
    },
    {
      text: "Enterprise Workflow Automation System (May 2022 – July 2022):",
      subPoints: [
        "Built backend services to automate multi-step business workflows.",
        "Designed and implemented REST APIs for task execution and monitoring.",
        "Implemented error handling, retry mechanisms, and logging to improve reliability.",
        "Reduced manual effort by streamlining enterprise processes.",
      ],
    },
    {
      text: "Full-Stack Help Desk Application (Oct 2022 – Dec 2022):",
      subPoints: [
        "Developed frontend interfaces for ticket creation, tracking, and updates.",
        "Built backend APIs supporting CRUD operations and scalable request handling.",
        "Implemented role-based authentication and authorization.",
        "Integrated real-time notification systems for ticket updates.",
      ],
    },
    {
      text: "Served as Campus Ambassador representing BETSOL:",
      subPoints: [
        "Promoted company initiatives and internship programs among students.",
        "Acted as a point of contact between students and the organization.",
        "Supported outreach activities and increased student engagement.",
      ],
    },
    {
      text: "Tech Stack: Python, React.js, Node.js / Spring Boot, MySQL, REST APIs.",
    },
  ],
},
{
  role: "Backend Developer Intern",
  org: "Technofly Solutions",
  location: "Bangalore, Karnataka, India",
  period: "Aug 2022 – Sep 2022",
  points: [
    {
      text: "Contributed to a government transportation project for bus transport management systems.",
    },
    {
      text: "Developed responsive web applications:",
      subPoints: [
        "Used HTML, CSS, JavaScript, and Python for frontend and backend development.",
        "Ensured usability, performance, and responsive design.",
      ],
    },
    {
      text: "Built backend components to improve system performance:",
      subPoints: [
        "Enhanced system scalability and security.",
        "Integrated backend services with frontend modules.",
      ],
    },
    {
      text: "Collaborated in a team environment:",
      subPoints: [
        "Worked with a team of 7 developers on feature development and system integration.",
        "Participated in Agile practices including sprint planning and iterative delivery.",
      ],
    },
  ],
},
 {
  role: "Student Technical Operations Associate / Head Cashier / Student Ambassador",
  org: "Kent State University Bookstore, Barnes & Noble College",
  location: "Kent, OH, USA",
  period: "Aug 2024 – May 2026",
  points: [
    {
      text: "Promoted to Head Cashier & Administrative Support based on operational performance, technical adaptability, leadership, and reliability in a high-volume enterprise retail environment.",
    },
    {
      text: "Worked extensively with enterprise retail and operational platforms:",
      subPoints: [
        "Operated Oracle-based systems including TA2, OMS, KIOSK, POS, and textbook management applications.",
        "Managed and monitored 500+ daily transactions with 99%+ processing accuracy across integrated retail systems.",
        "Supported transaction processing, inventory synchronization, order tracking, reporting, and operational workflows.",
      ],
    },
    {
      text: "Handled technical operations and enterprise system coordination:",
      subPoints: [
        "Troubleshot real-time POS, transaction, and operational system issues reducing service interruptions by 25%.",
        "Improved front-end operational efficiency during peak academic periods through workflow optimization and rapid issue resolution.",
        "Managed reconciliation, operational reporting, and backend workflow coordination across multiple enterprise applications.",
      ],
    },
    {
      text: "Worked with Oracle-based enterprise applications supporting large-scale bookstore and academic operations:",
      subPoints: [
        "Handled inventory coordination, textbook workflows, transaction systems, and operational reporting tools.",
        "Supported thousands of students and faculty through integrated academic retail platforms and operational systems.",
        "Assisted in maintaining workflow continuity and system reliability during high-volume semester operations.",
      ],
    },
    {
      text: "Led operational and technical training initiatives:",
      subPoints: [
        "Trained and onboarded 15+ employees on TA2, OMS, Oracle retail systems, POS workflows, and operational procedures.",
        "Improved onboarding efficiency and operational consistency through hands-on system training and workflow guidance.",
      ],
    },
    {
      text: "Managed leadership and operational responsibilities:",
      subPoints: [
        "Independently handled store operations, technical coordination, and customer issue resolution during manager absence.",
        "Collaborated with management teams to maintain workflow continuity, operational reliability, and service efficiency.",
      ],
    },
    {
      text: "Selected as Student Ambassador (2025–2026):",
      subPoints: [
        "Represented bookstore operations in student engagement initiatives and campus outreach programs.",
        "Recognized on official bookstore platforms for technical contribution, leadership, and operational excellence.",
        "Supported promotions, large-scale events, and communication workflows between students and bookstore operations.",
      ],
    },
  ],
},
{
  role: "Student Employee",
  org: "Commerce Café, Culinary Services, Kent State University",
  location: "Kent, OH, USA",
  period: "Aug 2024 – Jan 2026",
  points: [
    {
      text: "Managed opening and closing operations of the café, ensuring smooth daily functioning.",
    },
    {
      text: "Handled inventory and supply management:",
      subPoints: [
        "Prepared and maintained inventory to ensure availability of materials.",
        "Maintained stock levels and supported daily operations.",
      ],
    },
    {
      text: "Maintained food safety and hygiene standards:",
      subPoints: [
        "Ensured compliance with health and safety regulations.",
        "Maintained cleanliness, organization, and quality service standards.",
      ],
    },
    {
      text: "Trained and supported team members:",
      subPoints: [
        "Onboarded new employees on operations, customer service, and workflow management.",
        "Supported team coordination and daily operations.",
      ],
    },
    {
      text: "Delivered customer service in high-pressure environments:",
      subPoints: [
        "Handled rush hours efficiently while maintaining service quality.",
        "Managed customer interactions and ensured positive experience.",
      ],
    },
    {
      text: "Took on senior-level responsibilities, supporting team coordination and operational efficiency.",
    },
  ],
},
{
  role: "Student Catering Employee",
  org: "Culinary Services, Kent State University",
  location: "Kent, OH, USA",
  period: "May 2025 – Aug 2025",
  points: [
    {
      text: "Recognized as a high-performing team member, consistently selected for high-profile university events.",
    },
    {
      text: "Delivered service across 50+ events:",
      subPoints: [
        "Supported executive functions, VIP gatherings, and large-scale university events.",
        "Ensured smooth execution under tight timelines and high expectations.",
      ],
    },
    {
      text: "Led and coordinated teams during peak operations:",
      subPoints: [
        "Supervised 5–15 staff members to ensure efficient service.",
        "Maintained coordination and workflow during high-pressure environments.",
      ],
    },
    {
      text: "Worked in professional kitchen and service environments:",
      subPoints: [
        "Handled food preparation, service operations, and large-scale event setups.",
        "Maintained strict food safety, hygiene, and sanitation standards.",
      ],
    },
    {
      text: "Handled client-facing responsibilities:",
      subPoints: [
        "Delivered high-quality service to faculty, administration, and external stakeholders.",
        "Maintained professionalism at prestigious venues including the President’s Residence.",
      ],
    },
    {
      text: "Awarded 'Best Employee Recognition' for performance, reliability, and leadership.",
    },
    {
      text: "Trained and mentored team members:",
      subPoints: [
        "Guided staff on event protocols, service etiquette, and operational workflows.",
      ],
    },
    {
      text: "Developed strong hospitality and operational skills:",
      subPoints: [
        "Teamwork, crisis handling, and working efficiently under pressure.",
      ],
    },
    {
      text: "Ensured compliance with health, safety, and sanitation regulations.",
    },
  ],
},
  {
  role: "Administrator",
  org: "Sri Guruvandana Global Pre-School",
  location: "Bangalore, Karnataka, India",
  period: "Mar 2020 – Jul 2023",
  points: [
    {
      text: "Managed end-to-end school operations, supporting administration for 2500+ students.",
    },
    {
      text: "Coordinated academic and administrative workflows:",
      subPoints: [
        "Handled faculty scheduling, attendance tracking, and timetable planning.",
        "Ensured smooth day-to-day academic operations.",
      ],
    },
    {
      text: "Designed and managed curriculum and academic planning:",
      subPoints: [
        "Developed curriculum structures and monthly academic plans.",
        "Organized school events and academic programs.",
      ],
    },
    {
      text: "Handled stakeholder communication and engagement:",
      subPoints: [
        "Managed admissions, parent communication, and engagement initiatives.",
        "Improved coordination and overall satisfaction.",
      ],
    },
    {
      text: "Improved operational efficiency:",
      subPoints: [
        "Streamlined administrative workflows and processes.",
        "Enhanced organization and system effectiveness.",
      ],
    },
    {
      text: "Managed technical and system operations:",
      subPoints: [
        "Maintained attendance systems (punch-in/punch-out).",
        "Supported internal technical operations within the school.",
      ],
    },
    {
      text: "Delivered teaching and mentoring:",
      subPoints: [
        "Taught basic computer skills to students (ages 3–16).",
        "Adapted teaching methods based on age and learning levels.",
      ],
    },
    {
      text: "Recognized for performance and leadership:",
      subPoints: [
        "Received Best Employee Award (2021, 2022, 2023).",
        "Awarded All-Time Best Performance Award for consistent excellence.",
      ],
    },
    {
      text: "Independently handled day-to-day school operations, demonstrating leadership and responsibility.",
    },
  ],
},
 {
  role: "Teacher Training Intern",
  org: "Edsmart Edu Services Pvt Ltd",
  location: "Bangalore, Karnataka, India",
  period: "May 2022",
  points: [
    {
      text: "Completed a hands-on teacher training program across multiple partner schools.",
    },
    {
      text: "Worked across diverse school environments:",
      subPoints: [
        "Observed and implemented modern teaching methodologies.",
        "Adapted teaching strategies based on student needs.",
      ],
    },
    {
      text: "Designed and delivered structured educational content:",
      subPoints: [
        "Created modules based on phonics learning and child development techniques.",
        "Delivered interactive and age-appropriate teaching sessions.",
      ],
    },
    {
      text: "Developed learning materials and instructional strategies:",
      subPoints: [
        "Supported early education and skill development.",
        "Improved learning outcomes through innovative teaching approaches.",
      ],
    },
  ],
},
];

const featuredProjects = [
  {
  title: "SmartSpend",
  category: "AI-Powered Personal Finance Platform",
  impact: "Full-stack AI-driven financial intelligence system",
  link: "https://github.com/prajwal-devaraj/SmartSpend.git",
  tech: "React, Flask, MongoDB, Python, scikit-learn, Recharts, JWT, REST APIs",
  period: "Aug 2025 – Dec 2025",
  points: [
    {
      text: "Led a team of 7 developers to build an AI-driven personal finance platform, improving user financial awareness and decision-making.",
    },
    {
      text: "Developed full-stack architecture:",
      subPoints: [
        "Built React frontend and Flask + MongoDB backend, improving system response time by ~30%.",
        "Designed scalable modular APIs, reducing feature integration time by ~25%.",
      ],
    },
    {
      text: "Implemented ML-driven financial features:",
      subPoints: [
        "Built spend forecasting, burn-rate analysis, and runway prediction (“Days Left”) with ~85–90% prediction accuracy.",
        "Improved financial planning insights for users by ~40% based on feedback.",
      ],
    },
    {
      text: "Designed behavioral analytics system:",
      subPoints: [
        "Implemented NWG (Need–Want–Guilt) classification and mood tagging.",
        "Improved personalized recommendations and user engagement by ~35%.",
      ],
    },
    {
      text: "Built real-time dashboards and analytics:",
      subPoints: [
        "Used Recharts to visualize balance, spending trends, and predictions.",
        "Reduced time to interpret financial data by ~50%.",
      ],
    },
    {
      text: "Conducted user testing and feedback analysis:",
      subPoints: [
        "Collected feedback from users aged 18–65+ across multiple groups.",
        "Improved usability and feature clarity by ~30%.",
      ],
    },
    {
      text: "Implemented secure system and core modules:",
      subPoints: [
        "Built JWT-based authentication ensuring secure user sessions.",
        "Developed transactions, goals, bills, alerts, and insights modules.",
      ],
    },
  ],
},
{
  title: "CodeTheGenome",
  category: "AI/ML • Genomics • Healthcare",
  impact: "ML system for genetic variant conflict prediction",
  link: "https://github.com/prajwal-devaraj/CodeTheGenome.git",
  tech: "Python, scikit-learn, XGBoost, LightGBM, CatBoost, SHAP",
  period: "Jan 2025 – May 2026",

  metrics: [
    "93.3% accuracy",
    "+6.3% improvement",
    "Ensemble ML models",
    "SHAP explainability"
  ],

  points: [
    {
      text: "Developed an ML system to predict conflicting genetic variant interpretations using ClinVar dataset as part of graduate research.",
    },
    {
      text: "Engineered genomic and statistical features:",
      subPoints: [
        "Improved model representation and predictive performance.",
      ],
    },
    {
      text: "Trained and optimized ensemble models:",
      subPoints: [
        "Used XGBoost, LightGBM, and CatBoost with cross-validation.",
        "Improved accuracy from ~87% to 93.3% (+6.3%).",
      ],
    },
    {
      text: "Implemented explainable AI techniques:",
      subPoints: [
        "Applied SHAP for model interpretability.",
        "Enabled insights into genetic variant conflicts for clinical relevance.",
      ],
    },
    {
      text: "Built end-to-end ML pipeline:",
      subPoints: [
        "Data preprocessing, feature engineering, model training, and evaluation.",
      ],
    },
    {
      text: "Contributed to ongoing research with potential publication, demonstrating real-world impact and innovation.",
    },
  ],
},
  {
  title: "Adaptive Query Optimizer",
  category: "ML + Database Systems",
  impact: "30–40% query latency reduction",
  link: "https://github.com/prajwal-devaraj/adaptive-query-optimizer",
  tech: "Python, Flask, PostgreSQL, scikit-learn, Pandas, NumPy, System Design",
  period: "Jan 2026 – Mar 2026",

  metrics: [
    "↓30–40% latency",
    "200K–500K queries",
    "↓20% MAE",
    "10+ features"
  ],

  points: [
    {
      text: "Built an ML-powered adaptive query optimization system using Python, Flask, and PostgreSQL for dynamic query execution strategy selection.",
    },
    {
      text: "Reduced average query latency by ~30–40%:",
      subPoints: [
        "Predicted query cost using a Random Forest regression model.",
        "Selected optimal execution strategies at runtime.",
      ],
    },
    {
      text: "Designed large-scale data pipeline:",
      subPoints: [
        "Generated and processed 200K–500K+ synthetic SQL query records.",
        "Simulated real-world workloads for benchmarking and evaluation.",
      ],
    },
    {
      text: "Engineered SQL-level feature extraction:",
      subPoints: [
        "Extracted 10+ features including joins, predicates, aggregations, and limits.",
        "Improved query complexity representation and prediction accuracy.",
      ],
    },
    {
      text: "Implemented continuous learning system:",
      subPoints: [
        "Built feedback loop with retraining pipeline.",
        "Reduced prediction error (MAE) by ~20% over iterations.",
      ],
    },
    {
      text: "Designed modular backend architecture:",
      subPoints: [
        "Flask-based API with service-layer abstraction.",
        "Built performance dashboard to monitor query execution and detect slow queries (>500ms).",
      ],
    },
  ],
},
{
  title: "Disaster Management System",
  category: "Full-Stack • Real-Time Systems • APIs",
  impact: "Real-time incident reporting & response system",
  link: "https://github.com/prajwal-devaraj/DISASTER-MANAGEMENT-EARLY-WARNING-SYSTEM.git",
  tech: "React, Flask, MongoDB, REST APIs, GeoJSON, Leaflet/Maps",
  period: "2025",

  metrics: [
    "Real-time updates",
    "Geo-based tracking",
    "Multi-API integration",
    "Scalable backend"
  ],

  points: [
    {
      text: "Built a full-stack disaster management platform for real-time incident reporting and response coordination.",
    },
    {
      text: "Developed interactive frontend dashboards:",
      subPoints: [
        "Integrated map-based visualization using GeoJSON and location tracking.",
        "Displayed real-time disaster alerts and incident data.",
      ],
    },
    {
      text: "Designed backend APIs and data pipelines:",
      subPoints: [
        "Handled real-time data ingestion and processing.",
        "Enabled efficient communication between users and emergency responders.",
      ],
    },
    {
      text: "Integrated external data sources:",
      subPoints: [
        "Fetched and processed live disaster data using APIs.",
        "Improved situational awareness and response planning.",
      ],
    },
    {
      text: "Built scalable and modular system architecture supporting concurrent users and real-time updates.",
    },
  ],
},
  {
  title: "VishingAI",
  category: "AI/ML • Security • Real-Time Processing",
  impact: "Voice phishing detection using ML + audio processing",
  link: "https://github.com/prajwal-devaraj",
  tech: "Python, Flask, Librosa, scikit-learn, NumPy, Audio Processing",
  period: "2025",

  metrics: [
    "Audio ML pipeline",
    "Real-time inference",
    "Feature extraction",
    "Security-focused"
  ],

  points: [
    {
      text: "Developed an AI-based system to detect voice phishing (vishing) attacks using audio signal processing.",
    },
    {
      text: "Built audio feature extraction pipeline:",
      subPoints: [
        "Used Librosa to extract MFCCs and spectral features.",
        "Processed raw audio signals into model-ready inputs.",
      ],
    },
    {
      text: "Trained and deployed ML models:",
      subPoints: [
        "Classified phishing vs legitimate voice samples.",
        "Enabled real-time inference through Flask APIs.",
      ],
    },
    {
      text: "Designed end-to-end pipeline:",
      subPoints: [
        "Audio preprocessing → feature extraction → prediction.",
        "Integrated backend system for real-time detection.",
      ],
    },
    {
      text: "Focused on security applications and real-world fraud detection use cases.",
    },
  ],
},
{
  title: "Secure Healthcare DBaaS",
  category: "Backend • Security • Cloud Systems",
  impact: "Secure database service with encryption & access control",
  link: "https://github.com/prajwal-devaraj",
  tech: "Python, Flask, MySQL/PostgreSQL, AES, HMAC, RBAC, REST APIs",
  period: "2025",

  metrics: [
    "AES encryption",
    "RBAC security",
    "Secure APIs",
    "Enterprise design"
  ],

  points: [
    {
      text: "Developed a secure healthcare Database-as-a-Service (DBaaS) platform for managing sensitive medical data.",
    },
    {
      text: "Implemented strong security mechanisms:",
      subPoints: [
        "Applied AES encryption for data protection.",
        "Used HMAC for integrity verification.",
      ],
    },
    {
      text: "Designed role-based access control (RBAC):",
      subPoints: [
        "Enabled fine-grained user permissions and secure access.",
        "Ensured compliance with secure data handling practices.",
      ],
    },
    {
      text: "Built scalable backend APIs:",
      subPoints: [
        "Handled CRUD operations securely.",
        "Designed modular architecture for extensibility.",
      ],
    },
    {
      text: "Focused on system reliability and data security for healthcare-grade applications.",
    },
  ],
},
{
    title: "Web Crawler Project",
    category: "Backend + Data Extraction",
    impact: "Crawler + metadata extraction",
    link: "https://github.com/prajwal-devaraj/Web-Crawler-Project",
    tech: "Python, Flask, BeautifulSoup, SQLite, HTML, CSS, JavaScript",
    points: [
      "Built a structured crawler platform for page discovery, parsing, metadata extraction, and searchable content workflows.",
      "Designed backend crawling modules and stored extracted content for analysis.",
      "Created dashboard-style browsing for discovered pages and metadata.",
    ],
  },
  {
    title: "Edge-Cloud CNC Anomaly Detection",
    category: "AI + Time Series",
    impact: "F1 0.61 → 0.81",
    link: "https://github.com/prajwal-devaraj",
    tech: "Python, TensorFlow/Keras, scikit-learn, Streamlit, MLflow, Docker",
    points: [
      "Analyzed 1M+ multi-sensor CNC time-series data points.",
      "Improved F1-score from 0.61 to 0.81 using LSTM temporal learning.",
      "Built edge preprocessing, drift detection, continuous learning, and Streamlit dashboard.",
    ],
  },
];

const allProjects = [
  ["Edge-Cloud Collaborative Anomaly Detection for CNC Machining", "1M+ sensor time-series data, LSTM, drift detection, Streamlit dashboard, MLflow, Docker.", "Python, TensorFlow, scikit-learn, Streamlit"],
  ["Mice Odour Detection & Behavior Analysis System", "Sensor-driven ML pipeline for mice behavior and odor signal classification.", "Python, scikit-learn, Pandas, NumPy"],
  ["Firehawk Bird Detection & Environmental Monitoring System", "Computer vision system for Firehawk bird detection and wildfire monitoring research.", "Python, OpenCV, PyTorch/TensorFlow"],
  ["Endoscopy Image Analysis", "Medical image analysis for gastrointestinal abnormality and blood clot pattern detection.", "Python, OpenCV, PyTorch/TensorFlow"],
  ["CodeTheGenome", "ClinVar conflict prediction using ensemble ML and SHAP explainability.", "Python, XGBoost, LightGBM, CatBoost, SHAP"],
  ["Mixture of Experts", "PyTorch MoE with gated routing and expert specialization.", "Python, PyTorch"],
  ["CNN with 3×3 Kernels", "MNIST CNN with manual convolution verification and ~99% accuracy.", "Python, PyTorch"],
  ["3-Layer MLP for MNIST", "NumPy neural network with Cross-Entropy, MSE, softmax stability, and ~97–98% accuracy.", "Python, NumPy"],
  ["Adaptive Query Optimizer", "ML-powered SQL query latency prediction and optimization.", "Python, Flask, PostgreSQL"],
  ["Web Crawler Project", "Crawler and metadata extraction platform.", "Python, Flask, BeautifulSoup"],
  ["SmartSpend", "AI-powered finance platform with forecasting and dashboards.", "React, Flask, MongoDB"],
  ["Secure Healthcare DBaaS", "Encrypted healthcare database-as-a-service system.", "Python, Flask, MySQL, Cryptography"],
  ["IDERS", "Geospatial disaster incident reporting system.", "Flask, MongoDB, GeoJSON"],
  ["MNIST Visual Autoregressive Modeling", "Convolutional autoencoder for MNIST reconstruction.", "Python, PyTorch"],
  ["Text2Language", "Language detection web app supporting 100+ languages.", "Python, Flask"],
  ["AI Avatar & Cartoon Generator", "Image cartoonization web app using OpenCV.", "Python, Flask, OpenCV"],
  ["Facebook Graph Network Analysis", "SNAP graph analytics using centrality, clustering, BFS, DFS.", "Python, NetworkX"],
  ["Intelligent Alarm Clock Dashboard", "IoT-inspired dashboard with weather and transit alerts.", "C++, HTML, CSS, JS"],
  ["PIRVISION", "Human presence detection using PIR sensor time-series data.", "Python, scikit-learn"],
  ["ADL Recognition", "Unsupervised smart-home activity recognition.", "Python, clustering, PCA, t-SNE"],
  ["Facial Emotion Recognition", "7-class CNN emotion classifier.", "Python, TensorFlow/Keras"],
  ["Don’t Touch Your Face", "CNN behavior detection for face-touch prevention.", "Python, TensorFlow/Keras"],
  ["Network Anomaly Detection", "Frequent pattern mining and anomaly detection.", "Python, Apriori, ML"],
  ["DeepWalk Graph Embedding", "Random walks + Word2Vec graph embeddings.", "Python, NetworkX, Gensim"],
  ["MOOC User Action Analysis", "MOOC engagement analytics and forecasting.", "Python, Pandas, Tableau"],
  ["Library Inventory Management System", "Flask + MongoDB library management app.", "Python, Flask, MongoDB"],
  ["Real-Time Inventory Management System", "Flask + MongoDB inventory tracking system.", "Python, Flask, MongoDB"],
  ["Bus Transportation Management System", "Transportation scheduling and route management platform.", "HTML, CSS, JS, PHP, MySQL"],
  ["Integrated Fire & Wildlife Monitoring System", "OpenCV fire and wildlife monitoring system.", "Python, OpenCV"],
  ["JSS Fashion UI/UX Design", "High-fidelity Figma prototype.", "Figma"],
  ["Mobile Quiz App", "Android quiz application.", "Kotlin, Android"],
  ["Bajpe Air Crash 3D Simulation", "3D OpenGL aircraft crash simulation.", "C++, OpenGL"],
  ["Student & School Management Systems", "MERN and Node/Express management systems.", "React, Node, MongoDB"],
  ["COVID Tracking Management System", "Patient registration and COVID case tracking system.", "HTML, CSS, JavaScript"],
  ["Queries over Distributed Time-Series Data", "Distributed time-series query processing concepts.", "Distributed Systems"],
];

const publications = [
  {
    title: "CodeTheGenome: Machine Learning-Based Prediction of Genetic Variant Conflicts Using Ensemble Learning",
    status: "Research Paper | In Progress",
    venue: "Kent State University",
    period: "2025 – 2026",
    authors: "Prajwal Devaraj, Research Team",
    description:
      "Developed ensemble ML models using XGBoost, LightGBM, and CatBoost to predict conflicting genetic variant interpretations from ClinVar datasets, achieving 93.3% accuracy with SHAP-based explainability.",
  },

  {
    title: "Endoscopy Image Analysis for Gastrointestinal Applications",
    status: "Research Work | Ongoing",
    venue: "Kent State University",
    period: "2025 – 2026",
    authors: "Prajwal Devaraj, Faculty Research Team",
    description:
      "Conducting AI-driven medical imaging research for blood clot pattern detection before and after gastric cancer surgery using real-world multi-center clinical datasets.",
  },

  {
    title: "Edge-Cloud Collaborative Anomaly Detection for CNC Machining",
    status: "Research Project",
    venue: "Academic Research",
    period: "2025",
    authors: "Prajwal Devaraj",
    description:
      "Built anomaly detection pipelines on industrial multi-sensor CNC machining datasets using LSTM models, drift detection, and edge preprocessing techniques.",
  },
];

const courses = [
     {
    role: "Corporate Training & Compliance",
    org: "Barnes & Noble College (Kent State University Bookstore)",
    location: "Kent, OH, USA",
    period: "2024 – 2026",
    points: [
      {
        text: "Completed 20+ corporate training modules covering compliance, security, and operational workflows.",
      },
      {
        text: "Security & Risk Management Training:",
        subPoints: [
          "Cyber Security Awareness (100% score)",
          "VeriFone PCI Compliance Training (100%)",
          "Anti-Money Laundering Policy (100%)",
          "Identifying & Preventing Gift Card Fraud (100%)",
        ],
      },
      {
        text: "Ethics, Compliance & Workplace Standards:",
        subPoints: [
          "Integrity in Action: Ethical Decision Making",
          "Preventing Harassment & Discrimination (100%)",
          "BNED Information Security Policy",
        ],
      },
      {
        text: "Operational & System Training:",
        subPoints: [
          "myADP Workforce Systems (Time tracking, payroll, scheduling)",
          "Workforce Management (Shift swap, scheduling, requests)",
          "POS and transaction system workflows",
        ],
      },
      {
        text: "Customer Experience & Service Excellence:",
        subPoints: [
          "Power of WOW Customer Service training",
          "Applied high-quality service standards in real-time operations",
        ],
      },
      {
        text: "Developed strong understanding of enterprise operations, compliance standards, and real-world system workflows.",
      },
    ],
  },

  {
    role: "Full Stack Web Development",
    org: "Technofly Solutions",
    location: "Bangalore, Karnataka, India",
    period: "Aug 2022",
    points: [
      {
        text: "Completed 120+ hours of intensive full-stack training covering frontend and backend systems.",
      },
      {
        text: "Built and deployed multiple web applications:",
        subPoints: [
          "Developed responsive UI using HTML, CSS, and JavaScript.",
          "Implemented backend services using Python and database integration.",
          "Ensured performance optimization and secure application design.",
        ],
      },
      {
        text: "Worked in a collaborative team environment following real-world development practices.",
      },
    ],
  },

  {
    role: "Full Stack Web Development",
    org: "BETSOL",
    location: "Bangalore, Karnataka, India",
    period: "May 2022 – Jul 2022",
    points: [
      {
        text: "Gained hands-on experience in end-to-end web development (frontend + backend).",
      },
      {
        text: "Developed 3+ application modules:",
        subPoints: [
          "Integrated APIs with frontend systems.",
          "Worked with databases and backend frameworks.",
          "Implemented deployment and debugging workflows.",
        ],
      },
      {
        text: "Strengthened understanding of scalable system design and application architecture.",
      },
    ],
  },

  {
    role: "Teacher Training",
    org: "Edsmart Edu Services Pvt Ltd",
    location: "Bangalore, Karnataka, India",
    period: "May 2022",
    points: [
      {
        text: "Designed and optimized structured educational programs using modern pedagogical standards.",
      },
      {
        text: "Collaborated with educators to create effective learning modules:",
        subPoints: [
          "Built age-appropriate lesson plans.",
          "Applied instructional design techniques.",
        ],
      },
      {
        text: "Improved communication, presentation, and structured teaching methodologies.",
      },
    ],
  },

  {
    role: "C Programming",
    org: "NPTEL",
    location: "India",
    period: "Jun 2021 – Jan 2022",
    points: [
      {
        text: "Developed strong programming fundamentals through 50+ coding exercises and assignments.",
      },
      {
        text: "Improved problem-solving and algorithmic thinking:",
        subPoints: [
          "Optimized code for performance and memory usage.",
          "Worked on structured programming techniques.",
        ],
      },
    ],
  },

  {
    role: "Data Science Phase Shift",
    org: "B.M.S.C.E",
    location: "Bangalore, Karnataka, India",
    period: "Sep 2019",
    points: [
      {
        text: "Participated in a hands-on data science workshop focusing on real-world problem solving.",
      },
      {
        text: "Explored machine learning fundamentals:",
        subPoints: [
          "Worked with data analysis techniques.",
          "Applied ML concepts in guided exercises.",
        ],
      },
    ],
  },

  {
    role: "IT-Wizard Plus Programme",
    org: "NIIT",
    location: "Bangalore, Karnataka, India",
    period: "Jun 2014 – Mar 2015",
    points: [
      {
        text: "Completed program with 'Outstanding' grade, building strong early IT foundation.",
      },
      {
        text: "Gained exposure to software development and system concepts:",
        subPoints: [
          "Learned basics of programming and IT systems.",
          "Developed foundational technical and analytical skills.",
        ],
      },
    ],
  },
];

const activities = [
  {
    group: "Graduate Leadership & Technical Involvement",
    items: [
      "Graduate Research Assistant — Kent State University (May 2025 – Present)",
      "Undergraduate Teaching Assistant — Computer Science (Sep 2025 – Present)",
      "Student Ambassador — Barnes & Noble College (2025–2026)",
      "HACKSU Member — Hackathons, Engineering Events & Technical Workshops",
      "Technical Club Member — Software Development & System Design",
      "Kent Indian Association Member — Community & Cultural Engagement",
      "Research Contributor — AI/ML, Healthcare AI & Database Systems",
    ],
  },

  {
    group: "Undergraduate Leadership & Campus Contributions",
    items: [
      "CSE Coordinator — JSS Academy of Technical Education (2019 – 2023)",
      "Student Project Coordinator & Technical Lead (2022 – 2023)",
      "Sudo Club (Technical Club) — Head & Event Organizer",
      "JSS Anveshan — CSE Department Head",
      "VTU Pratibhotsava — Team Lead & Event Coordinator",
      "Technical Event Organizer — Workshops, Coding Events & Student Activities",
      "JSS Verve Cultural Fest — Sponsorship & Operations Team",
      "Yodha NSS — Community Service & Student Volunteer",
    ],
  },

  {
    group: "Awards, Recognition & Achievements",
    items: [
      "Best Employee Award — RenuDev Traders",
      "Best Employee Recognition — Culinary Services, Kent State University",
      "Student Ambassador Recognition — Barnes & Noble College",
      "Campus Ambassador — JSS Academy of Technical Education (2021, 2022)",
      "Mr. JSS Talented Winner (2020)",
      "Pick & Speak Winner (2021)",
      "Academic & Technical Leadership Recognition across multiple student organizations",
    ],
  },

  {
    group: "Creative, Communication & Public Engagement",
    items: [
      "Novel Writing & Storytelling",
      "Poetry & Songwriting",
      "Stage Acting & Theatre Performance",
      "Debate & Public Speaking",
      "Event Anchoring & Hosting (20+ Academic & Cultural Events)",
      "Student Mentorship & Team Coordination",
    ],
  },
];

export default function PrajwalPortfolio() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allProjects;
    return allProjects.filter(([title, desc, tech]) =>
      `${title} ${desc} ${tech}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="page">
      <div className="techVideoBg">
        <div className="gridLayer" />
        <div className="scanline" />
        <div className="codeRain">
          {Array.from({ length: 42 }).map((_, i) => (
            <span key={i} style={{ left: `${(i * 7) % 100}%`, animationDelay: `${i * 0.26}s` }}>
              {["API", "SQL", "ML", "GPU", "JSON", "JWT", "CNN", "DB", "EDGE", "0xFA"][i % 10]}
            </span>
          ))}
        </div>
      </div>

      <main className="wrap">
  <nav className="nav glass">
    <b>Prajwal Devaraj</b>
    <div>
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#publications">Publications</a>
      <a href="#courses">Courses</a>
      <a href="#activities">Activities</a>
    </div>
  </nav>

        <section className="hero glass reveal">
          <div>
            <div className="pill">Software Engineer • AI/ML • Backend • Full Stack • Database Systems</div>
            <h1>{contact.name}</h1>
            <h2>Building intelligent, scalable, production-style software systems.</h2>
            <p>
              I’m a Software Engineer specializing in AI/ML and Full-Stack Development, currently pursuing 
              my Master’s at Kent State University, where I build scalable, real-world systems.
              I enjoy turning complex problems into simple, efficient solutions while collaborating 
              with people and creating meaningful impact through technology.
              Beyond code, I bring creativity, strong communication, and a calm, reliable presence
              someone teams enjoy working with and trust to get things done.
            </p>

            <div className="actions">
  <a className="btn primary" href={`mailto:${contact.email}`}>Contact Me</a>
  <a className="btn primary" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
  <a className="btn primary" href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
  <a 
  className="btn primary" 
  href="https://prajwal-devaraj.github.io/PrajwalDevaraj_Portfolio/" 
  target="_blank" 
  rel="noreferrer"
>
  Portfolio
</a>
</div>

            <div className="contactLine">
              <a href={contact.locationLink} target="_blank" rel="noreferrer">{contact.location}</a>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>

          <div className="terminalCard">
            <div className="terminalTop"><span /><span /><span /></div>
            <pre>{`const engineer = {
  name: "Prajwal Devaraj",
  focus: ["Software Engineer", "AI/ML", "Backend",
          "Full Stack", "Database Systems"]
  projects: "37+",
  impact: ["99% accuracy", "30-40% faster"],
  mindset: "Build. Optimize. Ship."
};`}</pre>
          </div>
        </section>

        <section id="about" className="section glass reveal">
          <Header small="About Me" title="A software engineer with curiosity, creativity, and builder energy." />
          <div className="quoteBox">“Even the smallest spark can light up an entire system, if placed right.”</div>
          <div className="aboutText">
            {aboutParagraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </section>

     <section id="education" className="section glass reveal">
  <Header small="Education" title="Academic foundation" />

  <div className="twoGrid">
    {education.map((item) => (
      <div className="infoCard hoverGlow" key={item.school}>
        
        {/* School Name */}
        <h3>
          <a
            className="schoolLink"
            href={item.website}
            target="_blank"
            rel="noreferrer"
          >
            {item.school}
          </a>
        </h3>

        {/* Location added here */}
        <p className="location">{item.location}</p>

        {/* Degree */}
        <p className="degree">{item.degree}</p>

        {/* Period */}
        <span className="period">{item.period}</span>

        {/* GPA moved below period */}
        {item.gpa && <div className="gpa">GPA: {item.gpa}</div>}

        {/* Details */}
        <small className="details">{item.details}</small>
      </div>
    ))}
  </div>
</section>

        <section id="skills" className="section glass reveal">
          <Header small="Technical Skills" title="" />
          {Object.entries(skills).map(([group, list]) => (
            <div className="skillGroup" key={group}>
              <h3>{group}</h3>
              <div className="skills">
                {list.map((skill, i) => (
                  <span key={skill} style={{ animationDelay: `${i * 0.01}s` }}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </section>

       <section id="experience" className="section glass reveal">
  <Header small="Experience" title="Research, teaching, leadership, and engineering" />

  <div className="timeline">
    {experience.map((item, i) => (
      <details className="timelineItem hoverGlow" key={item.role + item.org}>
        <summary>
          <b>{String(i + 1).padStart(2, "0")}</b>

          <div>
            <h3>{item.role}</h3>
            <p>
              {item.org} • {item.location && `${item.location} • `}
              {item.period}
            </p>
          </div>

          <em>View Details</em>
        </summary>

        <ul className="mainList">
          {item.points.map((point, index) => (
            <li key={index}>
              {typeof point === "string" ? point : point.text}

              {typeof point !== "string" && point.subPoints && (
                <ul className="subList">
                  {point.subPoints.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </details>
    ))}
  </div>
</section>


      <section id="projects" className="section glass reveal">
  <Header small="Projects" title="Featured software engineering projects" />

  <div className="projectGrid">
    {featuredProjects.map((project) => (
      <a
        className="projectCard hoverGlow"
        href={project.link}
        target="_blank"
        rel="noreferrer"
        key={project.title}
      >
        {/* Visual */}
        <div className="projectVisual">
          <div className="miniCode">
            <span>npm run build</span>
            <span>flask --app api run</span>
            <span>SELECT latency FROM logs;</span>
            <span>model.predict(features)</span>
          </div>
        </div>

        {/* Meta */}
        <div className="projectMeta">
          <span>{project.category}</span>
          <small>{project.impact}</small>
        </div>

        {/* Title */}
        <h3>{project.title}</h3>

        {/* FIRST LINE FIXED */}
        <p>
          {typeof project.points[0] === "string"
            ? project.points[0]
            : project.points[0].text}
        </p>

        {/* HOVER DETAILS (UPDATED) */}
        <div className="hoverReveal">
          {project.points.map((point, i) => (
            <div key={i}>
              <p>
                • {typeof point === "string" ? point : point.text}
              </p>

              {/* SUB POINTS */}
              {typeof point !== "string" && point.subPoints && (
                <div style={{ paddingLeft: "14px" }}>
                  {point.subPoints.map((sub, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: "13px",
                        color: "#94a3b8",
                        margin: "2px 0",
                      }}
                    >
                      ○ {sub}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          <strong style={{ display: "block", marginTop: "10px" }}>
            Tech: {project.tech}
          </strong>
        </div>

        {/* Link */}
        <strong className="viewLink">View GitHub →</strong>
      </a>
    ))}
  </div>

  {/* ALL PROJECTS */}
  <div className="allProjects">
    <h3>All Projects ({filteredProjects.length})</h3>

    <input
      placeholder="Search all projects..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    <div className="projectList">
      {filteredProjects.map(([title, desc, tech]) => (
        <a
          className="smallProject hoverGlow"
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          key={title}
        >
          <h4>{title}</h4>
          <p>{desc}</p>
          <small>Tech: {tech}</small>
          <strong>GitHub →</strong>
        </a>
      ))}
    </div>
  </div>
</section>

<section id="publications" className="section glass reveal">
  <Header
    small="Publications & Research"
    title="Research publications, papers, and ongoing work"
  />

  <div className="timeline">
    {publications.map((item, i) => (
      <details
        className="timelineItem hoverGlow"
        key={item.title}
      >
        <summary>
          <b>{String(i + 1).padStart(2, "0")}</b>

          <div>
            <h3>{item.title}</h3>
            <p>
              {item.venue} • {item.period}
            </p>
          </div>

          <em>View Details</em>
        </summary>

        <ul className="mainList">
          <li>
            <strong>Status:</strong> {item.status}
          </li>

          <li>
            <strong>Authors:</strong> {item.authors}
          </li>

          <li>{item.description}</li>

          <li>
            <strong>Tech Stack:</strong> {item.tech}
          </li>
        </ul>
      </details>
    ))}
  </div>
</section>


<section id="courses" className="section glass reveal">
  <Header small="Courses" title="Certifications, training, and technical foundations" />

  <div className="timeline">
    {courses.map((item, i) => (
      <details className="timelineItem hoverGlow" key={item.role + item.org}>
        <summary>
          <b>{String(i + 1).padStart(2, "0")}</b>

          <div>
            <h3>{item.role}</h3>
            <p>
              {item.org} • {item.location && `${item.location} • `}
              {item.period}
            </p>
          </div>

          <em>View Details</em>
        </summary>

        <ul className="mainList">
          {item.points.map((point, index) => (
            <li key={index}>
              {typeof point === "string" ? point : point.text}

              {typeof point !== "string" && point.subPoints && (
                <ul className="subList">
                  {point.subPoints.map((sub, subIndex) => (
                    <li key={subIndex}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </details>
    ))}
  </div>
</section>

       <section id="activities" className="section glass reveal">
  <Header small="Extra-Curricular Activities" title="Leadership, creativity, and campus involvement" />

  <div className="activityGrid">
    {activities.map((group) => (
      <div className="activityCard hoverGlow" key={group.group}>
        <h3>{group.group}</h3>
        <ul>
          {group.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

        <section className="cta glass reveal">
          <h2>Let’s build something meaningful.</h2>
          <p>
  I’m actively seeking Software Engineering opportunities across backend systems,
  full-stack platforms, database engineering, platform engineering, and applied AI/ML
  where I can build scalable products, solve real problems, and grow with strong engineering teams.
</p>
       <div className="actions">
<a className="btn" href={`mailto:${contact.email}`}>Email Me</a>
<a className="btn" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
<a className="btn" href={contact.github} target="_blank" rel="noreferrer">View GitHub</a>
<a 
  className="btn" 
  href="https://prajwal-devaraj.github.io/PrajwalDevaraj_Portfolio/" 
  target="_blank" 
  rel="noreferrer"
>
  Portfolio
</a>
</div>
        </section>
      </main>

      <style>{`
        * { box-sizing: border-box; }
       html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}
        body { margin: 0; }

        .page {
          min-height: 100vh;
          color: #e2e8f0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #020617;
          overflow-x: hidden;
          padding: 28px 18px 70px;
          position: relative;
        }

        .techVideoBg {
          position: fixed;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 12%, rgba(59,130,246,.18), transparent 30%),
            radial-gradient(circle at 78% 20%, rgba(168,85,247,.20), transparent 34%),
            radial-gradient(circle at 50% 90%, rgba(34,211,238,.08), transparent 40%),
            linear-gradient(180deg, #06162d 0%, #090b1f 55%, #030712 100%);
        }

        .gridLayer {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 85%);
        }

        .scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(to bottom, transparent, rgba(34,211,238,.08), transparent);
          animation: scan 8s ease-in-out infinite;
        }

        @keyframes scan {
          0% { top: -180px; }
          100% { top: 100%; }
        }

        .codeRain span {
          position: absolute;
          top: -80px;
          color: rgba(103,232,249,.16);
          font-family: monospace;
          font-weight: 900;
          animation: rain 10s linear infinite;
        }

        @keyframes rain {
          to { transform: translateY(110vh); }
        }

        .wrap {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .glass {
          background: rgba(15, 23, 42, 0.78);
          border: 1px solid rgba(148,163,184,.18);
          box-shadow: 0 24px 80px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.05);
          backdrop-filter: blur(18px);
          border-radius: 34px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity .8s ease, transform .8s ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }

.nav {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;

  width: calc(100% - 40px);
  max-width: 1100px;

  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(15, 23, 42, 0.25);   /* 🔥 transparent */
  backdrop-filter: blur(20px);          /* glass effect */
  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 999px;
}
  
.nav b {
  color: white;
  font-size: 18px;
}

.nav div {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.nav a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  transition: .25s ease;
}

.nav a:hover {
  color: #67e8f9;
}

        .hero {
          padding: 42px;
          display: grid;
          grid-template-columns: 1.25fr .75fr;
          gap: 30px;
          align-items: center;
        }

        .pill {
          display: inline-flex;
          padding: 9px 15px;
          border-radius: 999px;
          background: rgba(99,102,241,.16);
          border: 1px solid rgba(165,180,252,.28);
          color: #dbeafe;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 20px;
        }

        h1 {
          margin: 0;
          color: white;
          font-size: clamp(56px, 8vw, 92px);
          line-height: .92;
          letter-spacing: -0.06em;
          font-weight: 950;
          text-shadow: 0 12px 40px rgba(59,130,246,.18);
          white-space: nowrap;  
        }

        .hero h2 {
          margin: 18px 0 0;
          max-width: 950px;
          font-size: clamp(28px, 4.2vw, 54px);
          line-height: 1.08;
          font-weight: 950;
          background: linear-gradient(90deg, #a5b4fc, #c084fc, #67e8f9);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero p, .cta p {
          color: #cbd5e1;
          line-height: 1.9;
          font-size: 18px;
          max-width: 920px;
        }

        .actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 26px;
        }

        .btn {
          padding: 13px 20px;
          border-radius: 17px;
          text-decoration: none;
          color: white;
          font-weight: 900;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 10px 24px rgba(0,0,0,.18);
          transition: .22s ease;
        }

        .btn.primary {
  background: linear-gradient(135deg, #6366f1, #22d3ee);
  border: none;
  box-shadow: 0 10px 24px rgba(34, 211, 238, 0.35);
}

.btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 36px rgba(34, 211, 238, 0.55);
  border: none;
}

/* 🔥 ADD THIS (forces priority) */
.btn.primary:hover {
  box-shadow: 0 18px 36px rgba(34, 211, 238, 0.55) !important;
}

.btn:hover {
  transform: translateY(-3px);

  /* 🔥 strong glow like Contact button */
  border-color: rgba(103,232,249,.6);

  box-shadow:
    0 0 10px rgba(103,232,249,.6),
    0 0 20px rgba(103,232,249,.4),
    0 18px 36px rgba(103,232,249,.25);
}

        .primary {
          background: linear-gradient(90deg,#2563eb,#7c3aed,#0891b2);
        }

        .contactLine {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 14px;
        }

        .contactLine a {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          color: #cbd5e1;
          text-decoration: none;
          font-weight: 700;
        }

        .terminalCard {
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(148,163,184,.20);
          background: rgba(2,6,23,.88);
          box-shadow: 0 20px 50px rgba(0,0,0,.35);
          animation: floatCard 4s ease-in-out infinite alternate;
        }

        @keyframes floatCard {
          from { transform: translateY(0) rotate(-1deg); }
          to { transform: translateY(-12px) rotate(1deg); }
        }

        .terminalTop {
          display: flex;
          gap: 8px;
          padding: 14px;
          background: rgba(255,255,255,.08);
        }

        .terminalTop span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ef4444;
        }
        .terminalTop span:nth-child(2) { background: #f59e0b; }
        .terminalTop span:nth-child(3) { background: #22c55e; }

        pre {
          margin: 0;
          padding: 24px;
          color: #67e8f9;
          font-size: 15px;
          line-height: 1.8;
          overflow-x: auto;
        }

        .section, .cta {
          margin-top: 28px;
          padding: 32px;
        }
        
        .section {
        min-height: auto;   /* ensures it expands fully */
        height: auto;       /* override any implicit height */
        }

        .headLabel {
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(99,102,241,.16);
          border: 1px solid rgba(165,180,252,.28);
          color: #dbeafe;
          letter-spacing: .18em;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 900;
        }

        .section h2, .cta h2 {
          margin: 14px 0 8px;
          color: white;
          font-size: clamp(30px,4vw,44px);
        }

        .quoteBox {
          font-size: clamp(22px, 3vw, 34px);
          line-height: 1.35;
          font-weight: 950;
          color: white;
          padding: 24px;
          border-radius: 26px;
          background: linear-gradient(135deg, rgba(59,130,246,.18), rgba(168,85,247,.14));
          border: 1px solid rgba(148,163,184,.18);
          box-shadow: 0 18px 45px rgba(0,0,0,.18);
          margin: 18px 0 16px;
        }

        .aboutText {
          display: block;
          max-width: 100%;
        }

        .aboutText p {
          color: #cbd5e1;
          margin: 0 0 12px;
          line-height: 1.75;
          font-size: 16.5px;
          text-align: justify;
        }

        .twoGrid, .projectGrid, .activityGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 18px;
        }

        .infoCard, .projectCard, .activityCard, .smallProject, .timelineItem {
          background: rgba(15,23,42,.82);
          border: 1px solid rgba(148,163,184,.18);
          border-radius: 24px;
          padding: 22px;
          transition: .25s ease;
          box-shadow: 0 12px 30px rgba(0,0,0,.16);
        }

        .hoverGlow:hover {
          transform: translateY(-7px);
          border-color: rgba(103,232,249,.45);
          box-shadow: 0 22px 44px rgba(103,232,249,.10);
        }

        .infoCard h3, .projectCard h3, .timelineItem h3, .skillGroup h3, .activityCard h3, .allProjects h3, .smallProject h4 {
          color: white;
          margin: 0 0 8px;
        }

        .schoolLink {
          color: white;
          text-decoration: none;
        }

        .schoolLink:hover {
          color: #67e8f9;
          text-decoration: underline;
        }

        .infoCard p, .projectCard p, .timelineItem p {
          color: #67e8f9;
          margin: 0 0 10px;
          font-weight: 800;
        }

        .infoCard span, .timelineItem span, .activityCard, .activityCard li {
          color: #cbd5e1;
          line-height: 1.7;
        }

        .infoCard strong {
          display: inline-flex;
          color: #67e8f9;
          background: rgba(103,232,249,.08);
          border: 1px solid rgba(103,232,249,.18);
          padding: 7px 12px;
          border-radius: 999px;
          margin: 8px 0;
        }

        .infoCard small {
          display: block;
          color: #94a3b8;
          line-height: 1.7;
          margin-top: 12px;
        }

        .skillGroup { margin-top: 24px; }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skills span {
          padding: 8px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.10);
          color: #dbe4f0;
          font-weight: 750;
          animation: pop .35s ease both;
        }

        @keyframes pop {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .timeline {
          display: grid;
          gap: 14px;
        }

        .timelineItem summary {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 18px;
          align-items: center;
          cursor: pointer;
          list-style: none;
        }

        .timelineItem summary::-webkit-details-marker { display: none; }

        .timelineItem b, .timelineItem em {
          color: #67e8f9;
          font-weight: 900;
        }

        .timelineItem ul, .activityCard ul {
          margin: 5px 0 0;
          padding-left: 20px;
          color: #cbd5e1;
          line-height: 1.8;
        }

     .projectCard {
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;
  min-height: auto;
}
  
        .projectVisual {
          height: 145px;
          border-radius: 18px;
          background:
            radial-gradient(circle at 20% 20%, rgba(103,232,249,.22), transparent 35%),
            linear-gradient(135deg, rgba(37,99,235,.25), rgba(15,23,42,.95));
          border: 1px solid rgba(255,255,255,.08);
          margin-bottom: 18px;
          padding: 16px;
          overflow: hidden;
        }

        .miniCode {
          display: grid;
          gap: 8px;
          color: rgba(103,232,249,.75);
          font-family: monospace;
          font-size: 13px;
          animation: codeMove 4s linear infinite;
        }

        @keyframes codeMove {
          from { transform: translateY(0); }
          to { transform: translateY(-32px); }
        }

        .projectMeta {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .projectMeta span, .projectMeta small {
          padding: 7px 11px;
          border-radius: 999px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.10);
          color: #dbe4f0;
          font-weight: 850;
        }

        .projectCard > p {
          color: #cbd5e1;
          font-weight: 500;
          line-height: 1.7;
        }

        .hoverReveal {
          position: absolute;
          inset: 0;
          padding: 22px;
          background: rgba(15,23,42,.98);
          border-radius: 24px;
          opacity: 0;
          transform: translateY(18px);
          transition: .25s ease;
          overflow-y: auto;
        }

        .projectCard:hover .hoverReveal {
          opacity: 1;
          transform: translateY(0);
        }

        .hoverReveal p {
          color: #cbd5e1;
          line-height: 1.55;
          font-size: 13px;
          margin: 0 0 8px;
        }

        .hoverReveal strong, .viewLink, .smallProject strong {
          color: #67e8f9;
          font-weight: 950;
        }

        .allProjects { margin-top: 34px; }

        .allProjects input {
          width: min(100%, 520px);
          padding: 15px 18px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(15,23,42,.82);
          color: white;
          outline: none;
          font-size: 15px;
          margin-bottom: 22px;
        }

        .projectList {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 14px;
        }

        .smallProject {
          text-decoration: none;
          color: inherit;
        }

        .smallProject p {
          margin: 0 0 10px;
          color: #cbd5e1;
          line-height: 1.7;
          font-size: 14px;
        }

        .smallProject small {
          display: block;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .cta {
          background: linear-gradient(90deg,rgba(37,99,235,.15),rgba(168,85,247,.12),rgba(34,211,238,.08));
        }

@media (max-width: 900px) {
  #projects .projectGrid {
    display: grid !important;
    grid-template-columns: 1fr !important;
  }

  #projects .projectCard {
    display: block !important;
    min-height: unset !important;
    height: auto !important;
    overflow: visible !important;
  }

#projects .hoverReveal {
  position: relative !important;
  opacity: 1 !important;
  transform: none !important;
  inset: auto !important;
  margin-top: 14px !important;
  padding: 16px !important;
  background: rgba(15,23,42,.78) !important;
  border: 1px solid rgba(103,232,249,.18) !important;
}

  #projects .projectCard:hover .hoverReveal {
    opacity: 1 !important;
    transform: none !important;
  }
    #projects {
  display: block !important;
  position: relative !important;
  z-index: 5 !important;
  margin-top: 40px !important;
  visibility: visible !important;
}

#projects .projectGrid {
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 16px !important;
}

#projects .projectCard {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}
}
      `}</style>
    </div>
  );
}

function Header({ small, title }) {
  return (
    <>
      <div className="headLabel">{small}</div>
      <h2>{title}</h2>
    </>
  );
}
