import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  finecons,
  postgresql,
  langchain,
  reactjs,
  python,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  IBM,
  lgm,
  carrent,
  jobit,
  tripguide,
  threejs,
  forage,
  c1,
  c2,
  c3,
  evault,
  youtubeProject,
  phpsms,
  typescript,
} from "../assets";

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

const services = [
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "AI & LangChain Engineer",
    icon: backend,
  },
  {
    title: "Blockchain & Web3 Enthusiast",
    icon: creator,
  },
  {
    title: "Web Designer",
    icon: web,
  }
];

const technologies = [
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
    name: "HTML",
    icon: html,
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
    name: "C++",
    icon: redux,
  },
  {
    name: "Java",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Solidity",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "AWS Cloud & Web Developer Intern",
    company_name: "Finecons Pvt. Ltd.",
    icon: finecons,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Developed and maintained websites for both college and company projects, ensuring they were user-friendly and met all functional requirements.",
      "Implemented responsive designs to ensure optimal viewing across various devices.",
      "Implemented cloud solutions to optimize performance, including cost-effective resource allocation and effective load balancing.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "LetsGrowMore",
    icon: lgm,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "A supervised machine learning approach that utilizes the random forest algorithm to accurately classify iris flowers based on their features.",
      "A music recommendation system using machine learning analyzes user preferences and behavior to suggest personalized music playlists and tracks based on their listening history.",
      "Developed a stock prediction system using machine learning to analyze historical stock data and predict future price movements.",
    ],
  },
  {
    title: "Virtual Internship Programs",
    company_name: "Forage",
    icon: forage,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Data Visualisation: Empowering Business with Effective Insights",
      "Accenture Developer Program",
      "Accenture - Data analytics & visualization",
    ],
  },
  {
    title: "Data Analytics Intern",
    company_name: "IBM Skillsbuild",
    icon: IBM,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Cleaning and handling missing data in datasets using Numpy and Pandas functions.",
      "Exploring datasets using Pandas to get insights into the data's structure and content.",
      "Creating basic visualizations using libraries like Matplotlib or Seaborn to understand data patterns.",
      "Performing statistical analysis using Numpy functions to understand data distributions and relationships.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Google Data Analytics Professional Certificate",
    image: c1,
  },
  {
    testimonial: "IBM Data Science Specialization",
    image: c2,
  },
  {
    testimonial: "Databases and SQL for Data Science with Python (Honours) - IBM",
    image: c3,
  },
];

const projects = [
    {
      name: "Naruto: Virtual Voice Assistance with LlaMa3 and Computer Vision",
      description: "Integrated various APIs with Meta Llama3 to control screen brightness and volume using hand gestures recognized by OpenCV and TensorFlow to improve user interaction.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "langchain",
          color: "green-text-gradient",
        },
        {
          name: "opencv",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/phoenix-mp3/VVA-LLM",
    },
    {
      name: "YouTube Data Harvesting and Warehousing",
      description: "The YouTube Data Harvesting and Warehousing project is designed to empower users to access and analyze data from various YouTube channels.",
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
          name: "Youtube Data API",
          color: "green-text-gradient",
        }
      ],
      image: youtubeProject,
      source_code_link: "https://github.com/phoenix-mp3/Youtube-Data-Warehousing-Streamlit",
    },
  {
    name: "Healthchain: Medical Records Management System using Blockchain",
    description: "Integrated a Medical Record Managing Dapp with the Ganache Provider which stores the records entered into the Ethereum Private Blockchain using Contracts and MetaMask Digital Wallet.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/phoenix-mp3/Healthcare-Management-System",
  },
  {
    name: "Blockchain-based eVault for Legal Records",
    description: "User-friendly React-based dashboard for accessing, searching, and managing legal documents with enhanced security features.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: evault,
    source_code_link: "https://github.com/phoenix-mp3/E-Vault-Web3.js",
  },
  
  {
    name: "PHP - Sales Management System",
    description: "A robust web application for managing sales data, built with PHP and MySQL. It features a user-friendly form for data entry, validation, and secure insertion into a PostgreSQL database.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "ethereum",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: phpsms,
    source_code_link: "https://github.com/phoenix-mp3/PHP-Sales-System",
  },
  {
    name: "FractureDot: AI-Driven Bone Fracture Detection for Rapid Diagnosis",
    description: "An advanced project aims to use artificial intelligence to develop a system capable of accurately detecting bone fractures in medical images.",
    tags: [
      {
        name: "datascience",
        color: "blue-text-gradient",
      },
      {
        name: "neuralnetworks",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/phoenix-mp3/bone-fracture-detection",
  },
];

export { services, technologies, experiences, testimonials, projects };
