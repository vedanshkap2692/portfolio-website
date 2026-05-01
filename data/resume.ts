export const personalInfo = {
  name: "Vedansh Kapoor",
  title: "AI Engineer | Data Scientist",
  github: "https://github.com/vedanshkap2692",
  githubUsername: "vedanshkap2692",
  linkedin: "https://www.linkedin.com/in/vedansh-kapoor/",
  email: "vedanshkapoor123@gmail.com",
  location: "India",
  bio: "From the halls of IIT Bhilai to the forges of industry, a data samurai was forged — mastering the art of machine learning, wielding large language models, and crafting intelligent systems that bridge the gap between raw data and actionable insight.",
};

export const education = [
  {
    institution: "IIT Bhilai",
    degree: "B.Tech",
    year: "2022 – 2026",
    description: "Indian Institute of Technology Bhilai",
  },
];

export const experiences = [
  {
    company: "Farmart",
    role: "AI/ML Engineer",
    period: "2025 – 2026",
    lor: false,
    description:
      "Designed and deployed an AI Agent integrated into FarMart AI for end-to-end lead generation automation, scraping WhatsApp buyer messages, extracting structured data via DSPy LLM prompting, and creating leads directly in the FarMart OS app.",
    tech: ["Python", "DSPy", "LangGraph", "LLM", "Gemini", "RAG", "WhatsApp API"],
    highlights: [
      "Designed and deployed an AI Agent for end-to-end lead generation automation — scraped WhatsApp buyer messages, extracted structured data via DSPy LLM prompting, and created leads in FarMart OS app.",
      "Fine-tuned Gemini-flash with DSPy-based post-training and algorithmic prompt engineering, reducing prompt failures by 75%.",
      "Achieved 87% accuracy in unstructured message parsing; implemented a fallback retrieval system leveraging historical trade data to recover missing fields, ensuring robust lead creation.",
    ],
  },
  {
    company: "Tech Mahindra",
    role: "AI/Data Engineer",
    period: "2025",
    lor: false,
    description:
      "Developed a Banking Document Error Detection RAG System automating compliance analysis for KYC, AML, and Fraud Detection documents, achieving 85% detection accuracy.",
    tech: ["Python", "FastAPI", "LangChain", "FAISS", "Groq API", "LangGraph", "NLP"],
    highlights: [
      "Developed a Banking Document Error Detection RAG System automating compliance analysis for KYC, AML, and Fraud Detection documents — 85% detection accuracy.",
      "Built modular architecture using FastAPI, LangChain, FAISS, and Groq API to process PDFs and generate compliance reports.",
      "Reduced manual review time by 70%.",
      "Implemented robust error handling and built a full end-to-end testing pipeline.",
      "Integrated LangGraph workflows and scalable vector storage.",
    ],
  },
  {
    company: "Matrice AI",
    role: "ML Engineer",
    period: "2025",
    lor: true,
    lorText: "Letter of Recommendation from Matrice AI — commending contributions to vision algorithms, model performance improvements, and engineering discipline.",
    description:
      "Developed vision algorithms for 20+ real-world use cases including object detection, segmentation, and fine-grained classification, improving model performance by 22% for visually similar items.",
    tech: ["Python", "PyTorch", "YOLO", "OpenCV", "Kafka", "Go", "Computer Vision"],
    highlights: [
      "Developed vision algorithms for 20+ real-world use cases including object detection, segmentation, and fine-grained classification — improving model performance by 22%.",
      "Engineered high-throughput video pipelines using OS-level threading and OpenCV, reducing inference latency by 50%.",
      "Integrated models into an AI platform for real-time authentication and item tracking; collaborated on deployment using Kafka, Go, and edge-compatible VMS plugins — tripling processing throughput.",
      "Proposed and implemented a novel bounding box merging algorithm to resolve overlaps in luminous object detections.",
      "Contributed to model interpretability and feedback tooling for visual fingerprinting and instance-level recognition.",
      "Documented APIs, pipeline behaviors, and model benchmarks; participated in cross-functional code reviews.",
    ],
  },
  {
    company: "IIT Bombay Research",
    role: "Research Intern",
    period: "2024",
    lor: false,
    description:
      "Designed an object detection model for autonomous UAV landing, improving detection accuracy by 30% and accelerating the inference pipeline by 40% using parallel processing.",
    tech: ["Python", "CNNs", "YOLOv8-tiny", "OpenCV", "GPU Acceleration", "Quantization"],
    highlights: [
      "Designed an object detection model for autonomous UAV landing, improving detection accuracy by 30%.",
      "Accelerated inference pipeline by 40% using parallel processing.",
      "Led architecture compression improving UAV speed by 20%.",
      "Technologies: CNNs, YOLOv8-tiny, OpenCV, GPU acceleration, Quantization.",
    ],
  },
];

