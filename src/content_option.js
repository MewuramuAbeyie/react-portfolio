import lp_dp from "./assets/images/lp_dp.jpg";
import dark_img from "./assets/images/mxa_dp.png";
import light_img from "./assets/images/Subject.svg";

import p1 from "./assets/images/AI_ML_Student_performance_p1.webp";
import p2 from "./assets/images/Company_webapp_p2.webp";
import p3 from "./assets/images/fintech_p3.webp";

const logotext = "MEWURAMU";
const meta = {
    title: "Mewuramu X Abeyie",
    description: "I’m Mewuramu X Abeyie, an aspiring AI expert and tech enthusiast from Tema, Ghana.",
};

const introdata = {
    title: "I’m Mewuramu X Abeyie",
    animated: {
        first: "I love coding",
        second: "I explore AI",
        third: "I build tech solutions",
    },
    description: "Passionate about technology and coding, I aim to become the greatest AI expert in the world. I recently graduated from High School and am continuously learning and working on tech projects.",
    your_img_url: lp_dp,
    dark_img_url: dark_img,
    light_img_url: light_img,
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am an 18-year-old tech enthusiast from Accra, Ghana. I have a strong passion for coding, AI, and continuous learning. My goal is to leverage technology to solve real-world problems and make a significant impact in the field of artificial intelligence.",
};

const worktimeline = [
    {
        jobtitle: "Software Engineering - FreeLancer",
        where: "Remote",
        date: "2024",
    },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 85,
  },
  {
    name: "C/C++",
    value: 60,
  },
  {
    name: "React",
    value: 75,
  },
  {
    name: "Rust",
    value: 20,
  },
  {
    name: "C# / .NET",
    value: 70,
  },
];

const services = [
    {
        title: "AI & Machine Learning",
        description: "Developing and exploring AI models and machine learning algorithms to create innovative solutions.",
    },
    {
        title: "Web Development",
        description: "Building responsive and dynamic websites using the latest web technologies.",
    },
    {
        title: "Mobile App Development",
        description: "Creating user-friendly and efficient mobile applications for various platforms.",
    },
];

const dataportfolio = [
    {
        img: p1,
        description: "Will be Developing a machine learning model to predict student performance.",
        link: "#",
    },
    {
        img: p2,
        description: "Will be building a responsive website for a local business.",
        link: "#",
    },
    {
        img: p3,
        description: "Will be creating a mobile app to help manage personal finances.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mewuramu@gmail.com",
    //YOUR_FONE: "****",
    description: "Feel free to reach out to me for collaborations or any inquiries. I'm always open to discussing new projects and opportunities.",
    YOUR_SERVICE_ID: "mxa_portfolio_contact",
    YOUR_TEMPLATE_ID: "template_c5a7lp4",
    YOUR_USER_ID: "9tc0kmbzKqJcuh5sJ",
};

const socialprofils = {
    github: "https://github.com/MewuramuAbeyie",
    facebook: "https://web.facebook.com/profile.php?id=100009767175146",
    linkedin: "https://www.linkedin.com/in/mewuramuxabeyie/",
    twitter: "https://x.com/mewuramuxabeyie",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
