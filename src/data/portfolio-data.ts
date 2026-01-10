//portfolio image
import image23 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-16.png";
import image24 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-17.png";
import image25 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-18.png";
import image26 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-19.png";
import image27 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-20.png";
import image28 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-21.png";
import image29 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-22.png";
import image30 from "../../public/assets/imgs/portfolio/masonary/portfolio-masonary-23.png";
import { TPortfolio } from "@/interFace/type";

const portfolio_data: TPortfolio[] = [
  {
    id: 1,
    image: image23,
    tagName: "Flutter Development",
    title: "Cross-Platform E-Learning App",
    description:
      "Developed a robust e-learning mobile app using Flutter, offering seamless video streaming and interactive quizzes for students.",
    technologies: ["Flutter", "Dart", "Firebase"],
    duration: "3 months",
    clientFeedback:
      "The app has received amazing feedback for its speed and user-friendly interface.",
    link: "https://elearningapp.com",
    date: "May 04, 2020",
  },
  {
    id: 2,
    image: image24,
    tagName: "MERN Stack",
    title: "Real-Time Chat Application",
    description:
      "Built a scalable and secure chat application using the MERN stack, featuring group chats and end-to-end encryption.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    duration: "2 months",
    clientFeedback: "This app has transformed communication in our team!",
    link: "https://chatapp.com",
    date: "June 07, 2020",
  },
  {
    id: 3,
    image: image25,
    tagName: "Website Design",
    title: "Responsive Portfolio Website",
    description:
      "Designed and implemented a responsive portfolio website tailored for creative professionals to showcase their work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "1 month",
    clientFeedback: "The website beautifully highlights my work and skills.",
    link: "https://portfolioexample.com",
    date: "April 16, 2021",
  },
  {
    id: 4,
    image: image26,
    tagName: "React Templates",
    title: "E-Commerce React Template",
    description:
      "Developed a reusable and highly customizable React template for e-commerce platforms, including cart and payment integrations.",
    technologies: ["React", "Redux", "Bootstrap"],
    duration: "2 months",
    clientFeedback: "The template saved us weeks of development time!",
    link: "https://ecommercetemplate.com",
    date: "May 26, 2022",
  },
  {
    id: 5,
    image: image27,
    tagName: ".NET Development",
    title: "Enterprise ERP System",
    description:
      "Created a robust ERP system using .NET, streamlining business operations and improving data accuracy for the client.",
    technologies: [".NET", "SQL Server", "C#"],
    duration: "4 months",
    clientFeedback: "A transformative solution for our growing business needs.",
    link: "https://erpsoftware.com",
    date: "May 27, 2021",
  },
  {
    id: 6,
    image: image28,
    tagName: "UI/UX Design",
    title: "Modern Dashboard UI for Analytics",
    description:
      "Designed a modern, intuitive dashboard for an analytics platform, enhancing usability and data visualization.",
    technologies: ["Figma", "Adobe XD"],
    duration: "1.5 months",
    clientFeedback: "Our users are loving the new design!",
    link: "https://analyticsdashboard.com",
    date: "May 26, 2022",
  },
  {
    id: 7,
    image: image29,
    tagName: "Flutter Development",
    title: "Health Monitoring App",
    description:
      "Developed a cross-platform health monitoring app with real-time data visualization and integration with wearable devices.",
    technologies: ["Flutter", "Dart", "GraphQL"],
    duration: "3 months",
    clientFeedback: "The app has been a game-changer for our customers.",
    link: "https://healthmonitorapp.com",
    date: "Feb 20, 2022",
  },
  {
    id: 8,
    image: image30,
    tagName: "MERN Stack",
    title: "Social Media Platform for Creators",
    description:
      "Built a feature-rich social media platform for content creators, including live streaming and monetization options.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    duration: "5 months",
    clientFeedback: "A revolutionary platform for creators.",
    link: "https://creatorsnetwork.com",
    date: "May 26, 2022",
  },
  //tab-two-data
  {
    id: 9,
    image: image25,
    tagName: "Website Design",
    title: "Non-Profit Organization Website",
    description:
      "Designed an impactful website for a non-profit, focusing on storytelling and donation integrations.",
    technologies: ["WordPress", "PHP", "CSS"],
    duration: "1.5 months",
    clientFeedback: "The website conveys our mission beautifully.",
    link: "https://nonprofitwebsite.com",
    date: "May 26, 2022",
  },
  {
    id: 10,
    image: image28,
    tagName: "React Templates",
    title: "Admin Panel Template",
    description:
      "Developed a React-based admin panel template with dynamic widgets and charting capabilities.",
    technologies: ["React", "Material UI", "Chart.js"],
    duration: "2 months",
    clientFeedback: "Extremely versatile and easy to integrate.",
    link: "https://adminpaneltemplate.com",
    date: "January 12, 2022",
  },
  //tab-three-data
  {
    id: 11,
    image: image24,
    tagName: ".NET Development",
    title: "Inventory Management System",
    description:
      "Created an advanced inventory management system, automating supply chain processes and reducing manual effort.",
    technologies: [".NET Core", "Entity Framework", "Azure"],
    duration: "3 months",
    clientFeedback: "A seamless solution that has boosted productivity.",
    link: "https://inventorysystem.com",
    date: "May 26, 2022",
  },
  {
    id: 12,
    image: image30,
    tagName: "UI/UX Design",
    title: "E-Commerce App Design",
    description:
      "Designed an elegant and user-centric interface for a mobile e-commerce app, enhancing the shopping experience.",
    technologies: ["Sketch", "Figma"],
    duration: "1 month",
    clientFeedback: "Our customers love the design!",
    link: "https://ecommerceappdesign.com",
    date: "May 26, 2022",
  },
  {
    id: 13,
    image: image29,
    tagName: "Flutter Development",
    title: "Event Management App",
    description:
      "Built an app for managing events with features like RSVP tracking and push notifications.",
    technologies: ["Flutter", "Dart", "Firebase"],
    duration: "2 months",
    clientFeedback: "The app is a must-have for event organizers.",
    link: "https://eventmanager.com",
    date: "May 26, 2022",
  },
  //tab-four-data
  {
    id: 14,
    image: image24,
    tagName: "MERN Stack",
    title: "Online Learning Platform",
    description:
      "Developed a scalable online learning platform with live classes and progress tracking features.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    duration: "4 months",
    clientFeedback: "An incredible tool for educators and students.",
    link: "https://onlinelearningplatform.com",
    date: "May 26, 2022",
  },
  {
    id: 15,
    image: image30,
    tagName: "Website Design",
    title: "Real Estate Landing Page",
    description:
      "Created a stunning landing page for a real estate firm, showcasing properties with interactive filters.",
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "1 month",
    clientFeedback: "A visually captivating design that drives inquiries.",
    link: "https://realestatelanding.com",
    date: "May 26, 2022",
  },
  {
    id: 16,
    image: image28,
    tagName: "React Templates",
    title: "Blog Template for Writers",
    description:
      "Developed a React-based blog template with customizable layouts and SEO-friendly architecture.",
    technologies: ["React", "SCSS"],
    duration: "1.5 months",
    clientFeedback: "A sleek and flexible template for writers.",
    link: "https://blogtemplate.com",
    date: "May 26, 2022",
  },
  //tab-four-data
  {
    id: 17,
    image: image27,
    tagName: ".NET Development",
    title: "HR Management System",
    description:
      "Created an HR management system with payroll processing and employee analytics features.",
    technologies: [".NET", "SQL Server", "C#"],
    duration: "3 months",
    clientFeedback: "A user-friendly solution for our HR team.",
    link: "https://hrmsystem.com",
    date: "May 26, 2022",
  },
  {
    id: 18,
    image: image26,
    tagName: "React Templates",
    title: "Blog Template for Writers",
    description:
      "Developed a React-based blog template with customizable layouts and SEO-friendly architecture.",
    technologies: ["React", "SCSS"],
    duration: "1.5 months",
    clientFeedback: "A sleek and flexible template for writers.",
    link: "https://blogtemplate.com",
    date: "May 26, 2022",
  },
];

export default portfolio_data;
