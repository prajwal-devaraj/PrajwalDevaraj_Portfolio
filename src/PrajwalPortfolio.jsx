import React, { useEffect, useMemo, useState } from "react";

const contact = {
  name: "PRAJWAL DEVARAJ",
  location: "United State",
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
    "My first engineering job out of school — built backend systems for inventory, billing, and internal workflow management using Python, Flask, and SQL.",
    "Wrote the REST APIs the internal tools ran on, along with the auth and validation logic behind them.",
    "Rewrote a batch of slow SQL queries and automated reporting that used to be done by hand, which sped up day-to-day operations by around 30%.",
    "Spent a lot of time actually talking to the people using what I built, then adjusting things to match how they really worked.",
    "Handled deployments and the occasional 'it broke in production' fire drill.",
    "Got the Best Employee Award, which felt like a good sign for a first job.",
  ],
},

  {
    role: "Research Assistant",
    org: "Kent State University",
    location: "Kent, OH, USA",
    period: "May 2025 – May 2026",
    points: [
      "Doing AI/ML research on medical data, training models on a GPU cluster (4+ GPUs) alongside faculty and a small research team.",
      "Main project is CodeTheGenome: predicting when genetic variant interpretations conflict, using the ClinVar dataset. Built the feature pipeline and trained an ensemble of XGBoost, LightGBM, and CatBoost models, landing at 93% accuracy — as far as I know, no one had tackled it quite this way before.",
      "Also working on endoscopy image analysis for gastrointestinal cases — building models to spot blood clot patterns before and after gastric cancer surgery, using real clinical data from multiple hospitals.",
      "A good chunk of the work is unglamorous: preprocessing pipelines, cleaning noisy data, and evaluating models honestly with precision/recall/F1 rather than just accuracy.",
      "Helped write up the research for documentation and (hopefully, eventually) publication.",
    ],
  },
{
  role: "Undergraduate Teaching Assistant",
  org: "Kent State University",
  location: "Kent, OH, USA",
  period: "Sep 2025 – May 2026",
  points: [
    "TA for Operating Systems and Intro to Database System Design, supporting 120+ students across honors and regular sections.",
    "Ran doubt-clearing sessions on CPU scheduling, memory management, concurrency, database design, and SQL — the stuff that trips most people up.",
    "Covered full lectures on my own a few times when the professor was out.",
    "Graded assignments, projects, and exams, and tried to give feedback students could actually use, not just a number.",
    "Held regular office hours — a lot of it was just helping people get unstuck on their own projects and feel less intimidated by the material.",
    "Helped with exam logistics and invigilation.",
  ],
},
{
  role: "Full-Stack Developer Intern",
  org: "BETSOL",
  location: "Bangalore, Karnataka, India",
  period: "May 2022 – Dec 2022",
  points: [
    "Built and shipped full-stack web apps on a Python backend, working in an agile team alongside full-time engineers.",
    "First big project was a workflow automation system — backend services with proper error handling and retry logic, so a failed step didn't take down the whole process.",
    "Then built a full-stack help desk app: ticket creation and tracking on the frontend, CRUD APIs with role-based auth on the backend, plus real-time notifications for updates.",
    "Also served as Campus Ambassador, which was a nice change of pace — representing BETSOL on campus and helping other students find their way into internships.",
    "Stack: Python, React, Node.js/Spring Boot, MySQL, REST APIs.",
  ],
},
{
  role: "Backend Developer Intern",
  org: "Technofly Solutions",
  location: "Bangalore, Karnataka, India",
  period: "Aug 2022 – Sep 2022",
  points: [
    "Worked on a government transportation project — a bus transport management system.",
    "Built responsive frontend pages with HTML/CSS/JS and backend pieces in Python.",
    "Part of a 7-person dev team running sprints, so I got a real feel for agile development early on.",
  ],
},
 {
  role: "Student Technical Operations Associate / Head Cashier / Student Ambassador",
  org: "Kent State University Bookstore, Barnes & Noble College",
  location: "Kent, OH, USA",
  period: "Aug 2024 – May 2026",
  points: [
    "Started as a regular associate, got promoted to Head Cashier & Administrative Support based on how I handled the job.",
    "Ran the Oracle-based retail stack day to day — TA2, OMS, KIOSK, POS, and the textbook management system — processing 500+ transactions a day with very few errors.",
    "Became the person people came to when something broke — troubleshot POS and system issues in real time and cut down service interruptions noticeably.",
    "Handled inventory coordination and textbook workflows during the chaos of semester start, when the store gets slammed by thousands of students at once.",
    "Trained and onboarded 15+ new employees on the systems and workflows.",
    "Ran the store solo during manager absences a few times — customer issues, reconciliation, all of it.",
    "Selected as Student Ambassador for 2025–2026, representing the bookstore in campus outreach and events.",
  ],
},
{
  role: "Student Employee",
  org: "Commerce Café, Culinary Services, Kent State University",
  location: "Kent, OH, USA",
  period: "Aug 2024 – Jan 2026",
  points: [
    "Opened and closed the café, kept inventory stocked, and made sure health and safety standards were actually followed, not just posted on a wall.",
    "Trained new hires on operations and customer service.",
    "Got good at staying calm and quick during the morning rush without the quality slipping.",
    "Ended up taking on more senior responsibilities over time — coordinating the team, not just working the register.",
  ],
},
{
  role: "Student Catering Employee",
  org: "Culinary Services, Kent State University",
  location: "Kent, OH, USA",
  period: "May 2025 – Aug 2025",
  points: [
    "Consistently picked for the university's higher-profile events — 50+ of them, including VIP gatherings and functions at the President's Residence.",
    "Regularly put in charge of a crew of 5–15 staff during peak service, keeping things running when the pressure was highest.",
    "Handled food prep, setup, and service for large events while keeping to strict food safety standards.",
    "Got the 'Best Employee Recognition' award for reliability and leadership.",
    "Trained newer staff on event protocol and service etiquette — this job taught me more about staying calm under pressure than most of my CS classes did.",
  ],
},
  {
  role: "Administrator",
  org: "Sri Guruvandana Global Pre-School",
  location: "Bangalore, Karnataka, India",
  period: "Mar 2020 – Jul 2023",
  points: [
    "Ran day-to-day operations for a school of 2,500+ students — scheduling, attendance, timetables, the whole administrative backbone.",
    "Built out curriculum structures and monthly academic plans, and organized school events on top of that.",
    "Handled admissions and parent communication, which taught me a lot about managing expectations with people who aren't going to read the fine print.",
    "Also taught basic computer skills to kids aged 3–16, adjusting the approach a lot depending on the age group in front of me.",
    "Won the Best Employee Award three years running (2021–2023) and an All-Time Best Performance Award.",
    "Basically ran the place independently a lot of the time — this is where I first learned what it means to actually own something end to end.",
  ],
},
 {
  role: "Teacher Training Intern",
  org: "Edsmart Edu Services Pvt Ltd",
  location: "Bangalore, Karnataka, India",
  period: "May 2022",
  points: [
    "Went through a hands-on teacher training program across several partner schools.",
    "Built lesson content around phonics and child development, and adapted my teaching style depending on the kids in the room.",
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
    "Led a team of 7 to build a personal finance app that actually tries to tell you something useful about your money, not just log transactions.",
    "React frontend, Flask + MongoDB backend, with modular APIs that made it easy to bolt on new features without breaking old ones.",
    "The core feature is a 'Days Left' predictor — spend forecasting and burn-rate analysis that estimates how long your money will realistically last, running at 85–90% prediction accuracy.",
    "Added a behavioral layer I'm pretty proud of: an NWG (Need–Want–Guilt) classifier that tags spending by the emotion behind it, not just the category.",
    "Built the dashboards in Recharts so people could actually see their spending trends instead of scrolling a transaction list.",
    "Tested with real users spanning ages 18 to 65+, which surfaced a lot of usability issues a dev-only team would've missed.",
    "JWT auth under the hood, plus the core modules: transactions, goals, bills, alerts, and insights.",
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
    "Grad research project: predicting when two labs' interpretations of the same genetic variant conflict, using the ClinVar dataset.",
    "Spent a lot of time on feature engineering before touching a model — genomic and statistical features that actually carried signal.",
    "Trained an ensemble of XGBoost, LightGBM, and CatBoost with cross-validation, pushing accuracy from ~87% to 93.3%.",
    "Didn't want a black box for something clinically relevant, so I added SHAP to explain why the model was flagging a conflict.",
    "Full pipeline end to end: preprocessing, feature engineering, training, evaluation. Still ongoing, with a possible publication down the line.",
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
    "A system that watches SQL queries and picks a better execution strategy at runtime, instead of relying on Postgres's static planner alone.",
    "Trained a Random Forest to predict query cost ahead of execution, which cut average latency by 30–40% on the benchmark workload.",
    "Generated and ran against 200K–500K+ synthetic queries to get something close to a real-world workload for testing.",
    "Pulled 10+ features straight out of the SQL itself — joins, predicates, aggregations, limits — to represent how complex a query actually is.",
    "Added a feedback loop so the model retrains itself over time, which brought prediction error down another ~20%.",
    "Flask API with a service-layer abstraction, plus a small dashboard to flag slow queries (>500ms) as they happen.",
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
    "A full-stack platform for reporting disasters and coordinating response in real time.",
    "Map-based dashboard using GeoJSON and live location tracking, so incidents show up where they're actually happening, not just as a list.",
    "Backend handles the real-time ingestion side — pulling in live disaster feeds from external APIs and getting that data to responders quickly.",
    "Built to support multiple concurrent users without the real-time updates falling behind.",
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
    "A model that listens to a call and flags whether it sounds like a voice-phishing (vishing) attempt.",
    "Used Librosa to pull MFCCs and spectral features out of raw audio and turn them into something a model could actually learn from.",
    "Trained a classifier to separate phishing calls from legitimate ones, served through a Flask API for real-time inference.",
    "End-to-end pipeline: audio in, features extracted, prediction out — aimed at real fraud-detection use cases, not just a toy dataset.",
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
    "A Database-as-a-Service platform built specifically for handling sensitive medical data securely.",
    "AES encryption at rest and HMAC for integrity checks, so data can't be quietly tampered with.",
    "Role-based access control with fine-grained permissions — not everyone touching the system should be able to see everything.",
    "Modular backend APIs handling CRUD securely, built with extensibility in mind rather than a one-off script.",
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
              I'm a Software Engineer specializing in AI/ML, Backend, and Full-Stack Development, 
              with a Master of Science in Computer Science from Kent State University (May 2026, GPA: 3.97/4.0). 
              I build scalable, real-world applications that combine strong engineering fundamentals with 
              practical business impact. My experience spans software engineering, machine learning, 
              cloud technologies, data engineering, and intelligent systems, with a focus on developing 
              efficient, reliable, and user-centered solutions. Beyond coding, I value collaboration, 
              leadership, and continuous learning, bringing both technical expertise and a people-first 
              mindset to every project I undertake.
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
            <a>{contact.location}</a>
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
