import {
  dsa,
  videocreator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "DSA Enthusiast",
    icon: dsa,
  },
  {
    title: "Video Editor",
    icon: videocreator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "My Portfolio",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Project Overview: A dynamic and interactive portfolio website showcasing my skills and projects.",
      "Technology Overview:",
      "HTML & CSS: For structuring and styling the web pages.",
      "React JS: To create a responsive and component-based architecture.",
     "JavaScript: For adding interactivity and smooth user experiences.",
     "Three.js: To implement stunning 3D graphics and immersive animations.",
     "Key Features:Clean, modern, and responsive design optimized for all devices.",
     "Interactive 3D elements for a visually appealing user experience.",
     "Smooth navigation and transitions built using React.",
     "Purpose: To showcase my technical skills, creativity, and passion for building visually engaging and high-performance web applications.",
    ],
  },
  {
    title: "Netflix Clone",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
     "The Netflix Clone project is a web-based application designed to replicate the user interface of Netflix, one of the most popular streaming platforms. Built using HTML and CSS, this project focuses on recreating the sleek and modern design of Netflix's homepage, offering a visually appealing and responsive layout.",
     "A navigation bar with a logo, search input, and profile icon.",
     "A prominent hero section showcasing a featured movie or series with Play and More Info buttons.",
     "A responsive design ensuring the UI looks great on devices of all sizes.",
    ],
  },
  {
    title: "Crud Application",
    icon: shopify,
    iconBg: "#383E56",
    points: [
     "The CRUD Application project is a full-stack web application that allows users to perform Create, Read, Update, and Delete operations seamlessly. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this project showcases the integration of a robust backend with a dynamic and user-friendly frontend.",
     "Backend:Developed using Node.js and Express.js, the backend provides a RESTful API to handle CRUD operations.",
      "MongoDB is used as the database, offering efficient data storage and retrieval.",
      "Implements routing and middleware for data validation and error handling.",
     "Frontend:Built with React, providing a modern and interactive user interface.",
     "Users can create, view, edit, and delete items, with the UI dynamically updating based on database interactions.",
     "Fully responsive design for an optimized experience across devices.",
     "Additional Features:Real-time data updates between the frontend and backend.",
     "Modular and scalable architecture for ease of maintenance and future enhancements.",
     "Error handling and form validation to ensure smooth user interaction.",
     "This project highlights the integration of database management with a modern frontend and backend framework, emphasizing our skills in full-stack development.",   
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