export const skills = {
  languages: ["Python", "SQL", "C++", "JavaScript", "TypeScript"],
  mlai: [
    "PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace",
    "LangChain", "LlamaIndex", "CrewAI", "LangGraph",
    "XGBoost", "LightGBM", "Reinforcement Learning", "DSPy",
  ],
  mlops: ["MLflow", "Docker", "Kubernetes", "AWS SageMaker", "Airflow", "FastAPI"],
  data: ["Spark", "Kafka", "PostgreSQL", "MongoDB", "Redis", "FAISS"],
  tools: ["Git", "Linux", "Jupyter", "VS Code", "Tableau", "Next.js"],
};

export const projects = [
  {
    title: "GEOSTOCKS",
    subtitle: "Geopolitical Market Intelligence System",
    description:
      "Predicts sector-level stock movements using GDELT events, news sentiment, and macroeconomic indicators. Features ensemble ML models (XGBoost + LightGBM), LLM-powered daily briefings via OpenRouter, an individual stock ranker, and a Next.js 14 dashboard with a Tavily-powered chatbot.",
    tech: ["Python", "XGBoost", "LightGBM", "LLM", "Next.js", "GDELT", "OpenRouter", "Tavily"],
    github: "https://github.com/vedanshkap2692/GEOSTOCKS",
    language: "Jupyter Notebook",
  },
  {
    title: "Container Yard Optimizer",
    subtitle: "DP World Logistics Optimization",
    description:
      "Oracle RI-Zero strategy with 3-Pass Pre-Simulation for container yard placement. Scored 35.3/40 — 73–78% reshuffle reduction vs greedy baseline. 42/42 tests passing, zero constraint violations. Built for DP World hiring assignment.",
    tech: ["Python", "Optimization", "Algorithms", "NumPy", "Simulation"],
    github: "https://github.com/vedanshkap2692/hiring_assignment_candidate_v2",
    language: "Python",
  },
  {
    title: "LLM Legal Assistant",
    subtitle: "RAG Chatbot for Legal Documents",
    description:
      "RAG-based chatbot pipeline where users upload legal PDFs and ask complex reasoning questions. Built with LangChain and FAISS vector store for efficient document retrieval and multi-hop reasoning.",
    tech: ["Python", "LangChain", "FAISS", "RAG", "LLM"],
    github: "https://github.com/vedanshkap2692/legal-chat-bot-RAG-LLM",
    language: "Python",
  },
  {
    title: "Blog Planner Agent",
    subtitle: "AI-Powered Technical Blog Creator",
    description:
      "Multi-agent AI system that plans and creates technical blogs — complete with images and real-time web research. Uses CrewAI for multi-agent orchestration with research, writing, and editing agents.",
    tech: ["Python", "CrewAI", "LLM", "Web Research", "Multi-Agent"],
    github: "https://github.com/vedanshkap2692/Blog-Planner-Agent",
    language: "Python",
  },
  {
    title: "Amazon ML Challenge",
    subtitle: "Top 0.5% — Rank 265 / 75,000",
    description:
      "Competition solution for the Amazon ML Challenge achieving top 0.5% ranking among 75,000 participants. Advanced feature engineering and ensemble modeling on product attribute extraction.",
    tech: ["Python", "ML", "NLP", "Feature Engineering", "Ensemble"],
    github: "https://github.com/vedanshkap2692/amazon_ml",
    language: "Python",
  },
  {
    title: "Atlan Customer Copilot",
    subtitle: "AI Copilot for Customer Support",
    description:
      "Intelligent AI copilot for the Atlan data catalog platform. Assists customer support with contextual query resolution, documentation search, and automated response generation.",
    tech: ["Python", "LLM", "RAG", "NLP", "Vector Search"],
    github: "https://github.com/vedanshkap2692/Atlan_customer_copilot",
    language: "Python",
  },
  {
    title: "Banking RAG System",
    subtitle: "Banking Domain Compliance Q&A",
    description:
      "RAG pipeline specialized for banking domain compliance Q&A — KYC, AML, and fraud detection document analysis with contextual response generation and audit trail.",
    tech: ["Python", "RAG", "LLM", "LangChain", "FAISS", "Compliance"],
    github: "https://github.com/vedanshkap2692/Banking_Rag",
    language: "Python",
  },
  {
    title: "Skill Swap Platform",
    subtitle: "Odoo Skill Exchange Marketplace",
    description:
      "A peer-to-peer skill exchange marketplace built on the Odoo platform. Users can list skills to teach and learn, match with partners, and schedule sessions.",
    tech: ["Python", "Odoo", "Web Development", "PostgreSQL"],
    github: "https://github.com/vedanshkap2692/odoo_skill_swap",
    language: "Python",
  },
  {
    title: "Webcam Agent",
    subtitle: "Vision-Based Real-Time AI Agent",
    description:
      "Real-time AI agent that processes webcam feed for visual scene understanding, object identification, and interactive agentic responses using vision-language models.",
    tech: ["Python", "Computer Vision", "AI Agent", "OpenCV", "VLM"],
    github: "https://github.com/vedanshkap2692/webcam_agent",
    language: "Python",
  },
  {
    title: "Smart Chiller Optimization",
    subtitle: "Energy Consumption ML Model",
    description:
      "ML model for predicting and optimizing energy consumption in industrial smart chillers. Achieved 15% energy reduction in production at Tech Mahindra. Time-series forecasting with anomaly detection.",
    tech: ["Python", "ML", "Time Series", "Energy Optimization", "Forecasting"],
    github: "https://github.com/vedanshkap2692/Smart_Chiller_energy_consuption",
    language: "Jupyter Notebook",
  },
  {
    title: "Road Infrastructure Prediction",
    subtitle: "Hack-A-Sol 1st Place Winner",
    description:
      "Satellite imagery analysis for road connectivity and infrastructure condition prediction. Won first place at Hack-A-Sol hackathon. Uses computer vision on multi-spectral satellite data.",
    tech: ["Python", "PyTorch", "YOLO", "Satellite Imagery", "Computer Vision"],
    github: "https://github.com/vedanshkap2692/Road_connectivity_Hackasol",
    language: "Jupyter Notebook",
  },
];

export const achievements = [
  {
    title: "Hack-A-Sol Winner",
    description: "1st Place — Road Connectivity & Infrastructure Prediction",
    icon: "trophy",
  },
  {
    title: "Amazon ML Challenge",
    description: "Top 0.5% — Rank 265 out of 75,000 participants",
    icon: "medal",
  },
  {
    title: "International Physics Olympiad",
    description: "Bronze Medal",
    icon: "award",
  },
  {
    title: "KVPY Fellow",
    description: "Government of India Scholarship — Kishore Vaigyanik Protsahan Yojana",
    icon: "scroll",
  },
];

export const stats = {
  modelsTrained: 50,
  projectsBuilt: 20,
  competitions: 10,
};
