import React, { useEffect, useMemo, useRef, useState } from "react";

/* ============================================================
   DATA
   ============================================================ */

const contact = {
  name: "Prajwal Devaraj",
  location: "United States",
  email: "pdevaraj001@gmail.com",
  linkedin: "https://linkedin.com/in/prajwaldevaraj",
  github: "https://github.com/prajwal-devaraj",
  portfolio: "https://prajwal-devaraj.github.io/PrajwalDevaraj_Portfolio/",
};

const aboutParagraphs = [
  "Hi, I'm Prajwal. I'm the kind of person who started with curiosity, got pulled into technology, and somewhere along the way ended up building systems, teaching others, writing poetry, and occasionally arguing with my own code at 2 a.m.",
  "I recently finished my Master's in Computer Science at Kent State University, focused on AI/ML, Backend, Full Stack, and Database Systems. Along the way I worked as a Graduate Research Assistant, building AI systems for real-world medical imaging, and as a Teaching Assistant, helping students understand Operating Systems and Databases without losing their sanity.",
  "I like building things that feel right, not just code that works, but systems that are efficient, clean, and meaningful. I enjoy breaking down complex problems, finding patterns, and turning chaos into something structured.",
  "People who've worked with me usually notice one thing: I'm easy to work with. I listen, I understand, and I don't bring ego into the room.",
  "Outside engineering, I write stories, poems, and songs. I've been on stage as an actor and debater, and I've represented campuses, worked in bookstores, cafés, catering setups, and real service environments.",
  "I don't just build applications. I build experiences, relationships, and ideas.",
  "And if nothing else, I promise I'll at least fix the bugs… or become friends with them.",
];

const education = [
  {
    school: "Kent State University",
    location: "Kent, OH, USA",
    website: "https://www.kent.edu/",
    degree: "M.S. in Computer Science",
    period: "Aug 2024 – May 2026",
    gpa: "3.97",
    details:
      "Advanced Database Systems, Data Mining, Social & Graph Networks, AI, ML & Deep Learning, Data Security & Privacy, Advanced Computer Graphics, IoT Integration, AI for Robotics.",
  },
  {
    school: "JSS Academy of Technical Education, VTU",
    location: "Bangalore, Karnataka, India",
    website: "https://www.jssateb.ac.in/",
    degree: "B.E. in Computer Science",
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
      "Ran a customer opt-in push that ended up posting the highest year-over-year increase company-wide — 12,000+ additional opt-ins and a 28% opt-in rate, recognized company-wide.",
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
    title: "Agentic Search Assistant",
    category: "AI-Powered Search Overview Engine",
    impact: "Citation-backed AI search that synthesizes live web results",
    link: "https://github.com/prajwal-devaraj/Agentic-Search-Assistant.git",
    tech: "React, FastAPI, PostgreSQL, OpenAI/Gemini API, Web Search API, RAG, Tailwind CSS",
    period: "Jun 2026 – Present",
    metrics: ["RAG pipeline", "Citation mapping", "Confidence scoring"],
    points: [
      "Building an AI search platform that works the way modern AI search overviews do — pulling live web results and synthesizing them into a cited answer instead of a list of links.",
      "Wired web search APIs into an LLM summarization pipeline (RAG) so answers are grounded in what's actually on the page right now, not just the model's training data.",
      "Added agentic behaviors on top of plain Q&A — comparison tables, follow-up questions, research summaries, checklists — so it acts more like a research assistant than a search box.",
      "Built source citation mapping and confidence scoring specifically to cut down on hallucinated claims, since 'sounds right' isn't good enough when you're citing sources.",
    ],
  },
  {
    title: "What's Cooking",
    category: "Full-Stack Recipe Finder",
    impact: "Live app that matches recipes to what's actually in your kitchen",
    link: "https://whats-cooking-app-kappa.vercel.app/",
    tech: "Full-Stack, PostgreSQL, bcrypt, i18n (EN/HI/ES), Vercel Serverless",
    period: "May 2026 – Jun 2026",
    metrics: ["22 curated recipes", "3 languages", "Sub-2s cold start"],
    points: [
      "A recipe finder that scores 22 curated recipes by ingredient match percentage and filters by method, diet, and ingredients at once.",
      "Wrote a free-text ingredient parser that handles commas, newlines, plain spaces, and 15+ multi-word phrases correctly — the naive split-on-comma approach kept mangling inputs.",
      "Session-based auth with bcrypt-hashed passwords and lazy PostgreSQL connection pooling, so the app doesn't crash on cold start even before the database is configured.",
      "Built a custom recipe generator — no third-party recipe API — covering 4 cooking methods and 2 diet types from free-text input.",
      "Shipped in English, Hindi, and Spanish with the language choice saved per account, not just a browser toggle.",
      "Deployed to Vercel as a serverless function with automatic schema migration on first request and sub-2-second cold starts.",
    ],
  },
  {
    title: "SocialSphere Analytics Platform",
    category: "Product Analytics Data Lakehouse",
    impact: "End-to-end analytics pipeline processing 400K+ events",
    link: "https://github.com/prajwal-devaraj/SocialSphere-Analytics-Platform.git",
    tech: "Python, FastAPI, PySpark, Apache Airflow, MinIO/S3, Parquet, Streamlit, Docker, pytest, GitHub Actions",
    period: "Apr 2026 – Jun 2026",
    metrics: ["400K+ events", "27 passing tests", "~60% faster WAU/MAU"],
    points: [
      "Built a full analytics lakehouse — Bronze/Silver/Gold medallion architecture — processing 400K+ synthetic social events across 12,000 simulated users: engagement, sessions, revenue, retention.",
      "Wrote 6 PySpark ETL jobs for the gold tables. Found a cross-join bottleneck in the WAU/MAU calculation and rewrote it as a range join — cut that computation time by about 60%.",
      "Built a 7-check data quality layer (null IDs, duplicates, bad timestamps, negative revenue, volume drops, partition completeness) that filters out the ~5% of corrupted records automatically.",
      "Orchestrated everything with 3 Airflow DAGs — daily run, standalone monitoring, manual backfill — with independent gold jobs running in parallel to cut wall time.",
      "Caught a real funnel-analysis bug through unit testing: users were counting at later funnel steps without passing through earlier ones, producing negative drop-off rates. Fixed it and wrote a regression test so it can't come back quietly. 27 tests total across schema, API, Spark transforms, and data quality.",
      "Shipped a 6-page Streamlit dashboard — KPIs, retention heatmap, funnel, feature usage, revenue, anomaly detection — live on Streamlit Community Cloud.",
    ],
  },
  {
    title: "Procurement & Vendor Management Platform",
    category: "Enterprise Full-Stack System",
    impact: "End-to-end procurement lifecycle with multi-stage approvals",
    link: "https://github.com/prajwal-devaraj/Procurement-Vendor-Management-Platform.git",
    tech: "Node.js, Express, SQLite, JWT/RBAC, Jest, Supertest, Docker",
    period: "May 2026 – Present",
    metrics: ["83 tests · 100% route coverage", "6 user roles", "30+ endpoints"],
    points: [
      "A procurement system covering the full lifecycle — vendor onboarding, purchase approvals, PO generation, invoice matching, payment tracking — across 6 user roles.",
      "Built a 4-stage approval engine (Employee → Manager → Finance → Procurement Admin) with JWT-based RBAC, so approvals don't happen over email chains anymore.",
      "Auto-matches invoices to POs within a 2% tolerance band and flags mismatches before Finance even sees them.",
      "Wrote 83 integration tests with Jest and Supertest against fully isolated SQLite instances, hitting 100% route coverage across 30+ endpoints.",
      "Set up a multi-stage Dockerfile that runs the test suite during the build itself — if tests fail, the image doesn't build.",
    ],
  },
  {
    title: "SmartSpend",
    category: "AI-Powered Personal Finance Platform",
    impact: "Full-stack AI-driven financial intelligence system",
    link: "https://github.com/prajwal-devaraj/SmartSpend.git",
    tech: "React, Flask, MongoDB, Python, scikit-learn, Recharts, JWT, REST APIs",
    period: "Aug 2025 – Dec 2025",
    metrics: ["85–90% accuracy", "Team of 7", "5 core modules"],
    points: [
      "Led a team of 7 to build a personal finance app that actually tries to tell you something useful about your money, not just log transactions.",
      "React frontend, Flask + MongoDB backend, with modular APIs that made it easy to bolt on new features without breaking old ones.",
      "The core feature is a 'Days Left' predictor — spend forecasting and burn-rate analysis that estimates how long your money will realistically last, running at 85–90% prediction accuracy.",
      "Added a behavioral layer I'm pretty proud of: an NWG (Need–Want–Guilt) classifier that tags spending by the emotion behind it, not just the category.",
      "Built the dashboards in Recharts so people could actually see their spending trends instead of scrolling a transaction list.",
      "Tested with real users spanning ages 18 to 65+, which surfaced a lot of usability issues a dev-only team would've missed.",
    ],
  },
  {
    title: "CodeTheGenome",
    category: "AI/ML • Genomics • Healthcare",
    impact: "ML system for genetic variant conflict prediction",
    link: "https://github.com/prajwal-devaraj/CodeTheGenome.git",
    tech: "Python, scikit-learn, XGBoost, LightGBM, CatBoost, SHAP",
    period: "Jan 2025 – May 2026",
    metrics: ["93.3% accuracy", "+6.3% vs baseline", "SHAP explainability"],
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
    metrics: ["↓30–40% latency", "500K queries", "↓20% MAE"],
    points: [
      "A system that watches SQL queries and picks a better execution strategy at runtime, instead of relying on Postgres's static planner alone.",
      "Trained a Random Forest to predict query cost ahead of execution, which cut average latency by 30–40% on the benchmark workload.",
      "Generated and ran against 200K–500K+ synthetic queries to get something close to a real-world workload for testing.",
      "Pulled 10+ features straight out of the SQL itself — joins, predicates, aggregations, limits — to represent how complex a query actually is.",
      "Added a feedback loop so the model retrains itself over time, which brought prediction error down another ~20%.",
    ],
  },
  {
    title: "Secure Healthcare DBaaS",
    category: "Backend • Security • Cloud Systems",
    impact: "Secure database service with encryption & access control",
    link: "https://github.com/prajwal-devaraj/Secure-Database-as-a-Service-DBaaS-System.git",
    tech: "Python, Flask, MySQL/PostgreSQL, AES, HMAC, RBAC, REST APIs",
    period: "2025",
    metrics: ["AES encryption", "RBAC"],
    points: [
      "A Database-as-a-Service platform built specifically for handling sensitive medical data securely.",
      "AES encryption at rest and HMAC for integrity checks, so data can't be quietly tampered with.",
      "Role-based access control with fine-grained permissions — not everyone touching the system should be able to see everything.",
      "Modular backend APIs handling CRUD securely, built with extensibility in mind rather than a one-off script.",
    ],
  },
  {
    title: "Disaster Management System",
    category: "Full-Stack • Real-Time Systems • APIs",
    impact: "Real-time incident reporting & response system",
    link: "https://github.com/prajwal-devaraj/DISASTER-MANAGEMENT-EARLY-WARNING-SYSTEM.git",
    tech: "React, Flask, MongoDB, REST APIs, GeoJSON, Leaflet/Maps",
    period: "2025",
    metrics: ["Real-time updates", "Geo-tracking", "Multi-API"],
    points: [
      "A full-stack platform for reporting disasters and coordinating response in real time.",
      "Map-based dashboard using GeoJSON and live location tracking, so incidents show up where they're actually happening, not just as a list.",
      "Backend handles the real-time ingestion side — pulling in live disaster feeds from external APIs and getting that data to responders quickly.",
      "Built to support multiple concurrent users without the real-time updates falling behind.",
    ],
  },
];

const allProjects = [
  ["Agentic Search Assistant", "AI search overview engine with RAG, citation mapping, and confidence scoring.", "React, FastAPI, PostgreSQL, RAG"],
  ["What's Cooking", "Live recipe finder with ingredient matching, 3-language support, custom recipe engine.", "Full-Stack, PostgreSQL, i18n"],
  ["SocialSphere Analytics Platform", "Product analytics lakehouse processing 400K+ events with 6 PySpark ETL jobs.", "Python, FastAPI, PySpark, Airflow"],
  ["Procurement & Vendor Management Platform", "Enterprise procurement lifecycle with multi-stage approvals and 83 tests.", "Node.js, Express, SQLite, JWT"],
  ["Employee Self-Service Portal", "In-progress HR self-service platform.", "Full-Stack (in progress)"],
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
  ["Disaster Management System", "Real-time multi-hazard prediction and early-warning platform.", "Flask, scikit-learn, Leaflet.js"],
  ["VishingAI", "Voice phishing detection from audio using MFCC features and a Flask API.", "Python, Flask, Librosa, scikit-learn"],
  ["IDERS", "Geospatial disaster incident reporting system.", "Flask, MongoDB, GeoJSON"],
  ["MNIST Visual Autoregressive Modeling", "Convolutional autoencoder for MNIST reconstruction.", "Python, PyTorch"],
  ["Text2Language", "Language detection web app supporting 100+ languages.", "Python, Flask"],
  ["AI Avatar & Cartoon Generator", "Image cartoonization web app using OpenCV.", "Python, Flask, OpenCV"],
  ["Facebook Graph Network Analysis", "SNAP graph analytics using centrality, clustering, BFS, DFS.", "Python, NetworkX"],
  ["Intelligent Alarm Clock Dashboard", "IoT-inspired dashboard with weather and transit alerts.", "C++, HTML, CSS, JS"],
  ["PIRVISION", "Human presence detection using PIR sensor time-series data.", "Python, scikit-learn"],
  ["ADL Recognition", "Unsupervised smart-home activity recognition.", "Python, clustering, PCA, t-SNE"],
  ["Facial Emotion Recognition", "7-class CNN emotion classifier.", "Python, TensorFlow/Keras"],
  ["Don't Touch Your Face", "CNN behavior detection for face-touch prevention.", "Python, TensorFlow/Keras"],
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
    status: "In Progress",
    venue: "Kent State University",
    period: "2025 – 2026",
    authors: "Prajwal Devaraj, Research Team",
    description:
      "Developed ensemble ML models using XGBoost, LightGBM, and CatBoost to predict conflicting genetic variant interpretations from ClinVar datasets, achieving 93.3% accuracy with SHAP-based explainability.",
  },
  {
    title: "Endoscopy Image Analysis for Gastrointestinal Applications",
    status: "Ongoing",
    venue: "Kent State University",
    period: "2025 – 2026",
    authors: "Prajwal Devaraj, Faculty Research Team",
    description:
      "Conducting AI-driven medical imaging research for blood clot pattern detection before and after gastric cancer surgery using real-world multi-center clinical datasets.",
  },
  {
    title: "Edge-Cloud Collaborative Anomaly Detection for CNC Machining",
    status: "Complete",
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
    period: "2024 – 2026",
    points: [
      "20+ corporate training modules covering compliance, security, and operational workflows.",
      "Security & risk: Cyber Security Awareness, VeriFone PCI Compliance, Anti-Money Laundering Policy, Gift Card Fraud Prevention — all completed at 100%.",
      "Ethics & workplace standards: Ethical Decision Making, Preventing Harassment & Discrimination, BNED Information Security Policy.",
      "Operational systems: myADP Workforce Systems, shift/scheduling workflows, POS and transaction training.",
    ],
  },
  {
    role: "Full Stack Web Development",
    org: "Technofly Solutions",
    period: "Aug 2022",
    points: [
      "120+ hours of full-stack training across frontend and backend systems.",
      "Built and deployed responsive UIs plus backend services with database integration.",
    ],
  },
  {
    role: "Full Stack Web Development",
    org: "BETSOL",
    period: "May 2022 – Jul 2022",
    points: [
      "Hands-on, end-to-end web development training — 3+ application modules built.",
      "Worked with API integration, databases, and deployment/debugging workflows.",
    ],
  },
  {
    role: "Teacher Training",
    org: "Edsmart Edu Services Pvt Ltd",
    period: "May 2022",
    points: ["Structured educational program design and lesson planning with practicing educators."],
  },
  {
    role: "C Programming",
    org: "NPTEL",
    period: "Jun 2021 – Jan 2022",
    points: ["50+ coding exercises building core programming fundamentals and algorithmic thinking."],
  },
  {
    role: "Data Science Phase Shift",
    org: "B.M.S.C.E",
    period: "Sep 2019",
    points: ["Hands-on data science workshop covering early ML fundamentals."],
  },
  {
    role: "IT-Wizard Plus Programme",
    org: "NIIT",
    period: "Jun 2014 – Mar 2015",
    points: ["Completed with an 'Outstanding' grade — my earliest formal IT foundation."],
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
      "Yodha NSS — Community Service & Student Volunteer",
    ],
  },
  {
    group: "Awards & Recognition",
    items: [
      "Company-Wide Recognition — Highest YoY Increase in Customer Opt-Ins, Barnes & Noble College (12,000+ opt-ins, 28% opt-in rate)",
      "Best Student — Highest Score in Machine Learning & Deep Learning, Kent State University (Spring 2025)",
      "Project Team Lead, Kent State University (Fall 2025)",
      "State-Level Volleyball Player & Award (2019–2024)",
      "Best Employee Award — RenuDev Traders",
      "Best Employee Recognition — Culinary Services, Kent State University",
      "Student Ambassador Recognition — Barnes & Noble College",
      "Campus Ambassador — JSS Academy of Technical Education (2021, 2022)",
      "Mr. JSS Talented Winner (2020)",
      "Pick & Speak Winner (2021)",
    ],
  },
  {
    group: "Creative & Public Engagement",
    items: [
      "Novel Writing & Storytelling",
      "Poetry & Songwriting",
      "Stage Acting & Theatre Performance",
      "Debate & Public Speaking",
      "Event Anchoring & Hosting (20+ Academic & Cultural Events)",
    ],
  },
];

