import TanzilMia from "../../public/assets/imgs/team/team-05.png";
import ShagorAli from "../../public/assets/imgs/team/team-06.png";
// skill image
import counterImgOne from '../../public/assets/imgs/skill/01.png';
import counterImgTwo from '../../public/assets/imgs/skill/02.png';
import counterImgThree from '../../public/assets/imgs/skill/03.png';
import counterImgFour from '../../public/assets/imgs/skill/04.png';
import { TTeam } from "@/interFace/type";


const team_data: TTeam[] = [
  // Team data
  {
    id: 1,
    image: TanzilMia,
    authorName: "Md Tanzil Mia",
    desination: "Founder & CEO",
    expart:"MERN & Flutter",
    yearsOfExperience: 2,
    skills: [
      { id: 1, cunterNum: 88, image: counterImgOne, skillName: "Figma", bgColor: "white-bg", wowDelay: ".3s" },
      { id: 2, cunterNum: 98, image: counterImgTwo, skillName: "Vision", bgColor: "pink-bg", wowDelay: ".5s" },
      { id: 3, cunterNum: 78, image: counterImgThree, skillName: "Sketch", bgColor: "white-bg", wowDelay: ".7s" },
      { id: 4, cunterNum: 68, image: counterImgFour, skillName: "Cloud", bgColor: "red-bg", wowDelay: ".9s" },
    ],
    bio: "Md Tanzil Mia is the visionary founder who spearheads the overall direction of the company. With over 10 years of experience in the tech industry, he is passionate about building impactful products and fostering innovation.",
    socialIcon: [
      { id: 1, icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/" },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      { id: 3, icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/" },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".3s",

  },
  {
    id: 2,
    image: ShagorAli,
    authorName: "Mahbub Hasan",
    desination: "Founder & CTO",
    expart:"Fontend",
    yearsOfExperience: 2,
    skills: [
      { id: 1, cunterNum: 88, image: counterImgOne, skillName: "Software Architecture", bgColor: "white-bg", wowDelay: ".3s" },
      { id: 2, cunterNum: 98, image: counterImgTwo, skillName: "Technical Leadership", bgColor: "pink-bg", wowDelay: ".5s" },
      { id: 3, cunterNum: 78, image: counterImgThree, skillName: "System Design", bgColor: "white-bg", wowDelay: ".7s" },
      { id: 4, cunterNum: 68, image: counterImgFour, skillName: "Cloud Computing", bgColor: "red-bg", wowDelay: ".9s" },
    ],
    bio: "Mahbub Hasan is the technical architect behind the company's growth. With 8 years of expertise in software development and system architecture, he ensures that all products meet the highest technical standards.",
    socialIcon: [
      { id: 1, icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/" },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      { id: 3, icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/" },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".7s",
  },
  {
    id: 3,
    image: TanzilMia,
    authorName: "Istiak Ahmed",
    desination: "Co-Founder & Lead App Developer",
    expart:"Mobile Application",
    yearsOfExperience: 2,
    skills: [
      { id: 1, cunterNum: 88, image: counterImgOne, skillName: "Mobile Development", bgColor: "white-bg", wowDelay: ".3s" },
      { id: 2, cunterNum: 98, image: counterImgTwo, skillName: "Flutter", bgColor: "pink-bg", wowDelay: ".5s" },
      { id: 3, cunterNum: 78, image: counterImgThree, skillName: "Dart", bgColor: "white-bg", wowDelay: ".7s" },
      { id: 4, cunterNum: 68, image: counterImgFour, skillName: "React Native", bgColor: "red-bg", wowDelay: ".9s" },
    ],
    bio: "Istiak Ahmed, our Co-Founder and Lead App Developer, is a key figure in developing mobile applications. With over 6 years of experience in mobile development, he specializes in Flutter and React Native.",
    socialIcon: [
      { id: 1, icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/" },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      { id: 3, icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/" },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".5s",
  },
  {
    id: 4,
    image: ShagorAli,
    authorName: "Md Sagar Ali",
    desination: "Co-Founder & Lead Software Developer",
    expart:"MERN & Flutter",
    yearsOfExperience: 2,
    skills: [
      { id: 1, cunterNum: 88, image: counterImgOne, skillName: "Backend Development", bgColor: "white-bg", wowDelay: ".3s" },
      { id: 2, cunterNum: 98, image: counterImgTwo, skillName: "Node.js", bgColor: "pink-bg", wowDelay: ".5s" },
      { id: 3, cunterNum: 78, image: counterImgThree, skillName: "Next Js", bgColor: "white-bg", wowDelay: ".7s" },
      { id: 4, cunterNum: 68, image: counterImgFour, skillName: "MongoDB", bgColor: "red-bg", wowDelay: ".9s" },
    ],
    bio: "Md Sagar Ali is the backbone of our software development team. With 7 years of experience in backend development, he is proficient in technologies such as Node.js and MongoDB, ensuring smooth and scalable applications.",
    socialIcon: [
      { id: 1, icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/" },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      { id: 3, icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/" },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".3s",
  },
  {
    id: 5,
    image: TanzilMia,
    authorName: "Md. Tanver Ahmed Siyam",
    desination: "UI/UX Designer",
    expart:"UI/UX",
    yearsOfExperience: 2,
    skills: [
      { id: 1, cunterNum: 88, image: counterImgOne, skillName: "UI Design", bgColor: "white-bg", wowDelay: ".3s" },
      { id: 2, cunterNum: 98, image: counterImgTwo, skillName: "UX Research", bgColor: "pink-bg", wowDelay: ".5s" },
      { id: 3, cunterNum: 78, image: counterImgThree, skillName: "Prototyping", bgColor: "white-bg", wowDelay: ".7s" },
      { id: 4, cunterNum: 68, image: counterImgFour, skillName: "Wireframing", bgColor: "red-bg", wowDelay: ".9s" },
    ],
    bio: "Md. Tanver Ahmed Siyam is our creative force behind the design of user interfaces. With 4 years of experience in UI/UX design, he ensures that all products are both user-friendly and visually appealing.",
    socialIcon: [
      { id: 1, icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/" },
      { id: 2, icon: "fa-brands fa-twitter", url: "https://twitter.com/" },
      { id: 3, icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/" },
      { id: 4, icon: "fa-brands fa-youtube", url: "https://www.youtube.com/" },
    ],
    wowDelay: ".5s",
  },
];

export default team_data;
