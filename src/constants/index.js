import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/restaurent.png";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Machine Learning Intern",
    company: "Intrainz.",
    description: `Developed a fraud detection model using Python and machine learning techniques. Analyzed transaction data to identify fraudulent patterns, improving detection accuracy.`,
    technologies: ["Python", "Machine Learning", " Data Analysis", "Fraud Detection"],
  },
  {
    year: "2025",
    role: "Cybersecurity Trainee",
    company: "Cisco Networking Academy",
    description: `Completed foundational cybersecurity training, focusing on threat detection, risk mitigation, and security best practices.`,
    technologies: ["Cybersecurity", "Network Security", "Threat Analysis"],
  },
  {
    year: "2024",
    role: "Front-End Developer",
    company: "Meta (Coursera Program)",
    description: `Gained hands-on experience in front-end development, specializing in React, JavaScript, and responsive UI design. Built interactive web applications.`,
    technologies: ["React", "JavaScript", "HTML", "CSS","Tailwind CSS","Front-End Development"],
  },
  {
    year: "2024",
    role: "UX Designer",
    company: "Google (Coursera Program)",
    description: `Studied UX principles, wireframing, and prototyping. Learned to design user-friendly interfaces based on research and usability testing.`,
    technologies: ["UX Design", "Wireframing", "Prototyping", "User Research"],
  },
];

export const PROJECTS = [
  {
    title: "Personal Portfolio Website–CPKR",
    image: project1,
    description:
    "A personal portfolio website showcasing projects, skills, and contact information.",
    
    technologies: ["HTML", "CSS", "JSX", "Tailwind CSS", "JS"],
  },
  {
    title: "Designed & Developed a Restaurant Showcase Website",
    image: project2,
    description:
      "Designed and developed a sleek, responsive website to showcase a restaurant’s menu, mission, and expertise. Built with JSX and Tailwind CSS, the site delivers a modern user experience with a clean, minimalistic design. It serves as an informational platform without online ordering features.",
    technologies: ["HTML", "JSX", "JavaScript", "Tailwind CSS(Styling)",],
  },
  {
    title: "E-Commerce Website(Just Started-In progress)",
    image: project3,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["", "", "", ""],
  },
  
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
