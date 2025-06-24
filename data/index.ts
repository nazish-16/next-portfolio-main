export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "🧡",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an app called Flow.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "My Professional Growth",
    description: "Journey from Beginner to Present Day",
    className: "lg:col-span-3 md:col-span-6 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 8,
    title: "Let's Play!",
    description: "Match the tech stack cards - Test your memory",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "getMemora",
    des: "Memora lets you capture lifes meaningful moments, thoughts, stories, photos, or voice notes. All stored safely and made searchable.",
    about: "getMemora is a digital memory vault that allows users to capture, organize, and revisit their most important moments. Users can add text, images, and voice notes, all of which are securely stored and easily searchable. The app emphasizes privacy and ease of use, making it perfect for journaling, life-logging, or keeping track of ideas.",
    techStack: ["React.js", "Next.js", "TypeScript", "Three.js", "Framer Motion"],
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://getmemora.vercel.app/",
  },
  {
    id: 2,
    title: "Shakti.io",
    des: "Fitness health app with personalized workout plans and progress tracking using React and Node.js.",
    about: "Shakti.io is a fitness and health platform that provides users with personalized workout plans, nutrition tracking, and progress analytics. It leverages modern web technologies to deliver a seamless experience, including real-time updates and interactive dashboards. The app is designed for both beginners and advanced fitness enthusiasts.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stream API", "Chart.js"],
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://shakti-fitness-app.vercel.app/",
  },
  {
    id: 3,
    title: "Inqube.ai",
    des: "A platform allowing startups to connect with investors and vice versa, built with React, Node.js, and MongoDB.",
    about: "Inqube.ai is a networking platform that bridges the gap between startups and investors. Startups can showcase their products, while investors can browse, connect, and invest. The platform features secure messaging, profile management, and analytics to help both parties make informed decisions.",
    techStack: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://inqube-hack-rev.pages.dev/",
  },
  {
    id: 4,
    title: "Zyloo.chat",
    des: "A messaging app like WhatsApp with real-time chat, notifications, and media sharing, built using React and Firebase.",
    about: "Zyloo.chat is a real-time messaging application supporting group and private chats, media sharing, and instant notifications. Built for speed and reliability, it uses Firebase for backend services and React for a responsive UI. The app is optimized for both mobile and desktop use.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GSAP", "Firebase"],
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://zyloo.vercel.app/",
  },
] as const;

export const testimonials = [
  {
    quote: `I was one of the clients at Electroplix and got a chance to work with Nazish Usaid. Technically very sound on what he is doing when it comes web and application development. Very enthusiastic to learn and adapt new technologies at the work place. Understanding the requirements and delivering accordingly is something cannot be denied.`,
    name: "Shoeb Ahmed",
    title: "Senior Digital Marketing Specialist",
  },
  {
    quote: `Nazish Usaid has an incredible ability to approach problems with a fresh perspective. Even though we come from different engineering fields, his analytical thinking, structured approach, and problem-solving skills have always stood out. His passion for technology, innovation, creativity, and continuous learning is truly inspiring.`,
    name: "Habeeb Khan",
    title: "Senior Lead Manager",
  },
  {
    quote: `Working with Nazish Usaid has been an eye-opening experience. He makes complex concepts easy to grasp and always encourages creative solutions. His technical expertise, coupled with his leadership skills, makes him an invaluable asset in any team.`,
    name: "Mohammed Fawaaz Moin",
    title: "Mechanical Design Engineer at Arif & Bintoak",
  },
  {
    quote: `Nazish Usaid is an exceptional developer with a deep understanding of full-stack technologies. His ability to simplify problems and mentor others sets him apart. His leadership and technical skills make working with him a great learning experience.`,
    name: "Mohammed Maaz",
    title: "Full Stack Developer at Masterworks",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Redimpact",
    nameImg: "/redimpact.png",
  },
  {
    id: 2,
    name: "Nobu",
    nameImg: "/Nobu.png",
  },
  {
    id: 3,
    name: "Masterworks",
    nameImg: "/master.png",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Cheif Technology Officer",
    desc: "As the CTO of Electroplix, I lead the company`s technology vision, Web and Application solutions.",
    className: "md:col-span-2", 
    thumbnail: "/electroplix.webp",
  },
  {
    id: 2,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/sofi.svg",
  },
  {
    id: 3,
    title: "Full stack Developer",
    desc: "Designed and developed web app using Next.js and hosted using Hostinger.",
    className: "md:col-span-2",
    thumbnail: "/orator.webp",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/Nazish Usaid-16",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/tsismeNazish Usaid",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/realNazish Usaid",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Express.js", "Firebase", "MongoDB"],
} as const;