const SHEETS = [
  { id: "about", no: "01", label: "About" },
  { id: "education", no: "02", label: "Education" },
  { id: "skills", no: "03", label: "Skills" },
  { id: "experience", no: "04", label: "Experience" },
  { id: "projects", no: "05", label: "Projects" },
  { id: "publications", no: "06", label: "Publications" },
  { id: "courses", no: "07", label: "Training" },
  { id: "activities", no: "08", label: "Activities" },
];

/* ============================================================
   CHATBOT KNOWLEDGE BASE
   A small local, keyword-matching assistant — no API key, no backend.
   Every answer is derived from the same data arrays that render the page,
   so it can't drift out of sync with the actual content.
   ============================================================ */

const CHAT_TOPICS = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "yo", "sup", "greetings"],
    respond: () =>
      "Hey there! 👋 I'm a small local assistant trained on Prajwal's portfolio — ask me about his skills, projects, experience, education, or how to reach him.",
  },
  {
    id: "about",
    keywords: ["who is prajwal", "about prajwal", "tell me about him", "who are you", "background", "introduce", "about him"],
    respond: () => `${aboutParagraphs[0]} ${aboutParagraphs[2]}`,
  },
  {
    id: "graduate",
    keywords: ["graduate", "graduated", "degree status", "still studying", "currently a student", "when did he finish"],
    respond: () =>
      `Yep — Prajwal wrapped up his M.S. in Computer Science at Kent State University (GPA ${education[0].gpa}/4.0) and is actively looking for Software Engineering and AI/ML roles. 🎓`,
  },
  {
    id: "skills",
    keywords: ["skill", "tech stack", "technologies", "stack", "language", "tools", "what can he do", "programming"],
    respond: () => {
      const groups = Object.keys(skills).slice(0, 5);
      return `He's strongest in ${groups.join(", ")}. On languages: ${skills["Programming Languages"].slice(0, 7).join(", ")}. For AI/ML: ${skills["AI / ML"].slice(0, 5).join(", ")}. Basically a bit of a toolbox hoarder 🧰`;
    },
  },
  {
    id: "experience",
    keywords: ["experience", "work history", "job", "worked", "role", "career", "employer"],
    respond: () => {
      const recent = experience.slice(0, 2);
      return (
        recent.map((e) => `${e.role} at ${e.org} (${e.period})`).join(" · ") +
        ". Ask about a specific company for more detail, or scroll down to the Experience section 👇"
      );
    },
  },
  {
    id: "projects",
    keywords: ["project", "built", "portfolio", "work on", "github repo", "shipped", "app"],
    respond: () => {
      const top = featuredProjects.slice(0, 3);
      return `A few favorites: ${top.map((p) => p.title).join(", ")}. He's shipped ${allProjects.length}+ projects total 🚀 — the Projects section has the full catalog with a search box.`;
    },
  },
  {
    id: "education",
    keywords: ["education", "university", "school", "degree", "gpa", "study", "college"],
    respond: () =>
      education.map((e) => `${e.degree} — ${e.school} (${e.period}${e.gpa ? `, GPA ${e.gpa}` : ""})`).join(" · "),
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "linkedin", "hire him", "get in touch", "phone"],
    respond: () =>
      `Best way to reach him is ${contact.email} 📬, or connect on LinkedIn / GitHub via the buttons up top. He actually replies, promise.`,
  },
  {
    id: "location",
    keywords: ["location", "based", "where is he", "relocate", "remote", "live"],
    respond: () => `He's based in ${contact.location} — Kent, Ohio. 📍`,
  },
  {
    id: "publications",
    keywords: ["publication", "research", "paper", "genome", "clinvar"],
    respond: () =>
      `He's got ${publications.length} research efforts in progress, mostly applied ML in healthcare and genomics — see the Publications section for the nerdy details 🧬`,
  },
  {
    id: "hire",
    keywords: ["why hire", "why should", "fit for", "strength", "good candidate", "perfect", "best fit"],
    respond: () =>
      "He pairs hands-on AI/ML research with real full-stack shipping experience — tested backend systems, production-style data pipelines, and apps that are actually live, not just coursework. Take a look at the Projects section and judge for yourself 😉",
  },
];

function matchChatTopic(text) {
  const q = text.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const topic of CHAT_TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (q.includes(kw)) score += kw.split(" ").length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  return bestScore > 0 ? best : null;
}

/* ============================================================
   PRIMITIVES
   ============================================================ */

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="sectionHead reveal">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {sub && <p className="sectionSub">{sub}</p>}
    </div>
  );
}

