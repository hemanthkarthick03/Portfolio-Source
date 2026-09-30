import {
  aws,
  fastapi,
  graphql,
  backend,
  c1,
  c2,
  c3,
  carrent,
  cognizant,
  creator,
  css,
  docker,
  evault,
  figma,
  finecons,
  forage,
  git,
  html,
  IBM,
  iitm,
  infy,
  javascript,
  jobit,
  langchain,
  langfuse,
  lgm,
  mobile,
  mongodb,
  nodejs,
  phpsms,
  postgresql,
  python,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  web,
  youtubeProject,
} from "../assets";

// =====================================================
// NAVIGATION
// =====================================================

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


// =====================================================
// SERVICES
// =====================================================

const services = [
  {
    title: "AI Engineering",
    icon: backend,
    description:
      "Building AI applications with LLMs, RAG, LangChain, and LangGraph, while designing agentic AI systems using MCP, A2A, workflow orchestration, tool integration, and AI observability.",
  },
  {
    title: "Software Development",
    icon: mobile,
    description:
      "Developing scalable web applications, APIs, and backend systems using modern software development technologies.",
  },
  {
    title: "Blockchain Development",
    icon: creator,
    description:
      "Building decentralized applications using blockchain, Ethereum, Solidity, smart contracts, and Web3 technologies.",
  },
  {
    title: "Cloud Engineering",
    icon: web,
    description:
      "Building and deploying reliable cloud-based applications with AWS, Docker, APIs, and scalable backend services.",
  },
];


// =====================================================
// TECHNOLOGIES
// =====================================================

const technologies = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "LangFuse",
    icon: langfuse,
  },
];


// =====================================================
// EXPERIENCE
// =====================================================

const experiences = [
  {
    title: "Specialist Programmer - AI Full Stack Engineer",
    company_name: "Infosys Ltd.",
    icon: infy,
    iconBg: "#E6DEDD",
    date: "August 2025 - Present",

    points: [
      "Designing AI applications and workflows using LangChain, LangGraph, and Google ADK.",
      "Working on AI architecture using A2A and MCP to connect agents, tools, and external systems.",
      "Built RAG solutions including a query-rewrite pipeline with RAGAS and a Contract Risk Analysis pipeline.",
      "Built production-ready APIs with support for concurrent requests, rate limits, monitoring, and reliable error handling.",
    ],

    skills: [
      "LangChain",
      "LangGraph",
      "Google ADK",
      "RAG",
      "RAGAS",
      "MCP",
      "A2A",
      "LangFuse",
    ],
  },

  {
    title: "Programmer Analyst Trainee",
    company_name: "Cognizant Technology Solutions",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "March 2025 - June 2025",

    points: [
      "Trained as a PEGA BPM System Architect and worked on enterprise workflow applications.",
      "Configured case routing, SLAs, escalations, business rules, validations, and access controls.",
      "Built reusable UI components and connected external systems using REST and SOAP APIs.",
      "Used PEGA debugging and reporting tools while working through development, testing, and deployment.",
    ],

    skills: [
      "PEGA BPM",
      "Java",
      "REST API",
      "SOAP",
      "Maven",
      "Spring MVC",
    ],
  },

  {
    title: "AWS Cloud & Web Developer Intern",
    company_name: "Finecons Pvt. Ltd.",
    icon: finecons,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",

    points: [
      "Developed websites for college and company projects based on project requirements.",
      "Built responsive interfaces that worked across desktop, tablet, and mobile devices.",
      "Worked with AWS services to improve application performance and manage cloud resources.",
    ],

    skills: [
      "AWS",
      "Web Development",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Data Science Intern",
    company_name: "LetsGrowMore",
    icon: lgm,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",

    points: [
      "Built machine learning projects for iris classification, music recommendations, and stock data analysis.",
      "Prepared datasets and applied machine learning techniques to build and test prediction models.",
      "Worked with Python and common data science libraries for data analysis and visualization.",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Data Analysis",
    ],
  },

  {
    title: "Virtual Internship Programs",
    company_name: "Forage",
    icon: forage,
    iconBg: "#383E56",
    date: "January 2022 - January 2023",

    points: [
      "Completed virtual work experience programs focused on software development, data analytics, and data visualization.",
      "Worked through practical tasks based on real-world business and technology scenarios.",
    ],

    skills: [
      "Data Analytics",
      "Data Visualization",
      "Software Development",
    ],
  },

  {
    title: "Data Analytics Intern",
    company_name: "IBM SkillsBuild",
    icon: IBM,
    iconBg: "#E6DEDD",
    date: "January 2023",

    points: [
      "Cleaned and prepared datasets using Python, NumPy, and Pandas.",
      "Explored datasets to understand patterns, trends, and data quality.",
      "Created visualizations and performed basic statistical analysis to support data-driven insights.",
    ],

    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Visualization",
    ],
  },
];


// =====================================================
// CERTIFICATIONS
// =====================================================

const testimonials = [
  {
    testimonial:
      "B.S. in Data Science and Applications - IIT Madras",
    image: iitm,
  },
  {
    testimonial:
      "Google Data Analytics Professional Certificate",
    image: c1,
  },
  {
    testimonial:
      "IBM Data Science Specialization",
    image: c2,
  },
];


// =====================================================
// PROJECTS
// =====================================================

const projects = [
  {
    name: "Naruto: Virtual Voice Assistant with Llama 3 and Computer Vision",

    description:
      "A voice assistant that uses Llama 3, LangChain, and computer vision to control system functions such as volume and screen brightness using voice commands and hand gestures.",

    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],

    image: tripguide,

    source_code_link:
      "https://github.com/hemanthkarthick03/VVA-LLM",
  },

  {
    name: "YouTube Data Harvesting and Warehousing",

    description:
      "A data platform that collects YouTube channel data, stores it in MongoDB and PostgreSQL, and provides an interface for exploring and analyzing the collected data.",

    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "YouTube API",
        color: "green-text-gradient",
      },
    ],

    image: youtubeProject,

    source_code_link:
      "https://github.com/hemanthkarthick03/Youtube-Data-Warehousing-Streamlit",
  },

  {
    name: "HealthChain: Medical Records Management System",

    description:
      "A blockchain-based application for securely managing medical records using Ethereum smart contracts and MetaMask.",

    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Ethereum",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],

    image: jobit,

    source_code_link:
      "https://github.com/hemanthkarthick03/Healthcare-Management-System",
  },

  {
    name: "Blockchain-based eVault for Legal Records",

    description:
      "A React-based application for securely storing, accessing, searching, and managing legal documents using blockchain technology.",

    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Ethereum",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],

    image: evault,

    source_code_link:
      "https://github.com/hemanthkarthick03/E-Vault-Web3.js",
  },

  {
    name: "PHP Sales Management System",

    description:
      "A web application for managing sales records with data entry, validation, and database operations using PHP and PostgreSQL.",

    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],

    image: phpsms,

    source_code_link:
      "https://github.com/hemanthkarthick03/PHP-Sales-System",
  },

  {
    name: "FractureDot: AI Bone Fracture Detection",

    description:
      "An AI-based system designed to detect bone fractures from medical images and support faster analysis of X-ray scans.",

    tags: [
      {
        name: "Data Science",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Neural Networks",
        color: "pink-text-gradient",
      },
    ],

    image: carrent,

    source_code_link:
      "https://github.com/hemanthkarthick03/Bone-Fracture",
  },
];


// =====================================================
// EXPORT
// =====================================================

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};