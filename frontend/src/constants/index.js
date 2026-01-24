import { Brain, Briefcase, Code, Cpu, Database, Layers, MessageSquare, Palette, TestTube, Zap } from "lucide-react";
import { afrocom, alx, chris, derek, eProd, exploreAi, icon1, icon2, ilab, immaculate, jackline, kevinObote, logo, mksu, moses, nicole, nobert, strathmore } from "../assets";

export const offerings = [
  {
    id: "0",
    title: "Data Analyst Path Lead",
    text: "Led the data analysis track at Genesys Tech Hub by designing curriculum, coordinating mentors, and guiding students on modern analytics practices.",
    backgroundUrl: "/images/card-1.svg",
    iconUrl: icon1,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    id: "1",
    title: "Web Development Mentor",
    text: "Mentored aspiring developers at Genesys Tech Hub, delivering instruction on modern web technologies and industry best practices.",
    backgroundUrl: "/images/card-2.svg",
    iconUrl: icon2,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    light: true
  },
  {
    id: "2",
    title: "Red Cross Volunteer – Kenya",
    text: "Supported emergency response during COVID-19, organized community outreach programs, and provided educational mentorship across local communities.",
    backgroundUrl: "/images/card-4.svg",
    iconUrl: icon1,
    imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144"
  }
];

export const skills = [
  {
    icon: Code,
    name: "Product Management",
    level: 90,
    color: "blue",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com"},
      { name: "eProd", logo: eProd, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
      { name: "Alx", logo: alx, alt: "ALx Logo", website: "https://www.alxafrica.com/" }
    ]
  },
  {
    icon: Brain,
    name: "Machine Learning",
    level: 93,
    color: "purple",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com" },
      { name: "eProd", logo: eProd, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
      { name: "AfroCom", logo: afrocom, alt: "AfroCom Logo", website: "" },
      { name: "ExploreAI Academy", logo: exploreAi, alt: "ExploreAI Academy Logo", website: "" },
      { name: "Strathmore Uni", logo: strathmore, alt: "Strathmore Uni Logo", website: "https://strathmore.edu/" },
      { name: "Machakos Uni", logo: mksu, alt: "MKSU Logo", website: "https://mksu.ac.ke" }
    ]
  },
  {
    icon: Database,
    name: "Data Science",
    level: 88,
    color: "pink",
    companies: [
      { name: "iLabAfrica", logo: ilab, alt: "iLabAfrica Logo", website: "https://ilabafrica.strathmore.edu/" },
      { name: "AfroCom", logo: afrocom, alt: "AfroCom Logo", website: "" },
      { name: "ExploreAI Academy", logo: exploreAi, alt: "ExploreAI Academy Logo", website: "" }
    ]
  },
  {
    icon: TestTube,
    name: "Software Testing",
    level: 92,
    color: "green",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com" },
      { name: "eProd", logo: eProd, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" },
      { name: "Roman Solutions", logo: afrocom, alt: "Roman Solutions Logo", website: "" }
    ]
  },
  {
    icon: Layers,
    name: "Software Development",
    level: 85,
    color: "orange",
    companies: [
      { name: "Guild Code", logo: logo, alt: "Guild Code Logo", website: "https://guild-code.com" },
      { name: "eProd", logo: eProd, alt: "eProd Logo", website: "https://www.eprod-solutions.com/language/en/" }
    ]
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Kevin Obote',
    role: 'Head of Growth & Partnerships',
    icon: Zap,
    image: kevinObote,
    bio: 'Drives client acquisition, strategic partnerships, and market expansion across Africa and beyond.'
  },
  {
    name: 'Immaculate Wakio',
    role: 'Lead Solutions Architect',
    icon: Cpu,
    image: immaculate,
    bio: 'Designs scalable software systems and translates business problems into robust digital platforms.'
  },
  {
    name: 'Moses Mutuku',
    role: 'Director of Product & Delivery',
    icon: Briefcase,
    featured: true,
    image: moses,
    bio: 'Oversees product strategy, client success, and the delivery of high-impact digital solutions.'
  },
  {
    name: 'Nobert Osiemo',
    role: 'Digital Marketing & Communications Lead',
    icon: MessageSquare,
    image: nobert,
    bio: 'Builds Guild-Code’s online presence through campaigns, storytelling, and performance marketing.'
  },
  {
    name: 'Derek',
    role: 'Creative Director',
    icon: Palette,
    image: derek,
    bio: 'Leads visual direction and ensures every interface reflects clarity, craft, and premium execution.'
  },
  {
    name: 'Jackline',
    role: 'Senior UI/UX Designer',
    icon: Palette,
    image: jackline,
    bio: 'Designs intuitive user journeys that balance business goals with delightful digital experiences.'
  },
  {
    name: 'Nicole',
    role: 'Product Designer',
    icon: Palette,
    image: nicole,
    bio: 'Transforms complex requirements into elegant, human-centred interfaces and workflows.'
  },
  {
    name: 'Chris Achinga',
    role: 'Frontend Engineering Lead',
    icon: Palette,
    image: chris,
    bio: 'Architects high-performance web experiences and ensures pixel-perfect execution in production.'
  },
];