/** Floating "Ask about Prajwal" chat widget — local keyword matching, no backend or API key. */
function Chatbot() {
  const [open, setOpen] = useState(false);
  const [greetShown, setGreetShown] = useState(false);
  const [greetDismissed, setGreetDismissed] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Heyyy 👋 welcome! I'm Prajwal's cheeky little portfolio assistant. Ask me anything — his skills, projects, experience, the works. I promise I (mostly) behave 😏",
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setGreetShown(true), 2200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open, typing]);

  const send = (raw) => {
    const q = raw.trim();
    if (!q) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    const topic = matchChatTopic(q);
    const answer = topic
      ? topic.respond()
      : `Ooh, stumped me on that one 🤔 try asking about his skills, experience, projects, education, or contact info — or just email him at ${contact.email}, he answers those a lot faster than me.`;
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: answer }]);
    }, 500 + Math.random() * 400);
  };

  const quickReplies = ["Skills 🛠️", "Projects 🚀", "Experience 💼", "Education 🎓", "Contact 📬"];

  const openChat = () => {
    setOpen(true);
    setGreetDismissed(true);
  };

  return (
    <div className={`chatWidget ${open ? "open" : ""}`}>
      {!open && greetShown && !greetDismissed && (
        <div className="chatGreetBubble" onClick={openChat}>
          <button
            className="chatGreetClose"
            onClick={(e) => {
              e.stopPropagation();
              setGreetDismissed(true);
            }}
            aria-label="Dismiss greeting"
          >
            ✕
          </button>
          Psst… want the inside scoop on Prajwal? 👀 Ask me anything!
        </div>
      )}

      {open && (
        <div className="chatPanel">
          <div className="chatHead">
            <div>
              <b>👋 Ask about Prajwal</b>
              <span>Your friendly local assistant · runs entirely on his data</span>
            </div>
            <button className="chatClose" onClick={() => setOpen(false)} aria-label="Close chat">
              ✕
            </button>
          </div>

          <div className="chatList" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chatBubble ${m.from}`}>
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="chatBubble bot chatTyping">
                <span /><span /><span />
              </div>
            )}
          </div>

          <div className="chatQuick">
            {quickReplies.map((q) => (
              <button key={q} onClick={() => send(q.replace(/\s*[^\w\s]+$/u, ""))}>
                {q}
              </button>
            ))}
          </div>

          <form
            className="chatForm"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              aria-label="Ask a question about Prajwal"
            />
            <button type="submit" aria-label="Send">↑</button>
          </form>
        </div>
      )}

      <button
        className="chatToggle"
        onClick={() => {
          setOpen((v) => !v);
          setGreetDismissed(true);
        }}
        aria-label="Toggle chat with assistant"
      >
        <span className="chatToggleRing" aria-hidden="true" />
        <span className="chatToggleIcon">{open ? "✕" : "👋"}</span>
      </button>
    </div>
  );
}

/** Counts up from 0 to `to` once it scrolls into view. */
function Counter({ to, suffix = "", duration = 1200, decimals = 0 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(to * eased);
              if (p < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/** Adds a subtle tilt + cursor-spotlight to a card on mouse move. Pure DOM mutation, no re-render. */
function useTilt(strength = 8) {
  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * strength;
    const ry = (px - 0.5) * strength;
    el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };
  return { onMouseMove, onMouseLeave };
}

/** Small magnetic pull toward the cursor for buttons. */
function useMagnet(strength = 0.35) {
  const onMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left - r.width / 2) * strength;
    const my = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${mx}px, ${my}px)`;
  };
  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };
  return { onMouseMove, onMouseLeave };
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function PrajwalPortfolio() {
  const [query, setQuery] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("pd-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const progressRef = useRef(null);
  const heroRef = useRef(null);
  const tilt = useTilt(7);
  const magnet = useMagnet(0.3);

  useEffect(() => {
    try {
      localStorage.setItem("pd-theme", theme);
    } catch (e) {}
  }, [theme]);

  useEffect(() => {
    const t = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAllProjects]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrolled = h.scrollTop;
        const height = h.scrollHeight - h.clientHeight;
        const pct = height > 0 ? (scrolled / height) * 100 : 0;
        if (progressRef.current) progressRef.current.style.width = `${pct}%`;
        setNavScrolled(scrolled > 8);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHeroMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  const filteredProjects = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allProjects;
    return allProjects.filter(([title, desc, tech]) =>
      `${title} ${desc} ${tech}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="site" data-theme={theme}>
      <div className="progressBar"><span ref={progressRef} /></div>

      <header className={`nav ${navScrolled ? "scrolled" : ""}`}>
        <div className="navInner">
          <a className="navBrand" href="#top">Prajwal Devaraj</a>

          <button
            className="navToggle"
            onClick={() => setNavOpen((v) => !v)}
            aria-expanded={navOpen}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          <nav className={`navLinks ${navOpen ? "open" : ""}`}>
            {SHEETS.map((s) => (
              <a key={s.id} href={`#${s.id}`} onClick={() => setNavOpen(false)}>{s.label}</a>
            ))}
            <button
              className="themeToggle"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a className="navCta" href={`mailto:${contact.email}`} onClick={() => setNavOpen(false)} {...magnet}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="hero" ref={heroRef} onMouseMove={onHeroMove}>
          <span className="blob blobOne" aria-hidden="true" />
          <span className="blob blobTwo" aria-hidden="true" />
          <span className="blob blobThree" aria-hidden="true" />
          <span className="heroSpot" aria-hidden="true" />

          <div className={`heroInner ${loaded ? "loaded" : ""}`}>
            <p className="heroKicker" style={{ "--d": 0 }}>Software Engineer · AI/ML · Full-Stack</p>
            <h1 style={{ "--d": 1 }}>Hi, I'm <span className="gradText">Prajwal Devaraj</span>.</h1>
            <p className="heroLede" style={{ "--d": 2 }}>
              I build backend systems, AI models, and full-stack apps — I recently completed my
              M.S. in Computer Science at Kent State University, where I also researched medical AI
              and taught Operating Systems &amp; Databases. I like taking messy problems and turning
              them into something clean, tested, and shipped.
            </p>
            <div className="heroActions" style={{ "--d": 3 }}>
              <a className="btn btnPrimary" href={`mailto:${contact.email}`} {...magnet}>Email me</a>
              <a className="btn btnSecondary" href={contact.linkedin} target="_blank" rel="noreferrer" {...magnet}>LinkedIn</a>
              <a className="btn btnSecondary" href={contact.github} target="_blank" rel="noreferrer" {...magnet}>GitHub</a>
            </div>
            <div className="heroFacts" style={{ "--d": 4 }}>
              <div><span>Location</span><b>{contact.location}</b></div>
              <div><span>Degree</span><b>B.E., M.Sc. Computer Science</b></div>
              <div><span>Projects Shipped</span><b><Counter to={40} suffix="+" /></b></div>
            </div>
          </div>
        </section>

        <div className="wrap">
          {/* ---------- ABOUT ---------- */}
          <section id="about" className="section">
            <SectionHead eyebrow="About" title="A bit more about me" />
            <div className="aboutText reveal">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* ---------- EXPERIENCE ---------- */}
          <section id="experience" className="section">
            <SectionHead eyebrow="Experience" title="Where I've worked" />
            <div className="expList">
              {experience.map((job, i) => (
                <details className="expItem reveal" key={i} open={i < 3} style={{ "--d": i }}>
                  <summary>
                    <div className="expDot" aria-hidden="true" />
                    <div className="expMain">
                      <div className="expTop">
                        <h3>{job.role}</h3>
                        <span className="expPeriod">{job.period}</span>
                      </div>
                      <div className="expOrg">{job.org} · {job.location}</div>
                    </div>
                  </summary>
                  <ul>
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </section>

          {/* ---------- PROJECTS ---------- */}
          <section id="projects" className="section">
            <SectionHead
              eyebrow="Projects"
              title="Things I've built"
              sub="A handful of the projects I'm most proud of — full catalog of 30+ below."
            />
            <div className="projectGrid">
              {featuredProjects.map((proj, i) => (
                <a
                  className="projectCard reveal"
                  key={proj.title}
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ "--d": i % 4 }}
                  {...tilt}
                >
                  <div className="projectCardTop">
                    <span className="projectCat">{proj.category}</span>
                    <span className="projectArrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p className="projectImpact">{proj.impact}</p>
                  <ul className="projectPoints">
                    {proj.points.slice(0, 3).map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                  {proj.metrics && (
                    <div className="metricRow">
                      {proj.metrics.map((m) => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                  )}
                  <div className="projectTech">{proj.tech}</div>
                </a>
              ))}
            </div>

            <div className="catalog reveal">
              <button
                className="catalogToggle"
                onClick={() => setShowAllProjects((v) => !v)}
                aria-expanded={showAllProjects}
              >
                {showAllProjects ? "Hide full catalog ↑" : `See all ${allProjects.length} projects ↓`}
              </button>

              {showAllProjects && (
                <div className="catalogBody">
                  <input
                    type="text"
                    placeholder="Search by name, stack, or keyword…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <div className="catalogList">
                    {filteredProjects.map(([title, desc, tech]) => (
                      <div className="catalogRow" key={title}>
                        <div className="catalogName">{title}</div>
                        <div className="catalogDesc">{desc}</div>
                        <div className="catalogTech">{tech}</div>
                      </div>
                    ))}
                    {filteredProjects.length === 0 && (
                      <div className="catalogEmpty">No matches — try a different keyword.</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* ---------- SKILLS ---------- */}
          <section id="skills" className="section">
            <SectionHead eyebrow="Skills" title="What I work with" />
            <div className="skillGrid">
              {Object.entries(skills).map(([group, items], gi) => (
                <div className="skillGroup reveal" key={group} style={{ "--d": gi }}>
                  <div className="skillGroupLabel">{group}</div>
                  <div className="chipRow">
                    {items.map((s, si) => (
                      <span className="chip" key={s} style={{ "--d": si }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- EDUCATION ---------- */}
          <section id="education" className="section">
            <SectionHead eyebrow="Education" title="Academic background" />
            <div className="eduGrid">
              {education.map((item, i) => (
                <div className="eduCard reveal" key={item.school} style={{ "--d": i }} {...tilt}>
                  <div className="eduCardTop">
                    <a href={item.website} target="_blank" rel="noreferrer" className="eduSchool">
                      {item.school}
                    </a>
                    <span className="eduPeriod">{item.period}</span>
                  </div>
                  <div className="eduDegree">{item.degree}</div>
                  <div className="eduLocation">{item.location}{item.gpa ? ` · GPA ${item.gpa}` : ""}</div>
                  <p className="eduDetails">{item.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- PUBLICATIONS ---------- */}
          <section id="publications" className="section">
            <SectionHead eyebrow="Publications" title="Research in progress" />
            <div className="pubList">
              {publications.map((pub, i) => (
                <div className="pubCard reveal" key={pub.title} style={{ "--d": i }}>
                  <div className="pubTop">
                    <h3>{pub.title}</h3>
                    <span className="pubStatus">{pub.status}</span>
                  </div>
                  <div className="pubMeta">{pub.venue} · {pub.period}</div>
                  <div className="pubAuthors">{pub.authors}</div>
                  <p>{pub.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- COURSES ---------- */}
          <section id="courses" className="section">
            <SectionHead eyebrow="Training" title="Courses & certifications" />
            <div className="courseGrid">
              {courses.map((c, i) => (
                <div className="courseCard reveal" key={c.role + c.org} style={{ "--d": i % 4 }}>
                  <div className="courseTop">
                    <b>{c.role}</b>
                    <span>{c.period}</span>
                  </div>
                  <div className="courseOrg">{c.org}</div>
                  <ul>
                    {c.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ---------- ACTIVITIES ---------- */}
          <section id="activities" className="section">
            <SectionHead eyebrow="Activities" title="Beyond the job description" />
            <div className="activityGrid">
              {activities.map((group, i) => (
                <div className="activityCard reveal" key={group.group} style={{ "--d": i }}>
                  <div className="activityLabel">{group.group}</div>
                  <ul>
                    {group.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="footerInner">
            <div>
              <div className="footerName">Prajwal Devaraj</div>
              <div className="footerTag">Kent, Ohio · Open to Software Engineering & AI/ML roles</div>
            </div>
            <div className="footerLinks">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </main>

      <Chatbot />

      <style>{`
        :root {
          --bg: #ffffff;
          --bg-soft: #f6f7fb;
          --card: #ffffff;
          --border: #e6e8ef;
          --text: #14161f;
          --text-soft: #565b6b;
          --text-faint: #8f93a3;
          --accent: #4f46e5;
          --accent-dark: #4338ca;
          --accent-soft: #eef1ff;
          --accent-glow: rgba(79,70,229,0.22);
          --violet: #9333ea;
          --pink: #ec4899;
          --brand-gradient: linear-gradient(120deg, var(--accent), var(--violet) 55%, var(--pink));
          --nav-bg: rgba(255,255,255,0.86);
          --nav-bg-scrolled: rgba(255,255,255,0.96);
          --radius: 14px;
        }

        .site[data-theme="dark"] {
          --bg: #0f1117;
          --bg-soft: #161922;
          --card: #1a1e29;
          --border: #2b3040;
          --text: #f1f2f6;
          --text-soft: #b8bccb;
          --text-faint: #82879b;
          --accent: #818cf8;
          --accent-dark: #a5b4fc;
          --accent-soft: rgba(129,140,248,0.16);
          --accent-glow: rgba(129,140,248,0.3);
          --nav-bg: rgba(15,17,23,0.86);
          --nav-bg-scrolled: rgba(15,17,23,0.96);
        }
        .site { transition: background-color .3s ease, color .3s ease; }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .site {
          background: var(--bg);
          color: var(--text);
          font-family: "Inter", "Segoe UI", sans-serif;
          min-height: 100vh;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        h1, h2, h3 { font-family: "Inter Tight", "Inter", sans-serif; letter-spacing: -0.02em; }
        a { color: var(--accent); text-decoration: none; }

        /* ---------- Progress bar ---------- */
        .progressBar { position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 65; background: transparent; }
        .progressBar span {
          display: block; height: 100%; width: 0%;
          background: var(--brand-gradient); background-size: 200% 100%;
          animation: gradientShift 4s linear infinite;
          transition: width 0.1s linear;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* ---------- Nav ---------- */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          background: var(--nav-bg); backdrop-filter: blur(10px);
          border-bottom: 1px solid transparent;
          transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
        }
        .nav.scrolled { border-color: var(--border); box-shadow: 0 4px 24px rgba(20,22,31,0.08); background: var(--nav-bg-scrolled); }
        #top { padding-top: 66px; }
        .navInner {
          max-width: 1120px; margin: 0 auto; padding: 16px 24px;
          display: flex; align-items: center; justify-content: space-between; gap: 20px;
        }
        .navBrand { font-weight: 700; font-size: 15px; color: var(--text); transition: color .2s; }
        .navBrand:hover { color: var(--accent); }
        .navToggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 6px; }
        .navToggle span { width: 20px; height: 2px; background: var(--text); display: block; border-radius: 2px; }
        .navLinks { display: flex; align-items: center; gap: 22px; }
        .navLinks a:not(.navCta) {
          font-size: 14px; color: var(--text-soft); font-weight: 500; position: relative; padding-bottom: 3px;
        }
        .navLinks a:not(.navCta)::after {
          content: ""; position: absolute; left: 0; right: 100%; bottom: 0; height: 2px;
          background: var(--brand-gradient); border-radius: 2px; transition: right .22s ease;
        }
        .navLinks a:not(.navCta):hover { color: var(--text); }
        .navLinks a:not(.navCta):hover::after { right: 0; }
        .themeToggle {
          width: 34px; height: 34px; border-radius: 50%; border: 1px solid var(--border);
          background: var(--bg-soft); cursor: pointer; font-size: 15px; display: flex;
          align-items: center; justify-content: center; transition: border-color .2s, transform .2s;
        }
        .themeToggle:hover { border-color: var(--accent); transform: rotate(15deg); }
        .navCta {
          background: var(--brand-gradient); background-size: 200% 100%; color: #fff !important;
          padding: 8px 16px; border-radius: 999px;
          font-weight: 600; font-size: 13.5px; display: inline-block;
          transition: background-position .35s ease, box-shadow .2s, transform .15s;
        }
        .navCta:hover { background-position: 100% 0; box-shadow: 0 6px 18px var(--accent-glow); transform: translateY(-1px); }

        /* ---------- Hero ---------- */
        .hero {
          position: relative; overflow: hidden; background: var(--bg-soft);
          border-bottom: 1px solid var(--border); isolation: isolate;
        }
        .heroSpot {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background: radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), var(--accent-glow), transparent 60%);
          opacity: 0.7; transition: opacity .3s ease;
        }
        .blob {
          position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; opacity: 0.55;
        }
        .blobOne {
          width: 480px; height: 480px; top: -180px; right: -140px;
          background: radial-gradient(circle, var(--violet), transparent 70%);
          animation: drift1 14s ease-in-out infinite;
        }
        .blobTwo {
          width: 380px; height: 380px; bottom: -160px; left: -110px;
          background: radial-gradient(circle, var(--accent), transparent 70%);
          animation: drift2 18s ease-in-out infinite;
        }
        .blobThree {
          width: 300px; height: 300px; top: 40%; left: 55%;
          background: radial-gradient(circle, var(--pink), transparent 70%);
          animation: drift3 22s ease-in-out infinite; opacity: 0.35;
        }
        @keyframes drift1 {
          0%, 100% { transform: translate(0,0) scale(1) rotate(0deg); }
          50% { transform: translate(-40px, 40px) scale(1.15) rotate(12deg); }
        }
        @keyframes drift2 {
          0%, 100% { transform: translate(0,0) scale(1) rotate(0deg); }
          50% { transform: translate(34px, -34px) scale(1.18) rotate(-10deg); }
        }
        @keyframes drift3 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px, -30px) scale(1.25); }
        }

        .heroInner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; padding: 96px 24px 72px; }
        .heroInner > * {
          opacity: 0; transform: translateY(18px);
          transition: opacity .6s ease, transform .6s ease;
          transition-delay: calc(var(--d, 0) * 100ms);
        }
        .heroInner.loaded > * { opacity: 1; transform: none; }

        .heroKicker { font-size: 13.5px; font-weight: 600; color: var(--accent); text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 16px; }
        .hero h1 { font-size: clamp(2.2rem, 5vw, 3.6rem); font-weight: 700; margin: 0 0 20px; }
        .gradText {
          background: var(--brand-gradient); background-size: 200% auto;
          -webkit-background-clip: text; background-clip: text; color: transparent;
          animation: gradientShift 6s linear infinite;
        }
        .heroLede { font-size: 18px; color: var(--text-soft); margin: 0 0 32px; max-width: 62ch; }
        .heroActions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
        .btn {
          font-weight: 600; font-size: 14.5px; padding: 12px 22px; border-radius: 999px;
          border: 1px solid transparent; display: inline-block; transition: background .2s, background-position .35s ease, color .2s, border-color .2s, box-shadow .2s, transform .15s ease-out;
        }
        .btnPrimary { background: var(--brand-gradient); background-size: 200% 100%; color: #fff; }
        .btnPrimary:hover { background-position: 100% 0; box-shadow: 0 12px 28px var(--accent-glow); transform: translateY(-2px); }
        .btnSecondary { background: var(--card); border-color: var(--border); color: var(--text); }
        .btnSecondary:hover { border-color: var(--accent); color: var(--accent); box-shadow: 0 8px 20px rgba(20,22,31,0.06); transform: translateY(-2px); }
        .heroFacts { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; border-top: 1px solid var(--border); padding-top: 28px; }
        .heroFacts div { display: flex; flex-direction: column; gap: 4px; }
        .heroFacts span { font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-faint); font-weight: 600; }
        .heroFacts b { font-size: 14.5px; font-weight: 600; color: var(--text); font-variant-numeric: tabular-nums; }

        /* ---------- Layout ---------- */
        .wrap { max-width: 1120px; margin: 0 auto; padding: 0 24px; }

        .reveal { opacity: 0; transform: translateY(16px); transition: opacity .55s ease, transform .55s ease; transition-delay: calc(var(--d, 0) * 70ms); }
        .reveal.show { opacity: 1; transform: none; }

        .section { padding: 72px 0; border-bottom: 1px solid var(--border); }
        .section:last-of-type { border-bottom: none; }
        .sectionHead { max-width: 640px; margin-bottom: 40px; }
        .eyebrow { font-size: 12.5px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
        .section h2 { font-size: clamp(1.6rem, 3vw, 2.1rem); font-weight: 700; margin: 0 0 6px; }
        .sectionSub { color: var(--text-soft); font-size: 15.5px; margin: 0; }

        /* ---------- About ---------- */
        .aboutText { max-width: 72ch; display: grid; gap: 16px; font-size: 16.5px; color: var(--text-soft); }
        .aboutText p:first-child { font-size: 18px; color: var(--text); }

        /* ---------- Experience ---------- */
        .expList { display: grid; gap: 2px; }
        .expItem {
          border: 1px solid var(--border); border-radius: var(--radius); padding: 20px 22px;
          margin-bottom: 12px; background: var(--card); transition: border-color .2s ease, box-shadow .2s ease;
        }
        .expItem:hover { border-color: var(--accent); box-shadow: 0 8px 22px rgba(20,22,31,0.05); }
        .expItem summary { list-style: none; cursor: pointer; display: flex; align-items: flex-start; gap: 14px; }
        .expItem summary::-webkit-details-marker { display: none; }
        .expDot { width: 9px; height: 9px; border-radius: 50%; background: var(--accent); margin-top: 8px; flex-shrink: 0; position: relative; }
        .expDot::after {
          content: ""; position: absolute; inset: -5px; border-radius: 50%; border: 1.5px solid var(--accent);
          opacity: 0; animation: pulseRing 2.6s ease-out infinite;
        }
        @keyframes pulseRing {
          0% { transform: scale(0.6); opacity: 0.5; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { opacity: 0; }
        }
        .expMain { flex: 1; min-width: 0; }
        .expTop { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; flex-wrap: wrap; }
        .expTop h3 { font-size: 17.5px; font-weight: 700; margin: 0; }
        .expPeriod { font-size: 12.5px; color: var(--text-faint); font-weight: 500; white-space: nowrap; }
        .expOrg { font-size: 13.5px; color: var(--text-soft); margin-top: 2px; }
        .expItem ul { margin: 16px 0 0 23px; padding: 0; color: var(--text-soft); font-size: 14.5px; display: grid; gap: 8px; }
        .expItem[open] summary .expDot { box-shadow: 0 0 0 4px var(--accent-soft); }

        /* ---------- Projects ---------- */
        .projectGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 28px; }
        .projectCard {
          position: relative; display: block; border: 1px solid var(--border); border-radius: var(--radius);
          padding: 24px; background: var(--card); overflow: hidden;
          transition: border-color .2s ease, box-shadow .25s ease, transform .12s ease-out;
          transform-style: preserve-3d; will-change: transform;
        }
        .projectCard::after {
          content: ""; position: absolute; inset: -1px; border-radius: inherit; padding: 1.5px;
          background: var(--brand-gradient); opacity: 0; pointer-events: none;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          transition: opacity .25s ease;
        }
        .projectCard:hover::after { opacity: 1; }
        .projectCard::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), var(--accent-glow), transparent 65%);
          transition: opacity .25s ease;
        }
        .projectCard:hover { border-color: transparent; box-shadow: 0 20px 44px rgba(147,51,234,0.16); }
        .projectCard:hover::before { opacity: 1; }
        .projectCardTop { position: relative; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .projectCat { font-size: 11.5px; font-weight: 700; color: var(--accent); text-transform: uppercase; letter-spacing: 0.04em; }
        .projectArrow { color: var(--text-faint); font-size: 16px; transition: transform .2s ease, color .2s ease; display: inline-block; }
        .projectCard:hover .projectArrow { transform: translate(3px, -3px); color: var(--accent); }
        .projectCard h3 { position: relative; font-size: 19px; margin: 0 0 6px; font-weight: 700; }
        .projectImpact { position: relative; color: var(--text-soft); font-size: 13.5px; margin: 0 0 12px; }
        .projectPoints { position: relative; margin: 0 0 14px; padding-left: 18px; font-size: 13.5px; color: var(--text-soft); display: grid; gap: 5px; }
        .metricRow { position: relative; display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }
        .metricRow span { font-size: 11px; font-weight: 600; background: var(--accent-soft); color: var(--accent-dark); border-radius: 999px; padding: 4px 10px; transition: transform .15s ease; }
        .projectCard:hover .metricRow span { transform: translateY(-1px); }
        .projectTech { position: relative; font-size: 12px; color: var(--text-faint); }

        .catalog { border-top: 1px solid var(--border); padding-top: 24px; }
        .catalogToggle {
          font-family: inherit; font-weight: 600; font-size: 14px; color: var(--accent);
          background: var(--accent-soft); border: none; border-radius: 999px; padding: 10px 20px; cursor: pointer;
          transition: background .2s ease, transform .15s ease;
        }
        .catalogToggle:hover { background: #e2e5ff; transform: translateY(-1px); }
        .catalogBody { margin-top: 22px; animation: fadeIn .35s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        .catalogBody input {
          width: 100%; max-width: 380px; font-family: inherit; font-size: 14px; padding: 11px 16px;
          border: 1px solid var(--border); border-radius: 10px; background: var(--bg-soft);
          color: var(--text); outline: none; margin-bottom: 16px; transition: border-color .2s;
        }
        .catalogBody input:focus { border-color: var(--accent); }
        .catalogList { display: grid; gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
        .catalogRow {
          background: var(--card); display: grid; grid-template-columns: 1.2fr 2fr 1fr; gap: 16px;
          padding: 13px 16px; font-size: 13.5px; align-items: baseline; transition: background .15s ease;
        }
        .catalogRow:hover { background: var(--bg-soft); }
        .catalogName { font-weight: 600; }
        .catalogDesc { color: var(--text-soft); }
        .catalogTech { color: var(--text-faint); font-size: 12px; }
        .catalogEmpty { background: var(--card); padding: 24px; text-align: center; color: var(--text-faint); font-size: 13.5px; }

        /* ---------- Skills ---------- */
        .skillGrid { display: grid; gap: 22px; }
        .skillGroupLabel { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 10px; }
        .chipRow { display: flex; flex-wrap: wrap; gap: 8px; }
        .chip {
          font-size: 13px; background: var(--bg-soft); border: 1px solid var(--border); border-radius: 999px;
          padding: 6px 14px; color: var(--text-soft); font-weight: 500;
          transition: transform .15s ease, background .15s ease, color .15s ease, border-color .15s ease;
        }
        .chip:hover { transform: translateY(-2px) scale(1.04); background: var(--accent-soft); color: var(--accent-dark); border-color: var(--accent); }

        /* ---------- Education ---------- */
        .eduGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .eduCard {
          border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; background: var(--card);
          position: relative; overflow: hidden; transition: border-color .2s ease, box-shadow .25s ease, transform .12s ease-out;
        }
        .eduCard::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: 0;
          background: radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), var(--accent-glow), transparent 65%);
          transition: opacity .25s ease;
        }
        .eduCard:hover { border-color: var(--accent); box-shadow: 0 14px 34px rgba(79,70,229,0.12); }
        .eduCard:hover::before { opacity: 1; }
        .eduCardTop { position: relative; display: flex; justify-content: space-between; align-items: baseline; gap: 10px; margin-bottom: 4px; flex-wrap: wrap; }
        .eduSchool { font-weight: 700; font-size: 17px; color: var(--text); }
        .eduSchool:hover { color: var(--accent); }
        .eduPeriod { font-size: 12px; color: var(--text-faint); }
        .eduDegree { position: relative; font-weight: 600; color: var(--accent-dark); margin-bottom: 4px; font-size: 14.5px; }
        .eduLocation { position: relative; font-size: 13px; color: var(--text-faint); margin-bottom: 12px; }
        .eduDetails { position: relative; font-size: 14px; color: var(--text-soft); margin: 0; }

        /* ---------- Publications ---------- */
        .pubList { display: grid; gap: 14px; }
        .pubCard { border: 1px solid var(--border); border-radius: var(--radius); padding: 22px; background: var(--card); transition: border-color .2s, box-shadow .2s; }
        .pubCard:hover { border-color: var(--accent); box-shadow: 0 10px 26px rgba(20,22,31,0.05); }
        .pubTop { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; flex-wrap: wrap; margin-bottom: 6px; }
        .pubCard h3 { margin: 0; font-size: 16.5px; font-weight: 700; }
        .pubStatus { font-size: 11px; font-weight: 700; background: var(--accent-soft); color: var(--accent-dark); border-radius: 999px; padding: 4px 10px; white-space: nowrap; }
        .pubMeta { font-size: 12.5px; color: var(--text-faint); margin-bottom: 4px; }
        .pubAuthors { font-size: 12.5px; color: var(--text-soft); font-style: italic; margin-bottom: 10px; }
        .pubCard p { margin: 0; font-size: 14px; color: var(--text-soft); }

        /* ---------- Courses ---------- */
        .courseGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .courseCard { border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; background: var(--card); transition: border-color .2s, box-shadow .2s; }
        .courseCard:hover { border-color: var(--accent); box-shadow: 0 10px 24px rgba(20,22,31,0.05); }
        .courseTop { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
        .courseTop b { font-size: 15px; font-weight: 700; }
        .courseTop span { font-size: 11.5px; color: var(--text-faint); white-space: nowrap; }
        .courseOrg { font-size: 12.5px; color: var(--accent-dark); margin-bottom: 10px; font-weight: 500; }
        .courseCard ul { margin: 0; padding-left: 18px; font-size: 13.5px; color: var(--text-soft); display: grid; gap: 6px; }

        /* ---------- Activities ---------- */
        .activityGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .activityCard { border: 1px solid var(--border); border-radius: var(--radius); padding: 20px; background: var(--card); transition: border-color .2s, box-shadow .2s; }
        .activityCard:hover { border-color: var(--accent); box-shadow: 0 10px 24px rgba(20,22,31,0.05); }
        .activityLabel { font-size: 12.5px; font-weight: 700; color: var(--accent); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.03em; }
        .activityCard ul { margin: 0; padding-left: 18px; font-size: 13.5px; color: var(--text-soft); display: grid; gap: 6px; }

        /* ---------- Footer ---------- */
        .footer { background: var(--bg-soft); border-top: 1px solid var(--border); }
        .footerInner {
          max-width: 1120px; margin: 0 auto; padding: 40px 24px;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
        }
        .footerName { font-weight: 700; font-size: 16px; }
        .footerTag { font-size: 13px; color: var(--text-soft); margin-top: 2px; }
        .footerLinks { display: flex; gap: 18px; font-size: 13.5px; font-weight: 500; }
        .footerLinks a { transition: color .2s; }
        .footerLinks a:hover { color: var(--accent-dark); }

        /* ---------- Chat widget ---------- */
        .chatWidget { position: fixed; right: 22px; bottom: 22px; z-index: 70; display: flex; flex-direction: column; align-items: flex-end; gap: 12px; }
        .chatToggle {
          position: relative; width: 60px; height: 60px; border-radius: 50%; border: none; cursor: pointer;
          background: var(--brand-gradient); background-size: 200% 200%; color: #fff; font-size: 24px; line-height: 1;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 12px 32px var(--accent-glow); transition: transform .15s ease, background-position .3s ease;
          animation: chatFloat 3.4s ease-in-out infinite;
        }
        .chatToggle:hover { transform: translateY(-3px) scale(1.06); background-position: 100% 100%; }
        .chatToggleRing {
          position: absolute; inset: -6px; border-radius: 50%; border: 2px solid var(--violet);
          opacity: 0; animation: chatRing 2.6s ease-out infinite;
        }
        .chatToggleIcon { display: inline-block; transform-origin: 70% 70%; animation: wave 2.4s ease-in-out infinite; }
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(18deg); }
          20% { transform: rotate(-12deg); }
          30% { transform: rotate(18deg); }
          40% { transform: rotate(-8deg); }
          50% { transform: rotate(0deg); }
        }
        @keyframes chatFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes chatRing {
          0% { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        .chatGreetBubble {
          position: relative; max-width: 230px; background: var(--card); border: 1px solid var(--border);
          border-radius: 14px 14px 4px 14px; padding: 12px 30px 12px 14px; font-size: 13px; color: var(--text);
          box-shadow: 0 12px 30px rgba(20,22,31,0.14); cursor: pointer; animation: chatIn .3s ease;
        }
        .chatGreetClose {
          position: absolute; top: 6px; right: 6px; background: none; border: none; cursor: pointer;
          font-size: 10px; color: var(--text-faint); padding: 4px;
        }
        .chatGreetClose:hover { color: var(--text); }
        .chatPanel {
          width: min(340px, 88vw); max-height: min(480px, 70vh); display: flex; flex-direction: column;
          background: var(--card); border: 1px solid var(--border); border-radius: 16px;
          box-shadow: 0 24px 60px rgba(20,22,31,0.18); overflow: hidden; animation: chatIn .22s ease;
        }
        @keyframes chatIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
        .chatHead {
          display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;
          padding: 14px 16px; background: var(--brand-gradient); color: #fff; border-bottom: 1px solid var(--border);
        }
        .chatHead b { font-size: 14px; display: block; }
        .chatHead span { font-size: 11px; color: rgba(255,255,255,0.85); }
        .chatClose { background: none; border: none; cursor: pointer; font-size: 13px; color: rgba(255,255,255,0.85); padding: 2px 4px; }
        .chatClose:hover { color: #fff; }
        .chatList { flex: 1; overflow-y: auto; padding: 14px 16px; display: flex; flex-direction: column; gap: 10px; }
        .chatBubble { max-width: 88%; padding: 9px 13px; border-radius: 12px; font-size: 13.5px; line-height: 1.5; animation: chatIn .2s ease; }
        .chatBubble.bot { align-self: flex-start; background: var(--bg-soft); color: var(--text); border-bottom-left-radius: 3px; }
        .chatBubble.user { align-self: flex-end; background: var(--accent); color: #fff; border-bottom-right-radius: 3px; }
        .chatTyping { display: flex; gap: 4px; align-items: center; padding: 12px 14px; }
        .chatTyping span { width: 6px; height: 6px; border-radius: 50%; background: var(--text-faint); animation: chatDot 1.2s ease-in-out infinite; }
        .chatTyping span:nth-child(2) { animation-delay: .15s; }
        .chatTyping span:nth-child(3) { animation-delay: .3s; }
        @keyframes chatDot { 0%, 60%, 100% { opacity: .3; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-3px); } }
        .chatQuick { display: flex; flex-wrap: wrap; gap: 6px; padding: 0 16px 10px; }
        .chatQuick button {
          font-size: 11.5px; font-weight: 600; padding: 6px 11px; border-radius: 999px;
          border: 1px solid var(--border); background: var(--bg-soft); color: var(--text-soft); cursor: pointer;
          transition: border-color .15s, color .15s, transform .15s;
        }
        .chatQuick button:hover { border-color: var(--accent); color: var(--accent-dark); transform: translateY(-1px); }
        .chatForm { display: flex; gap: 8px; padding: 12px; border-top: 1px solid var(--border); }
        .chatForm input {
          flex: 1; font-family: inherit; font-size: 13.5px; padding: 9px 12px;
          border: 1px solid var(--border); border-radius: 10px; background: var(--bg-soft); color: var(--text); outline: none;
        }
        .chatForm input:focus { border-color: var(--accent); }
        .chatForm button {
          width: 36px; height: 36px; border-radius: 10px; border: none; background: var(--brand-gradient);
          color: #fff; font-size: 15px; cursor: pointer; flex-shrink: 0; transition: transform .15s;
        }
        .chatForm button:hover { transform: scale(1.06); }

        /* ---------- Responsive ---------- */
        @media (max-width: 900px) {
          .heroFacts, .eduGrid, .projectGrid, .courseGrid, .activityGrid { grid-template-columns: 1fr 1fr; }
          .heroFacts { grid-template-columns: repeat(2, 1fr); }
          .catalogRow { grid-template-columns: 1fr; gap: 4px; }
        }

        @media (max-width: 760px) {
          .navToggle { display: flex; }
          .navLinks {
            display: none; position: absolute; top: 100%; left: 0; right: 0;
            background: var(--card); border-bottom: 1px solid var(--border);
            flex-direction: column; align-items: flex-start; padding: 12px 20px 20px; gap: 14px;
          }
          .navLinks.open { display: flex; }
          .heroInner { padding: 56px 20px 48px; }
          .heroFacts { grid-template-columns: 1fr 1fr; }
          .eduGrid, .projectGrid, .courseGrid, .activityGrid { grid-template-columns: 1fr; }
          .projectCard, .eduCard { transform: none !important; }
          .chatWidget { right: 14px; bottom: 14px; }
          .chatPanel { width: min(320px, 90vw); }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .heroInner > * { opacity: 1; transform: none; transition: none; }
          .blob, .expDot::after { animation: none; }
          html { scroll-behavior: auto; }
        }
      `}</style>
    </div>
  );
}
