import {
  AWSLogo,
  AgodaLogo,
  SalaryHeroLogo,
  SpacelyAILogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nonthapat Kaewamporn",
  initials: "NK",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/bangkok",
  about: "Full Stack Engineer & Solutions Architect",
  summary:
    "A Full Stack engineer and Solutions Architect with 3 years of experience in building products for startups and big companies. I'm passionate about building products that are easy to use and maintain. I'm a big fan of building products that matters to the people",
  avatarUrl: "https://avatars.githubusercontent.com/u/43312669?v=4",
  personalWebsiteUrl: "https://nkaewam.dev",
  contact: {
    email: "work@nkaewam.dev",
    tel: "+66974912293",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tontan2545",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nonthapat-k-54605b118/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "International School of Engineering, Chulalongkorn University",
      degree:
        "Bachelor's Degree in Robotics and Artificial Intelligence Engineering",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Spacely AI",
      link: "https://spacely.ai",
      badges: [],
      title: "Software Engineer",
      logo: SpacelyAILogo,
      start: "August 2023",
      end: "Present",
      description: [],
      technologoes: ["Next.js", "GCP", "Python", "Go", "Nest.js"],
    },
    {
      company: "Amazon Web Services",
      link: "https://aws.com",
      badges: ["Intern"],
      title: "Associate Solutions Architect",
      logo: AWSLogo,
      start: "May 2023",
      end: "Aug 2023",
      description: [
        "Initiated, architected, and led end-to-end of a Generative AI assisted data analytics solution “NQL”.",
        "Hosted “GenAI Business Intelligence Assistance” presenting NQL and capabilities of Amazon Bedrock to audiences of over 4000 people in AWS Cloud Day Thailand 2023. Gathered interest from NQL of over 15 companies across Thailand, Vietnam, Indonesia, and Singapore and responsible for generating interest in Amazon Bedrock usage in Thailand for over 20 companies.",
        "Work closely with aCommerce’s data analytics team to fine-tune NQL to their business use case which was presented in “Business Insights with aCommerce chatbot” session in AWS Cloud Day. Generating over $60k ARR in opportunity from partnership with aCommerce and gaining over 600 audiences from talk with aCommerce on NQL in AWS Cloud Day Thailand.",
        "Presented NQL to over 200 bankers in Temenos Regional Forum 2023 in Hanoi, Vietnam. Demonstrating the capabilities of Generative AI in data analytics for Banks and Financial Institutions. Gaining interest from top financial institutions in Vietnam, Myanmar, and Thailand.",
        "Demo NQL to over 100 C-level positions from various conglomerates from retail, energy, and financial industry. Displaying Customer Satisfaction Rate of over 96% on the NQL solution showcase",
      ],
      technologoes: [
        "Amazon Bedrock",
        "Generative AI",
        "Next.js",
        "Typescript",
        "Python",
        "Fast API",
      ],
    },
    {
      company: "Salary Hero",
      link: "https://salary-hero.com",
      badges: [],
      title: "Software Engineer",
      logo: SalaryHeroLogo,
      start: "Aug 2022",
      end: "Apr 2023",
      description: [
        "Developed middleware integration service for performing ETL of employee’s data on top retail corporation’s HR system with 5000+ employees saving business team 300+ hours monthly. Increased onboarding opportunities by 27%",
        "Designed and developed secure, scalable data processor system for onboarding companies in monthly basis for 10 big companies saving business team 40 hours monthly.",
        "Owned and developed automatic data migration pipeline for migrating the company away from legacy database allowing dev team to iterate faster. Automated migration of over 500k+ rows of data saving development team productivity time by 40+ hours.",
      ],
      technologoes: [
        "React.js",
        "Typescript",
        "AWS",
        "React Native",
        "Nest.js",
      ],
    },
    {
      company: "Agoda",
      link: "https://www.agoda.com",
      badges: ["Intern"],
      title: "Software Engineer → Data Engineer",
      logo: AgodaLogo,
      start: "Dec 2021",
      end: "July 2022",
      description: [
        "Developed support for categorical features for proprietary AutoML pipeline system and developed fault-tolerant APIs by Unit Testing, E2E Testing. Increasing pricing model accuracy by 10% resulting in increased LTV of customers by $3M+ quarterly.",
        "Discovered business opportunity to generate $50k+ monthly by comparing daily bookings with its counter booking analogue.",
        "Increased finance back-office project code coverage from 25% to 80% preventing potential loss of $200K by utilizing unit testing, integration testing, and end-to-end testing.",
        "Aggregated critical daily insights from 15 million rows of data and autonomously integrated extracted the data to be placed in dashboard for 7 data scientists for further research and development.",
        "Migrated over 10 repositories from GitHub to GitLab and rewrote CI/CDs from TeamCity to GitLab CI allowing pipelines to be run in parallel. Saving development time by over 100 hours monthly from Gitlab CI’s pipeline parallelization",
        "Led the development of new finance back-office QA environment allowing developers to work in parallel and assisted in integration of OKTA SSO to the new environment.",
        "Owner of a highly scalable proprietary Slack Scala SDK for 10 developers powering 2 slack bots used by 10 finance employees for simplifying big complex data applications in finance teams.",
      ],
      technologoes: [
        "Scala",
        "Apache Spark",
        "React.js",
        "Redux",
        "GraphQL",
        "Gitlab CI",
        "Tableau",
        "Python",
        "Sklearn",
        "ETL",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Nest.js",
    "GoLang",
    "Go Fiber",
    "Rust",
    "Flutter",
    "AWS",
    "GCP",
    "Azure",
  ],
  projects: [
    {
      title: "Inquiro",
      techStack: [
        "University Project",
        "Next.js",
        "TypeScript",
        "Bun",
        "Elysia.js",
      ],
      description:
        "E2E Text-to-SQL solution, a senior project at Chualongkorn University",
      logo: AWSLogo,
      link: {
        label: "inquiro.nkaewam.dev",
        href: "https://inquiro.nkaewam.dev/",
      },
    },
    {
      title: "NQL",
      techStack: ["Intern Project", "Amazon Bedrock", "Generative AI", "LLM"],
      description:
        "Extension of project made during internship at Amazon Web Services",
      logo: AWSLogo,
      link: {
        label: "github.com/tontan2545/NQL",
        href: "https://github.com/tontan2545/NQL",
      },
    },
    {
      title: "Gamlytics",
      techStack: ["Project Management", "Product Management", "Linear"],
      description: "Managed E2E development cycle of Gamlytics",
      link: {
        label: "gamlytics.gg",
        href: "https://gamlytics.gg",
      },
    },
    {
      title: "nkaewam.dev",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: "Personal website and resume",
      link: {
        label: "nkaewam.dev",
        href: "https://nkaewam.dev",
      },
    },
    {
      title: "2023I22190413",
      techStack: ["University Project", "Rust"],
      description: "Assignments for Systems Security course",
      link: {
        label: "github.com/tontan2545/2023I22190413-Systems-Security",
        href: "https://github.com/tontan2545/2023I22190413-Systems-Security",
      },
    },
  ],
} as const;
