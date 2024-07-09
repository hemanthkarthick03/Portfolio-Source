import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
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
    logo,
    forage,
    c1,
    c2,
    c3,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Analyst",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Blockchain Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "git",
      icon: git,
    },
    {
      name: "Solidity",
      icon: figma,
    },
    {
      name: "Java",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Science Intern",
      company_name: "LetsGrowMore",
      icon: lgm,
      iconBg: "#E6DEDD",
      date: "June 2023 - July 2023",
      points: [
        "A supervised machine learning approach that utilizes the random forest algorithm to accurately classify iris flowers based on their features.",
        "A music recommendation system using machine learning analyzes user preferences and behavior to suggest personalized music playlists and tracks based on their listening history.",
        "Develop a stock prediction system using machine learning to analyze historical stock data and predict future price movements.",
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
      testimonial:
        "Google Data Analytics Professional Certificate",
        image: c1,
    },
    {
      testimonial:
        "Data Analysis with Python - IBM",
      image: c2,
    },
    {
      testimonial:
        "Databases and SQL for Data Science with Python (Honours) - IBM",
      image: c3,
    },
  ];
  
  const projects = [
    {
      name: "FractureDot: AI-Driven Bone Fracture Detection for Rapid Diagnosis in Medical Imaging",
      description:
        "An advanced project aims to use artificial intelligence to develop a system capable of accurately detecting bone 🦴 fractures in medical images.",
      tags: [
        {
          name: "datascience",
          color: "blue-text-gradient",
        },
        {
          name: "machinelearning",
          color: "green-text-gradient",
        },
        {
          name: "deeplearning",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/phoenix-mp3/bone-fracture-detection",
    },
    {
      name: "Healthchain : Medical Records Management System using Blockchain",
      description:
        "Integrated a Medical Record Managing Dapp with the Ganache Provider which stores the records entered into the Ethereum Private Blockchain using Contracts and MetaMask Digital Wallet 😇",
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
      name: "Naruto : Virtual Voice Assistance with Hand Gestures Detection",
      description:
        "Integrated the Voice assistant with the Screen brightness🔅control and Volume control 🔊 using Hand Gestures 🤚by OpenCV and TenserFlow ☺️",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tenserflow",
          color: "green-text-gradient",
        },
        {
          name: "openCV",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/phoenix-mp3/virtual-voice-assistant-naruto",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };